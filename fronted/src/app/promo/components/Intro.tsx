"use client";
import Image from "next/image";
import { doctorsData } from "@/app/mock-data/doctorsData";
import IntroVar from "./IntroVar";
import IntroDef from "./IntroDef";
import Appoint from "./Appoint";
import { useRef } from "react";

interface IntroProps {
  title: string;
  price: string;
  availability: string;
  doctor: string;
  id: string;
  specialty: string;
}

const Intro: React.FC<IntroProps> = ({
  title,
  price,
  availability,
  doctor,
  id,
  specialty,
}) => {
  const matchingDoctor = doctorsData.find(
    (item) => item.name.toLowerCase() === doctor.toLowerCase()
  );
  const handleClick = () => {
    if (appointRef.current) {
      appointRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const appointRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <div className="bg-light-blue relative">
        <Image
          className="absolute top-[15%] xs:top-[50%] left-[2%] sm:w-[105px] xs:w-[68px]"
          src="/images/cross.png"
          width={150}
          height={150}
          alt="vessa"
        />
        <Image
          className="absolute top-[10%] right-[4%] sm:w-[58px] xs:w-[42px]"
          src="/images/cross.png"
          width={80}
          height={80}
          alt="vessa"
        />
        <Image
          className="z-[1] absolute top-[-5%] right-[-5%]"
          src="/images/promo-dec.png"
          width={16501}
          height={610}
          alt="vessa"
        />

        <div className="bg-[url('/images/promo-white-shape.png')] bg-[100%_-5%] sm:bg-[100%_-15%] xs:bg-[100%_-60%] bg-cover bg-no-repeat">
          {id === "variant" && (
            <IntroVar
              handleClick={handleClick}
              title={title}
              price={price}
              doctor={matchingDoctor}
            />
          )}
          {id === "default" && (
            <IntroDef
              title={title}
              price={price}
              availability={availability}
              doctor={matchingDoctor}
            />
          )}
        </div>
      </div>
      <Appoint specialty={specialty} ref={appointRef} />
    </>
  );
};
export default Intro;
