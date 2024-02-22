import jsPDF from "jspdf";
import { useState } from "react";


const Details = ({ description }) => {
    const [isOn, setIsOn] = useState(false);
    const generatePDF = () => {
        const doc = new jsPDF("p", "pt", "a4");
        doc.html(document.querySelector("#detailsButton"), {
            callback: function (pdf) {
                pdf.save("md-to-pdf.pdf");
            }
        })
        setIsOn(true);

    }
    return (
        <>
            <div id='detailsButton' className="ProseMirrorr">{description ? <button className='absolute right-2 bg-blue px-2 rounded-md' onClick={generatePDF}>Download Pdf</button> : ''} {parse(description)}</div>
        </>
    );
};

export default Details;