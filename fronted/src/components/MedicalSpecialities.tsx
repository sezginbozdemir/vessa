"use client";
import React, { useState } from "react";
import ServiceCard from "./UI/ServiceCard";
import Typography from "./UI/Typography";
import Spacing from "./UI/Spacing";
import UnderlineHoverButton from "./UI/UnderlineHoverButton";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import { serviciiMedicale } from "@/app/mock-data/serviciiMedicale";
import { useRouter } from "next/navigation";
import Wrapper from "./UI/Wrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper as SwiperType } from "swiper";

const MedicalSpecialities: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const router = useRouter();

  const handleNext = () => {
    if (swiperInstance) {
      swiperInstance.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperInstance) {
      swiperInstance.slidePrev();
    }
  };

  const handleServiciClick = (slug: string) => {
    router.push(`/servicii_medicale/${slug}`);
  };

  return (
    <Wrapper>
      <div className="relative">
        <div className="flex w-full justify-center md:justify-start sm:justify-start">
          <div className="w-max relative flex">
            <div className="sm:pl-[1.3rem]">
              <Typography
                variant="h2"
                className="col-span-12 text-center text-black"
              >
                Specialități medicale
              </Typography>
              <div className="w-[10rem] h-[0.3rem] bg-dark-blue mt-[1rem]" />
            </div>
          </div>
        </div>

        <Spacing size="1.8" md="3" sm="3" />

        {/* Bullets */}
        <div className="col-span-12 flex justify-end items-center sm:justify-start space-x-[0.8rem]">
          {serviciiMedicale.map((_, index) => (
            <div
              key={index}
              onClick={() => {
                if (swiperInstance) {
                  swiperInstance.slideToLoop(index); // Folosim slideToLoop pentru a naviga în mod continuu
                  setCurrentIndex(index);
                }
              }}
              className={`cursor-pointer w-2 h-2 rounded-full transition-all duration-300 ${
                currentIndex === index ? "bg-blue-500 w-8" : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>

        <Spacing size="4" md="2" sm="1" />

        <div className="flex items-center">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            loop={true} // Activăm efectul de loop
            pagination={{ clickable: true }}
            onSwiper={(swiper) => setSwiperInstance(swiper)}
            onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
          >
            {serviciiMedicale.map((card, index) => (
              <SwiperSlide key={index} className="cursor-pointer">
                <Link href={`/servicii_medicale/${card.slug}`}>
                  <ServiceCard
                    title={card.title}
                    imageUrl={card.imageUrl}
                    hoverTitle="Servicii medicale"
                    onClick={() => handleServiciClick(card.slug)}
                  />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <Spacing size="4" md="2" sm="3.6" />

        <div className="col-span-12 flex items-center justify-center md:justify-start sm:justify-start gap-[6rem]">
          <IoIosArrowBack
            onClick={handlePrev}
            className="text-black w-[4rem] h-[4rem] flex justify-center items-center border-black rounded-lg text-6xl md:hidden sm:hidden transition-colors duration-300 hover:text-medium-blue cursor-pointer"
          />

          <Link href="/specialitati">
            <UnderlineHoverButton label="Vezi toate" />
          </Link>

          <IoIosArrowForward
            onClick={handleNext}
            className="text-black w-[4rem] h-[4rem] flex justify-center items-center rounded-lg text-6xl md:hidden sm:hidden transition-colors duration-300 hover:text-medium-blue cursor-pointer"
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default MedicalSpecialities;
