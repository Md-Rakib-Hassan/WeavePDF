import { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { useLoaderData } from 'react-router';
import Service from './Service';
import { Link } from 'react-router-dom';


const Profile = () => {
    const [timezone, setTimezone] = useState(null);
    // const [userservices, setuserServices] = useState([]);
    const { user } = useAuth();
    const { displayName,email, photoURL } = user;
    const services = useLoaderData();
    const userservices = services.filter(service=> service.user_email == user?.email)
    // console.log(userservices);
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
                    <Link to={'/user-subscription'}><button className="btn bg-aqua_marine text-white">Upgrade to Premium</button></Link>
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
           <div className='max-w-3xl mx-auto my-10'>
           <h1 className='text-xl font-semibold'>Recent Tasks</h1>
            {
                userservices ? 
                <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr className='bg-blue'>
                        <th></th>
                        <th>Date</th>
                        <th>Tool</th>
                        <th>No of Files</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>

                    {
                        userservices.map((service,index,key)=><Service index={index} service={service} key={service.id}></Service>)
                    }
                    
                    
                    </tbody>
                </table>
                </div> : 
                <h1 className='text-xl text-center'>No tasks yet</h1>
            }
           </div>
        </div>
    );
};

export default Profile;