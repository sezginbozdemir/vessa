"use client";
import React, { useState } from "react";
import EventCard from "./UI/EventCard";
import Typography from "./UI/Typography";
import Spacing from "./UI/Spacing";
import { articleCards } from "@/app/mock-data/articleCards";
import Link from "next/link";
import UnderlineHoverButton from "./UI/UnderlineHoverButton";
import Wrapper from "./UI/Wrapper";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";

const ArticleSection: React.FC = () => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalSlides = Math.ceil(articleCards.length);

  const handleNext = () => {
    if (swiperInstance) {
      const newIndex = currentIndex + 2;
      if (newIndex >= totalSlides) {
        // Dacă ajungem la final, revenim la început
        swiperInstance.slideTo(0);
        setCurrentIndex(0);
      } else {
        swiperInstance.slideTo(newIndex);
        setCurrentIndex(newIndex);
      }
    }
  };

  const handlePrev = () => {
    if (swiperInstance) {
      const newIndex = currentIndex - 2;
      if (newIndex < 0) {
        // Dacă ajungem la început, revenim la sfârșit
        const lastIndex = articleCards.length - articleCards.length;
        swiperInstance.slideTo(lastIndex);
        setCurrentIndex(lastIndex);
      } else {
        swiperInstance.slideTo(newIndex);
        setCurrentIndex(newIndex);
      }
    }
  };

  return (
    <Wrapper>
      <div className="relative">
        <div className="flex flex-col items-center">
          <div className="w-max relative flex">
            <div className="sm:pl-[1.3rem]">
              <Typography variant="h2" className="text-center text-black">
                Articole recente
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
            Rămâi la curent cu cele mai noi informații și sfaturi din domeniul
            sănătății. Citește articolele noastre pentru a înțelege mai bine cum
            să îți menții sănătatea și să faci alegeri informate.
          </Typography>
        </div>

        <Spacing size="1.5" md="3" sm="3" />

        {/* Custom Bullets */}
        <div className="col-span-12 flex justify-end items-center space-x-[0.8rem]">
          {Array.from({ length: articleCards.length }).map((_, index) => (
            <div
              key={index}
              onClick={() => {
                if (swiperInstance) swiperInstance.slideTo(index);
                setCurrentIndex(index);
              }}
              className={`cursor-pointer w-2 h-2 rounded-full transition-all duration-300 ${
                Math.floor(currentIndex) === index
                  ? "bg-blue-500 w-8"
                  : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>

        <Spacing size="1.5" md="3" sm="3" />

        {/* Slider with Swiper */}
        <div className="z-10 flex items-center">
          <Swiper
            spaceBetween={30}
            slidesPerView="auto" // Allows dynamic slide widths
            loop={true}
            onSwiper={(swiper) => setSwiperInstance(swiper)}
            onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {articleCards.map((article, index) => (
              <SwiperSlide key={index}>
                <div className="sm:min-w-[100%] md:min-w-[50%] lg:min-w-[33.33%] xl:min-w-[33.33%] p-4 z-20 cursor-pointer">
                  <EventCard
                    slug={article.slug}
                    imageUrl={article.imageUrl}
                    title={article.title}
                    description={article.description}
                    isArticle={article.isArticle}
                    guestName={article.guestName}
                    // location={article?.location ? article.location : ""}
                    date={article.date}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <Spacing size="4" />

        {/* Navigation with Custom Arrows */}
        <div className="flex items-center justify-between col-span-12 md:hidden sm:hidden">
          <IoIosArrowBack
            onClick={handlePrev}
            className="text-black w-[4rem] h-[4rem] flex justify-center items-center border-black rounded-lg text-6xl transition-colors duration-300 hover:text-medium-blue cursor-pointer"
          />

          <div>
            <Link href="/articole">
              <UnderlineHoverButton label="Vezi toate" />
            </Link>
          </div>

          <IoIosArrowForward
            onClick={handleNext}
            className="text-black w-[4rem] h-[4rem] flex justify-center items-center rounded-lg cursor-pointer text-6xl transition-colors duration-300 hover:text-medium-blue"
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default ArticleSection;
