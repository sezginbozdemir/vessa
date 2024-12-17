import React from "react";
import Typography from "./Typography";

type SmallButtonProps = {
  label: string;
  onClick?: () => void;
  className?: string;
  textBlack?: boolean;
};

const SmallButton = ({
  label,
  className,
  textBlack,
  onClick,
}: SmallButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`bg-transparent ${
        textBlack ? "text-black" : "text-medium-blue"
      } font-semibold  p-[1rem] rounded-[0.9rem] border-[2px] border-medium-blue hover:bg-medium-blue hover:text-white transition-all duration-200 ${className}`}>
      <Typography variant="buttonText">{label}</Typography>
    </button>
  );
};

export default SmallButton;
