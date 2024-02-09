import DataTable from 'react-data-table-component';

const AdminEmail = () => {

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
            selector: row => row.message
        },
        // {
        //     name: 'Blog Owner Image',
        //     // cell: (row) => <img src={row.owner_image} alt={row.owner_name} style={{ width: '50px', height: '50px', borderRadius: '50px', margin: '3px' }} />,
        //     cell: (row) => <img src={row.owner_image} alt={row.owner_name} style={{ width: '50px', height: '50px', borderRadius: '50px', margin: '3px' }} />,
        // }
    ]
    // Assuming sortBlogs is an array of blog objects
    const data = [
        {
            id: 1,
            name: 'name',
            email: 'email@gmail.com',
            message: 'Hello, this is a message.'
        },

    ];

    return (
        <div>
            <div>
                <div className='bg-base-100 text-xl drop-shadow-2xl'>
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