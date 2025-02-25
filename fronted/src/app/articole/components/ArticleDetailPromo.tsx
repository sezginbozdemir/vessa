"use client";
import React from "react";
import Image from "next/image";
import WrapperLarge from "@/components/UI/WrapperLarge";
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
  image3?: string;
  image4?: string;
  image5?: string;
  image6?: string;
  isArticle: boolean;
  prezentare: string;
  titlu2: string;
  titlu3: string;
  titlu4: string;
  titlu5: string;
  titlu6?: string;
  titlu7?: string;
  titlu8?: string;
  titlu9?: string;
  titlu10?: string;
  text2: string;
  text3: string;
  text4: string;
  text4a?: string;
  text5?: string;
  text6?: string;
  text7?: string;
  text8?: string;
  text9?: string;
  text10?: string;
  textList: string[];
  date: string;
  specialization: string;
  slug: string;
};

const ArticleDetailPromo = ({ article }: { article: Article }) => {
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
        <Typography
          variant="h2"
          className="text-dark-blue text-center px-[3rem]"
        >
          {article.title}
        </Typography>
        <Spacing size="2.8" md="2" sm="2" />

        <div className="flex justify-center items-center text-[#01061299] gap-[4.6rem] sm:gap-[2rem] xs:gap-[2rem]">
          <div className="flex items-center">
            <FaCalendarAlt className="mr-2 w-[1.4rem] h-[1.4rem]" />
            <Typography variant="detailsBold" className="mr-4">
              {article.date}
            </Typography>
          </div>
          <Typography variant="detailsBold">
            Conform unui articol publicat pe {article.guestName}
          </Typography>
        </div>
        <Spacing size="8" md="6" sm="6" />

        {/* Content section */}
        <div>
          <Typography variant="paragraph" className="text-dark-opacity-75">
            <span dangerouslySetInnerHTML={{ __html: article.prezentare }} />
          </Typography>
          <Spacing size="4" md="3" sm="3" />
          {/* Unordered List */}
          <Typography
            variant="paragraph"
            className="text-dark-opacity-75 flex items-center justify-center gap-[15px] sm:flex-col xs:flex-col"
          >
            <ul className="ml-8 list-disc">
              {article.textList.map((text, index) => (
                <li key={index} dangerouslySetInnerHTML={{ __html: text }} />
              ))}
            </ul>
            <Image src={article.image1} alt="vessa" width={420} height={200} />
          </Typography>
        </div>

        <Spacing size="4" md="3" sm="3" />

        <div>
          <Typography variant="paragraph" className="text-dark-opacity-75">
            <span dangerouslySetInnerHTML={{ __html: article.text2 }} />
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
            <span dangerouslySetInnerHTML={{ __html: article.text3 }} />
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
            <span dangerouslySetInnerHTML={{ __html: article.text4a! }} />
          </Typography>
          <Spacing size="2.5" md="2.5" sm="2.5" />
          <Typography
            variant="paragraph"
            className="text-dark-opacity-75 flex items-center justify-center gap-[15px] sm:flex-col xs:flex-col"
          >
            <span dangerouslySetInnerHTML={{ __html: article.text4 }} />
            <Image
              className="rounded-[8px]"
              src={article.image2}
              alt="vessa"
              width={420}
              height={200}
            />
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
            <span dangerouslySetInnerHTML={{ __html: article.text5! }} />
          </Typography>
          <Spacing size="4" md="3" sm="3" />
        </div>
        <div className="flex justify-center items-center gap-[5rem] sm:flex-col xs:flex-col">
          <Image
            src={article.image3!}
            alt="vessa"
            width={400}
            height={500}
            className="rounded-[10px]"
          />
          <Image
            className="rounded-[10px]"
            src={article.image4!}
            alt="vessa"
            width={400}
            height={500}
          />
        </div>
        <Spacing size="4" md="3" sm="3" />

        <div>
          {/* Title 6 */}
          <Typography variant="h3" className="text-black">
            {article.titlu6}
          </Typography>
          <Spacing size="2.5" md="2.5" sm="2.5" />
          {/* Text 6 */}
          <Typography variant="paragraph" className="text-dark-opacity-75">
            <span dangerouslySetInnerHTML={{ __html: article.text6! }} />
          </Typography>
          <Spacing size="4" md="3" sm="3" />
        </div>
        <div>
          {/* Title 7 */}
          <Typography variant="h3" className="text-black">
            {article.titlu7}
          </Typography>
          <Spacing size="2.5" md="2.5" sm="2.5" />
          {/* Text 7 */}
          <Typography variant="paragraph" className="text-dark-opacity-75">
            <span dangerouslySetInnerHTML={{ __html: article.text7! }} />
          </Typography>
          <Spacing size="4" md="3" sm="3" />
        </div>
        <div>
          {/* Title 8 */}
          <Typography variant="h3" className="text-black">
            {article.titlu8}
          </Typography>
          <Spacing size="2.5" md="2.5" sm="2.5" />
          {/* Text 8 */}
          <Typography variant="paragraph" className="text-dark-opacity-75">
            <span dangerouslySetInnerHTML={{ __html: article.text8! }} />
          </Typography>
          <Spacing size="4" md="3" sm="3" />
        </div>
        <div>
          {/* Title 9 */}
          <Typography variant="h3" className="text-black">
            {article.titlu9}
          </Typography>
          <Spacing size="2.5" md="2.5" sm="2.5" />
          {/* Text 9 */}
          <Typography variant="paragraph" className="text-dark-opacity-75">
            <span dangerouslySetInnerHTML={{ __html: article.text9! }} />
          </Typography>
          <Spacing size="4" md="3" sm="3" />
        </div>
        <div>
          {/* Title 10 */}
          <Typography variant="h3" className="text-black">
            {article.titlu10}
          </Typography>
          <Spacing size="2.5" md="2.5" sm="2.5" />
          {/* Text 10 */}
          <Typography variant="paragraph" className="text-dark-opacity-75">
            <span dangerouslySetInnerHTML={{ __html: article.text10! }} />
          </Typography>
          <Spacing size="4" md="3" sm="3" />
        </div>

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

              <div className="items-end justify-end col-span-6 text-center md:col-span-4 sm:col-span-2 md:text-left sm:text-left ">
                <div className="relative w-full h-[35rem] md:h-[27rem] sm:h-[37rem] z-10">
                  <Image
                    src={article.image5!}
                    alt="Left image"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              </div>

              {/* Imaginea dreapta pentru desktop */}
              <div className="z-10 flex justify-center col-span-6 mt-4 md:col-span-4 sm:col-span-2 md:mt-0">
                <div className="relative w-[80%] sm:w-full  h-[35rem] md:h-[27rem] sm:h-[47rem] xl:h-[35rem]">
                  <Image
                    src={article.image6!}
                    alt="Right image"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              </div>
              {/* Forma decorativă albastră */}
              <div className="absolute w-[20rem] h-[20rem] md:w-[11rem] md:h-[11rem] md:top-[-10%] md:right-[-1%] sm:right-[-4%] sm:top-[30%] sm:w-[10rem] sm:h-[10rem] bg-light-blue rounded-2xl lg:right-[2%] lg:top-[-10%] xl:right-[2%] xl:top-[-10%] z-0"></div>
            </div>
          </section>
        </WrapperLarge>
      </div>
    </>
  );
};

export default ArticleDetailPromo;
