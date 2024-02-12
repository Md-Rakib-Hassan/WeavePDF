import React from 'react';
import useAuth from '../../hooks/useAuth';
import useAxiosPublic from '../../hooks/useAxiosPublic';

const Task = ({no_of_files,uid,service_name,isON}) => {
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();
    if(isON){


        const data={
            uid,
            user_email:user.email,
            date:new Date(),
            service_name,
            no_of_files
        }
    
        axiosPublic.post('/tasks',data);



    }
    
    return (
        <div>
            
        </div>
    );
};

export default Task;