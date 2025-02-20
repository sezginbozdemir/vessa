import Typography from "@/components/UI/Typography";
import Image from "next/image";
import Link from "next/link";
import { Doctor } from "./type";
import Button from "@/components/UI/Button";

interface IntroProps {
  title: string;
  price: string;
  doctor: Doctor | undefined;
  handleClick: () => void;
}

const IntroVar: React.FC<IntroProps> = ({
  title,
  price,
  doctor,
  handleClick,
}) => {
  return (
    <div className="flex flex-row  pt-[10px]  xs:mb-[100px] mb-[3rem]">
      <div className="flex flex-col gap-[2rem] xs:gap-[0rem] w-[65%] sm:w-full xs:w-full">
        <Link
          href="/"
          className="mb-[2rem] mt-[1rem] xs:mt-[0rem] pr-[3rem] sm:pr-0 xs:pr-0 inline-block self-end sm:self-center xs:self-center"
        >
          <Image
            src="/images/vessa-logo.png"
            alt="Vessa Hospital"
            width={230}
            height={80}
            className="xs:w-[135px] sm:w-[152px]"
          />
        </Link>
        <div className=" z-[1000] flex flex-col items-end sm:items-center xs:items-center gap-[1rem]">
          <div className="text-start sm:text-center flex items-end sm:items-center xs:items-center flex-row sm:flex-col custom-blue-text font-[700] text-[55px] custom:text-[45px] xs:text-[35px] leading-[70px] xs:leading-[50px] mr-[8rem] custom:mr-0 sm:mr-0 xs:mr-0">
            <span dangerouslySetInnerHTML={{ __html: title }}></span>
            <span className="pl-[2rem] text-[45px] xs:text-[35px] font-[300] italic">
              cu
            </span>
          </div>
          <div className="flex flex-row sm:flex-col justify-end items-end sm:items-center sm:justify-center sm:gap-[3rem]">
            <span className="flex items-center justify-center bg-medium-blue rounded-[50px]  h-[60px] font-[700] text-[30px] custom:text-[20px] xs:text-[25px] italic text-white px-[30px]">
              {doctor!.name}
            </span>
            <div>
              <span className="pl-[4rem] custom-blue-text text-[40px] custom:text-[30px] xs:text-[35px] font-[300]">
                la doar
              </span>
              <span className="pl-[2rem]  custom-blue-text text-[60px] custom:text-[40px] font-[600] leading-[7rem] custom:leading-[5rem]">
                {price}
              </span>
              <span className="pl-[2rem] custom-blue-text text-[30px] custom:text-[20px] xs:text-[25px] font-[500]">
                lei
              </span>
            </div>
          </div>

          <div className="flex flex-col self-start sm:self-center xs:self-center mt-[4rem] mb-[5rem] pl-[5%] xs:gap-[2rem]">
            <div className="flex items-end font-[700] text-[30px] custom:text-[20px] text-[#C04F2F] italic gap-[1rem]">
              <Image
                src="/images/clock-promo.svg"
                width={50}
                height={50}
                alt="vessa"
              />
              <span className="flex leading-[4rem]">Timp limitat!</span>
            </div>
            <div className="flex flex-row sm:flex-col xs:flex-col font-[700] text-[30px] custom:text-[20px]  italic gap-[2rem] sm:gap-0">
              <span className="custom-blue-text">Grăbește-te!</span>
              <span className="custom-blue-text font-[400] text-[30px] custom:text-[20px] flex items-end">
                Doar
                <span className="text-[#C04F2F] font-[600] pl-[1rem]">
                  3 zile disponibile!
                </span>
              </span>
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
        </div>
      </div>
      <div className="relative flex items-end sm:hidden xs:hidden z-[1000]  w-[35%] pt-[4rem]">
        <div className="absolute z-[5000]  bottom-[6rem] w-[290px] custom:w-[230px] right-[60%] flex flex-col items-center justify-center px-[4rem] xs:hidden bg-light-blue h-[90px] custom:h-[70px] rounded-[50px]">
          <span className="italic font-[700] text-[25px] custom:text-[20px] custom-blue-text">
            Rezervăți <span className="font-[400]">locul</span>
          </span>
          <span className="italic font-[700] text-[25px] custom:text-[20px] text-medium-blue">
            ACUM
          </span>
        </div>
        <Image
          src="/images/arrow-promo.png"
          width={90}
          height={100}
          alt="vessa"
          className="absolute right-[138%] bottom-[-2%] custom:right-[100%] custom:w-[70px]"
        />

        <div className="relative flex items-center justify-center w-full">
          <Image
            src="/images/andreea-albota-promo.png"
            width={370}
            height={580}
            alt="vessa"
          />
          <Image
            src="/images/white-overlay-promo.png"
            width={300}
            height={280}
            alt="vessa"
            className="absolute bottom-[-2rem] left-0 w-full h-1/3"
          />
        </div>
      </div>
    </div>
  );
};

export default IntroVar;
