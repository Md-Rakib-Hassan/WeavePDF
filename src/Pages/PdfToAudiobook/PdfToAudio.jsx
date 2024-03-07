import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { FaPlay, FaPause, FaStop } from "react-icons/fa";
import { IoReloadSharp } from "react-icons/io5";
import ShowReviews from "../../Shared/Reviews/ShowReviews";
import TakeReviews from "../../Shared/Reviews/TakeReviews";

const PdfToAudio = () => {
    const axiosPublic = useAxiosPublic();
    const [pdf, setPdf] = useState(null);
    const [text, setText] = useState(null);
    const [isPaused, setIsPaused] = useState(true);
    const [utterance, setUtterance] = useState(null);
    const [voice, setVoice] = useState(null);
    const [firstTime, setFirstTime] = useState(true);
    const [isOn, setIsOn] = useState(false);

    const handlePdf = e => {
        e.preventDefault();
        const file = document.getElementById('inpFile').files[0];
        setPdf(file)
    }


    const handleUpload = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("pdfFile", pdf);
        axiosPublic.post('/extract-text', formData)
            .then(response => setText(response.data));

    }

    useEffect(() => {
        const synth = window.speechSynthesis;
        const u = new SpeechSynthesisUtterance(text);
        const voices = synth.getVoices();

        setUtterance(u);
        setVoice(voices[2]);

        return () => {
            synth.cancel();
        };
    }, [text]);


    const handlePlay = () => {
        const synth = window.speechSynthesis;

        if (isPaused && !firstTime) {
            synth.resume();
        } else {
            utterance.voice = voice;
            synth.speak(utterance);
            setFirstTime(false);
        }

        setIsPaused(false);
    };

    const handlePause = () => {
        const synth = window.speechSynthesis;

        synth.pause();

        setIsPaused(true);
    };

    const handleStop = () => {
        const synth = window.speechSynthesis;

        synth.cancel();

        setIsPaused(true);
        setFirstTime(true);
        setIsOn(true);
    };

    const handleVoiceChange = (event) => {
        const voices = window.speechSynthesis.getVoices();
        setVoice(voices.find((v) => v.name === event.target.value));
    };


    return (
        <div className="my-12">
            <TakeReviews isOn={isOn} setIsOn={setIsOn} uniqueId='pdf-to-audiobook'></TakeReviews>
            <div>
                <br /><br />
                <h1 className='text-3xl font-playfair text-center font-bold'>Listen to Your PDFs Anytime, Anywhere</h1><br />
                <p className="text-center">A Simple and Effective Solution for PDF Audio Transformation.</p>
                <div className="flex justify-center">
                    <form onSubmit={handleUpload} action="">
                        {pdf ?
                            <div className="flex justify-center">

                                <input className={`btn bg-[#52ab98] mt-5 font-bold text-2xl text-white ${text ? 'hidden' : ''}`} type="submit" value="Convert to Audio" /><br />
                                <br /></div>
                            : <div className="flex justify-center"><label className='label w-48'>
                                <input onChange={handlePdf} type="file" name="file" id="inpFile" required />
                                <span className='font-bold text-xl text-white'>Select PDF files</span>
                            </label></div>
                        }

                    </form>
                </div>
                <div className="flex justify-center items-center">
                    {
                        <div className={`${text ? '' : 'hidden'} `}>

                            <label className="block font-medium">
                                Change Voice:
                                <select value={voice?.name} onChange={handleVoiceChange}>
                                    {window.speechSynthesis.getVoices().map((voice) => (
                                        <option key={voice.name} value={voice.name}>
                                            {voice.name}
                                        </option>
                                    ))}
                                </select>
                            </label>

                            <div className="flex gap-4 mt-5 justify-center">
                                {
                                    isPaused ? <abbr title={`${firstTime ? 'Play' : 'Resume'}`}><button className="btn bg-light_blue" onClick={handlePlay}> <FaPlay /></button></abbr> : <abbr title="Pause"><button className="btn bg-light_blue" onClick={handlePause}><FaPause /></button></abbr>
                                }


                                <abbr title="Stop"><button className="btn bg-light_blue" onClick={handleStop}><FaStop /></button></abbr>
                                <abbr title="Retry"> <button className="btn bg-light_blue font-extrabold text-xl" onClick={() => { setText(null);setIsOn(true); return setPdf(null) }}><IoReloadSharp /></button></abbr>

                            </div>


                        </div>
                    }

                </div>

            </div>
            <ShowReviews uniqueId='pdf-to-audiobook'
                title='Users Feedback'
                subTitle='Our clients have shared their experiences, and their words speak volumes about our dedication to creating unforgettable work. Explore what our clients have to say about their remarkable event experiences with us.'
            ></ShowReviews>

        </div>
    );
};

export default PdfToAudio;