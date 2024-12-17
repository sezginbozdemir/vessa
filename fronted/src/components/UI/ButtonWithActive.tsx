import React, { useState } from "react";
import Typography from "./Typography";

type ButtonProps = {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
};

const ButtonWithActive: React.FC<ButtonProps> = ({
  label,
  isActive,
  onClick,
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => isActive && setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`py-[1.6rem] px-[1.9rem] rounded-lg border-2  lg:max-w-[27.6rem] transition-all duration-300 ${
        isActive
          ? "bg-medium-blue text-white"
          : "bg-transparent text-black border-medium-blue"
      }`}>
      <Typography variant="detailsBold">
        {isActive && hovered ? "Elimina!" : label}
      </Typography>
    </button>
  );
};

export default ButtonWithActive;
