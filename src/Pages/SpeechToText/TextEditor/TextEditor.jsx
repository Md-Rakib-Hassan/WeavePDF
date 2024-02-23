import { useState } from "react";
import './TipTap.css'
import Details from "./Details";
import jsPDF from "jspdf";
import { Tiptap } from "./Tiptap";

const TextEditor = () => {
    const [description, setDescription] = useState("");
    const [, setIsOn] = useState(false);
    const generatePDF = () => {
        const doc = new jsPDF("p", "pt", "a4");
        doc.html(document.querySelector("#previewDownload"), {
            callback: function (pdf) {
                pdf.save("document.pdf");
            }
        })
        setIsOn(true);

    }
    return (
        <div className="App">
            <Tiptap setDescription={setDescription} />
            <div className="my-10">
                <Details description={description} />
            </div>
            <div className="text-center">
                {description ? <button className='button-class' onClick={generatePDF}>Download As Pdf</button> : ''}
            </div>
        </div>
    );
}

export default TextEditor;