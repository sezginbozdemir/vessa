"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Typography from "./UI/Typography";
import Spacing from "./UI/Spacing";
import { LiaNotesMedicalSolid } from "react-icons/lia";
import Button from "./UI/Button";
import Wrapper from "./UI/Wrapper";
import Link from "next/link";

const HeroSection = () => {
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const [isSecondButtonVisible, setIsSecondButtonVisible] = useState(false);

  useEffect(() => {
    const firstTimer = setTimeout(() => {
      setIsButtonVisible(true);
    }, 1500);

    const secondTimer = setTimeout(() => {
      setIsSecondButtonVisible(true);
    }, 2000);

    return () => {
      clearTimeout(firstTimer);
      clearTimeout(secondTimer);
    };
  }, []);

  return (
    <section className="relative bg-light-blue overflow-hidden">
      <Wrapper>
        <Spacing sm="1.8" md="4.8" size="12" />
        <div className="grid items-center grid-cols-12 gap-8 md:grid-cols-8 sm:grid-cols-1 pt-[3.5rem]">
          <div className="flex flex-col justify-center col-span-6 md:col-span-8 sm:col-span-12 md:text-center">
            <Typography variant="h1" className="text-black whitespace-nowrap">
              SPITALUL <span className="text-dark-blue">TĂU</span>,
            </Typography>
            <Typography variant="h1" className="text-black">
              MEDICII <span className="text-dark-blue">TĂI</span>.
            </Typography>

            <div className="max-w-[85%] md:max-w-[70%] sm:max-w-full md:mx-auto">
              <Typography
                variant="paragraph"
                className="mt-4 text-dark-opacity-75"
              >
                La Vessa Hospital, sănătatea ta este prioritatea noastră. Cu o
                echipă de experți dedicați și servicii medicale complete, ne
                adaptăm permanent pentru a răspunde nevoilor tale.Suntem aici să
                te sprijinim, într-un mediu sigur, confortabil și orientat către
                binele tău.
              </Typography>
            </div>

            <Spacing sm="2" md="4" size="6" />
            <Link href="/programator">
              <div className="z-20 flex space-x-4 md:justify-center">
                <Button label="Programare online" />
              </div>
            </Link>

            <Spacing size="10" md="4" sm="2" />
          </div>

          {/* Image Section */}
          <div className="relative flex justify-end h-full col-span-6 md:justify-center md:col-span-7 sm:col-span-12">
            <div className="relative w-[59.4rem] h-full flex items-end md:w-[45rem] sm:w-full">
              {/* Ellipse Background */}
              <div className="absolute left-[1%] top-[-22%] w-[738px] h-[738px] z-0 flex justify-center md:w-[400px] md:h-[400px] md:bottom-[9rem] md:left-[8rem] sm:w-[300px] sm:h-[300px] sm:left-[8%] ">
                <Image
                  src="/images/ellipse8.png"
                  alt="Ellipse Effect"
                  layout="intrinsic"
                  width={700}
                  height={200}
                  objectFit="contain"
                  className="z-0 opacity-90"
                />
              </div>

              {/* Doctor Image */}
              <div className="relative w-[59.4rem] md:items-center md:justify-center h-[59.5rem] z-10 md:w-[45rem] md:h-[45rem] sm:w-[30rem] sm:h-[30rem]">
                <Image
                  priority
                  layout="fill"
                  src="/images/hero.webp"
                  alt="Doctor"
                  objectFit="contain"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Line Decorations */}
        <div className="absolute bottom-0 left-0 z-0 sm:w-screen sm:bottom-0 sm:left-0 md:top-0 md:left-0 lg:bottom-0 lg:left-0 xl:bottom-0 xl:left-0">
          <Image
            src="/images/heroLine1.png"
            alt="Line 1"
            // layout="responsive"
            width={800}
            height={600}
            className=" h-auto sm:w-screen sm:h-[20rem] md:w-[50rem] md:h-[50rem] lg:w-[700px] lg:h-[350px] xl:w-[700px] xl:h-[400px]"
          />
        </div>

        <div className="absolute top-0 right-0 z-0 md:top-0 md:right-0 lg:top-0 lg:right-0 xl:top-0 xl:right-0">
          <Image
            src="/images/heroLine2.png"
            alt="Line 2"
            layout="intrinsic"
            width={250}
            height={150}
            className="w-full h-auto sm:w-[40px] sm:h-[40px] md:w-[120px] md:h-[150px] lg:w-[250px] lg:h-[250px] xl:w-[250px] xl:h-[250px]"
          />
        </div>

        {/* Medical Specialties Card */}
        <div
          className={`absolute bottom-[10%] left-[50%] transform -translate-x-1/2 z-20 flex items-center bg-white px-[2rem] py-[1.6rem] md:py-[0.6rem] md:px-[0.6rem] gap-[1.2rem] sm:px-[1rem] sm:py-[0.6rem] rounded-[1.2rem] rounded-tr-none shadow-lg transition-all duration-1000 ease-out md:bottom-[5%] md:left-[25%] sm:bottom-[5%] sm:left-[13rem]  ${
            isButtonVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-[2rem]"
          }`}
        >
          <LiaNotesMedicalSolid className="w-[4rem] h-[4rem] text-medium-blue sm:hidden" />
          <Typography variant="menu" className="text-black">
            12 Specialități medicale
          </Typography>
        </div>

        {/* Medical Services Card */}
        <div
          className={`absolute top-[10%] xl:right-[16%] custom:right-[12.5%] lg:right-[12.5%] z-20 bg-white px-[1.6rem] py-[1rem]    md:px-[0.8rem] md:py-[0.8rem] sm:px-[0.6rem] sm:py-[0.6rem]  rounded-[1.2rem] rounded-bl-none shadow-lg transition-all duration-1000 ease-out md:top-[45%] md:right-[16%] sm:top-[45%] sm:right-[5%] ${
            isSecondButtonVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-[2rem]"
          }`}
        >
          <Typography
            variant="h3"
            className="font-bold text-center text-dark-blue"
          >
            +180
          </Typography>
          <Typography variant="menu" className="text-center text-black">
            Servicii medicale
          </Typography>
        </div>
      </Wrapper>
    </section>
  );
};

export default HeroSection;
