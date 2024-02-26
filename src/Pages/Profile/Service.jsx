import { MdDelete } from "react-icons/md";
import { MdDownload } from "react-icons/md";
import useService from "../../hooks/useService";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const Service = ({service, index}) => {
    const [,refetch] = useService();
    const axiosPublic = useAxiosPublic()

    const deleteRecord = (id) =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              axiosPublic.delete(`/delete-service/${id}`)
              .then(res=>{
                // console.log(res.data);
                if(res.data.deletedCount>1){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Service has been deleted.",
                        icon: "success"
                      });
                      refetch();
                }
              })
              
            }
          });
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{service.date}</td>
            <td>{service.service_name}</td>
            <td>{service.no_of_files}</td>
            <td>✅</td>          
            <td><button onClick={()=>{deleteRecord(service._id)}}><MdDelete className=' text-teal'></MdDelete></button></td>
            {service.file && <td> <a href={service.file} download><MdDownload className=' text-teal'></MdDownload></a></td>}
        </tr>
    );
};

export default Service;