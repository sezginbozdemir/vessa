import React, { useState } from "react";
import Image from "next/image";
import Typography from "./Typography";

type ServiceCardProps = {
  title: string;
  hoverTitle: string;
  imageUrl: string;
  onClick?: () => void;
};

const ServiceCard = ({
  title,
  hoverTitle,
  imageUrl,
  onClick,
}: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onClick={onClick}
      className="bg-light-blue rounded-[1.6rem] mb-8 mr-8 py-[3rem] px-[7rem]  flex flex-col items-center shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="bg-white p-2 rounded-[1.4rem] flex justify-center items-center w-[13rem] h-[13rem] sm:w-[16rem] sm:h-[16rem] xs:w-[18rem] xs:h-[18rem]">
        <Image src={imageUrl} alt={title} width={100} height={100} />
      </div>

      <div className="mt-[2.5rem] min-h-[6.5rem] flex items-center text-center justify-center relative">
        <Typography
          variant="h3"
          className={`sm:text-3xl xs:text-3xl absolute transition-all duration-300 ease-in-out text-balance ${
            isHovered
              ? "opacity-0 translate-y-full"
              : "opacity-100 translate-y-0"
          }`}
        >
          {title}
        </Typography>

        <Typography
          variant="h3"
          className={`sm:text-3xl xs:text-3xl absolute text-medium-blue transition-all duration-300 ease-in-out ${
            isHovered
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-full"
          }`}
        >
          {hoverTitle}
        </Typography>
      </div>
    </div>
  );
};

export default ServiceCard;
