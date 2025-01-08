"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Typography from "./UI/Typography";
import Spacing from "./UI/Spacing";
import DoctorProfileCard from "./UI/DoctorProfileCard";
import ButtonWithActive from "./UI/ButtonWithActive";
import { doctorsData } from "@/app/mock-data/doctorsData";
import { useRouter } from "next/navigation";
import Wrapper from "./UI/Wrapper";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper as SwiperType } from "swiper";

const DoctorsCarouselSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [selectedSpecialization, setSelectedSpecialization] = useState<
    string | null
  >(null);
  const [slidesPerView, setSlidesPerView] = useState(1);
  const router = useRouter();

  const filteredCards = selectedSpecialization
    ? doctorsData.filter(
        (card) => card.specialization === selectedSpecialization
      )
    : doctorsData;

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

  const handleFilter = (specialization: string) => {
    setSelectedSpecialization(
      selectedSpecialization === specialization ? null : specialization
    );
    setCurrentIndex(0);
  };

  const handleDoctorClick = (slug: string) => {
    router.push(`/profileMedic/${slug}`);
  };

  // Determinăm câți carduri ar trebui să fie vizibile în funcție de ecran și numărul total
  // Setăm `slidesPerView` pe baza dimensiunii ecranului după montare
  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth >= 1024) {
        setSlidesPerView(Math.min(filteredCards.length, 4)); // Maximum 4 pe desktop
      } else if (window.innerWidth >= 768) {
        setSlidesPerView(Math.min(filteredCards.length, 2)); // Maximum 2 pe tabletă
      } else {
        setSlidesPerView(1); // Un singur card pe mobil
      }
    };

    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);

    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, [filteredCards.length]);

  return (
    <Wrapper>
      <div className="relative">
        <div className="flex flex-col items-center">
          <div className="w-max relative flex">
            <div className="sm:pl-[1.3rem]">
              <Typography
                variant="h2"
                className="col-span-12 text-center text-black"
              >
                Medicii noștri
              </Typography>
              <div className="w-[10rem] h-[0.3rem] bg-dark-blue mt-[1rem]" />
            </div>
          </div>
        </div>

        <Spacing size="2.5" md="1.5" sm="2" />

        <div className="flex justify-center max-w-[40%] md:max-w-[70%] sm:max-w-[90%] mx-auto">
          <Typography
            variant="paragraph"
            className="text-center text-black opacity-75"
          >
            Fiecare specialist lucrează cu empatie și atenție, având ca scop
            principal sănătatea și bunăstarea ta. Descoperă medicii care sunt
            alături de tine la fiecare pas al călătoriei tale medicale.
          </Typography>
        </div>

        <Spacing size="1.8" />
        <Spacing size="4" md="4" sm="4" />

        <div className="flex items-center mt-5">
          <Swiper
            style={{ paddingTop: "5rem" }}
            spaceBetween={20}
            slidesPerView={slidesPerView}
            loop={true}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => setSwiperInstance(swiper)}
            onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
            breakpoints={{
              640: {
                slidesPerView: Math.min(1, filteredCards.length),
                spaceBetween: 10,
              },
              768: {
                slidesPerView: Math.min(2, filteredCards.length),
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: Math.min(4, filteredCards.length),
                spaceBetween: 20,
              },
            }}
          >
            <div
              className={`flex ${
                filteredCards.length < slidesPerView ? "justify-center" : ""
              }`}
            >
              {filteredCards.map((card, index) => (
                <SwiperSlide
                  key={index}
                  className="flex justify-center max-w-[31.5rem] sm:max-w-[100%] cursor-pointer"
                >
                  <DoctorProfileCard
                    name={card.name}
                    specialization={card.specialization}
                    imageUrl={card.imageUrl}
                    onClick={() => handleDoctorClick(card.slug)}
                  />
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>

        <Spacing size="4" md="1" />

        {/* Navigare cu săgeți și bullet-uri */}
        {slidesPerView >= 1 && (
          <div className="relative flex items-center justify-center col-span-12 md:justify-center mb-5 mt-5">
            <IoIosArrowBack
              onClick={handlePrev}
              className="absolute left-0 text-black w-[4rem] h-[4rem] flex justify-center items-center border-black rounded-lg text-6xl transition-colors duration-300 cursor-pointer hover:text-medium-blue md:hidden sm:hidden"
            />

            <div className="flex items-center space-x-[0.8rem]">
              {filteredCards.map((_, index) => (
                <div
                  key={index}
                  onClick={() => {
                    if (swiperInstance) {
                      swiperInstance.slideToLoop(index);
                      setCurrentIndex(index);
                    }
                  }}
                  className={`cursor-pointer w-2 h-2 rounded-full transition-all duration-300 ${
                    currentIndex === index ? "bg-blue-500 w-8" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>

            <IoIosArrowForward
              onClick={handleNext}
              className="absolute right-0 text-black w-[4rem] h-[4rem] flex justify-center items-center rounded-lg cursor-pointer text-6xl transition-colors duration-300 hover:text-medium-blue md:hidden sm:hidden"
            />
          </div>
        )}

        <Spacing size="6" />

        {/* Butoane de filtrare */}
        <div className="grid justify-center grid-cols-4 gap-[3.2rem] gap-y-[0.8rem] md:hidden sm:hidden">
          {[...new Set(doctorsData.map((card) => card.specialization))].map(
            (specialization, index) => (
              <ButtonWithActive
                key={`filter_${index}`}
                onClick={() => handleFilter(specialization)}
                isActive={selectedSpecialization === specialization}
                label={specialization}
              />
            )
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default DoctorsCarouselSection;
