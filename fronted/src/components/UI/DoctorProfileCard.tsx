import React from "react";
import Image from "next/image";

type DoctorProfileCardProps = {
  name: string;
  specialization: string;
  imageUrl: string;
  onClick?: () => void;
};

const DoctorProfileCard = ({
  name,
  specialization,
  imageUrl,
  onClick,
}: DoctorProfileCardProps) => {
  return (
    <div
      onClick={onClick}
      className="relative transition-shadow bg-light-blue border border-gray-300 rounded-[15px] shadow-md hover:shadow-lg group"
    >
      <div className="relative w-full  pb-[120%]">
        {/* Blue Blur Effect */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full max-w-[500px] overflow-hidden z-0">
          <Image
            src="/images/doctorCardEllipse.png"
            alt="Blue Blur Effect"
            layout="responsive"
            width={500}
            height={500}
            style={{ objectFit: "none", transform: "scale(1.2)" }}
          />
        </div>

        {/* Doctor's Image Container */}
        <div className="absolute top-[-11%] left-0 w-full h-[80%] flex justify-center items-center z-10">
          <div className="relative w-[100%] h-full">
            <Image
              src={imageUrl}
              alt={name}
              layout="responsive"
              width={200}
              height={200}
              objectFit="contain"
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="absolute bottom-0 left-0 w-full h-[25%] text-center bg-dark-blue rounded-b-[15px] py-[0.5rem] px-[1rem] transition-all duration-500 group-hover:bg-medium-blue flex items-center justify-center z-30">
          <div className="text-center">
            <div className="group-hover:hidden">
              <h3 className="font-semibold text-white text-menu truncate">
                {name}
              </h3>
              <p className="text-white text-details opacity-70 truncate">
                {specialization}
              </p>
            </div>
            <div className="hidden group-hover:block">
              <p className="text-white text-menu">Profil Medic</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfileCard;
