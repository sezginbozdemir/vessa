import React from "react";
import Image from "next/image";
import SmallButton from "./SmallButton";
import Typography from "./Typography";

type MedicalServiceCardProps = {
  title: string;
  description: string;
  buttonText?: string;
  image: string;
};

const MedicalServiceCard = ({
  title,
  description,
  buttonText,
  image,
}: MedicalServiceCardProps) => {
  return (
    <div className="bg-light-blue p-[2.6rem] rounded-lg shadow-md">
      <div className="flex items-start gap-[2.8rem] md:gap-[2.3rem] sm:gap-[2.3rem]">
        <div className="bg-white p-[1.3rem] rounded-lg ">
          <Image
            src={image}
            alt="Medical Icon"
            width={90}
            height={90}
            className="text-dark-blue"
          />
        </div>

        <div className="flex flex-col ">
          <Typography variant="h3" className="text-dark-blue mb-[1.2rem]">
            {title}
          </Typography>

          <Typography
            variant="paragraph"
            className="text-black opacity-75 mb-[2.4rem] min-h-[10rem]"
          >
            {description}
          </Typography>

          <div>
            <SmallButton
              label={`${buttonText ? buttonText : "Servicii medicale"}`}
            ></SmallButton>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MedicalServiceCard;
