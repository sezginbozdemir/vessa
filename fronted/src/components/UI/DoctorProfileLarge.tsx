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
    <div className="relative transition-shadow bg-light-blue border border-gray-300 rounded-[15px] shadow-md hover:shadow-lg group mt-14">
      <div className="relative w-full h-[30rem] overflow-visible rounded-t-lg">
        {/* Blue Blur Effect Positioned Behind the Image */}
        <div className="absolute top-[5rem] left-1/2 transform -translate-x-1/2 scale-[2] xl:scale-100 xl:top-[-10%] z-0">
          <Image
            src="/images/doctorCardEllipse.png"
            alt="Blue Blur Effect"
            width={1000}
            height={1000}
            objectFit="contain"
          />
        </div>

        <div className="absolute top-[-1.7rem] left-0 right-0 z-10 flex justify-center">
          <Image
            src={imageUrl}
            alt={name}
            width={435}
            height={435}
            objectFit="contain"
            className="z-20 lg:w-[31.7rem] lg:h-[31.7rem] xl:w-[30.6rem] md:w-[31.8rem] md:h-[31.8rem] sm:w-[31.8rem] sm:h-[31.8rem] xl:h-auto"
          />
        </div>
      </div>

      <div className="text-center bg-dark-blue rounded-b-[15px] py-[1.4rem] px-[3.8rem] transition-all duration-500">
        <div className="h-[4.4rem] flex flex-col justify-center">
          <div className="">
            <h3 className="font-semibold text-white text-menu">{name}</h3>
            <p className="text-white text-details opacity-70 mt-[0.5rem]">
              {specialization}
            </p>
          </div>

          {/* <div className="items-center justify-center hidden group-hover:flex">
            <p className="text-white text-menu">Profil Medic</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default DoctorProfileLargeCard;
