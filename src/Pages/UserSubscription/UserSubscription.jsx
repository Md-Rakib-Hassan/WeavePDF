import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import payment from "../../assets/payment.json"
import Lottie from "lottie-react";
const stripePromise = loadStripe(import.meta.env.VITE_PK)
const UserSubscription = () => {
    
    return (
        <div className="lg:flex gap-10">
            <div className='w-1/2 py-10 px-5'>
                <h1 className="font-bold font-playfair text-4xl text-center">Weave<span className="text-teal">PDF</span></h1><br />
                <p className="font-bold font-playfair text-xl text-center">Get premium to enjoy endless exciting features</p><br /><br />
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements> 
            </div>
        

        <div className="bg-blue h-full flex justify-center items-center w-1/2">
            <Lottie animationData={payment} loop={true}></Lottie>
        </div>
        </div>
    );
};

export default UserSubscription;