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
        <div className='mb-10'>

                <div className='space-y-4'>
                <h1 className='text-4xl font-bold text-center'>Subscriptions</h1>
            <h3 className='text-2xl text-center'>Get ahead with subscription access to premium features!</h3>

            <div className='flex justify-center'>
                <button onClick={()=>setMonthly(true)} className={`px-5 py-2  rounded-l-xl hover:bg-slate-400 border-r-2 border-black ${Monthly? 'bg-black text-white':'bg-slate-200'}`}>Monthly</button>
                <button onClick={()=>setMonthly(false)} className={`px-5 py-2  rounded-r-xl hover:bg-slate-400 border-black ${Monthly? 'bg-slate-200':'bg-black text-white'}`}>Yearly</button>
            </div>
                </div>

            <div>
                
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16 gap-10 lg:gap-0 '>
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
                            <p>Draw Signature</p>
                        </div></>

                }/>

                <SubscriptionCard Monthly={Monthly} price={70} type={'Business'} contents={
                    <><div className='flex items-center text-xl gap-2'>
                        <IoDocumentsOutline className='text-3xl' />
                        <p>Unlimited documents</p>
                    </div>

                        <div className='flex items-center text-xl gap-2'>
                            <FaUsersRays className='text-3xl' />
                            <p>Multiple Sender</p>
                        </div>

                        <div className='flex items-center text-xl gap-2'>
                            <RiCharacterRecognitionLine className='text-3xl' />
                            <p>optical character recognition</p>
                        </div>

                        <div className='flex items-center text-xl gap-2'>
                            <MdDraw className='text-3xl' />
                            <p>Draw Signature</p>
                        </div></>

                }/>
                <SubscriptionCard Monthly={Monthly} btn_text={'Contact Us'} price={90} type={'Customize'} contents={
                    <><div className='flex items-center text-xl gap-2'>
                        <IoDocumentsOutline className='text-3xl' />
                        <p>Unlimited documents</p>
                    </div>

                        <div className='flex items-center text-xl gap-2'>
                            <FaUsersRays className='text-3xl' />
                            <p>Multiple Sender</p>
                        </div>

                        <div className='flex items-center text-xl gap-2'>
                            <RiCharacterRecognitionLine className='text-3xl' />
                            <p>optical character recognition</p>
                        </div>

                        <div className='flex items-center text-xl gap-2'>
                            <MdDraw className='text-3xl' />
                            <p>Draw Signature</p>
                        </div></>

                }/>

            </div>


        </div>
    );
};

export default Subscriptions;