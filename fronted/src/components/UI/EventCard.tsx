import React from "react";
import Image from "next/image";
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import Typography from "@/components/UI/Typography";
import HoverText from "@/components/UI/HoverText";

type EventCardProps = {
  imageUrl: string;
  title: string;
  location?: string;
  guestName?: string;
  description: string;
  isArticle?: boolean;
  date?: string;
  slug: string;
};

const EventCard = ({
  imageUrl,
  title,
  location,
  guestName,
  description,
  isArticle,
  date,
  slug,
}: EventCardProps) => {
  return (
    <div
      className={`${
        isArticle
          ? "min-h-[55rem] md:min-h-[50rem]  sm:min-h-[40rem]"
          : "h-[52rem]"
      } bg-light-blue rounded-[1.4rem] shadow-md overflow-hidden z-10`}
    >
      <div className="relative w-full h-[28.9rem] rounded-2xl">
        <Image src={imageUrl} alt={title} layout="fill" objectFit="cover" />
      </div>

      <div
        className={` ${
          isArticle
            ? "px-[2.5rem] py-[1.5rem]  md:px-[1.5rem] md:py-[1rem]"
            : "px-[2.5rem] py-[1.5rem]  md:px-[1.5rem] md:py-[1rem]"
        } rounded-[2rem]`}
      >
        {isArticle && (
          <div className="flex justify-between pb-[1.2rem]">
            <div className="flex items-center">
              <FaCalendarAlt className="mr-[0.5rem] text-dark-blue" />
              <Typography variant="details" className="text-black opacity-80">
                {date}
              </Typography>
            </div>
            <Typography variant="details" className="text-black opacity-80">
              {guestName}
            </Typography>
          </div>
        )}

        <Typography
          variant="h3"
          className={`${
            isArticle ? "pb-[1.2rem]" : "pb-[1.6rem]"
          } min-h-[6.8rem] max-h-[6.8rem] md:min-h-[5.3rem] sm:min-h-[3rem] text-ellipsis overflow-hidden`}
        >
          {title}
        </Typography>

        {!isArticle && (
          <div className="flex justify-between pb-[1rem]">
            <div className="flex items-center">
              <FaMapMarkerAlt className="mr-[0.5rem] text-dark-blue" />
              <Typography variant="details" className="text-black opacity-80">
                {location}
              </Typography>
            </div>
            <Typography variant="details" className="text-black opacity-80">
              {guestName}
            </Typography>
          </div>
        )}

        <Typography
          variant="details"
          className="text-black opacity-75 text-ellipsis overflow-hidden min-h-[11rem] "
        >
          {description}
        </Typography>

        {isArticle && (
          <div className="pt-[2rem]">
            <HoverText label="Citește mai mult" slug={slug} />
          </div>
        )}
      </div>
    </div>
  );
};

export default EventCard;
