"use client";

import DoctorProfileCard from "@/components/UI/DoctorProfileCard";
import Typography from "@/components/UI/Typography";
import { doctorsData } from "@/app/mock-data/doctorsData";
import Link from "next/link";
import { FaPhone } from "react-icons/fa";

interface DoctorsProps {
  specialization: string;
}

const Doctors: React.FC<DoctorsProps> = ({ specialization }) => {
  const matchingDoctors = doctorsData.filter(
    (doctor) =>
      doctor.specialization.toLowerCase() === specialization.toLowerCase()
  );

  const firstDoctor = matchingDoctors[0];

  return (
    <div className="flex flex-col items-center w-full">
      {firstDoctor && (
        <>
          <Typography variant="h3" className="mb-[1rem] text-blue-300">
            Medicul Tău: Cine este și Cum te poate ajuta
          </Typography>
          <div className="flex mt-36 flex-col gap-[5rem] items-center justify-between">
            <div className="w-full flex items-center justify-center">
              <Link
                href={`/profileMedic/${firstDoctor.slug}`}
                className="w-[60%] sm:w-[80%] lg:w-[70%] md:w-[80%] h-full"
              >
                <DoctorProfileCard
                  name={firstDoctor.name}
                  specialization={firstDoctor.specialization}
                  imageUrl={firstDoctor.imageUrl}
                />
              </Link>
            </div>
            <div className="flex flex-col gap-5 items-center">
              <div className="sm:w-[80%] w-[60%] lg:w-[70%] md:w-[80%] flex h-full flex-col gap-5">
                <div className="flex flex-col justify-between gap-5 bg-light-blue p-[34px] rounded-[28px]">
                  <Typography variant="h3">Despre</Typography>
                  <Typography variant="paragraph">
                    {firstDoctor.about}
                  </Typography>
                </div>
                <div className="flex justify-between bg-light-blue px-[25px] py-[25px] rounded-[28px]">
                  <Typography variant="h3">Contact</Typography>
                  <Typography
                    variant="paragraph"
                    className="flex items-center justify-center gap-[1rem]"
                  >
                    <FaPhone className="custom-blue-text rotate-[90deg]" />
                    {firstDoctor.contact}
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Doctors;
