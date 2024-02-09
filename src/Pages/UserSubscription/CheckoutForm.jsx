import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';


const CheckoutForm = () => {

    const stripe = useStripe();
    const elements = useElements();
    const [error,setError] = useState(null);
    const [subscription, setSubscription] = useState(null);
    const [activeone,setActiveone] = useState(true);
    const [activetwo,setActivetwo] = useState(false);

    // useEffect(()=>{

    // },[])

    
    const activeMonthly = () =>{
        setActiveone(true);
        setActivetwo(false);
    }
    const activeYearly = () =>{
        setActiveone(false);
        setActivetwo(true);
    }
    const handleSubmit = async(event) =>{
        event.preventDefault();

        if(!stripe || !elements) return;

        const card = elements.getElement(CardElement)
        if(card==null) return;

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if(error){
            // console.log('[error]: ',error);
            setError(error.message)
        }else{
            setError(null);
            console.log('[paymentMethod:]:',paymentMethod);
        }
    }
    return (
        <div>
            <div className="flex gap-10 justify-center">
                    <div onClick={activeMonthly} className={activeone? 'activeButton' : 'deactiveButton'}>
                        Monthly <br />$ 50</div>
                    <div onClick={activeYearly} className={activetwo? 'activeButton' : 'deactiveButton'}>
                        Yearly <br />$ 540
                    </div>
            </div><br /><br />
            <form onSubmit={handleSubmit}>
            <CardElement
                
                options={{
                style: {
                    base: {
                    fontSize: '16px',
                    color: '#424770',
                    '::placeholder': {
                        color: '#aab7c4',
                    }
                    },
                    invalid: {
                    color: '#9e2146',
                    },
                },
                }}
            />
            <div className='flex justify-center my-10'>
            <button className='btn text-center bg-teal text-white' type="submit" disabled={!stripe}>
                Get Premium
            </button>
            </div>
            
            {error && <p className='text-error_color text-center'>{error}</p>}
            </form>
        </div>
        
    );
};

export default CheckoutForm;