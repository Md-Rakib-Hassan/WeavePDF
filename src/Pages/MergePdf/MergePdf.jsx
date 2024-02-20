import { useState } from 'react';
import MergeCard from './MergeCard';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { PDFDocument } from 'pdf-lib';
import useAuth from '../../hooks/useAuth';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import TakeReviews from '../../Shared/Reviews/TakeReviews';
import ShowReviews from '../../Shared/Reviews/ShowReviews';

const MergePdf = () => {

    const [pdfs, setPdfs] = useState([]);
    const [sortedpdfs, setsortedPdfs] = useState([])
    const [merged, setmerged] = useState(null);
    const [isOn, setIsOn] = useState(false);
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();
    const handlePost = (filedata) =>{
        const date = new Date();
        const user_email = user.email
        const no_of_files = pdfs.length
        const service_name = "Merge PDF"
        const status = true
        const file = filedata

        const service = {  date, user_email, no_of_files, service_name, status, file}
        console.log(service);
        
        // setIsOn(true)
        
    }
    const handleInput  = e =>{
        e.preventDefault();
        setPdfs([]);
        setsortedPdfs([]);
        setmerged(null);
        const mergeInput = document.getElementById('merge-input');
        const files = mergeInput.files;
        const filesArray = [];
        for(let i=0 ; i<files.length ; i++){
            filesArray.push(files[i]);
        }
        setPdfs(filesArray)
        setsortedPdfs(filesArray)
    }
    // console.log(sortedpdfs);
    // console.log(sortedpdfs);
    const handleDragEnd = result =>{
        if(!result.destination) return;
        const items = Array.from(sortedpdfs);
        const [reordereditems] = items.splice(result.source.index,1);
        items.splice(result.destination.index,0, reordereditems)
        setsortedPdfs(items)
    }
    // console.log(sortedpdfs);

    const mergeDocument = async() =>{
        setmerged(null);
        try{const mergedDoc = await PDFDocument.create();

        for(const pdf of sortedpdfs){

            const PDFBytes = await pdf.arrayBuffer()
            const PDFDoc = await PDFDocument.load(PDFBytes)

            const copypages = await mergedDoc.copyPages(PDFDoc, PDFDoc.getPageIndices());
            copypages.map(page=>mergedDoc.addPage(page));
        }

        const mergedPdfBytes = await mergedDoc.save();
        const mergedPdfBlob = new Blob([mergedPdfBytes], { type : 'application/pdf' });
        const mergedFile = new File([mergedPdfBytes], 'merged.pdf', {type: 'application/pdf'});
        setmerged(URL.createObjectURL(mergedPdfBlob))
        if(user){
            handlePost(mergedFile);
        }
        }
        catch(err){
            console.log(err);
        }
    }
    

    return (
        <div className='flex flex-col items-center py-10'>
            <h1 className='text-3xl font-playfair font-bold'>Merge your PDF Files here</h1><br />
            <p>Combine PDFs in the order you want with the easiest PDF merger available.</p>
            <TakeReviews isOn={isOn} uniqueId="merge"></TakeReviews>
            {!merged && pdfs && pdfs.length ? 
            <button onClick={mergeDocument} className='btn bg-[#52ab98] mt-5 font-bold text-2xl text-white'>Merge</button>
            :<label className='label'>
                <input onChange={handleInput} accept='application/pdf' type="file" name="merger[]" id="merge-input" multiple /><br />
                <span className='font-bold text-xl text-white'>Select PDF files</span>
            </label>}
            <br /><br />
            <DragDropContext onDragEnd={handleDragEnd}>
                <Droppable droppableId='pdfcontainer'>
            {(provided)=>(
                <div className='flex flex-col' {...provided.droppableProps} ref={provided.innerRef}>
            {   
                !merged && sortedpdfs && sortedpdfs.map((pdf,index,key)=>{
                return(
                <Draggable key= {pdf.name} draggableId={pdf.name} index={index}>
                    {(provided)=>( 
                    <li type='1' {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} 
                    ><MergeCard pdf={pdf} index={index}></MergeCard></li>)}
                </Draggable>)})
            }
            {provided.placeholder}
            </div>)}
                </Droppable>
            </DragDropContext>

            {
                merged && <div>
                    <p className='text-2xl font-bold my-5'>Merged PDF : </p>
                    <iframe title="Merged PDF" src={merged} width={600} height={700}></iframe>
                </div>
            }

        <ShowReviews uniqueId='merge'
        title='Users Feedback'
        subTitle='Our clients have shared their experiences, and their words speak volumes about our dedication to creating unforgettable work. Explore what our clients have to say about their remarkable event experiences with us.'
        ></ShowReviews>
        </div>
    );
};

export default MergePdf;