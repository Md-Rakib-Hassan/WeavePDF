import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

const Review = ({ info }) => {
    const ret = parseInt(info.rating);
    const ratings = [];
    for (let i = 1; i <= 5; i++) {
        if (i <= ret) ratings.push(<AiFillStar />)
        else ratings.push(<AiOutlineStar />)
    }

    return (
        <div className='text-center lg:h-[340px] md:h-[420px] h-[380px]  shadow-lg card  glass space-y-2 px-3 py-10'>

            <img className='rounded-full h-24 w-auto mx-auto' src={info.user_profile} alt="" />
            <h1 className='font-bold text-xl'>{info.user_name}</h1>
            <div className='flex justify-center text-teal '>{...ratings}</div>

            <p className=' text-justify'>{info.review}</p>

        </div>
    );
};

export default Review;