import question from '../images/image2-removebg.png'
import useAxiosPublic from '../hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';


const Contact = () => {

    const axiosPublic = useAxiosPublic();
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        // console.log(data)
        const contactInfo = {
            name: data.name,
            email: data.email,
            massage: data.massage,
        }
        // console.log(contactInfo)
        axiosPublic.post('/contact', contactInfo)
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: `Your massage has been added to the register camp`,
            showConfirmButton: false,
            timer: 1600
        });
    }

    return (
        <>
            <div className="container mx-auto my-10">
                <div className='flex flex-col md:flex-row items-center p-5'>
                    <div className='md:w-1/2'>
                        <img src={question} alt="" className='w-full h-auto md:h-full object-cover' />
                    </div>
                    <div className='md:w-1/2 md:pl-8'>
                        <div>
                            <h1 className="text-3xl text-black my-5">Have Any Question</h1>
                        </div>
                        <div>
                            <p className="text-gray-700">
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here.
                            </p>
                            <p className="text-gray-700 mt-4">
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center my-10 p-5">
                    <div className='text-4xl font-bold my-5'>
                        <h1>Contact Us</h1>
                    </div>
                    {/* Form Section */}
                    <div className="md:w-1/2 w-full" >
                        <form onSubmit={handleSubmit(onSubmit)} className="max-w-4xl">
                            <div className="mb-5">
                                <label className="block mb-2 text-sm font-medium text-gray-900">Your Name</label>
                                <input
                                    type="text"
                                    {...register("name")}
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>
                            <div className="mb-5">
                                <label className="block mb-2 text-sm font-medium text-gray-900">Your Email</label>
                                <input
                                    type="email"
                                    {...register("email")}
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
                                    placeholder="Your Email"
                                    required
                                />
                            </div>
                            <div className="mb-5">
                                <label className="block mb-2 text-sm font-medium text-gray-900">Your Massage</label>
                                <textarea
                                    type="text"
                                    {...register("massage")}
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
                                    placeholder="Your Massage"
                                />
                            </div>
                            <div className='flex justify-center items-center'>
                                <button
                                    type="submit"
                                    className="text-white bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-3"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;