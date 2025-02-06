import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import Image from "next/image";
import Typography from "./UI/Typography";
import Link from "next/link";
import Wrapper from "./UI/Wrapper";

const Footer = () => {
  return (
    <Wrapper>
      <footer className="py-10 bg-white">
        <div className="grid grid-cols-12 md:grid-cols-8 sm:grid-cols-2 gap-x-4 gap-y-10 ">
          <div className="col-span-4 md:col-span-8 sm:col-span-2">
            <Link href="/">
              <Image
                src="/images/vessa-logo.png"
                alt="Vessa Hospital"
                width={150}
                height={50}
              />
            </Link>
            <div className="max-w-[85%]">
              <Typography
                variant="paragraph"
                className="mt-[1.6rem] text-black opacity-75"
              >
                La Vessa Hospital, sănătatea ta este prioritatea noastră. Îți
                oferim îngrijire medicală de înaltă calitate, susținută de o
                echipă de specialiști dedicați, tehnologie avansată și un mediu
                confortabil. Suntem aici pentru a te sprijini în fiecare moment
                al parcursului tău spre sănătate.
              </Typography>
            </div>

            <div className="flex mt-4 space-x-4">
              <Link
                target="_blank"
                href="https://www.facebook.com/vessahospital.ro"
              >
                <FaFacebook
                  className="cursor-pointer text-medium-blue"
                  size={20}
                />
              </Link>
              <Link
                target="_blank"
                href="https://www.instagram.com/vessahospital.ro"
              >
                <FaInstagram
                  className="cursor-pointer text-medium-blue"
                  size={20}
                />
              </Link>
              <Link target="_blank" href="http://tiktok.com/@vessahospital.ro">
                <FaTiktok
                  className="cursor-pointer text-medium-blue"
                  size={20}
                />
              </Link>
              <Link target="_blank" href="">
                <FaYoutube
                  className="cursor-pointer text-medium-blue"
                  size={20}
                />
              </Link>
              <Link
                target="_blank"
                href="https://api.whatsapp.com/send?phone=40744833815"
              >
                <FaWhatsapp
                  className="cursor-pointer text-medium-blue"
                  size={20}
                />
              </Link>
              <Link target="_blank" href="">
                <FaLinkedin
                  className="cursor-pointer text-medium-blue"
                  size={20}
                />
              </Link>
            </div>
          </div>

          <div className="col-span-2">
            <Typography variant="h3" className="text-black mb-[1.6rem]">
              Linkuri Utile
            </Typography>
            <ul className="space-y-2">
              <li>
                <Typography variant="details">
                  <Link href="/" className="hover:text-medium-blue">
                    Acasă
                  </Link>
                </Typography>
              </li>
              <li>
                <Typography variant="details">
                  <Link href="/despre_noi" className="hover:text-medium-blue">
                    Despre noi
                  </Link>
                </Typography>
              </li>
              <li>
                <Typography variant="details">
                  <Link href="/medici" className="hover:text-medium-blue">
                    Medici
                  </Link>
                </Typography>
              </li>
              <li>
                <Typography variant="details">
                  <Link href="/specialitati" className="hover:text-medium-blue">
                    Specialități
                  </Link>
                </Typography>
              </li>
            </ul>
          </div>

          <div className="col-span-3">
            <Typography variant="h3" className="text-black mb-[1.6rem]">
              Informații legale
            </Typography>
            <ul className="space-y-2">
              <li>
                <Typography variant="details">
                  <Link
                    href="/termeni_conditi"
                    className="hover:text-medium-blue"
                  >
                    Termeni și condiții
                  </Link>
                </Typography>
              </li>
              <li>
                <Typography variant="details">
                  <Link href="/cookie" className="hover:text-medium-blue">
                    Politica de cookie-uri
                  </Link>
                </Typography>
              </li>
              <li>
                <Typography variant="details">
                  <Link href="/gdpr" className="hover:text-medium-blue">
                    GDPR
                  </Link>
                </Typography>
              </li>
              <li>
                <Typography variant="details">
                  <Link
                    href="https://anpc.ro/"
                    target="_blank"
                    className="hover:text-medium-blue"
                  >
                    ANPC
                  </Link>
                </Typography>
              </li>
            </ul>
          </div>

          <div className="col-span-3">
            <Typography variant="h3" className="text-black mb-[1.6rem]">
              Contact
            </Typography>
            <ul className="space-y-2">
              <li>
                <Typography variant="details">
                  Str Franyo Zoltan, nr. 6, Timișoara
                </Typography>
              </li>
              <li>
                <Typography variant="details">+40 744 833 815</Typography>
              </li>
              <li>
                <Typography variant="details">
                  office@vessahospital.ro
                </Typography>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-4 mt-8 text-center text-gray-500 border-t border-gray-300">
          <Typography variant="details">
            Copyright VESSA HOSPITAL. &copy; 2024. Toate drepturile sunt
            rezervate.
          </Typography>
        </div>
      </footer>
    </Wrapper>
  );
};

export default Footer;
