"use client";
import React from "react";
import { FaPhone } from "react-icons/fa";
import Image from "next/image";
import Typography from "../UI/Typography";
import Spacing from "../UI/Spacing";
import BackLink from "../UI/BackLink";
import DoctorProfileLargeCard from "../UI/DoctorProfileLarge";
import WrapperLarge from "../UI/WrapperLarge";
import Wrapper from "../UI/Wrapper";

export const detailsList = [
  "Lorem ipsum dolor",
  "Lorem ipsum dolor",
  "Lorem ipsum dolor",
  "Lorem ipsum dolor",
  "Lorem ipsum dolor",
  "Lorem ipsum dolor",
];

export type servicesWithDetails = {
  title: string;
  servicesText: string;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
};

type DoctorDetailsSection = {
  doctor?: {
    name: string;
    specialization: string;
    imageUrl: string;
    about: string;
    contact: string;
    servicesWithDetails?: servicesWithDetails[];
    slug: string;
  };
};

const DoctorDetailsSection = ({ doctor }: DoctorDetailsSection) => {
  return (
    <>
      <WrapperLarge>
        <BackLink />
      </WrapperLarge>

      <section className="relative">
        <div className="absolute w-full left-0 top-1/2 -translate-y-1/2 z-[-1]">
          <Image
            src="/images/profileMedicLine.png"
            alt="Profile Medic Line"
            layout="responsive"
            width={1920}
            height={150}
            objectFit="contain"
          />
        </div>
        <Wrapper>
          <div className="grid grid-cols-12 md:grid-cols-8 sm:grid-cols-2 gap-[4rem]">
            <div className="col-span-4 md:col-span-4 sm:col-span-2">
              <DoctorProfileLargeCard
                name={doctor?.name ? doctor.name : "Dr Nume Prenume"}
                specialization={
                  doctor?.specialization
                    ? doctor.specialization
                    : "Specialitate"
                }
                imageUrl={
                  doctor?.imageUrl
                    ? doctor.imageUrl
                    : "/images/icon-medic-large.png"
                }
              />
            </div>

            <div className="col-span-8  md:col-span-4 sm:col-span-2 space-y-[4rem] mt-14">
              <div className="bg-light-blue p-[3.4rem] md:p-[2.5rem] sm:p-[2.5rem] rounded-lg shadow-lg">
                <Typography variant="h3" className="text-black">
                  Despre
                </Typography>
                <Spacing size="2" md="2" sm="2" />
                <Typography variant="paragraph" className="text-dark-black-75">
                  {doctor?.about
                    ? doctor.about
                    : "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                </Typography>
              </div>

              {/* <div className="bg-light-blue p-[3rem] rounded-lg shadow-lg w-[100%]">
            <Typography
              variant="h3"
              className="text-black">
              Servicii medicale
            </Typography>
            <Spacing size="2" />
            <div className="grid grid-cols-2 gap-x-4 gap-y-4">
              {doctor?.services.map((detail, index) => (
                <div
                  key={index}
                  className="flex gap-4 items-start min-h-[3rem]">
                  <input
                    type="checkbox"
                    className="form-checkbox text-dark-blue h-[2rem] w-[2rem] rounded flex-none mt-1"
                    checked
                    readOnly
                  />
                  <Typography
                    variant="detailsBold"
                    className="flex-grow leading-normal">
                    {detail}
                  </Typography>
                </div>
              ))}
            </div>
          </div> */}

              <div className="bg-light-blue p-[3rem] rounded-lg shadow-lg  w-[60%] md:w-[100%] sm:w-[100%]">
                <div className="flex items-center justify-between">
                  <Typography variant="h3" className="mr-8 text-black">
                    Contact
                  </Typography>
                  <div className="flex">
                    <FaPhone className="text-dark-blue mr-4 w-[2.4rem] h-[2.4rem]" />
                    <Typography
                      variant="buttonText"
                      className="text-dark-black-75"
                    >
                      {doctor?.contact ? doctor.contact : "+40 744 833 815"}
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      </section>
    </>
  );
};

export default DoctorDetailsSection;
