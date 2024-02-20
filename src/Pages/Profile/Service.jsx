
import { saveAs } from "file-saver";
import { useState } from "react";
import { FaDownload } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";

const Service = ({service, index}) => {
    const [fileUrl, setfileUrl] = useState(null);
    // const {file} = file;
    // const filedata = file.data;

    const downloadPdf = (filedata) =>{
        
        const file = new Blob([new Uint8Array(filedata)], {type : 'application/pdf'})
        console.log(file);
        const gotFile = new File([file], 'merged.pdf', {type: 'application/pdf'});
        // console.log(gotFile);
        saveAs(gotFile, "Weavedpdf.pdf")
    }
    return (
        <tr>
            <th>{index+1}</th>
            <td>{service.date}</td>
            <td>{service.service_name}</td>
            <td>{service.no_of_files}</td>
            <td>✅</td>
             { service.file && 
             <td><button onClick={()=>{downloadPdf(service.file.data)}}><FaDownload className=' text-teal'></FaDownload></button>
             </td>
            // <a href={service.serviceSrc} download></a>
                }            
            <td><button><MdDelete className=' text-teal'></MdDelete></button></td>
        </tr>
    );
};

export default Service;