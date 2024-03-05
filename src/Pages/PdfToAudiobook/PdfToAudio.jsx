import { useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";


const PdfToAudio = () => {
    const axiosPublic = useAxiosPublic();
    const [pdf, setPdf] = useState(null);
    const [text, setText] = useState(null);

    const handlePdf = e => {
        e.preventDefault();
        const file = document.getElementById('inpFile').files[0];
        setPdf(file)
    }

    const textToSpeak=()=>{
        const value=new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(value);
    }

    const handleUpload = (e) => {
        e.preventDefault();
        const formData = new FormData();

        formData.append("pdfFile", pdf);
        console.log(pdf);
        axiosPublic.post('/extract-text', formData)
            .then(response => setText(response.data));
            console.log(text);

    }

    return (
        <div>
           
            <div>
            <br /><br />
                <h1 className='text-3xl font-playfair text-center font-bold'>Listen to Your PDFs Anytime, Anywhere</h1><br />
                <p className="text-center">A Simple and Effective Solution for PDF Audio Transformation.</p>
                <div className="flex justify-center">
                    <form onSubmit={handleUpload} action="">
                        {pdf ?
                            <div className="flex justify-center">
                                
                                    <input className='btn bg-[#52ab98] mt-5 font-bold text-2xl text-white' type="submit" value="Convert to Audio" /><br />
                                <br /></div>
                            : <div className="flex justify-center"><label className='label w-48'>
                                <input onChange={handlePdf} type="file"  name="file" id="inpFile" required />
                                <span className='font-bold text-xl text-white'>Select PDF files</span>
                            </label></div>
                        }

                    </form>
                </div>

                {
                    text ? <button onClick={textToSpeak}>Speek</button>
                    :''
                }


                




            </div>

        </div>
    );
};

export default PdfToAudio;