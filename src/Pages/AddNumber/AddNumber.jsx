import { useState } from "react";
import { PDFDocument,rgb } from 'pdf-lib'
import usePremium from "../../hooks/usePremium";
import { useNavigate } from "react-router-dom";
import ShowReviews from "../../Shared/Reviews/ShowReviews";
import TakeReviews from "../../Shared/Reviews/TakeReviews";
import useCloudinery from "../../hooks/useCloudinery";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
const AddNumber = () => {
    const [url, setUrl] = useState(null);
    const [isOn, setIsOn] = useState(false);
    const [pdf, setPdf]= useState(null);
    const { user } = useAuth()
    const [isPremium] = usePremium();
    const axiosPublic = useAxiosPublic();
    const getFileUrl = useCloudinery();
    const navigate = useNavigate()
    const handlePdf = e =>{
        e.preventDefault();
        const file = document.getElementById('merge-input').files[0];
        setPdf(file)
    }

    const handlePost = (fileurl) =>{
        const date = new Date();
        const user_email = user.email
        const no_of_files = 1
        const service_name = "Number page"
        const file = fileurl
        const status = true

        const service = {  date, user_email, no_of_files, service_name, status, file}
        axiosPublic.post('/upload-service',service)
        setIsOn(true)
        
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
            const pdfFile = new File([pdfBytes], 'numbered.pdf', {type: 'application/pdf'});
            setUrl(URL.createObjectURL(pdfBlob))
            setPdf(false)
            if(user){
                getFileUrl(pdfFile).then(res=>handlePost(res))
            }
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
            <TakeReviews isOn={isOn} setIsOn={setIsOn} uniqueId="number"></TakeReviews>

            <div className="md:flex items-center justify-center">
                <div>
                    <label className="mt-5" htmlFor="position">Position: </label>
                    <select className="select select-primary max-w-xs " name="position" id="" required>
                        <option disabled selected>Choose position</option>
                        <option value="left">Left</option>
                        <option value="right">Right</option>
                        <option value="middle">Middle</option>
                    </select></div>

                    <div>
                    <label className="md:ml-5 mt-5" htmlFor="position">Color: </label>
                    <select onChange={validatePremium} className="select select-primary max-w-xs" name="color" id="" required>
                    <option disabled selected>Choose font colour</option>
                    <option value="black">Black</option>
                    <option className="prim" value="blue" >Blue</option>
                    {isPremium?<option value="red">Red</option>
                    :
                    <option value="red"  >Red 👑</option>
                    }
                    {isPremium?<option value="green">Green</option>
                    :
                    <option value="green">Green 👑</option>
                    }
                    </select></div><br />
                    </div>
                    </form>
            </div>
            <br />
            <div className="flex justify-center">
            <iframe src={url} title="Page Number Added" width={1000} height={500} ></iframe>
            </div>
            <ShowReviews uniqueId='number'
        title='Users Feedback'
        subTitle='Our clients have shared their experiences, and their words speak volumes about our dedication to creating unforgettable work. Explore what our clients have to say about their remarkable event experiences with us.'
        ></ShowReviews>
        </div>
    );
};

export default AddNumber;
