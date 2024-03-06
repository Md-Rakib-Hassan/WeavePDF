import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './TextEditorPremium.css'
import jsPDF from 'jspdf';


const PremiumEditor = () => {
    const [value, setValue] = useState('');
    const [, setIsOn] = useState(false);

    const generatePDF = () => {
        const doc = new jsPDF("p", "pt", "a4");
        doc.html(document.querySelector("#previewDownloadTwo"), {
            callback: function (pdf) {
                pdf.save("document.pdf");
            }
        })
        setIsOn(true);

    }

    const modules = {
        toolbar: [
            [{ 'header': [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            ['color', 'background'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
            ['image', 'video'],
        ]
    }
    return (
        <div>
            <div className="premium-container">
                <div className="premium-row">
                    <div className="premium-editor">
                        <ReactQuill
                            theme="snow"
                            value={value}
                            onChange={setValue}
                            className='premium-editor-input'
                            modules={modules}
                        />
                    </div>


                    <div className="premium-preview" >
                        <button onClick={generatePDF} className='button-class mb-7' >Download As PDF</button>

                        <div id='previewDownloadTwo'>
                            <div className='p-2' dangerouslySetInnerHTML={{ __html: value }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PremiumEditor;