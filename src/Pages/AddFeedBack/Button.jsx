

const Button = ({ children, className, onClick, ...props }) => {
    return (
        <button
            onClick={onClick}
            className={`active:scale-95 duration-300 bg-black   ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;