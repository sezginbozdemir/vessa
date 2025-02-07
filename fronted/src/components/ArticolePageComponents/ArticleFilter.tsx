"use client";
import React, { useState } from "react";
import { BsSearchHeart } from "react-icons/bs";
import Spacing from "../UI/Spacing";
import { articleCards } from "@/app/mock-data/articleCards";
import EventCard from "../UI/EventCard";
import WrapperLarge from "../UI/WrapperLarge";
import Wrapper from "../UI/Wrapper";
import { IoFilter } from "react-icons/io5";

const ArticleFilter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecialization, setSelectedSpecialization] = useState("");

  // Get a list of unique specializations from articleCards
  const specializations = [
    ...new Set(articleCards.map((article) => article.specialization)),
  ];

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setSelectedSpecialization("");
  };

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSpecializationSelect = (specialization: string) => {
    if (selectedSpecialization === specialization) {
      setSelectedSpecialization("");
    } else {
      setSelectedSpecialization(specialization);
    }
    setSearchTerm("");
    setIsOpen(false);
  };

  // Filter articles based on specialization, search term, and isArticle flag
  const filteredArticles = articleCards.filter((article) => {
    if (!article.isArticle) {
      return false;
    }

    if (selectedSpecialization) {
      return article.specialization === selectedSpecialization;
    } else if (searchTerm) {
      return (
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else {
      return true;
    }
  });

  return (
    <div className="py-8">
      {/* Search input */}
      <WrapperLarge>
        <div className="flex justify-between ">
          <div className="flex items-center bg-white border placeholder:text-details border-gray-300 rounded-2xl w-[25%] md:w-[45%] sm:w-[65%] px-4">
            <input
              type="text"
              placeholder="Caută articol"
              value={searchTerm}
              onChange={handleSearch}
              className="w-full px-2 py-2 focus:outline-none"
            />
            <span className="ml-2 text-medium-blue">
              <BsSearchHeart className="w-[1.8rem] h-[1.8rem]" />
            </span>
          </div>

          <div className="relative">
            <div className="flex items-center " onClick={handleDropdownToggle}>
              <button className="flex items-center px-6 py-2 font-bold text-black text-buttonText focus:outline-none md:hidden sm:hidden">
                Specialități medicale
              </button>
              <IoFilter className="ml-2 w-[1.8rem] h-[1.8rem] text-black md:text-medium-blue" />
            </div>

            {/* Specializations dropdown */}
            {isOpen && (
              <div className="absolute min-w-[30rem] right-0 z-30 w-full md:w-[300px] sm:w-[250px] mt-2 border border-gray-300 shadow-lg rounded-3xl bg-light-blue">
                <ul className=" whitespace-nowrap py-[1.6rem] pl-[2.4rem] pr-[3.6rem] sm:pl-[1.6rem] sm:pr-[2.4rem] ">
                  {specializations.map((specialization, index) => (
                    <li
                      key={index}
                      onClick={() => handleSpecializationSelect(specialization)}
                      className={`text-detailsBold px-4 py-2 cursor-pointer rounded-2xl ${
                        selectedSpecialization === specialization
                          ? "text-dark-blue"
                          : "text-dark-opacity-bf opacity-80"
                      }`}
                    >
                      {specialization}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </WrapperLarge>
      <Spacing size="8" md="6" sm="6" />

      {/* Cards layout */}
      <Wrapper>
        <div className="grid grid-cols-12 md:grid-cols-8 sm:grid-cols-2 gap-x-[3.2rem] gap-y-[6rem] mt-8 ">
          {filteredArticles.map((article, index) => (
            <div key={index} className="col-span-4 md:col-span-4 sm:col-span-2">
              <EventCard
                slug={article.slug}
                imageUrl={article.imageUrl}
                title={article.title}
                description={article.description}
                isArticle={article.isArticle}
                guestName={article.guestName}
                date={article.date}
              />
            </div>
          ))}
        </div>
      </Wrapper>
    </div>
  );
};

export default ArticleFilter;
