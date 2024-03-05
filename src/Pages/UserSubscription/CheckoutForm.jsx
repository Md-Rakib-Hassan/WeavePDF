import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import spinner from '../../assets/spinner.json'
import Lottie from 'lottie-react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const CheckoutForm = () => {
    const { user } = useAuth();
    const stripe = useStripe();
    const elements = useElements();
    const [error,setError] = useState(null);
    const [subscription, setSubscription] = useState(null);
    const [activeone,setActiveone] = useState(false);
    const [activetwo,setActivetwo] = useState(false);
    const [price, setPrice] = useState(50);
    const [clientSecret, setClientSecret] = useState("");
    const [active, setActive] = useState(false);
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    useEffect(()=>{
        axiosPublic.post('/create-payment-intent', {price: price})
        .then(res=>
            {
                console.log(res.data);
                setClientSecret(res.data.clientSecret)
            })
    },[axiosPublic,price])

    
    const activeMonthly = () =>{
        setActiveone(true);
        setActivetwo(false);
        setPrice(50)
        const activePackage = {
            user_email: user.email,
            user_name : user.displayName,
            type: 'monthly',
            amount : 50,

        }
        setSubscription(activePackage)
    }
    const activeYearly = () =>{
        setActiveone(false);
        setActivetwo(true);
        setPrice(540)

        const activePackage = {
            user_email: user.email,
            user_name : user.displayName,
            type: 'yearly',
            amount : 540,

        }
        setSubscription(activePackage)
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

        //confirm payment

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details : {
                    name: user.displayName || 'Anonymous',
                    email: user.email || 'Anonymous'
                }
                
            }
        })

        if(confirmError){
            console.log("confirm error: ", confirmError);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: confirmError.message,
              });
        }else{
            if(paymentIntent.status == "succeeded"){
                if(subscription.type == 'monthly'){
                    axiosPublic.post(`/start-monthly-subscription`)
                    .then(res=>{
                        if(res.data.active){
                            axiosPublic.patch(`/make-premium?email=${user.email}`,{
                                isPremium : true,
                                subscription_type: subscription.type,
                                plan_id : res.data.id
                            })
                        }
                    })
                }
                else{
                    axiosPublic.post(`/start-yearly-subscription`)
                .then(res=>{
                    if(res.data.active){
                        axiosPublic.patch(`/make-premium?email=${user.email}`,{
                            isPremium : true,
                            subscription_type: subscription.type,
                            plan_id : res.data.id
                        })
                    }
                })
                }
                    Swal.fire({
                            title: "Success!",
                            text: `You have booked a ${subscription.type} subscription`,
                            icon: "success"
                          });
                    navigate('/');
            
        }
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
            {clientSecret? subscription ? <button className='btn text-center bg-teal text-white' type="submit" disabled={!stripe}>
                Get Premium
            </button> : <button onClick={()=>{window.alert('please select a subscription')}} className='bg-grey'>Get Premium</button>
            :
            <Lottie animationData={spinner} className='w-52 h-52'></Lottie>
            }
            </div>
            
            {error && <p className='text-error_color text-center'>{error}</p>}
            </form>
        </div>
        
    );
};

export default CheckoutForm;