"use client";
import React from "react";
import Image from "next/image";
import Typography from "@/components/UI/Typography";
import Spacing from "./UI/Spacing";
import Link from "next/link";
import UnderlineHoverButton from "./UI/UnderlineHoverButton";
import Wrapper from "./UI/Wrapper";
import { IoCheckmark } from "react-icons/io5";

export const detailsList = [
  "Echipă medicală de încredere",
  "Tehnologie de ultimă generație",
  "Îngrijire personalizată",
  "Acces rapid și facil",
];

const AboutSection = () => {
  return (
    <section className="relative ">
      {/* Background Shape (Outside of Wrapper for full width) */}
      <div
        className="absolute w-full h-[55rem] xl:top-[30%] top-[30%] md:top-[5%] sm:top-[20%] left-0 z-0"
        style={{
          backgroundImage: 'url("/images/aboutUsLine.png")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "left center",
        }}
      ></div>

      {/* Wrapper containing main content */}
      <Wrapper>
        <div className="grid grid-cols-12 md:grid-cols-8 sm:grid-cols-2  gap-[3.2rem] relative">
          <div className="relative col-span-6 md:col-span-4 sm:col-span-2 sm:order-last rounded-2xl ">
            {/* First shape */}
            <div className="absolute w-[20rem] h-[20rem] md:w-[11rem] md:h-[11rem] sm:w-[11rem] sm:h-[11rem] sm:right-[15%]  sm:top-[20%] bg-light-blue rounded-2xl md:right-[6rem] md:top-[5rem] lg:right-[15%] lg:bottom-[30%] xl:right-[25%] xl:top-[25%]  z-0"></div>

            <div className="relative w-[45.6rem] h-[30.5rem] md:w-[22rem] md:h-[15rem] sm:w-[27rem] sm:h-[18rem] z-10 ">
              <Image
                src="/images/about-home-1.jpg"
                alt="First Image"
                layout="fill"
                objectFit="cover"
                className="shadow-lg rounded-3xl"
              />
            </div>

            {/* Second shape */}
            <div className="absolute w-[20rem] h-[20rem] md:w-[11rem] md:h-[11rem]  bg-light-blue rounded-2xl md:bottom-[20%] md:right-[3%] lg:right-[1%] lg:bottom-[-40%] xl:right-[4%] xl:bottom-[-37%] sm:w-[11rem] sm:h-[11rem] sm:right-[5%] sm:bottom-[-45%]  z-0"></div>

            <div className="absolute top-[65%] left-[55%] w-[38rem] h-[25.3rem] md:w-[19rem] md:h-[12rem] md:top-[40%] sm:w-[19rem] sm:h-[12rem] sm:right-[-5rem] transform -translate-x-[40%] z-10 rounded-2xl">
              <Image
                src="/images/about-home-2.jpg"
                alt="Second Image"
                layout="fill"
                objectFit="cover"
                className="shadow-lg rounded-3xl"
              />
            </div>

            <Spacing size="8" />
          </div>

          <div className="z-10 flex flex-col col-span-6 md:col-span-4 sm:col-span-2 sm:order-first">
            <div className="relative flex items-start">
              <div className="sm:pl-[0.5rem]">
                <Typography variant="h2" className="text-black relative z-10">
                  Despre noi
                </Typography>
                <div className="w-[6rem] h-[0.2rem] bg-dark-blue mb-[2.5rem]" />
              </div>
            </div>

            <Typography variant="paragraph" className="text-black opacity-75">
              La Vessa Hospital, oferim îngrijire medicală completă, bazată pe
              profesionalism, empatie și tehnologie modernă. Ne adaptăm după
              tine și nevoile tale, pentru că sănătatea ta este pe primul loc.
            </Typography>

            <Spacing size="2.5" md="1.2" sm="2" />

            <div className="grid grid-cols-2 gap-x-[6rem] gap-y-[2rem] md:gap-x-1">
              {detailsList.map((detail, index) => (
                <div key={index} className="flex items-center">
                  <div className="relative inline-block">
                    <input
                      type="checkbox"
                      className="form-checkbox text-dark-blue h-[2rem] w-[2rem] opacity-0 absolute"
                      checked
                      readOnly
                    />

                    <div className="h-[2rem] w-[2rem] bg-dark-blue border-2 border-dark-blue rounded flex items-center justify-center">
                      {true && (
                        <IoCheckmark className="text-white h-[2rem] w-[2rem]" />
                      )}
                    </div>
                  </div>
                  <Typography
                    variant="detailsBold"
                    className="ml-[2rem] md:ml-[1rem] sm:ml-[0.5rem]"
                  >
                    {detail}
                  </Typography>
                </div>
              ))}
            </div>

            <Spacing size="4" md="3" sm="3" />
            <div className="z-10 flex justify-start col-span-3">
              <div className="z-20 ">
                <Link href="despre_noi">
                  <UnderlineHoverButton label="Citește mai mult" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default AboutSection;
