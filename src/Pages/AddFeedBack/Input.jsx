

const Input = ({ className = "", ...props }) => {
    return (
        <input
            className={`w-full bg-[#EBEBEB] py-3 pl-2 text-gray-500 relative flex justify-between items-center focus:outline-none ${className}`}
            {...props}
        />
    );
};

export default Input;