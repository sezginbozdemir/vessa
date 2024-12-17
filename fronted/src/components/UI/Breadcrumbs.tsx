"use client";
import React from "react";
import Link from "next/link";
import Typography from "../UI/Typography";
import { IoChevronForwardOutline } from "react-icons/io5";

type BreadcrumbItem = {
  name: string;
  slug: string;
};

type BreadcrumbsProps = {
  item: BreadcrumbItem;
};

const Breadcrumbs = ({ item }: BreadcrumbsProps) => {
  return (
    <nav className="flex items-center space-x-2">
      <div className="flex items-center">
        <Link href={"/dictionar"}>
          <Typography
            variant="buttonText"
            className="transition-colors duration-300 text-dark-blue hover:text-medium-blue">
            Afecțiuni medicale
          </Typography>
        </Link>

        <IoChevronForwardOutline className="mx-2 text-dark-blue w-[1.5rem] h-[1.5rem]" />
        <Link href={item.slug}>
          <Typography
            variant="buttonText"
            className="transition-colors duration-300 text-dark-blue hover:text-medium-blue">
            {item.name}
          </Typography>
        </Link>
      </div>
    </nav>
  );
};

export default Breadcrumbs;
