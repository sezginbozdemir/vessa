import React from "react";
import Typography from "./Typography";

type ButtonProps = {
  label: string;
  onClick?: () => void;
  className?: string;
};

const UnderlineHoverButton = ({ label, className, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`relative inline-block border-2 border-medium-blue text-black px-[3.2rem] py-[1.4rem] rounded-[9px] group transition-all duration-300 hover:border-transparent hover:text-medium-blue ${className}`}>
      <Typography variant="buttonText">{label}</Typography>
      {/* Underline Effect */}
      <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-medium-blue transition-all duration-300 group-hover:w-[40%] group-hover:left-[30%]"></span>
    </button>
  );
};

export default UnderlineHoverButton;
