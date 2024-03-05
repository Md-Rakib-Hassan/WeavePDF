import React, { useState } from 'react';
import { IoDocumentsOutline } from "react-icons/io5";
import { RiCharacterRecognitionLine } from "react-icons/ri";
import { LuUser2 } from "react-icons/lu";
import { MdDraw } from "react-icons/md";
import SubscriptionCard from '../components/SubscriptionCard';
import { FaUsersRays } from "react-icons/fa6";

const Subscriptions = () => {

    const [Monthly,setMonthly]=useState(true);


    return (
        <div className='my-10 max-w-7xl mx-auto'>

                <div className='space-y-4'>
                <h1 className='text-4xl font-bold text-center'>Subscriptions</h1>
            <h3 className='text-2xl text-center'>Get ahead with subscription access to premium features!</h3>

            <div className='flex justify-center'>
                <button onClick={()=>setMonthly(true)} className={`px-5 py-2  rounded-l-xl hover:bg-slate-400 font-bold border-r-2 border-black ${Monthly? 'bg-black text-teal':'bg-grey'}`}>Monthly</button>
                <button onClick={()=>setMonthly(false)} className={`px-5 py-2  rounded-r-xl hover:bg-slate-400 font-bold border-black ${Monthly? 'bg-grey':'bg-black text-teal'}`}>Yearly</button>
            </div>
                </div>

            <div>
                
            </div>
            <div className='flex justify-center mt-16'>
                <SubscriptionCard Monthly={Monthly} price={50} type={'Personal'} contents={
                    <><div className='flex items-center text-xl gap-2'>
                        <IoDocumentsOutline className='text-3xl' />
                        <p>Unlimited documents</p>
                    </div>

                        <div className='flex items-center text-xl gap-2'>
                            <LuUser2 className='text-3xl' />
                            <p>1 Sender</p>
                        </div>

                        <div className='flex items-center text-xl gap-2'>
                            <RiCharacterRecognitionLine className='text-3xl' />
                            <p>optical character recognition</p>
                        </div>

                        <div className='flex items-center text-xl gap-2'>
                            <MdDraw className='text-3xl' />
                            <p>Customize colors in Adding page numbers</p>
                        </div></>

                }/>

            </div>


        </div>
    );
};

export default Subscriptions;