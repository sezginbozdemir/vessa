import React from "react";
import Image from "next/image";

type DoctorProfileCardProps = {
  name: string;
  specialization: string;
  imageUrl: string;
};

const DoctorProfileLargeCard = ({
  name,
  specialization,
  imageUrl,
}: DoctorProfileCardProps) => {
  return (
    <div className="relative transition-shadow bg-light-blue border border-gray-300 rounded-[15px] shadow-md hover:shadow-lg group mt-14 overflow-visible">
      <div className="relative w-full aspect-[4/3] sm:aspect-[4/2.7]">
        {/* Blue Blur Effect Positioned Behind the Image */}
        <div className="absolute inset-0 flex items-center justify-center z-0">
          <Image
            src="/images/doctorCardEllipse.png"
            alt="Blue Blur Effect"
            width={1000}
            height={1000}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Doctor Image */}
        <div className="absolute inset-[10%] transform -translate-y-[5%] flex items-center justify-center">
          <Image
            src={imageUrl}
            alt={name}
            width={500}
            height={500}
            className="object-cover"
          />
        </div>
      </div>

      <div className="relative text-center bg-dark-blue rounded-b-[15px] py-[1.4rem] px-[3.8rem] transition-all duration-500 z-30">
        <div className="h-[4.4rem] flex flex-col justify-center">
          <div className="">
            <h3 className="font-semibold text-white text-menu">{name}</h3>
            <p className="text-white text-details opacity-70 mt-[0.5rem]">
              {specialization}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfileLargeCard;
