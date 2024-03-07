import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="min-h-[100vh] flex flex-col justify-center items-center">

            <img src="/404.png" alt="" />
            <p className="text-xl md:text-3xl text-gray-400 text-center">The Page you are looking for is not available.<br></br>You can go back to Home.</p>

            <Link to={'/'}><button className="bg-teal rounded-lg p-2 text-white font-medium mt-5">Go Home</button></Link>



        </div>
    );
};

export default Error;