import { useForm } from "react-hook-form";

import Input from "./Input";
import Button from "./Button";


const AddFeedback = () => {

    const handleSignIn = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const rating = e.target.rating.value;
        const feedback = e.target.feedback.value;

        console.log(email, name, feedback, rating)
    };


    return (
        <div>
            <h1 className="bg-white text-center font-bold text-2xl p-2">Add Your Feedback</h1>

            <div className="w-[80%] lg:w-[70%] mx-auto my-[2.5%]  flex flex-col justify-center items-center h-auto bg-white p-4">
                <form onSubmit={handleSignIn}
                    className="flex flex-col w-full gap-2 mt-6 "
                >
                    <div className="flex gap-2">
                        <Input
                            name="name"
                            placeholder="Name"
                            type="text"
                            className="py-2 text-sm md:text-base"
                        />
                        <Input
                            name="rating"
                            placeholder="Rating"
                            type="number"
                            className="py-2 text-sm md:text-base"
                        />
                    </div>
                    <Input
                        name="email"
                        placeholder="Email"
                        className="py-2 text-sm md:text-base"
                    />
                    <Input
                        name="feedback"
                        placeholder="Feedback"
                        className="py-2 text-sm md:text-base textarea h-24"
                    />

                    <Button className="py-2 mt-3 text-sm text-white md:text-base">
                        Add Your Review
                    </Button>

                </form>
                {/* <p className="text-[12px] md:text-sm mb-8">
                    Don't have an account?
                    <span
                        onClick={() => navigate("/signup")}
                        className="font-bold underline duration-300 cursor-pointer active:scale-90"
                    >
                        Sign Up
                    </span>
                </p> */}
                {/* <div
                    onClick={handleGoogleSignIn}
                    className="flex items-center justify-center w-full gap-2 py-2 text-sm duration-300 border cursor-pointer active:scale-95 md:text-base"
                >
                    <FcGoogle />
                    <p>Continue Wih Google</p>
                </div> */}
            </div>
        </div>
    );
};

export default AddFeedback;