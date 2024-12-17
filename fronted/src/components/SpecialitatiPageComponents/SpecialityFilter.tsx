"use client";
import React, { useState } from "react";
import { BsSearchHeart } from "react-icons/bs";
import MedicalServiceCard from "../UI/MedicalServiceCard";
import Spacing from "../UI/Spacing";
import { serviciiMedicale } from "@/app/mock-data/serviciiMedicale";
import { useRouter } from "next/navigation";
import Wrapper from "../UI/Wrapper";

const SpecialityFilter = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpeciality, setSelectedSpeciality] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setSelectedSpeciality("");
  };

  const handleServiciClick = (slug: string) => {
    router.push(`/servicii_medicale/${slug}`);
  };

  const filteredServices = serviciiMedicale.filter((servici) => {
    if (selectedSpeciality) {
      return servici.title === selectedSpeciality;
    } else if (searchTerm) {
      return (
        servici.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        servici.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else {
      return true;
    }
  });

  return (
    <Wrapper>
      {/* Search input */}
      <div className="flex justify-between ">
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
      </div>

      <Spacing size="8" />

      {/* Cards layout */}
      <div className="grid grid-cols-12 md:grid-cols-8 sm:grid-cols-2 gap-x-[3.2rem] gap-y-[6rem] md:gap-y-[5rem] sm:gap-y-[3rem] mt-8 ">
        {filteredServices.map((serviciu, index) => (
          <div
            key={index}
            onClick={() => handleServiciClick(serviciu.slug)}
            className="col-span-6 md:col-span-8 sm:col-span-2"
          >
            <MedicalServiceCard
              title={serviciu.title}
              description={serviciu.description}
              buttonText={serviciu.buttonText}
              image={serviciu.imageUrl}
            />
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default SpecialityFilter;
