"use client";

import DoctorProfileCard from "@/components/UI/DoctorProfileCard";
import Typography from "@/components/UI/Typography";
import { doctorsData } from "@/app/mock-data/doctorsData";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface DoctorsProps {
  specialization: string;
}

const Doctors: React.FC<DoctorsProps> = ({ specialization }) => {
  const router = useRouter();
  const matchingDoctors = doctorsData.filter(
    (doctor) =>
      doctor.specialization.toLowerCase() === specialization.toLowerCase()
  );

  const firstDoctor = matchingDoctors[0];
  const handleDoctorClick = (slug: string) => {
    router.push(`/profileMedic/${slug}`);
  };

  return (
    <div className="mt-36 flex flex-col items-center">
      {firstDoctor && (
        <>
          <Typography variant="h3">
            Medicul Tău: Cine este și Cum te poate ajuta
          </Typography>
          <div className="flex mt-36 flex-row gap-[5rem] sm:flex-col items-start justify-between">
            <div className="w-full flex items-center justify-center xl:justify-end md:justify-end lg:justify-end">
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
            <div className="flex flex-col gap-5 items-start sm:items-center">
              <div className="sm:w-[80%] w-[60%] lg:w-[70%] md:w-[80%] flex h-full flex-col gap-5">
                <div className="flex flex-col justify-between gap-5 bg-light-blue p-[34px] rounded-[28px]">
                  <Typography variant="h3">Despre</Typography>
                  <Typography variant="paragraph">
                    {firstDoctor.about}
                  </Typography>
                </div>
                <div className="w-[85%] flex justify-between bg-light-blue px-[25px] py-[25px] rounded-[28px]">
                  <Typography variant="h3">Contact</Typography>
                  <Typography variant="buttonText">
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
