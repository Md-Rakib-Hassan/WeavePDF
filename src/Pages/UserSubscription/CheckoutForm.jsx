import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useState } from 'react';


const CheckoutForm = () => {

    const stripe = useStripe();
    const elements = useElements();
    const [error,setError] = useState(null);
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
        <form onSubmit={handleSubmit}>
            <CardElement
                
                options={{
                style: {
                    base: {
                    fontSize: '16px',
                    color: '#424770',
                    '::placeholder': {
                        color: '#aab7c4',
                    },
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
    );
};

export default CheckoutForm;