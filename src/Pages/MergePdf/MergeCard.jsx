import React from 'react';

const MergeCard = ({pdf,index}) => {
    return (
        <div className='mx-10 p-3 border-2 border-black border-dotted w-40 h-40 '>
            <h1 className='bg-red-500 rounded-full font-bold text-center'>{index+1}</h1>
            <h1 className='text-xl font-bold'>{pdf.name.slice(0,20)}...</h1>
        </div>
    );
};

export default MergeCard;