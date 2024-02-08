import React from 'react';
import { FaDownload } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";

const Service = ({ service, index }) => {
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{service.date}</td>
            <td>{service.service_name}</td>
            <td>{service.no_of_files}</td>
            <td>✅</td>
            <td><button><FaDownload className=' text-teal'></FaDownload></button></td>
            <td><button><MdDelete className=' text-teal'></MdDelete></button></td>
        </tr>
    );
};

export default Service;