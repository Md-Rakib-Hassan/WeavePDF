import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import useAxiosPublic from '../../hooks/useAxiosPublic';

const History = () => {

    const [previous_work, setPrevious_work] = useState([]);
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();
    useEffect(() => {
        if (user) {
            axiosPublic.get(`/tasks/${user.email}`)
                .then(res => setPrevious_work(res.data));
        }

    }, []);


    return (
        <div>


            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Date and Time</th>
                            <th>Content</th>
                        </tr>
                    </thead>
                    <tbody>
                      

                        {
                            previous_work.map((work, idx) => <tr key={work._id}>
                                <th>{idx + 1}</th>
                                <td>{work.date}</td>
                                <td>{work.content}</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>



        </div>
    );
};

export default History;