import { useState, useRef } from "react";
import html2canvas from "html2canvas";


const AddSignature = () => {
    const [nameSignature, setNameSignature] = useState("");
    const [fonts] = useState([
        "Arial",
        "Caveat",
        "cursive",
        "Cookie",
        'Courgette',
        'Dancing Script',
        'Grape Nuts',
        'Lobster',
        'Lobster Two',
        'Meie Script',
        'Montserrat Alternates',
        'Nanum Pen Script',
        'Oleo Script',
        'Pacifico',
        'Philosopher',
        'Sacramento',
        'Satisfy',
        'Sevillana',
        'Shadows Into Light',
        'Single Day',
        'Space Grotesk',
    ]);
    const [currentFontIndex, setCurrentFontIndex] = useState(0);
    const signatureRef = useRef(null);

    const handleSignature = (e) => {
        e.preventDefault();
        const signature = e.target.signature.value;
        setNameSignature(signature);
    };

    const changeFont = () => {
        const nextIndex = (currentFontIndex + 1) % fonts.length;
        setCurrentFontIndex(nextIndex);
    };

    const currentFont = fonts[currentFontIndex];

    const handleDownload = async () => {
        const canvas = await html2canvas(signatureRef.current);
        const link = document.createElement("a");
        link.href = canvas.toDataURL();
        link.download = "signature.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    
    return (
        <>
            <div className="container mx-auto p-4 my-20">
                <div className="flex flex-col justify-center items-center text-black font-bold my-16">
                    <h1 className="text-3xl md-text-6xl">Type Your Signature</h1>
                    <p className="text-xl md-text-6xl">
                        Free signature generator tool to type your signature online
                    </p>
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
                            <div
                                ref={signatureRef}
                                className="my-10 p-5 bg-slate-100 font-bold text-3xl w-full h-50"
                                style={{ fontFamily: currentFont }}
                            >
                                <h1>{nameSignature}</h1>
                            </div>
                            <div className="flex gap-5 items-center my-10">
                                <button
                                    type="button"
                                    className="px-10 py-2 text-lg bg-[#52ab98] text-white rounded-lg"
                                    onClick={changeFont}
                                >
                                    Change Font
                                </button>
                                <button
                                    type="button"
                                    onClick={handleDownload}
                                    className="px-10 py-2 text-lg bg-[#52ab98] text-white rounded-lg"
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
