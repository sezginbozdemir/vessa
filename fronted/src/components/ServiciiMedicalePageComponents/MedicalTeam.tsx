"use client";
import React, { useEffect, useState } from "react";
import Typography from "../UI/Typography";
import Spacing from "../UI/Spacing";
import DoctorProfileCard from "../UI/DoctorProfileCard";
import { doctorsData } from "@/app/mock-data/doctorsData";
import { useRouter } from "next/navigation";
import Wrapper from "../UI/Wrapper";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper as SwiperType } from "swiper";

type MedicalTeamProps = {
  selectedSpecialization?: string;
};

const MedicalTeam: React.FC<MedicalTeamProps> = ({
  selectedSpecialization,
}) => {
  const normalizedSelectedSpecialization = selectedSpecialization
    ?.toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/gi, "");

  const filteredDoctors = doctorsData.filter((doctor) => {
    const normalizedDoctorSpecialization = doctor.specialization
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/gi, "");

    return normalizedDoctorSpecialization === normalizedSelectedSpecialization; // Comparăm slug-urile
  });

  const [slidesPerView, setSlidesPerView] = useState(1);

  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();

  const handleNext = () => {
    if (swiperInstance) swiperInstance.slideNext();
  };

  const handlePrev = () => {
    if (swiperInstance) swiperInstance.slidePrev();
  };

  const handleDoctorClick = (slug: string) => {
    router.push(`/profileMedic/${slug}`);
  };

  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth >= 1024) {
        setSlidesPerView(Math.min(filteredDoctors.length, 4)); // Maximum 4 pe desktop
      } else if (window.innerWidth >= 768) {
        setSlidesPerView(Math.min(filteredDoctors.length, 2)); // Maximum 2 pe tabletă
      } else {
        setSlidesPerView(1); // Un singur card pe mobil
      }
    };

    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);

    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, [filteredDoctors.length]);

  return (
    <Wrapper>
      <div className="relative">
        <div className="flex flex-col items-center">
          <Typography
            variant="h3"
            className="col-span-12 text-center text-dark-blue"
          >
            Medici
          </Typography>
        </div>

        <Spacing size="2.5" md="3" sm="3" />

        {/* Swiper Slider */}
        <div className="flex items-center">
          <Swiper
            spaceBetween={30}
            slidesPerView={slidesPerView}
            loop={filteredDoctors.length > 4 ? true : false}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => setSwiperInstance(swiper)}
            onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
          >
            {filteredDoctors.map((doctor, index) => (
              <SwiperSlide
                key={index}
                className="flex pt-20 justify-center max-w-[31.5rem] sm:max-w-[100%] cursor-pointer"
              >
                <DoctorProfileCard
                  name={doctor.name}
                  specialization={doctor.specialization}
                  imageUrl={doctor.imageUrl}
                  onClick={() => handleDoctorClick(doctor.slug)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <Spacing size="4" />

        {/* Navigare cu săgeți și bullet-uri */}
        {slidesPerView >= 4 && (
          <>
            {filteredDoctors.length > 1 && (
              <div className="relative flex items-center justify-center mt-16 mb-16">
                <IoIosArrowBack
                  onClick={handlePrev}
                  className="absolute left-0 flex items-center justify-center w-16 h-16 text-4xl text-black transition-colors duration-300 border-black rounded-lg cursor-pointer hover:text-medium-blue"
                />

                <div className="flex items-center space-x-2">
                  {filteredDoctors.map((_, index) => (
                    <div
                      key={index}
                      onClick={() => swiperInstance?.slideToLoop(index)}
                      className={`cursor-pointer w-2 h-2 rounded-full transition-all duration-300 ${
                        currentIndex === index
                          ? "bg-blue-500 w-8"
                          : "bg-gray-300"
                      }`}
                    ></div>
                  ))}
                </div>

                <IoIosArrowForward
                  onClick={handleNext}
                  className="absolute right-0 flex items-center justify-center w-16 h-16 text-4xl text-black transition-colors duration-300 rounded-lg cursor-pointer hover:text-medium-blue"
                />
              </div>
            )}
          </>
        )}

        <Spacing size="1.5" />
      </div>
    </Wrapper>
  );
};

export default MedicalTeam;
