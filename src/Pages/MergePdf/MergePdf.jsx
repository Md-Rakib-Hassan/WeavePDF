import { useState } from 'react';
import MergeCard from './MergeCard';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
const MergePdf = () => {

    const [pdfs, setPdfs] = useState([]);
    const [merged, setMerged] = useState(null);
    const handleInput  = e =>{
        e.preventDefault();
        const mergeInput = document.getElementById('merge-input');
        const files = mergeInput.files;
        const filesArray = [];
        for(let i=0 ; i<files.length ; i++){
            filesArray.push(files[i]);
        }
        setPdfs(filesArray)
    }

    // console.log(pdfs);

    return (
        <div className='flex flex-col items-center py-10'>
            <h1 className='text-3xl font-playfair font-bold'>Merge your PDF Files here</h1><br />
            <p>Combine PDFs in the order you want with the easiest PDF merger available.</p>
            {pdfs && pdfs.length ? 
            <button className='btn btn-error mt-5 font-bold text-2xl text-white'>Merge</button>
            :<label className='label'>
                <input onChange={handleInput} accept='application/pdf' type="file" name="merger[]" id="merge-input" multiple /><br />
                <span className='font-bold text-xl text-white'>Select PDF files</span>
            </label>}
            <br /><br />
            <DragDropContext>
                <Droppable droppableId='pdfcontainer'>
            {(provided)=>(
                <div className='pdfcontainer grid grid-cols-4 gap-10' {...provided.droppableProps} ref={provided.innerRef}>
            {   
                pdfs && pdfs.map((pdf,index,key)=>{
                return(
                <Draggable key={index} draggableId='pdf-draggable' index={index}>
                    {(provided)=>( 
                    <li {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} 
                    ><MergeCard pdf={pdf} index={index}></MergeCard></li>)}
                </Draggable>)})
            }
            {provided.placeholder}
            </div>)}
                </Droppable>
            </DragDropContext>
        </div>
    );
};

export default MergePdf;