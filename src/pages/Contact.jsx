import question from '../images/image2-removebg.png'
import apple from '../images/apple.jpg'
import andorid from '../images/Vector.jpg'
import whatsapp from '../images/Vector (1).jpg'
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
                            If you have any questions or need further clarification, don't hesitate to reach out to us. Our team is here to help and ready to assist you with any inquiries you may have. Feel free to contact us via email, phone, or through our online chat support. We're committed to providing you with the best possible assistance and ensuring your experience with us is seamless.
                            </p>
                            
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-10 my-10 p-5">
                    {/* Card Section */}
                    <div className="md:w-1/2">
                        <div>
                            <h1 className="text-3xl text-black my-5">Need Immediate help?</h1>
                        </div>
                        <div className="max-w-sm p-6 my-5 bg-blue border border-gray-200 rounded-lg shadow flex items-center justify-center flex-col">
                            <img src={apple} alt="" className="w-7 h-7 text-gray-500 mb-3" />
                            <div>
                                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900">On an Apple mobile device</h5>
                            </div>
                            <p className="mb-3 font-normal text-gray-500 ">+880 16483638927</p>
                        </div>
                        <div className="max-w-sm p-6 my-5 bg-blue border border-gray-200 rounded-lg shadow flex items-center justify-center flex-col">
                            <img src={andorid} alt="" className="w-7 h-7 text-gray-500 mb-3" />
                            <div>
                                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900">On an Android mobile device</h5>
                            </div>
                            <p className="mb-3 font-normal text-gray-500 ">+880 1648456387</p>
                        </div>
                        <div className="max-w-sm p-6 my-5 bg-blue border border-gray-200 rounded-lg shadow flex items-center justify-center flex-col">
                            <img src={whatsapp} alt="" className="w-7 h-7 text-gray-500 mb-3" />
                            <div>
                                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900">Using WhatsApp</h5>
                            </div>
                            <p className="mb-3 font-normal text-gray-500 ">+880 1648363875</p>
                        </div>
                    </div>

                    {/* Form Section */}
                    <div className="md:w-1/2" >
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
                            {/* <div className="mb-5">
                                <label className="block mb-2 text-sm font-medium text-gray-900">Any file you want to add(optional)</label>
                                <input
                                    type="file"
                                    className="shadow-sm bg-aqua_marine border border-gray-300 text-black text-sm  rounded-lg w-36 p-2.5"
                                    placeholder="Your Massage"
                                />
                            </div> */}
                            <button
                                type="submit"
                                className="text-white bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;