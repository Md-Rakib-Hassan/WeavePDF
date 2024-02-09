

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

            <div className="w-[80%] lg:w-[70%] mx-auto my-[2.5%]  flex flex-col justify-center items-center h-auto bg-white p-4 shadow-xl">
                <form onSubmit={handleSignIn}
                    className="flex flex-col w-full gap-2 mt-6 "
                >
                    <div className="flex gap-2">
                        <Input
                            name="name"
                            placeholder="Your Name"
                            type="text"
                            className="py-2 text-sm md:text-base"
                        />
                        <Input
                            name="rating"
                            placeholder="Rating out of 5"
                            type="number"
                            className="py-2 text-sm md:text-base"
                        />
                    </div>
                    <Input
                        name="email"
                        placeholder="Your Email"
                        className="py-2 text-sm md:text-base"
                    />
                    <Input
                        name="feedback"
                        placeholder="Feedback"
                        className="py-2 text-sm md:text-base textarea h-24"
                    />

                    <Button className="py-2 mt-3 text-sm text-white md:text-base">
                        Add Your Feedback
                    </Button>

                </form>
            </div>
        </div>
    );
};

export default AddFeedback;