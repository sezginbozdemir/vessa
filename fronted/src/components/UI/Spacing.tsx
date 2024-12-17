import React from "react";
import clsx from "clsx";

type SpacingValue =
  | "0"
  | "0.8"
  | "1"
  | "1.2"
  | "1.5"
  | "1.6"
  | "1.8"
  | "2"
  | "2.2"
  | "2.4"
  | "2.5"
  | "2.8"
  | "3"
  | "3.6"
  | "3.7"
  | "4"
  | "4.2"
  | "4.4"
  | "4.8"
  | "5"
  | "6"
  | "6.4"
  | "6.8"
  | "8"
  | "10"
  | "12"
  | "12.8"
  | "15"
  | "24";

type SpacingProps = {
  size?: SpacingValue; // Default size for desktop
  md?: SpacingValue; // Optional size for tablet
  sm?: SpacingValue; // Optional size for mobile
};

const Spacing: React.FC<SpacingProps> = ({ size, md, sm }) => {
  return (
    <div
      className={clsx(
        sm === "0" && "h-[0rem]",
        sm === "0.8" && "h-[0.8rem]",
        sm === "1" && "h-[1rem]",
        sm === "1.2" && "h-[1.2rem]",
        sm === "1.5" && "h-[1.5rem]",
        sm === "1.6" && "h-[1.6rem]",
        sm === "1.8" && "h-[1.8rem]",
        sm === "2" && "h-[2rem]",
        sm === "2.2" && "h-[2.2rem]",
        sm === "2.4" && "h-[2.4rem]",
        sm === "2.5" && "h-[2.5rem]",
        sm === "2.8" && "h-[2.8rem]",
        sm === "3" && "h-[3rem]",
        sm === "3.6" && "h-[3.6rem]",
        sm === "3.7" && "h-[3.7rem]",
        sm === "4" && "h-[4rem]",
        sm === "4.2" && "h-[4.2rem]",
        sm === "4.4" && "h-[4.4rem]",
        sm === "4.8" && "h-[4.8rem]",
        sm === "5" && "h-[5rem]",
        sm === "6" && "h-[6rem]",
        sm === "6.4" && "h-[6.4rem]",
        sm === "6.8" && "h-[6.8rem]",
        sm === "8" && "h-[8rem]",
        sm === "10" && "h-[10rem]",
        sm === "12" && "h-[12rem]",
        sm === "12.8" && "h-[12.8rem]",
        sm === "15" && "h-[15rem]",
        sm === "24" && "h-[24rem]",
        md === "0" && "md:h-[0rem]",
        md === "0.8" && "md:h-[0.8rem]",
        md === "1" && "md:h-[1rem]",
        md === "1.2" && "md:h-[1.2rem]",
        md === "1.5" && "md:h-[1.5rem]",
        md === "1.6" && "md:h-[1.6rem]",
        md === "1.8" && "md:h-[1.8rem]",
        md === "2" && "md:h-[2rem]",
        md === "2.2" && "md:h-[2.2rem]",
        md === "2.4" && "md:h-[2.4rem]",
        md === "2.5" && "md:h-[2.5rem]",
        md === "2.8" && "md:h-[2.8rem]",
        md === "3" && "md:h-[3rem]",
        md === "3.6" && "md:h-[3.6rem]",
        md === "3.7" && "md:h-[3.7rem]",
        md === "4" && "md:h-[4rem]",
        md === "4.2" && "md:h-[4.2rem]",
        md === "4.4" && "md:h-[4.4rem]",
        md === "4.8" && "md:h-[4.8rem]",
        md === "5" && "md:h-[5rem]",
        md === "6" && "md:h-[6rem]",
        md === "6.4" && "md:h-[6.4rem]",
        md === "6.8" && "md:h-[6.8rem]",
        md === "8" && "md:h-[8rem]",
        md === "10" && "md:h-[10rem]",
        md === "12" && "md:h-[12rem]",
        md === "12.8" && "md:h-[12.8rem]",
        md === "15" && "md:h-[15rem]",
        md === "24" && "md:h-[24rem]",
        size === "0" && "lg:h-[0rem] xl:h-[0rem]",
        size === "0.8" && "lg:h-[0.8rem] xl:h-[0.8rem]",
        size === "1" && "lg:h-[1rem] xl:h-[1rem]",
        size === "1.2" && "lg:h-[1.2rem] xl:h-[1.2rem]",
        size === "1.5" && "lg:h-[1.5rem] xl:h-[1.5rem]",
        size === "1.6" && "lg:h-[1.6rem] xl:h-[1.6rem]",
        size === "1.8" && "lg:h-[1.8rem] xl:h-[1.8rem]",
        size === "2" && "lg:h-[2rem] xl:h-[2rem]",
        size === "2.2" && "lg:h-[2.2rem] xl:h-[2.2rem]",
        size === "2.4" && "lg:h-[2.4rem] xl:h-[2.4rem]",
        size === "2.5" && "lg:h-[2.5rem] xl:h-[2.5rem]",
        size === "2.8" && "lg:h-[2.8rem] xl:h-[2.8rem]",
        size === "3" && "lg:h-[3rem] xl:h-[3rem]",
        size === "3.6" && "lg:h-[3.6rem] xl:h-[3.6rem]",
        size === "3.7" && "lg:h-[3.7rem] xl:h-[3.7rem]",
        size === "4" && "lg:h-[4rem] xl:h-[4rem]",
        size === "4.2" && "lg:h-[4.2rem] xl:h-[4.2rem]",
        size === "4.4" && "lg:h-[4.4rem] xl:h-[4.4rem]",
        size === "4.8" && "lg:h-[4.8rem] xl:h-[4.8rem]",
        size === "5" && "lg:h-[5rem] xl:h-[5rem]",
        size === "6" && "lg:h-[6rem] xl:h-[6rem]",
        size === "6.4" && "lg:h-[6.4rem] xl:h-[6.4rem]",
        size === "6.8" && "lg:h-[6.8rem] xl:h-[6.8rem]",
        size === "8" && "lg:h-[8rem] xl:h-[8rem]",
        size === "10" && "lg:h-[10rem] xl:h-[10rem]",
        size === "12" && "lg:h-[12rem] xl:h-[12rem]",
        size === "12.8" && "lg:h-[12.8rem] xl:h-[12.8rem]",
        size === "15" && "lg:h-[15rem] xl:h-[15rem]",
        size === "24" && "lg:h-[24rem] xl:h-[24rem]"
      )}
    />
  );
};

export default Spacing;
