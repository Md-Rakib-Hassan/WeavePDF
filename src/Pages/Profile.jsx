import React, { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';
import axios from 'axios';

const Profile = () => {
    const [timezone, setTimezone] = useState(null);
    const { user } = useAuth();
    const { displayName,email, photoURL } = user;

    useEffect(()=>{
        getTimeZone();
    },[])
    const getTimeZone = () =>{
        const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
        setTimezone(tz);
    }
    return (
        <div>
           <div className='flex flex-col items-center'>
                <h1 className='font-playfair font-bold text-3xl text-center mt-4'>Welcome, {displayName}!</h1>
                <br /><br />
                
                <div>
                <div className='flex justify-between items-center max-w-5xl my-10'>
                    <h1 className='text-xl font-semibold'>My Account</h1>
                    <button className="btn bg-aqua_marine text-white">Upgrade to Premium</button>
                </div>
                <div className='lg:flex gap-10 shadow-lg p-10 shadow-teal rounded-lg'>
                    <div>
                        <img width={350} height={350} src={photoURL} alt="" />
                    </div>
                    <div className='flex flex-col'>
                        <p><strong>Name</strong>: {displayName}</p>
                        <p><strong>Email</strong>: {email}</p>
                        {/* <p><strong>Location</strong>: </p> */}
                        <p><strong>TimeZone</strong>: {timezone}</p>
                    </div>
                    <a className='underline text-error flex justify-end' href="">change</a>
                    
                </div>
                </div>
                
           </div>
           <div>
            
           </div>
        </div>
    );
};

export default Profile;