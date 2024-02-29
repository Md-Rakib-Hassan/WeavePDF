import React, { useContext, useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { Incon } from './InputContext';
import { useNavigate } from 'react-router-dom';

const History = () => {

    const [previous_work, setPrevious_work] = useState([]);
    const { user } = useAuth();
    const {setInput}=useContext(Incon);
    const axiosPublic = useAxiosPublic();
    const navigate=useNavigate();
    useEffect(() => {
        if (user) {
            axiosPublic.get(`/tasks/${user.email}`)
                .then(res => setPrevious_work(res.data));
        }

    }, []);

    const handleNavigate=(content)=>{

        setInput(content);
        navigate('/md-to-pdf-editor');
    }



    return (
        <div>


            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Date and Time</th>
                            <th  className='hidden lg:inline-block'>Content</th>
                        </tr>
                    </thead>
                    <tbody>
                      

                        {
                            previous_work?.map((work, idx) => <tr className='cursor-pointer' key={work?._id} onClick={()=>handleNavigate(work?.content)}>
                                <th>{idx + 1}</th>
                                <td>{work?.date}</td>
                                <td className='hidden lg:inline-block'>{(work?.content)?.slice(0,150)}</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>



        </div>
    );
};

export default History;