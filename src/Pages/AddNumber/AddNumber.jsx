import { useState } from "react";
import { PDFDocument,rgb } from 'pdf-lib'
import { FaCrown } from "react-icons/fa";
import usePremium from "../../hooks/usePremium";
import { useNavigate } from "react-router-dom";
const AddNumber = () => {
    const [url, setUrl] = useState(null);
    const [pdf, setPdf]= useState(null);
    const [isPremium] = usePremium();
    const navigate = useNavigate()
    const handlePdf = e =>{
        e.preventDefault();
        const file = document.getElementById('merge-input').files[0];
        setPdf(file)
    }

    const validatePremium = (e) =>{
        const color = e.target.value;
        if(color == 'red' || color == 'green'){
            if(!isPremium){
                navigate('/user-subscription')
            }
        }
    }

    const handleUpload = async (e) =>{
        e.preventDefault();
        setUrl(null);
        const form = e.target;
        const filedata = pdf;
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
            else if(position === 'right') bottomX = pageWidth - 80
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
            setPdf(false)
        }
        
        
    
    return (
        <div>
            <br /><br />
            <h1 className='text-3xl font-playfair text-center font-bold'>Add Page number to PDF Files here</h1><br />
            <p className="text-center">Add page numbers into PDFs with ease. Choose your positions, dimensions, typography.</p>
            <div className="flex justify-center">
        <form onSubmit={handleUpload} action="">
        {pdf ? 
        <div className="flex justify-center">
            <button className='btn bg-[#52ab98] mt-5 font-bold text-2xl text-white'>
                <input type="submit" value="Add Number" /><br />
            </button><br /></div>
            :<div className="flex justify-center"><label className='label w-48'>
                <input onChange={handlePdf} type="file" accept="application/pdf" name="file" id="merge-input" required />
                <span className='font-bold text-xl text-white'>Select PDF files</span>
            </label></div>
        }
            <br />
                    <label className="mt-5" htmlFor="position">Position: </label>
                    <select className="select select-primary max-w-xs " name="position" id="" required>
                        <option disabled selected>Choose position</option>
                        <option value="left">Left</option>
                        <option value="right">Right</option>
                        <option value="middle">Middle</option>
                    </select>
                    <label className="mx-5" htmlFor="position">Color: </label>

                    <select onChange={validatePremium} className="select select-primary max-w-xs" name="color" id="" required>
                    <option disabled selected>Choose font colour</option>
                    <option value="black">Black</option>
                    <option className="prim" value="blue" >Blue</option><FaCrown />
                    {isPremium?<option value="red"  >Red<FaCrown /></option>
                    :
                    <option value="red"  >Red<FaCrown /></option>
                    }
                    <option value="green">Green<FaCrown /></option>
                    </select><br />
                    </form>
            </div>
            <br />
            <div className="flex justify-center">
            <iframe src={url} title="Page Number Added" width={1000} height={500} ></iframe>
            </div>
        </div>
    );
};

export default AddNumber;
