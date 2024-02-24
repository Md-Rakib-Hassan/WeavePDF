import { useState } from "react";
import { PDFDocument,rgb } from 'pdf-lib'

const AddNumber = () => {
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

            if (color === 'black'){
            page.drawText(text, {
                x: bottomX,
                y: bottomY,
                size: 12,
            })}

            else if(color === 'blue'){
                page.drawText(text, {
                    x: bottomX,
                    y: bottomY,
                    size: 12,
                    color: rgb(0,0,1)
            })}

            else if (color === 'red'){
                page.drawText(text, {
                    x: bottomX,
                    y: bottomY,
                    size: 12,
                    color: rgb(0.95, 0.1, 0.1)
                })
            }

            else{
                page.drawText(text, {
                    x: bottomX,
                    y: bottomY,
                    size: 12,
                    color: rgb(0.04, 0.47, 0.41)
                })
            }
            }
            const pdfBytes = await pdfDoc.save();
            const pdfBlob = new Blob([pdfBytes] , { type: 'application/pdf' })
            setUrl(URL.createObjectURL(pdfBlob))
        }
        
        
    
    return (
        <div>
            <br /><br />
            <h1 className='text-3xl font-playfair text-center font-bold'>Add Page number to PDF Files here</h1><br />
            <p className="text-center">Add page numbers into PDFs with ease. Choose your positions, dimensions, typography.</p>
            <form onSubmit={handleUpload} action="">
            <input type="file" accept="application/pdf" name="file" id="input" required /><br />
            <label htmlFor="position">Position for Page Number</label>
            <select name="position" id="" required>
                <option value="left">Left</option>
                <option value="right">Right</option>
                <option value="middle">Middle</option>
            </select><br />
            <select name="color" id="" required>
                <option value="black">Black</option>
                <option value="blue">Blue</option>
                <option value="red">Red</option>
                <option value="green">Green</option>
            </select><br />
            {/* <input type="text" name="font" id="" placeholder="add font"/> */}
            <button className="btn"><input type="submit" value="Add Number" /></button>
            </form>
            <div className="flex justify-center">
            <iframe src={url} title="Page Number Added" width={600} height={700} ></iframe>
            </div>
        </div>
    );
};

export default AddNumber;
