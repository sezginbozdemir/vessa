import React from "react";
import Typography from "./Typography";

type ButtonProps = {
  label: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  className?: string;
};

const Button = ({
  label,
  className,
  type = "button",
  onClick,
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-medium-blue text-black font-semibold z-20 text-center items-center flex px-[3.2rem] md:px-[2.9rem] sm:px-[1.7rem] py-[1.4rem] rounded-[9px] border-[2px] border-medium-blue hover:bg-transparent  transition-all duration-200 ${className}`}>
      <Typography variant="buttonText">{label}</Typography>
    </button>
  );
};

export default Button;
