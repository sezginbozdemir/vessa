"use client";
import React from "react";
import Typography from "./UI/Typography";
import Image from "next/image";
import Spacing from "./UI/Spacing";
import Button from "./UI/Button";
import Link from "next/link";
import Wrapper from "./UI/Wrapper";

const DictionarySection = () => {
  return (
    <section className="relative">
      {/* Background Shape (Outside of Wrapper for full width) */}
      <div
        className="absolute left-0 w-full h-full top-20"
        style={{
          backgroundImage: 'url("/images/dictionaryLine.png")',
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          zIndex: 0,
        }}
      ></div>

      {/* Wrapper containing main content */}
      <Wrapper>
        <div className="grid grid-cols-12 md:grid-cols-8 sm:grid-cols-2 gap-[3.2rem] md:gap-2 relative">
          <div className="relative z-10 flex flex-col col-span-12 md:col-span-12 sm:col-span-2">
            <div className="w-max relative flex">
              <div className="absolute -left-9 sm:top-0 md:top-4 top-8">
                <Image
                  src="/images/xmas/mistletoe.svg"
                  width={45}
                  height={45}
                  alt="Bell"
                />
              </div>
              <div className="sm:pl-[1.3rem]">
                <Typography variant="h2" className="text-black">
                  Dicționar de afecțiuni
                </Typography>{" "}
                <div className="w-[10rem] h-[0.3rem] bg-dark-blue mt-[1rem]" />
                <Spacing size="2.5" md="2.5" sm="0" />
              </div>
            </div>
          </div>

          <div className="col-span-6 md:col-span-4 sm:col-span-2">
            <Typography
              variant="paragraph"
              className="text-black opacity-75 max-w-[100%] lg:max-w-[80%] lg:mx-0"
            >
              Îți punem la dispoziție o resursă completă de informații medicale
              pentru a înțelege mai bine afecțiunile și tratamentele
              disponibile. Explorează termenii medicali și află tot ce trebuie
              să știi despre sănătatea ta.
            </Typography>

            <Spacing size="4.8" md="3" sm="3" />

            <div>
              <Link href="/dictionar">
                <Button
                  label="Vezi dicționarul"
                  className="bg-medium-blue px-[3.2rem] py-[1.6rem]"
                />
              </Link>
            </div>
          </div>
          <div className="relative z-10 col-span-6 md:col-span-4 sm:col-span-2">
            <div className="relative w-[100%] lg:w-[45.6rem] h-[25rem] lg:h-[30.5rem]">
              <Image
                src="/images/doctor-dictionary.png"
                alt="Doctor Dictionary"
                layout="fill"
                objectFit="cover"
                className="z-20 shadow-lg rounded-3xl"
              />
            </div>

            <div className="absolute w-[12rem] h-[12rem] bg-light-blue rounded-2xl md:right-[-5%] md:bottom-[-6%] sm:right-[-3%] sm:bottom-[-6%]  right-[6vw] lg:right-[4vw] xl:right-[-5%] bottom-[-5vw] lg:bottom-[-15%] xl:bottom-[-2vw] z-10"></div>
            <div className="absolute w-[6rem] h-[6rem] bg-light-blue rounded-2xl right-[4vw] md:right-[-10%] md:bottom-[-16%] sm:right-[-5%] sm:bottom-[-13%] lg:right-[2vw] xl:right-[-8%] bottom-[-25%] lg:bottom-[-4vw] xl:bottom-[-3vw] z-0"></div>
          </div>
          <Spacing size="8" />
        </div>
      </Wrapper>
    </section>
  );
};

export default DictionarySection;
