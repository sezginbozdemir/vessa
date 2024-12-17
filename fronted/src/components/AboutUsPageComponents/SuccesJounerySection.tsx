"use client";
import { useState } from "react";
import Typography from "../UI/Typography";
import Spacing from "../UI/Spacing";
import Wrapper from "../UI/Wrapper";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { yearsData } from "@/app/mock-data/succesJourney";

const SuccessJourneySection = () => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    swiperInstance?.slideNext();
  };

  const handlePrev = () => {
    swiperInstance?.slidePrev();
  };

  return (
    <section className="relative w-full bg-light-blue py-[10rem] md:py-[5.5rem] sm:py-[2.7rem] sm:px-[4.5rem]">
      <Typography variant="h2" className="text-center text-black sm:text-left">
        Drumul nostru către <span className="text-dark-blue">succes</span>
      </Typography>
      <Wrapper>
        <Spacing size="6" md="6" sm="4" />

        {/* Slider */}
        <div className="relative">
          <div className="absolute lg:top-[9%] xl:top-[9%] left-[13%]  xl:left-[13%]  w-[85%] h-[0.4rem] md:top-[12%] md:left-[5%] md:w-full sm:w-full sm:left-0 sm:top-[13%] bg-dark-blue"></div>

          <div className="flex items-center justify-center">
            {/* Slider with Swiper */}
            <Swiper
              spaceBetween={30}
              slidesPerView="auto"
              loop={true}
              onSwiper={(swiper) => setSwiperInstance(swiper)}
              onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 2 },
              }}
              pagination={{ clickable: true }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              className="w-full max-w-[80%] md:max-w-[100%] lg:overflow-hidden xl:overflow-hidden sm:max-w-[100%]"
            >
              {yearsData.map((item, index) => (
                <SwiperSlide
                  key={index}
                  className="px-[3rem] sm:px-0 sm:block relative"
                >
                  <div className="flex flex-col items-start">
                    <Typography
                      variant="detailsBold"
                      className="mb-2 text-dark-blue"
                    >
                      {item.year}
                    </Typography>
                    <div className="w-[1.5rem] h-[1.5rem] bg-dark-blue rounded-full"></div>
                  </div>

                  {index < yearsData.length - 1 && (
                    <div className="absolute top-[50%] left-[calc(100% - 2rem)] w-[calc(100% + 4rem)] h-[0.2rem] bg-dark-blue z-[-1]"></div>
                  )}

                  <Spacing size="2" md="2" sm="1" />
                  <Typography
                    variant="detailsBold"
                    className="text-black xs:mt-3 sm:mt-3"
                  >
                    {item.title}
                  </Typography>
                  <Spacing size="0.8" md="0.8" sm="0.8" />
                  <Typography
                    variant="paragraph"
                    className="w-full text-black opacity-75 sm:break-words sm:whitespace-normal sm:max-w-full"
                  >
                    {item.description}
                  </Typography>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <Spacing md="6" sm="3" />

          {/* Custom Navigation */}
          <div className="flex items-center justify-between md:justify-center sm:justify-center">
            <IoIosArrowBack
              onClick={handlePrev}
              className=" text-black w-[4rem] h-[4rem] flex justify-center items-center border-black rounded-lg text-6xl transition-colors duration-300 cursor-pointer hover:text-medium-blue md:hidden sm:hidden"
            >
              &lt;
            </IoIosArrowBack>

            {/* Bullets*/}

            <div className="flex justify-center space-x-[0.8rem]">
              {yearsData.map((_, index) => (
                <div
                  key={index}
                  className={`h-3 rounded-full cursor-pointer transition-all duration-300 ${
                    currentIndex === index
                      ? "bg-medium-blue w-8"
                      : "bg-gray-300 w-3"
                  }`}
                  onClick={() => swiperInstance?.slideTo(index)}
                ></div>
              ))}
            </div>

            <IoIosArrowForward
              onClick={handleNext}
              className=" text-black w-[4rem] h-[4rem] flex justify-center items-center rounded-lg text-6xl transition-colors duration-300 cursor-pointer hover:text-medium-blue md:hidden sm:hidden"
            >
              &gt;
            </IoIosArrowForward>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default SuccessJourneySection;
