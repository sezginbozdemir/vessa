import React from "react";
import Typography from "../UI/Typography";

type ToggleSwitchProps = {
  isToggled: boolean;
  onToggle: (value: boolean) => void;
};

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ isToggled, onToggle }) => {
  return (
    <div className="flex justify-center md:justify-start sm:justify-start sm:my-[1.5rem]">
      {/* Left Text */}
      <span
        className={`mr-5 ${isToggled ? "text-gray-600" : "text-medium-blue"}`}
      >
        <Typography variant="detailsBold">Automat</Typography>
      </span>

      {/* Toggle Button */}
      <button
        onClick={() => onToggle(!isToggled)}
        className={`w-[6rem] h-[2.5rem] sm:w-[4rem] sm:h-[2rem] md:w-[4rem] md:h-[2rem] rounded-full p-1 border ${
          isToggled
            ? "bg-white border-black justify-end"
            : "bg-white border-black justify-start"
        } flex items-center`}
      >
        {/* Toggle Bullet */}
        <span
          className={`w-[2rem] h-[2rem] sm:w-[1.5rem] sm:h-[1.5rem] md:w-[1.5rem] md:h-[1.5rem] rounded-full bg-medium-blue`}
        />
      </button>

      {/* Right Text */}
      <span
        className={` ml-5 ${!isToggled ? "text-gray-600" : "text-medium-blue"}`}
      >
        <Typography variant="detailsBold">Manual</Typography>
      </span>
    </div>
  );
};

export default ToggleSwitch;
