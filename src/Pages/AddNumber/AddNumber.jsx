import { useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { PDFDocument } from 'pdf-lib'

const AddNumber = () => {
    const axiosPublic = useAxiosPublic();
    const [url, setUrl] = useState(null);
    const handleUpload = async (e) =>{
        e.preventDefault();
        const form = e.target;
        const filedata = document.getElementById('input').files[0];
        const position = form.position.value;
        const color = form.color.value;
        const existingpdfBytes = await filedata.arrayBuffer();
        const pdfDoc = await PDFDocument.load(existingpdfBytes);
        const totalPages = pdfDoc.getPageCount();

        for(let i=0; i<totalPages ; i++){
            const page = pdfDoc.getPages()[i];
            const text = `Page ${i+1} of ${totalPages}`;
            const pageWidth = page.getSize().width;
            const bottomY = 20;
            let bottomX = 0;

            if(position === 'left') bottomX = 30
            else if(position === 'right') bottomX = pageWidth - 70
            else bottomX = pageWidth/2

            page.drawText(text, {
                x: bottomX,
                y: bottomY,
                size: 12,
                color: color
            })
            const pdfBytes = await pdfDoc.save();
            const pdfBlob = new Blob([pdfBytes] , { type: 'application/pdf' })
            setUrl(URL.createObjectURL(pdfBlob))
        }
        
        
    }
    return (
        <div>
            <form onSubmit={handleUpload} action="">
            <input type="file" accept="application/pdf" name="file" id="input" required /><br />
            <label htmlFor="position">Position for Page Number</label>
            <select name="position" id="" required>
                <option value="left">Left</option>
                <option value="right">Right</option>
                <option value="middle">Middle</option>
            </select><br />
            <input type="text" name="color" id="" placeholder="colorname or rgb or hex"/>
            <button className="btn"><input type="submit" value="Add Number" /></button>
            </form>
            <div className="flex justify-center">
            <iframe src={url} title="Page Number Added" width={600} height={700} ></iframe>
            </div>
        </div>
    );
};

export default AddNumber;
