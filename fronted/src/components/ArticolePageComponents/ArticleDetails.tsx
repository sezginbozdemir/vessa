"use client";
import React from "react";
import Image from "next/image";
import WrapperLarge from "../UI/WrapperLarge";
import Spacing from "@/components/UI/Spacing";
import Typography from "@/components/UI/Typography";
import { FaCalendarAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// Define the type for the article data
type Article = {
  imageUrl: string;
  title: string;
  description: string;
  guestName: string;
  image1: string;
  image2: string;
  isArticle: boolean;
  prezentare: string;
  titlu2: string;
  titlu3: string;
  titlu4: string;
  titlu5: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
  textList: string[];
  date: string;
  specialization: string;
  slug: string;
};

const ArticleDetail = ({ article }: { article: Article }) => {
  const router = useRouter();
  return (
    <>
      <div className="w-full py-10 px-[27rem] sm:px-[2rem] md:px-[6.4rem]">
        <div className="flex items-center justify-between">
          {/* Back Button */}
          <div
            onClick={() => router.back()}
            className="flex items-center gap-[0.6rem] text-medium-blue hover:text-dark-blue text-buttonText"
          >
            <IoIosArrowBack className="w-[2rem] h-[2rem]" />
            <button className="flex items-center md:hidden sm:hidden">
              {" "}
              Înapoi
            </button>
          </div>

          {/* All Articles Button */}
          <Link href="/articole">
            <div className="flex items-center gap-[0.6rem] text-medium-blue hover:text-dark-blue">
              <Typography
                variant="buttonText"
                className="flex items-center text-medium-blue hover:text-dark-blue"
              >
                Vezi toate articolele
              </Typography>
              <IoIosArrowForward className="w-[2rem] h-[2rem]" />
            </div>
          </Link>
        </div>

        <Spacing size="15" md="8" sm="8" />

        {/* Title */}
        <Typography variant="h2" className="text-dark-blue">
          {article.title}
        </Typography>
        <Spacing size="2.8" md="2" sm="2" />

        <div className="flex  items-center text-dark-opacity-75 gap-[4.6rem]">
          <div className="flex items-center">
            <FaCalendarAlt className="mr-2 w-[1.4rem] h-[1.4rem]" />
            <Typography variant="detailsBold" className="mr-4">
              {article.date}
            </Typography>
          </div>
          <Typography variant="detailsBold">{article.guestName}</Typography>
        </div>
        <Spacing size="8" md="6" sm="6" />

        {/* Content section */}
        <div>
          {/* Subtitle */}
          <Typography variant="h3" className="text-black">
            Prezentare
          </Typography>
          <Spacing size="2.5" md="2.5" sm="2.5" />
          {/* Description */}
          <Typography variant="paragraph" className="text-dark-opacity-75">
            {article.prezentare}
          </Typography>
          <Spacing size="4" md="3" sm="3" />
        </div>

        <div>
          {/* Titlu 2 */}
          <Typography variant="h3" className="text-black">
            {article.titlu2}
          </Typography>
          <Spacing size="2.5" md="2.5" sm="2.5" />
          {/* Text 2 */}
          <Typography variant="paragraph" className="text-dark-opacity-75">
            {article.text2}
          </Typography>
          <Spacing size="4" md="3" sm="3" />
        </div>

        <div>
          {/* Titlu 3 */}
          <Typography variant="h3" className="text-black">
            {article.titlu3}
          </Typography>
          <Spacing size="2.5" md="2.5" sm="2.5" />
          {/* Text 3 */}
          <Typography variant="paragraph" className="text-dark-opacity-75">
            {article.text3}
          </Typography>
          <Spacing size="4" md="3" sm="3" />
        </div>

        <div>
          {/* Titlu 4 */}
          <Typography variant="h3" className="text-black">
            {article.titlu4}
          </Typography>
          <Spacing size="2.5" md="2.5" sm="2.5" />
          {/* Text 4 */}
          <Typography variant="paragraph" className="text-dark-opacity-75">
            {article.text4}
          </Typography>
          <Spacing size="4" md="3" sm="3" />
        </div>

        <div>
          {/* Title 5 */}
          <Typography variant="h3" className="text-black">
            {article.titlu5}
          </Typography>
          <Spacing size="2.5" md="2.5" sm="2.5" />
          {/* Text 5 */}
          <Typography variant="paragraph" className="text-dark-opacity-75">
            {article.text5}
          </Typography>
          <Spacing size="4" md="3" sm="3" />
        </div>

        {/* Unordered List */}
        <Typography variant="paragraph" className="text-dark-opacity-75">
          <ul className="ml-8 list-disc">
            {article.textList.map((text, index) => (
              <li key={index}>{text}</li>
            ))}
          </ul>
        </Typography>

        {/* Info and Images */}
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 lg:top-[15%] md:top-[30%] xl:top-[-20%] z-0 w-full ">
          <Image
            src="/images/collaborationLine.png"
            alt="Newsletter Line"
            width={1100}
            height={600}
            className="absolute lg:w-[100%] xl:w-[100%] md:w-[100%] sm:hidden lg:h-auto xl:h-auto z-0"
            priority
          />
        </div>

        <WrapperLarge>
          <section className="relative w-full">
            <Spacing size="8" md="1.5" sm="2" />
            {/* Structura desktop și tablet */}
            <div className="relative z-10 grid items-end grid-cols-12 gap-8 md:grid-cols-8 sm:grid-cols-2">
              {/* Secțiunea de text și imaginea portocalie pe desktop */}
              <div className="col-span-9 md:col-span-8 sm:col-span-2 md:text-left sm:text-left sm:mb-[4.2rem]">
                <Typography
                  variant="paragraph"
                  className="text-black opacity-75"
                >
                  La Vessa Hospital, sănătatea ta este prioritatea noastră.
                  Credem că fiecare pacient merită îngrijire personalizată și un
                  plan de tratament adaptat nevoilor sale. Vessa Hospital este
                  un loc în care fiecare detaliu contează, iar echipa noastră
                  dedicată se asigură că îți oferim nu doar tratamente
                  eficiente, ci și sprijin constant pe parcursul întregii tale
                  recuperări.
                </Typography>
              </div>

              <div className="items-end justify-end col-span-6 text-center md:col-span-4 sm:col-span-2 md:text-left sm:text-left ">
                <div className="relative w-full h-[30rem] md:h-[23rem] sm:h-[37rem] z-10">
                  <Image
                    src={article.image1}
                    alt="Left image"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              </div>

              {/* Imaginea dreapta pentru desktop */}
              <div className="z-10 flex justify-center col-span-6 mt-4 md:col-span-4 sm:col-span-2 md:mt-0">
                <div className="relative w-[80%]  h-[35rem] md:h-[27rem] sm:hidden xl:h-[35rem]">
                  <Image
                    src={article.image2}
                    alt="Right image"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              </div>
              {/* Forma decorativă albastră */}
              <div className="absolute w-[20rem] h-[20rem] md:w-[11rem] md:h-[11rem] md:top-[20%] md:right-[-1%] sm:right-[-4%] sm:top-[30%] sm:w-[10rem] sm:h-[10rem] bg-light-blue rounded-2xl lg:right-[2%] lg:top-[18%] xl:right-[2%] xl:top-[18%] z-0"></div>
            </div>
          </section>
        </WrapperLarge>
      </div>
    </>
  );
};

export default ArticleDetail;
