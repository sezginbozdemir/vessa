import React, { useState, useEffect } from "react";
import Typography from "@/components/UI/Typography";
import { MdKeyboardArrowDown } from "react-icons/md";
import { UserApi, User } from "../api/userApi";

interface DoctorSelectionProps {
  selectedDoctor: string | undefined;
  setSelectedDoctor: React.Dispatch<React.SetStateAction<string | undefined>>;
  setExistingSchedule: (schedule: Date[] | undefined) => void;
}

const DoctorSelection: React.FC<DoctorSelectionProps> = ({
  selectedDoctor,
  setSelectedDoctor,
  setExistingSchedule,
}) => {
  const [doctors, setDoctors] = useState<User[] | null>([]);
  const [doctorNames, setDoctorNames] = useState<string[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const { getUsers } = UserApi();

  useEffect(() => {
    const fetchDoctors = async (): Promise<void> => {
      try {
        const users = await getUsers();
        const doctors = users.filter((user) => user.role === "medic");
        setDoctors(doctors);
        const doctorFullNames = doctors.map((doctor) => doctor.fullname);

        setDoctorNames(doctorFullNames);
      } catch (error) {
        console.error("Error fetching users", error);
      }
    };

    fetchDoctors();
  }, [getUsers]);

  const handleDoctorChange = (doctorName: string) => {
    setSelectedDoctor(doctorName);

    const selectedDoctorDetails = doctors?.find(
      (doctor) => doctor.fullname === doctorName
    );

    const availability = selectedDoctorDetails?.availability;

    if (availability && availability.length > 0) {
      const dates = availability.flatMap((entry) => entry.date ?? []);
      setExistingSchedule(dates);
    }
    setIsDropdownOpen(false);
  };

  return (
    <div className="flex flex-col justify-between gap-12">
      <div className="flex">
        <Typography
          variant="h3"
          className="text-black cursor-pointer"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)} // Toggle dropdown visibility
        >
          Numele medicului
        </Typography>
        <MdKeyboardArrowDown
          className="w-[2.5rem] h-[2.5rem] cursor-pointer"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        />

        {isDropdownOpen && (
          <div className="absolute mt-12 bg-white border border-gray-300 rounded shadow-lg max-h-[37rem] overflow-scroll z-10">
            {doctorNames.map((doctor, index) => (
              <div
                key={index}
                className=" w-max p-4 cursor-pointer hover:bg-gray-100 mr-10 w-full"
                onClick={() => handleDoctorChange(doctor)}
              >
                <Typography variant="paragraph" className="text-black">
                  {doctor}
                </Typography>
              </div>
            ))}
          </div>
        )}
      </div>

      <Typography variant="detailsBold" className="text-dark-blue">
        {selectedDoctor ? selectedDoctor : "Selectează un medic"}
      </Typography>
    </div>
  );
};

export default DoctorSelection;
