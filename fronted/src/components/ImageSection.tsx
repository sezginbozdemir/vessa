"use client";
import React, { useState } from "react";
import Image from "next/image";
import Typography from "./UI/Typography";
import Spacing from "./UI/Spacing";
import Button from "./UI/Button";
import { images } from "@/app/mock-data/imageSection";
import Wrapper from "./UI/Wrapper";
import Link from "next/link";

const ImageSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <Wrapper>
      <section className="grid grid-cols-12 gap-[3.2rem] md:gap-[2.4rem] sm:gap-[2rem] ">
        <div className="col-span-6 flex flex-col space-y-[1.8rem] relative ">
          <div className="flex flex-col h-[91rem] md:h-[56rem] sm:h-[30rem] transition-all duration-500 gap-y-[2rem]">
            {/* Cardul de sus din coloana stânga */}
            <div
              className={`group relative w-full ${
                hoveredCard === 1
                  ? "h-[64rem]"
                  : hoveredCard === 2
                  ? "h-[38rem]"
                  : "h-[47rem]"
              } overflow-hidden rounded-3xl shadow-xl transition-all duration-500 ease-in-out`}
              onMouseEnter={() => setHoveredCard(1)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <Image
                src={images[0].src}
                alt="Image 1"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 ease-in-out group-hover:scale-125"
              />

              <div className="absolute bottom-0 left-0 w-full h-[8rem] bg-dark-blue text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out flex items-center justify-center">
                <Typography variant="buttonText" className="text-white">
                  {images[0].text}
                </Typography>
              </div>
            </div>

            {/* Cardul de jos din coloana stânga */}
            <div
              className={`group relative w-full ${
                hoveredCard === 2
                  ? "h-[64rem]"
                  : hoveredCard === 1
                  ? "h-[38rem]"
                  : "h-[47rem]"
              } overflow-hidden rounded-3xl shadow-xl transition-all duration-500 ease-in-out`}
              onMouseEnter={() => setHoveredCard(2)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <Image
                src={images[1].src}
                alt="Image 2"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 ease-in-out group-hover:scale-125"
              />

              <div className="absolute bottom-0 left-0 w-full h-[8rem] bg-dark-blue text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out flex items-center justify-center sm:text-center">
                <Typography variant="buttonText" className="text-white">
                  {images[1].text}
                </Typography>
              </div>
            </div>
          </div>

          <Spacing size="4" md="4" />

          <div className="flex items-end justify-center">
            <Link href="/galerie_foto">
              <Button
                label="Vezi Galerie Foto"
                className="sm:whitespace-nowrap"
              />
            </Link>
          </div>
        </div>

        {/* Coloana din dreapta */}
        <div className="col-span-6 flex flex-col space-y-[1.8rem] relative">
          <div className="flex flex-col justify-center items-center h-[103rem] md:h-[75rem] sm:h-[40rem] transition-all duration-500 gap-y-[2rem]">
            <div className="w-[34rem] flex justify-center  md:justify-center h-auto ">
              <Image
                src="/images/vessa-logo.png"
                alt="Logo"
                width={300}
                height={100}
                layout="intrinsic"
                objectFit="contain"
                className="md:w-[18rem] sm:w-[10rem] md:h-[6rem] sm:h-[3.5rem]"
              />
              <Spacing size="4" />
            </div>
            {/* Cardul de sus din coloana dreapta */}
            <div
              className={`group relative w-full ${
                hoveredCard === 3
                  ? "h-[64rem]"
                  : hoveredCard === 4
                  ? "h-[38rem]"
                  : "h-[47rem]"
              } overflow-hidden rounded-3xl shadow-xl transition-all duration-500 ease-in-out`}
              onMouseEnter={() => setHoveredCard(3)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <Image
                src={images[2].src}
                alt="Image 3"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 ease-in-out group-hover:scale-125"
              />

              <div className="absolute bottom-0 left-0 w-full h-[8rem] bg-dark-blue text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out flex items-center justify-center">
                <Typography variant="buttonText" className="text-white">
                  {images[2].text}
                </Typography>
              </div>
            </div>

            {/* Cardul de jos din coloana dreapta */}
            <div
              className={`group relative w-full ${
                hoveredCard === 4
                  ? "h-[64rem]"
                  : hoveredCard === 3
                  ? "h-[38rem]"
                  : "h-[47rem]"
              } overflow-hidden rounded-3xl shadow-xl transition-all duration-500 ease-in-out`}
              onMouseEnter={() => setHoveredCard(4)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <Image
                src={images[3].src}
                alt="Image 4"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 ease-in-out group-hover:scale-125"
              />

              <div className="absolute bottom-0 left-0 w-full h-[8rem] bg-dark-blue text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out flex items-center justify-center">
                <Typography variant="buttonText" className="text-white">
                  {images[3].text}
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default ImageSection;
