
const MergeCard = ({pdf}) => {
    return (
        <div className='mx-10 p-3 border-2 border-black border-dotted'>
            <h1 className='text-xl font-bold'>{pdf.name.slice(0,20)}...</h1>
        </div>
    );
};

export default MergeCard;