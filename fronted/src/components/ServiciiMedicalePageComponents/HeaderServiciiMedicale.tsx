"use client";
import Image from "next/image";
import Typography from "../UI/Typography";
import Spacing from "../UI/Spacing";
import WrapperLarge from "../UI/WrapperLarge";
import { useEffect, useState } from "react";

type ServiceHeaderProps = {
  headerImageUrl?: string;
};

const HeaderServiciiMedicale = ({ headerImageUrl }: ServiceHeaderProps) => {
  const [imageUrl, setImageUrl] = useState<string>("");
  useEffect(() => {
    const checkAndSetImageUrl = async () => {
      if (headerImageUrl) {
        try {
          const response = await fetch(headerImageUrl);
          if (response.ok) {
            setImageUrl(headerImageUrl);
          } else {
            setImageUrl("/images/specialitati-header.jpg");
          }
        } catch (error) {
          console.error("Error checking image URL:", error);
        }
      }
    };

    checkAndSetImageUrl();
  }, [headerImageUrl]);
  return (
    <section className="relative w-full h-[60vh] md:h-[50vh] sm:h-[40vh] xs:h-[30vh]  bg-light-blue transition-all">
      <div className="absolute inset-0 z-0">
        <Image
          src={imageUrl}
          alt="Despre noi"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
          className="opacity-90"
        />
      </div>

      <div className="relative z-10 flex items-end justify-start h-full">
        <WrapperLarge>
          <div>
            <Typography variant="h2" className="text-black uppercase">
              Specialități
            </Typography>
            <div className="w-[8rem] h-[0.3rem] bg-dark-blue mt-1"></div>
            <Spacing size="6.8" />
          </div>
        </WrapperLarge>
      </div>
    </section>
  );
};

export default HeaderServiciiMedicale;
