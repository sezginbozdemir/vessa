"use client";
import { galerieImage } from "@/app/mock-data/imageSection";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Wrapper from "../UI/Wrapper";
import { FiEye } from "react-icons/fi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const GalerieSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openSlider = (index: number) => {
    setActiveIndex(index);
    setIsOpen(true);
  };

  const closeSlider = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    }
    return () => {
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <Wrapper>
        <div className="grid grid-cols-12 gap-x-[3.2rem] gap-y-[6rem] sm:grid-cols-2 md:grid-cols-8">
          {galerieImage.map((image, index) => (
            <div
              onClick={() => openSlider(index)}
              key={index}
              className="relative w-full h-[34rem] group col-span-4 md:col-span-4 sm:col-span-2 cursor-pointer overflow-hidden rounded-[1.6rem]">
              <Image
                src={image.src}
                alt={image.text}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 transform group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-500 opacity-0 bg-medium-blue bg-opacity-60 group-hover:opacity-100">
                <FiEye className="text-5xl text-white" />
              </div>
            </div>
          ))}
        </div>
      </Wrapper>
      
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div  className="relative w-full lg:max-w-[75vw] xl:max-w-[69vw] md:max-w-[83vw] sm:max-w-[90vw] xl:h-[70vh] lg:h-[75vh] md:h-[83vh] sm:h-[50vh] ">
            <button
              className="absolute z-10 text-2xl text-white top-4 right-4"
              onClick={closeSlider}>
              ✕
            </button>
            <Swiper
              navigation={{
                nextEl: ".swiper-button-next-custom",
                prevEl: ".swiper-button-prev-custom",
              }}
              modules={[Navigation]}
              initialSlide={activeIndex}
              loop
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
              className="w-full h-full">
              {galerieImage.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="relative w-full h-full">
                    <Image
                      src={image.src}
                      alt={image.text}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            {/* Custom navigation buttons */}
            <div className="absolute p-2 w-[6rem] h-[6rem] md:w-[4rem] md:h-[4rem] sm:w-[4rem] sm:h-[4rem]  flex items-center justify-center text-black transform -translate-y-1/2 bg-light-blue  cursor-pointer swiper-button-prev-custom left-[-10%] md:left-[-7%] sm:left-[-5%] top-1/2 rounded-xl z-20">
              <IoIosArrowBack className="w-[4rem] h-[4rem] text-medium-blue" />
            </div>
            <div className="absolute p-2 text-black  w-[6rem] h-[6rem] md:w-[4rem] md:h-[4rem] sm:w-[4rem] sm:h-[4rem] flex items-center justify-center transform -translate-y-1/2 bg-light-blue  cursor-pointer swiper-button-next-custom right-[-10%] md:right-[-7%] sm:right-[-5%] top-1/2 rounded-xl z-20">
              <IoIosArrowForward className="w-[4rem] h-[4rem] text-medium-blue" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GalerieSection;
