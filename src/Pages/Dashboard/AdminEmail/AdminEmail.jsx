import DataTable from 'react-data-table-component';
import { useLoaderData } from 'react-router-dom';
import deletebtn from '../../../images/delete.svg';
import Swal from 'sweetalert2';
import { useState } from 'react';
const AdminEmail = () => {

    const [contacts, setContacts] = useState(useLoaderData());
    console.log(contacts)

    const handleDelete = (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                // http://localhost:5000/:production

                fetch(`http://localhost:5000/contact/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Massage has been deleted.',
                                'success'
                            );
                            // Update state after delete operation
                            setContacts(prevContacts => prevContacts.filter(contact => contact._id !== _id));
                        }
                    })
                    .catch(error => {
                        console.error('Error:', error);
                        Swal.fire(
                            'Error!',
                            'Failed to delete contact.',
                            'error'
                        );
                    });
            }
        });
    }
    const customStyles = {
        headRow: {
            style: {
                backgroundColor: '#2b6777',
                color: 'white'
            }
        },
        headCells: {
            style: {
                fontSize: '16px',
                fontWeight: '600',
            }
        },
        cells: {
            style: {
                fontSize: '16px',
                fontWeight: '500',
                padding: '1rem',
            }
        },
    }

    const columns = [
        {
            name: 'Serial Number',
            selector: row => row.id
        },
        {
            name: 'Name',
            selector: row => row.name
        },
        {
            name: 'Email',
            selector: row => row.email
        },
        {
            name: 'Message',
            selector: row => row.massage
        },
        {
            name: 'Delete',
            cell: (row) => <img src={deletebtn} alt="delete" onClick={() => handleDelete(row._id)} style={{ width: '20px', height: '20px', borderRadius: '50px', margin: '3px', cursor: 'pointer' }} />,
        }
    ]
    const data = contacts?.map((contact, index) => ({
        id: index + 1,
        _id: contact?._id,
        name: contact?.name,
        email: contact?.email,
        massage: contact?.massage,
    }));

    return (
        <div>
            <div>
                <div className='container mx-auto overflow-hidden bg-base-100 text-xl drop-shadow-2xl'>
                    <DataTable
                        columns={columns}
                        data={data}
                        customStyles={customStyles}
                        responsive
                        pagination
                        paginationPerPage={10}
                        paginationRowsPerPageOptions={[10, 15, 20]} />
                </div>
            </div>
        </div>
    );
};

export default AdminEmail;