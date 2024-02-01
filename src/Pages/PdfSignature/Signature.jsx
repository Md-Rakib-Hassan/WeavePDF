// src/components/Signature.js
import { useRef } from 'react';
import SignatureCanvas from 'react-signature-canvas';

const Signature = ({ onSign }) => {
    const sigCanvas = useRef();

    const clearSignature = () => {
        sigCanvas.current.clear();
    };

    const saveSignature = () => {
        const signatureData = sigCanvas.current.toDataURL();
        onSign(signatureData);
    };

    return (
        <div className="m-7 border-2 border-black p-5">
            <SignatureCanvas
                ref={sigCanvas}
                canvasProps={{ width: 500, height: 200, className: 'signature-canvas' }}
            />
            <div className="mt-4">
                <button onClick={clearSignature} className="mr-2 bg-blue text-black px-4 py-2">Clear</button>
                <button onClick={saveSignature} className="bg-blue text-black px-4 py-2">Save Signature</button>
            </div>
        </div>
    );
};

export default Signature;
