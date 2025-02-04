"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import Typography from "./UI/Typography";
import Image from "next/image";
import UnderlineHoverButton from "./UI/UnderlineHoverButton";
import Wrapper from "./UI/Wrapper";
import Spacing from "./UI/Spacing";
import { IoMenu } from "react-icons/io5";
const Header = () => {
  const [activePath, setActivePath] = useState<string>("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setActivePath(window.location.pathname);
  }, []);

  const isActive = (path: string) => activePath === path;
  const pathname = usePathname();
  const isPromoPage = pathname.startsWith("/promo");

  return (
    <header>
      {/* Top bar with contact info */}
      <div className="w-full bg-light-blue z-100">
        <Wrapper>
          <div className="grid grid-cols-12 items-center gap-4 py-[1.4rem] md:grid-cols-8 sm:grid-cols-1">
            {/* Contact info */}
            <div className="flex items-center col-span-8 md:col-span-12 space-x-[4.5rem] sm:space-y-2 sm:space-x-0 sm:flex-col sm:items-start whitespace-nowrap">
              <div className="flex items-center sm:gap-4">
                <FaMapMarkerAlt className="mr-[1.5rem] text-dark-blue w-[2rem] h-[2rem] sm:mb-2 sm:mr-0" />
                <Typography variant="details">
                  Str Franyo Zoltan, nr 6, Timișoara
                </Typography>
              </div>
              <div className="flex items-center sm:gap-4 ">
                <FaPhone className="mr-[1.5rem] text-dark-blue w-[2rem] h-[2rem] sm:mb-2 sm:mr-0" />
                <Typography variant="details">+40 744 833 815</Typography>
              </div>
              <div className="flex items-center md:flex sm:hidden">
                <FaEnvelope className="mr-[1.5rem] text-dark-blue w-[2rem] h-[2rem]" />
                <Typography variant="details">
                  office@vessahospital.ro
                </Typography>
              </div>
            </div>

            {/* Social media icons for larger screens */}
            <div className="flex justify-end col-span-4 md:hidden sm:hidden space-x-[1.8rem]">
              <Link href="https://www.facebook.com/vessahospital">
                <FaFacebook className="cursor-pointer text-dark-blue w-[2.5rem] h-[2.5rem]" />
              </Link>
              <Link href="https://www.instagram.com/vessahospital/">
                <FaInstagram className="cursor-pointer text-dark-blue w-[2.5rem] h-[2.5rem]" />
              </Link>
              <Link href="https://api.whatsapp.com/send?phone=40744833815">
                <FaWhatsapp className="cursor-pointer text-dark-blue w-[2.5rem] h-[2.5rem]" />
              </Link>
            </div>
          </div>
        </Wrapper>
      </div>

      {/* Main Navigation Bar */}
      {!isPromoPage && (
        <div className="w-full py-4 bg-white z-100">
          <Wrapper>
            <div className="flex justify-between sm:grid items-center grid-cols-12 gap-4">
              <div className="col-span-3 mr-14">
                <Link href="/">
                  <Image
                    src="/images/vessa-logo.png"
                    alt="Vessa Hospital"
                    width={227}
                    height={79}
                    className="w-[80%] md:w-[45%] lg:w-[60%] xl:w-[40%] sm:w-[100%] h-auto min-w-[110px]"
                  />
                </Link>
              </div>

              {/* Desktop Navigation */}
              <nav className="z-40 flex items-center w-max justify-center col-span-6 md:col-span-8 md:flex sm:hidden gap-x-10 md:gap-x-12 xl:gap-x-24">
                <Link
                  href="/"
                  className={`${
                    isActive("/") ? "text-medium-blue" : "text-black"
                  } hover:text-medium-blue transition-colors`}
                >
                  <Typography variant="menu">Acasă</Typography>
                </Link>

                <Link
                  href="/despre_noi"
                  className={`${
                    isActive("/despre_noi") ? "text-medium-blue" : "text-black"
                  } hover:text-medium-blue transition-colors whitespace-nowrap`}
                >
                  <Typography variant="menu">Despre noi</Typography>
                </Link>

                <Link
                  href="/medici"
                  className={`${
                    isActive("/medici") ? "text-medium-blue" : "text-black"
                  } hover:text-medium-blue transition-colors`}
                >
                  <Typography variant="menu">Medici</Typography>
                </Link>

                <Link
                  href="/specialitati"
                  className={`${
                    isActive("/specialitati")
                      ? "text-medium-blue"
                      : "text-black"
                  } hover:text-medium-blue transition-colors`}
                >
                  <Typography variant="menu">Specialități</Typography>
                </Link>

                <Link
                  href="/contact"
                  className={`${
                    isActive("/contact") ? "text-medium-blue" : "text-black"
                  } hover:text-medium-blue transition-colors`}
                >
                  <Typography variant="menu">Contact</Typography>
                </Link>
              </nav>
              <div className="col-span-3 sm:hidden xs:hidden custom:hidden ml-28">
                <Link href="/programator">
                  <UnderlineHoverButton
                    className="w-max"
                    label="Programează-te"
                  />
                </Link>
              </div>

              {/* Mobile Navigation Toggle */}
              <div className="justify-end hidden col-span-9 sm:flex">
                <IoMenu
                  className="cursor-pointer text-black w-[3rem] h-[3rem]"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                />
              </div>

              {/* Contact Button */}
            </div>
          </Wrapper>
        </div>
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="py-4 bg-white lg:hidden">
          <nav className="flex flex-col items-center space-y-4">
            <Link
              href="/"
              className="text-black transition-colors hover:text-medium-blue"
              onClick={() => setIsMenuOpen(false)}
            >
              <Typography variant="menu">Acasă</Typography>
            </Link>
            <Link
              href="/despre_noi"
              className="text-black transition-colors hover:text-medium-blue"
              onClick={() => setIsMenuOpen(false)}
            >
              <Typography variant="menu">Despre noi</Typography>
            </Link>
            <Link
              href="/medici"
              className="text-black transition-colors hover:text-medium-blue"
              onClick={() => setIsMenuOpen(false)}
            >
              <Typography variant="menu">Medici</Typography>
            </Link>
            <Link
              href="/specialitati"
              className="text-black transition-colors hover:text-medium-blue"
              onClick={() => setIsMenuOpen(false)}
            >
              <Typography variant="menu">Specialități</Typography>
            </Link>
            <Link
              href="/contact"
              className="text-black transition-colors hover:text-medium-blue"
              onClick={() => setIsMenuOpen(false)}
            >
              <Typography variant="menu">Contact</Typography>
            </Link>
            <Spacing sm="1" />
            <Link href="/programator">
              <UnderlineHoverButton label="Programează-te" />
            </Link>
            <Spacing sm="1" />
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
