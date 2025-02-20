import Typography from "@/components/UI/Typography";
import Image from "next/image";
import Link from "next/link";
import { Doctor } from "./type";
import Button from "@/components/UI/Button";

interface IntroProps {
  price: string;
  doctor: Doctor | undefined;
  handleClick: () => void;
  title: string;
}

const IntroDef: React.FC<IntroProps> = ({
  handleClick,
  price,
  doctor,
  title,
}) => {
  return (
    <>
      <Link
        href="/"
        className="mb-[2rem] pt-[1rem] w-full items-center justify-center flex"
      >
        <Image
          src="/images/vessa-logo.png"
          alt="Vessa Hospital"
          width={200}
          height={80}
          priority
          className="xs:w-[135px] sm:w-[152px]"
        />
      </Link>
      <div className="px-[2rem] mb-[6rem] sm:gap-[2rem] flex flex-row xs:flex-col items-center justify-center">
        <div className="w-[25%] flex items-center sm:hidden xs:hidden z-[1000] flex-col">
          <Image
            src="/images/Dragos-Mirosu.png"
            width={308}
            priority
            height={354}
            alt="vessa"
          />
          <Typography
            variant="h3"
            className="p-[10px] w-[80%]  h-[65px] flex items-center justify-center text-white bg-medium-blue rounded-[9px]"
          >
            Dr. Dragoș Miroșu
          </Typography>
        </div>

        <div className="w-[50%] sm:w-full xs:w-full flex flex-col justify-center items-center gap-[3rem]">
          <div className="gap-[1rem] flex flex-col items-center justify-center">
            <Image
              src="/images/limited-offer.png"
              width={300}
              height={115}
              alt="vessa"
              className="sm:w-[250px]"
            />
            <Typography
              variant="h2"
              className="custom-blue-text text-center leading-[5rem] sm:leading-[4rem] text-[40px] custom:text-[30px] xl:text-[40px] lg:text-[40px] md:text-[40px] sm:text-[30px] xs:text-[28px] sm:flex sm:flex-col xs:flex xs:flex-col"
            >
              {title.split("<br/>").map((part, index) => {
                const colorClass =
                  index === 0
                    ? "text-dark-blue italic"
                    : index === 1
                    ? "font-[300] px-[1rem]"
                    : "text-medium-blue italic";

                return (
                  <span key={index} className={colorClass}>
                    {part}
                  </span>
                );
              })}
            </Typography>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Typography className="custom-blue-text" variant="h2">
              <span className="font-[300] text-[40px] custom:text-[35px]">
                la doar {""}
              </span>
              <span className="text-[70px] custom:text-[60px]">
                {price}
                {""}
              </span>
              <span className="text-[20px] font-[400]"> lei</span>
            </Typography>
            <div className="text-center italic font-[550] text-[30px] xs:text-[25px]">
              <span className="text-[20px] font-[400] text-black">
                Ultimele
              </span>
              <span className="custom-blue-text pl-[1rem] pr-[1rem]">
                3 zile
              </span>
              <span className="text-[#C04F2F]">DISPONIBILE</span>
            </div>
          </div>
          <div className="flex flex-row items-center gap-[5rem] custom:gap-[2rem]">
            <Image
              src="/images/arrow-promo.png"
              width={40}
              height={50}
              alt="vessa"
              className="rotate-[50deg] sm:hidden xs:hidden"
            />
            <span className="text-center font-[300] text-[20px] italic custom-blue-text">
              Alege medicul potrivit pentru{" "}
              <span className="font-[600]">TINE</span>
            </span>
            <Image
              src="/images/arrow-promo.png"
              width={40}
              height={50}
              alt="vessa"
              className="rotate-[-50deg] scale-x-[-1] sm:hidden xs:hidden"
            />
          </div>
          <div className="flex items-center justify-center hidden xs:block w-[90%]">
            <Typography variant="buttonText">
              <Button
                className="h-[50px] text-white justify-center hover:text-black w-full"
                label="Vreau oferta!"
                onClick={handleClick}
              ></Button>
            </Typography>
          </div>
        </div>
        <div className="flex items-center sm:hidden xs:hidden z-[1000] flex-col w-[25%]">
          <Image
            src={doctor!.imageUrl}
            width={308}
            priority
            height={354}
            alt="vessa"
          />
          <Typography
            variant="h3"
            className="p-[10px] w-[80%]  h-[65px] flex items-center justify-center text-white bg-medium-blue rounded-[9px]"
          >
            {doctor!.name}
          </Typography>
        </div>
      </div>
    </>
  );
};

export default IntroDef;
