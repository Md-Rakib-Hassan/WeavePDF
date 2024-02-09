

const DocumentHistory = ({ service, index }) => {
    return (
        <div>
            <tr>
                <th>{index + 1}</th>
                <td>{service.date}</td>
                <td>{service.service_name}</td>
                <td>{service.no_of_files}</td>
                <td>✅</td>
                <td><button></button></td>
                <td><button></button></td>
            </tr>
        </div>
    );
};

export default DocumentHistory;