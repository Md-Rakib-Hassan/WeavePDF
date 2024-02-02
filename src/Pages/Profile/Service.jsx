import React from 'react';

const Service = ({service, index}) => {
    return (
        <tr>
            <th>{index+1}</th>
            <td>{service.date}</td>
            <td>{service.service_name}</td>
            <td>{service.no_of_files}</td>
            <td>{service.status}</td>
        </tr>
    );
};

export default Service;