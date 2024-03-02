import { useState } from 'react';
import SignatureCanvas from 'react-signature-canvas'
import { saveAs } from 'file-saver';
import ShowReviews from '../../Shared/Reviews/ShowReviews';
import TakeReviews from '../../Shared/Reviews/TakeReviews';

const DrawSignature = () => {

    const [sign, setSign] = useState()
    const [url, setUrl] = useState()
    const [isOn, setIsOn] = useState(false);

    const handleClear = () => {
        sign.clear()
    }
    const handleSave = () => {
        setUrl(sign.getTrimmedCanvas().toDataURL('image/png'))
    }
    const handleDownload = () => {
        const canvas = sign.getTrimmedCanvas();
        canvas.toBlob((blob) => {
            saveAs(blob, 'signature.png');
            setIsOn(true);
        });
    };
    return (
        <>
            <div className="container mx-auto overflow-hidden p-4">
                <TakeReviews isOn={isOn} setIsOn={setIsOn} uniqueId='img-to-pdf'></TakeReviews>
                <div className="flex flex-col justify-center items-center text-black font-bold my-16">
                    <h1 className="text-3xl md-text-6xl">Draw Your Signature Here</h1>
                    <div className="border-black border-2 w-7/12 h-60 my-10 cursor-pointer">
                        <SignatureCanvas
                            canvasProps={{ width: 870, height: 240, className: 'sigCanvas' }}
                            ref={data => setSign(data)}
                        />
                    </div>
                    <div className="flex gap-5 items-center my-5">
                        <button onClick={handleClear} className="px-10 py-2 text-lg bg-blue text-black rounded-lg">Clear</button>
                        <button onClick={handleSave} className="px-10 py-2 text-lg bg-blue text-black rounded-lg">Save</button>
                        <button onClick={handleDownload} className="px-10 py-2 text-lg bg-blue text-black rounded-lg">Download</button>
                    </div>
                    <div className='my-5'>
                        <img src={url} />
                    </div>
                </div>
            </div>
            <ShowReviews uniqueId='md-to-pdf'
                title='Users Feedback'
                subTitle='Our clients have shared their experiences, and their words speak volumes about our dedication to creating unforgettable work. Explore what our clients have to say about their remarkable event experiences with us.'
            ></ShowReviews>
        </>
    );
};

export default DrawSignature;