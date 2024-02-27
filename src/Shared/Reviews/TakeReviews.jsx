import  { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import useAxiosPublic from '../../hooks/useAxiosPublic';

const TakeReviews = ({isOn, uniqueId }) => {
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();
    const [shouldOn,setShouldOn] =useState(true);
    const handleSubmit=(e)=>{
        e.preventDefault();
        const form = e.target;
        const user_email = user?.email;
        const user_name = user?.displayName;
        const user_profile=user?.photoURL;
        const review = form.review.value;
        const rating=form.rating9.value;
        

        const reviewData={
            uniqueId,
            user_email,
            user_name,
            user_profile,
            rating,
            review}
        axiosPublic.post('/user-reviews',reviewData)
            form.reset();
            document.getElementById('mmm').click();
            setShouldOn(false);
            
    }
    // className={`${isOn&&shouldOn&&user ?'':'hidden'}`}
    return (
        
        <div >
            
            <button onClick={isOn&&user ? document.getElementById('modal')?.showModal() :()=>{}}></button>
            <dialog id="modal" className="modal">
                <div className="modal-box ">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <form className='space-y-4' onSubmit={handleSubmit}>
                         <h3 className="font-bold text-center text-lg">How was your exprience</h3>
                    <div className='flex justify-center'>
                        <div className="rating rating-lg">
                            <input type="radio" name="rating9" className="rating-hidden" />
                            <input type="radio" name="rating9" value={1} className="mask mask-star-2 bg-teal" />
                            <input type="radio" name="rating9" value={2} className="mask mask-star-2 bg-teal" />
                            <input type="radio" name="rating9" value={3} className="mask mask-star-2 bg-teal" />
                            <input type="radio" name="rating9" value={4} className="mask mask-star-2 bg-teal" />
                            <input type="radio" name="rating9" value={5} defaultChecked className="mask mask-star-2 bg-teal" />
                        </div>
                    </div> 
                    <textarea required name="review" id="" className='w-full border border-grey p-2 rounded-lg' rows="5" placeholder='Write your review'></textarea>
                    <div className='flex justify-center'>
                    <input type='submit'value='Submit' className='btn bg-teal text-white rounded-md '/>
                    <form method="dialog">
                        <button id='mmm' className="btn bg-teal text-white rounded-md">Close</button>
                    </form>
                    </div>
                    </form>
                   
                    
                </div>
            </dialog>
        </div>
    );
};


export default TakeReviews;