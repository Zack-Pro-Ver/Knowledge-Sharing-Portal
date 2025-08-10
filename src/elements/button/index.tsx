interface ButtonProps {
  variant?: "success" | "danger" | "dark" | "text" | "default";
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
}

const Button = ({ variant = "default", children, onClick }: ButtonProps) => {
  const baseClasses =
    "flex flex-col items-center justify-center font-small  rounded-lg text-xs focus:outline-none py-2 px-4 cursor-pointer";
  const typeClasses =
    variant === "default"
      ? "bg-blue-500 text-white hover:bg-blue-700"
      : variant === "success"
      ? "bg-green-500 text-white hover:bg-green-700"
      : variant === "danger"
      ? "bg-red-500 text-white hover:bg-red-700"
      : variant === "dark"
      ? "bg-gray-500 text-white hover:bg-gray-700"
      : variant === "text"
      ? "text-blue-600 hover:text-blue-800"
      : "bg-gray-500 text-white hover:bg-gray-700";

  return (
    <button className={`${baseClasses} ${typeClasses}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
