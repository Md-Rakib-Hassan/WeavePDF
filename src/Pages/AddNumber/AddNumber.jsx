import useAxiosPublic from "../../hooks/useAxiosPublic";
import { PDFDocument } from 'pdf-lib'

const AddNumber = () => {
    const axiosPublic = useAxiosPublic();
    const handleUpload = async (e) =>{
        e.preventDefault();
        const form = e.target;
        const filedata = document.getElementById('input').files[0];
        const position = form.position.value;
        
        const existingpdfBytes = await filedata.arrayBuffer();
        const pdfDoc = await PDFDocument.load(existingpdfBytes);
        const totalPages = pdfDoc.getPageCount();

        for(let i=0; i<totalPages ; i++){
            const page = pdfDoc.getPages([i]);
            const text = `Page ${i+1} of ${totalPages}`;
            const pageSize = page.getSize();
            const bottomY = 20;
            let bottomX = 0;

            if(position === 'left') bottomX = 30
            else if(position === 'right') bottomX = pageSize.width - 70
            else bottomX = pageSize.width/2

            page.drawtext(text, {
                x: bottomX,
                y: bottomY,
                size: 12
            })
            const pdfBytes = await pdfDoc.save();
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
            <input type="submit" value="Add Number" />
            </form>
        </div>
    );
};

export default AddNumber;
