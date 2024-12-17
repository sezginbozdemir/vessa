"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Typography from "./Typography";
import { IoChevronBack } from "react-icons/io5";

const BackLink = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="flex items-center text-medium-blue">
      <IoChevronBack className="mr-2 text-medium-blue w-[2rem] h-[2rem]" />
      <Typography
        variant="buttonText"
        className="text-medium-blue md:hidden sm:hidden">
        Înapoi
      </Typography>
    </button>
  );
};

export default BackLink;
