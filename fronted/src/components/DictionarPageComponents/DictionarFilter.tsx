"use client";
import React, { useState } from "react";
import Spacing from "../UI/Spacing";
import { afectiuniData } from "@/app/mock-data/afectiuniData";
import { useRouter } from "next/navigation";
import Wrapper from "../UI/Wrapper";
import WrapperLarge from "../UI/WrapperLarge";
import { BsSearchHeart } from "react-icons/bs";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const DictionarFilter = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLetter, setSelectedLetter] = useState<string | null>();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 30; // Numărul de elemente pe pagină
  const router = useRouter();

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setSelectedLetter(null);
    setCurrentPage(1); // Resetăm la pagina 1 când facem o căutare
  };

  const handleLetterSelect = (letter: string) => {
    if (selectedLetter === letter) {
      setSelectedLetter(null);
    } else {
      setSelectedLetter(letter);
      setSearchTerm("");
    }
    setCurrentPage(1); // Resetăm la pagina 1 când selectăm o literă
  };

  // Filtrare și sortare
  const filteredAfectiuni = afectiuniData
    .filter((afectiune) => {
      if (selectedLetter) {
        return afectiune.name.startsWith(selectedLetter);
      } else if (searchTerm) {
        return afectiune.name.toLowerCase().includes(searchTerm.toLowerCase());
      } else {
        return true;
      }
    })
    .sort((a, b) => a.name.localeCompare(b.name));

  // Calculează elementele pentru pagina curentă
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedAfectiuni = filteredAfectiuni.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // Navigare între pagini
  const totalPages = Math.ceil(filteredAfectiuni.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleAfectiuneClick = (slug: string) => {
    router.push(`/detalii_afectiune/${slug}`);
  };

  return (
    <div className="py-8">
      <WrapperLarge>
        <div className="flex items-center bg-white border border-gray-300 rounded-2xl overflow-hidden w-[30%] md:w-[50%] sm:w-[75%]">
          <input
            type="text"
            placeholder="Caută afecțiunea medicală"
            value={searchTerm}
            onChange={handleSearch}
            className="w-full px-4 py-2 focus:outline-none placeholder:text-details text-details"
          />
          <span className="flex items-center justify-center mr-4 text-medium-blue">
            <BsSearchHeart className="w-[1.8rem] h-[1.8rem]" />
          </span>
        </div>
      </WrapperLarge>

      <Spacing size="5" md="5" sm="5" />

      <div className="flex flex-wrap justify-center gap-[1rem] mx-[3rem] md:mx-[6rem] lg:mx-[9rem]">
        {alphabet.map((letter) => (
          <button
            key={letter}
            onClick={() => handleLetterSelect(letter)}
            className={`text-menu font-bold w-[3rem] h-[3rem] sm:w-[3.5rem] sm:h-[3.5rem] md:w-[4rem] md:h-[4rem] lg:w-[4.5rem] lg:h-[4.5rem] transition-all duration-300 ${
              selectedLetter === letter ? "bg-medium-blue" : "text-black"
            }`}
          >
            {letter}
          </button>
        ))}
      </div>

      <Spacing size="8" md="8" sm="6" />

      <Wrapper>
        <div className="grid grid-cols-12 md:grid-cols-8 sm:grid-cols-2 gap-x-[4rem] gap-y-[1.8rem]">
          {paginatedAfectiuni.map((afectiune, index) => (
            <React.Fragment key={index}>
              <div className="flex justify-between col-span-6 md:col-span-8 sm:col-span-2">
                <div className="text-black text-menu">{afectiune.name}</div>
                <div
                  className="cursor-pointer text-buttonText whitespace-nowrap text-medium-blue sm:whitespace-nowrap"
                  onClick={() => handleAfectiuneClick(afectiune.slug)}
                >
                  Vezi detalii
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </Wrapper>

      <Spacing size="8" md="4" sm="4" />

      {/* Paginare */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center mt-8 space-x-2 overflow-x-auto">
          {/* Butonul pentru pagina anterioară */}
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-3 py-1 rounded-full ${
              currentPage === 1 ? "text-gray-400" : "text-black"
            }`}
          >
            <IoIosArrowBack className="transition-colors duration-300 cursor-pointer hover:text-medium-blue" />
          </button>

          {/* Paginile */}
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`px-3 py-1 md:px-4 md:py-2 rounded-full flex-shrink-0 ${
                currentPage === index + 1
                  ? "bg-medium-blue text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              {index + 1}
            </button>
          ))}
          {/* Butonul pentru pagina următoare */}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-3 py-1 rounded-full ${
              currentPage === totalPages ? "text-gray-400" : "text-black"
            }`}
          >
            <IoIosArrowForward className="transition-colors duration-300 cursor-pointer hover:text-medium-blue" />
          </button>
        </div>
      )}
    </div>
  );
};

export default DictionarFilter;
