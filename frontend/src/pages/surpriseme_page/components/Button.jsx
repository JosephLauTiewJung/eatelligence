const Button = ({ label, onClick, variant = 'primary', disabled }) => {
    const baseStyles = "w-full py-4 px-6 rounded-full text-lg font-bold transition-all duration-200 active:scale-95";

    const variants = {
        primary: "bg-[#D19156] hover:bg-[#C08145] text-white shadow-lg",
        secondary: "bg-transparent border border-zinc-700 hover:border-zinc-500 text-white"
    };

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`${baseStyles} ${variants[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
            {label}
        </button>
    );
};

export default Button;
