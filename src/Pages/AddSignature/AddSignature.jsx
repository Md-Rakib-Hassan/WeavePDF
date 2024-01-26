import { useState } from "react";

const AddSignature = () => {

    const [nameSignature, setNameSignature] = useState()

    const handleSignature = (e) => {
        e.preventDefault();

        const signature = e.target.signature.value;
        console.log(signature)
        setNameSignature(signature)
    };



    return (
        <>
            {/* new */}
            <div className="container mx-auto p-4 my-20">
                <div className="flex flex-col justify-center items-center text-black font-bold my-16">
                    <h1 className="text-3xl md-text-6xl">Type Your Signature</h1>
                    <p className="text-xl md-text-6xl">Free signature generator tool to type your signature online</p>
                    <div className="border-black border-2 w-8/12 h-80 my-10 cursor-pointer flex flex-col justify-center items-center">
                        <form onSubmit={handleSignature}>
                            <div className="my-10">
                                <input
                                    type="text"
                                    name="signature"
                                    placeholder="Your Signature"
                                    className="px-20 py-4 border-black border-2 text-lg placeholder:text-2xl"
                                />
                            </div>
                            <div className="my-10 p-5 bg-slate-100 w-full h-50">
                                <h1>{nameSignature}</h1>
                            </div>
                            <div className="flex gap-5 items-center my-10">
                                <button
                                    type="button"
                                    className="px-10 py-2 text-lg bg-blue text-black rounded-lg"
                                >
                                    Change Font
                                </button>
                                <button
                                    type="button"
                                    className="px-10 py-2 text-lg bg-blue text-black rounded-lg"
                                >
                                    Download
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddSignature;
