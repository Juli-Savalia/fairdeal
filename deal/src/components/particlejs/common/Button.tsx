import React from "react";

type ButtonProps = {
  variant?: "primary" | "secondary" | "outline";
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  className?: string;
  isLoading?: boolean;
  type?: "submit" | "reset" | "button";
};

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  onClick,
  disabled = false,  
  isLoading = false,
  className = "",
  type = "button",
  ...props
}) => {
  const baseStyles =
    "relative px-[16px] py-[14px] text-[16px] border-2 rounded-[30px] transition duration-300 overflow-hidden";

  const variantStyles = {
    primary: `bg-[#288cd5] text-white border-[#288cd5] before:absolute before:inset-0 before:bg-white before:w-full before:h-full before:translate-x-[-110%] hover:text-[#288cd5] hover:border-[#288cd5] hover:before:translate-x-0 before:transition-transform before:duration-300 `,

    secondary: `text-gray-900 hover:border-black hover:text-black hover:scale-105 
    relative overflow-hidden before:absolute before:content-[''] before:bg-[red] before:w-50 before:h-full before:translate-x-[50%] before:transition-transform before:duration-300 before:top-0 hover:before:translate-x-[30%] after:absolute after:content-[''] after:bg-[red] after:w-[50%] after:h-full after:translate-x-[-50%] after:transition-transform after:duration-300 after:top-0 hover:after:translate-x-[90%] `,

    outline: `border-blue-600 text-blue-600 bg-transparent hover:bg-blue-600 hover:text-white`,
  };

  return (
    <button
      onClick={onClick}
      disabled={isLoading || disabled}
      type={type}
      className={`${baseStyles} ${variantStyles[variant]} ${className} ${disabled ? "opacity-50 cursor-not-allowed" : ""
        }`}
      {...props}
    > 
      <span className="relative z-10">{isLoading ? "Loading..." : children}</span>
    </button>
  );
};

export default Button;
