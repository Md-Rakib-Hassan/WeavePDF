import 'regenerator-runtime/runtime'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import useClipboard from "react-use-clipboard";
import { useState } from "react";
import { IoIosCopy } from "react-icons/io";
import { CiPause1 } from "react-icons/ci";
import { MdOutlineSettingsVoice } from "react-icons/md";
import "./SpeechToText.css"
import TextEditor from './TextEditor/TextEditor';

const SpeechToText = () => {
    const [textToCopy, setTextToCopy] = useState();
    const [isCopied, setCopied] = useClipboard(textToCopy, {
        successDuration: 1000
    });

    const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
    const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
        return null
    }

    return (

        <div>
            <div className='lg:flex lg:h-screen justify-center items-center'>
                <div className="container mx-auto">
                    <h2 className='lg:text-4xl text-2xl font-bold text-center'>Speech to Text Converter</h2>
                    <br />

                    <div className="main-content" onClick={() => setTextToCopy(transcript)}>
                        {transcript}
                    </div>
                    <div className="lg:flex justify-between lg:max-w-[57rem] mx-auto">
                        <button className='button-class' onClick={setCopied}>
                            {isCopied ? 'Copied!' : <><span className='flex gap-1 items-center'><IoIosCopy></IoIosCopy> Copy to clipboard</span></>}
                        </button>
                        <button className='button-class button-class flex gap-1 items-center' onClick={startListening}><MdOutlineSettingsVoice className='text-lg'></MdOutlineSettingsVoice>Start Listening</button>
                        <button className='button-class flex gap-1 items-center' onClick={SpeechRecognition.stopListening}><CiPause1></CiPause1> Stop Listening</button>
                    </div>
                </div>

            </div>

            <TextEditor></TextEditor>
        </div>
    );
}

export default SpeechToText;