"use client";
import React, { useState } from "react";
import DoctorProfileCard from "../UI/DoctorProfileCard";
import Spacing from "../UI/Spacing";
import { doctorsData } from "@/app/mock-data/doctorsData";
import { useRouter } from "next/navigation";
import Wrapper from "../UI/Wrapper";
import { BsSearchHeart } from "react-icons/bs";
import { IoFilter } from "react-icons/io5";

const MedicFilter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpeciality, setSelectedSpeciality] = useState("");
  const router = useRouter();

  const specialities = [
    ...new Set(doctorsData.map((doctor) => doctor.specialization)),
  ];

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setSelectedSpeciality("");
  };

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSpecialitySelect = (speciality: string) => {
    if (selectedSpeciality === speciality) {
      setSelectedSpeciality("");
    } else {
      setSelectedSpeciality(speciality);
    }
    setSearchTerm("");
    setIsOpen(false);
  };

  const handleDoctorClick = (slug: string) => {
    router.push(`/profileMedic/${slug}`);
  };

  const filteredDoctors = doctorsData.filter((doctor) => {
    if (selectedSpeciality) {
      return doctor.specialization === selectedSpeciality;
    } else if (searchTerm) {
      return (
        doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else {
      return true;
    }
  });

  return (
    <Wrapper>
      <div className="flex flex-wrap justify-between  sm:space-y-0 mb-14">
        {/* Search Input */}
        <div className="flex items-center bg-white border placeholder:text-details border-gray-300 rounded-2xl w-[25%] md:w-[45%] sm:w-[65%] px-4">
          <input
            type="text"
            placeholder="Nume"
            value={searchTerm}
            onChange={handleSearch}
            className="w-full px-2 py-2 focus:outline-none"
          />
          <span className="ml-2 text-medium-blue">
            <BsSearchHeart className="w-[1.8rem] h-[1.8rem]" />
          </span>
        </div>

        {/* Filter Dropdown */}
        <div className="relative md:w-auto">
          <div
            className="flex items-center cursor-pointer"
            onClick={handleDropdownToggle}
          >
            <button className="flex items-center px-6 py-2 font-bold text-black text-buttonText focus:outline-none md:hidden sm:hidden">
              Specialități medicale
            </button>
            <IoFilter className="ml-2 w-[1.8rem] h-[1.8rem] text-black md:text-medium-blue" />
          </div>

          {isOpen && (
            <div className="z-40 absolute right-0 mt-2 border border-gray-300 shadow-lg rounded-3xl bg-light-blue max-h-[50vh] overflow-y-auto">
              <ul className="whitespace-nowrap w-full py-[1.6rem] pl-[2.4rem] pr-[3.6rem] sm:pl-[1.6rem] sm:pr-[2.4rem]">
                {specialities.map((speciality, index) => (
                  <li
                    key={index}
                    onClick={() => handleSpecialitySelect(speciality)}
                    className={`text-detailsBold px-4 py-2 cursor-pointer rounded-2xl ${
                      selectedSpeciality === speciality
                        ? "text-dark-blue"
                        : "text-dark-opacity-bf opacity-80"
                    }`}
                  >
                    {speciality}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <Spacing size="4.4" md="6" sm="6" />
      {/* Doctor List */}
      <div className="grid grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-x-[3rem] gap-y-10 w-full">
        {filteredDoctors.map((doctor, index) => (
          <div
            key={index}
            onClick={() => handleDoctorClick(doctor.slug)}
            className="cursor-pointer aspect-square w-full mb-10"
          >
            <DoctorProfileCard
              name={doctor.name}
              specialization={doctor.specialization}
              imageUrl={doctor.imageUrl}
            />
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default MedicFilter;
