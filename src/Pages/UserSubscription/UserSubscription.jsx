import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import payment from "../../assets/payment.json"
import Lottie from "lottie-react";
import "./UserSubscription.css"
const stripePromise = loadStripe(import.meta.env.VITE_PK)
const UserSubscription = () => {
    
    return (
        <div className="lg:flex gap-10">
            <div className='w-1/2 py-10 px-5 mx-auto'>
                <h1 className="font-bold font-playfair text-4xl text-center">Weave<span className="text-teal">PDF</span></h1><br />
                <p className="font-bold font-playfair text-lg md:text-xl text-center">Get premium to enjoy endless exciting features</p><br /><br />
                
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements> 
            </div>
        

        <div className="hidden text bg-gradient-to-r from-teal to-aqua_marine h-full lg:flex justify-center items-center w-1/2">
            <div>

            <h1 className="text-center font-playfair font-bold text-3xl text-white">Upgrade to Premium</h1>
            <div className="flex justify-center">
            <Lottie animationData={payment} loop={true} className="w-96 h-96"></Lottie>
            </div>
            <ul className="mx-16 text-white">
                <li>🔷Full access to WeavePDF tools </li>
                <li>🔷Unlimited document processing</li>
                <li>🔷Work on Web, Mobile and Desktop</li>
                <li>🔷Convert scanned PDF to Word with OCR, sign with digital signatures, convert to PDF/A</li>
                <li>🔷No Ads</li>
                <li>🔷Customer support</li>
            </ul>
            </div>
        </div>
        </div>
    );
};

export default UserSubscription;