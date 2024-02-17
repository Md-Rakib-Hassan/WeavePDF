import 'regenerator-runtime/runtime'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import useClipboard from "react-use-clipboard";
import { useState } from "react";
import "./SpeechToText.css"

const SpeechToText = () => {
    const [textToCopy, setTextToCopy] = useState();
    const [isCopied, setCopied] = useClipboard(textToCopy, {
        successDuration: 1000
    });

    //subscribe to thapa technical for more awesome videos

    const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
    const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
        return null
    }

    return (

        <div className='flex h-screen justify-center items-center'>
            <div className="container mx-auto">
                <h2 className='lg:text-4xl font-bold text-center'>Speech to Text Converter</h2>
                <br />

                <div className="main-content" onClick={() => setTextToCopy(transcript)}>
                    {transcript}
                </div>
                <div className="lg:flex justify-center lg:max-w-[50rem] mx-auto">
                    <button className='button-class' onClick={setCopied}>
                        {isCopied ? 'Copied!' : 'Copy to clipboard'}
                    </button>
                    <button className='button-class' onClick={startListening}>Start Listening</button>
                    <button className='button-class' onClick={SpeechRecognition.stopListening}>Stop Listening</button>
                </div>
            </div>

        </div>
    );
}

export default SpeechToText;