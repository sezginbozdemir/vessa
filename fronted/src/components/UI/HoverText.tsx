import React from "react";
import Link from "next/link";
import Typography from "@/components/UI/Typography";

type HoverTextProps = {
  label: string;
  slug: string;
};

const HoverText = ({ label, slug }: HoverTextProps) => {
  return (
    <Link
      href={`/articole/${slug}`}
      className="relative inline-block transition duration-300 cursor-pointer group hover:text-medium-blue"
    >
      <Typography
        variant="details"
        className="transition-all duration-300 text-medium-blue group-hover:font-semibold"
      >
        {label}
      </Typography>
      <span className="block w-0 group-hover:w-[60%] transition-all duration-500 h-0.5 bg-medium-blue mt-1"></span>
    </Link>
  );
};

export default HoverText;
