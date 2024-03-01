import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";
import "./Registration.css";
import signature_img from '../../images/signature-img.png'
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const Registration = () => {
  const { createUser, updateUserProfile } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {

    createUser(data.email, data.password).then(() => {

      updateUserProfile(data?.name, data?.photoURL)
        .then(() => {
          const userInfo = { user_Name: data.name, user_Email: data.email, user_Profile_Picture:data.photoURL };
          console.log('-----------',userInfo);
          axiosPublic.post('/users', userInfo)
          .then(res => {
            console.log(res.data)
            if(res.data.insertedId){
              console.log('User added: ',res.data);
              reset();
              Swal.fire({
                title: "Registration Completed",
                text: "Thanks For registering",
                icon: "success"
              });
              navigate('/')
            } 
          })
        })
        .catch((error) => console.log(error));
    });
  };

  return (
    <div className="grid lg:grid-cols-5 min-h-screen">
      <div className="lg:w-2/3 mx-auto p-4 lg:col-span-3">
      <h1 className="text-center text-xl font-semibold mt-8 mb-2 text-[#172734]">
        Register your account
      </h1>
      <div className="register-form mb-6 p-10 w-80 lg:w-96 mx-auto rounded-sm">
        <form className="mb-6 px-4" onSubmit={handleSubmit(onSubmit)}>
          {/* Personal Information================== */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <label htmlFor="" className="pb-1">
                Your name
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                className="p-3 rounded-lg form-input "
                placeholder="Tabib E Alahi"
              />
              {errors.name && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="" className="pb-1">
                Photo URL
              </label>
              <input
                {...register("photoURL", { required: true })}
                type="text"
                className="p-3 rounded-lg form-input"
                placeholder="url...."
              />
              {errors.photoURL && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="" className="pb-1">
                Enter Email
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                className="p-3 rounded-lg form-input"
                placeholder="example@example.com"
              />
              {errors.email && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="" className="pb-1">
                Enter Password
              </label>
              <input
                {...register("password", {
                  required: true,
                  minLength: 6
                })}
                type="password"
                className="p-3 rounded-lg form-input"
                placeholder="password@123"
              />
              {errors.password?.type === "required" && (
                <p role="alert" className="text-red-500">
                  Password is required
                </p>
              )}
              {errors.password?.type === "minLength" && (
                <p role="alert" className="text-red-500">
                  Password must be 6 characters minimum
                </p>
              )}
            </div>
            <div className="w-2/3 mx-auto text-center">
              <button className="px-6 py-2  rounded-md text-white w-full bg-[#52ab98]">
                Register
              </button>
            </div>
          </div>
        </form>
        <SocialLogin></SocialLogin>
        <div className="flex justify-center items-center gap-1">
          <p className="font-normal">Already have an account?</p>
          <Link to="/login">
            <button className="btn btn-link pl-0">Login</button>
          </Link>
        </div>
      </div>
    </div>

    <div className="pl-10 hidden lg:flex flex-col justify-center border bg-[#deebf5] col-span-2">
        <div className="card  ">
        <img
              src={signature_img}
              alt="signature image"
              className="w-[360px] h-[320px]"
            />
          <div className="card-body  text-left pt-0">
            <h2 className="text-left text-3xl font-bold text-[#1e4651]">Register to sign with ease.</h2>
            <p className="my-2 w-96">Enter your email and password to access your WeavePDF account. You are one step closer to boosting your document productivity.</p>
            <div className="card-actions">
              <button className="btn btn-link text-[#184138] font-semibold text-lg pl-0 pt-0"><Link to='/'>Explore Features</Link></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
