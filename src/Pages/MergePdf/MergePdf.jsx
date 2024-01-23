import { useState } from 'react';
import MergeCard from './MergeCard';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
const MergePdf = () => {

    const [pdfs, setPdfs] = useState([]);
    const [sortedpdfs, setsortedPdfs] = useState([])
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
        setsortedPdfs(filesArray)
    }
    // console.log(sortedpdfs);
    const handleDragEnd = result =>{
        if(!result.destination) return;
        const items = Array.from(sortedpdfs);
        const [reordereditems] = items.splice(result.source.index,1);
        items.splice(result.destination.index,0, reordereditems)
        setsortedPdfs(items)
        console.log(sortedpdfs);
    }
    

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
            <DragDropContext onDragEnd={handleDragEnd}>
                <Droppable droppableId='pdfcontainer'>
            {(provided)=>(
                <div className='flex flex-col' {...provided.droppableProps} ref={provided.innerRef}>
            {   
                sortedpdfs && sortedpdfs.map((pdf,index,key)=>{
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
        </div>
    );
};

export default MergePdf;