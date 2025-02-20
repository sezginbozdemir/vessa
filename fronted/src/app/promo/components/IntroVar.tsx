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
    <div className="flex flex-row  pt-[10px]  xs:mb-[100px]">
      <div className="flex flex-col gap-[2rem] xs:gap-[0rem] w-[60%] sm:w-full xs:w-full">
        <Link
          href="/"
          className="mb-[2rem] mt-[2rem] xs:mt-[0rem] pr-[3rem] sm:pr-0 xs:pr-0 inline-block self-end sm:self-center xs:self-center"
        >
          <Image
            src="/images/vessa-logo.png"
            alt="Vessa Hospital"
            width={260}
            height={80}
            className="xs:w-[135px] sm:w-[152px]"
          />
        </Link>
        <div className=" z-[1000] flex flex-col gap-[30px] ">
          <div className="flex flex-col self-center w-[90%] xs:gap-[2rem]">
            <Typography
              variant="h3"
              className="custom-blue-text text-center text-[40px] xl:text-[40px] lg:text-[40px] md:text-[40px] sm:text-[40px] xs:text-[40px]"
            >
              Ofertă pachet {""}
              <span className="text-black font-[550] italic xs:hidden">
                - {title}
              </span>
            </Typography>
            <ul className="list-none flex-col self-center gap-[10px] text-[24px] font-[500] hidden xs:flex">
              {title.split(" + ").map((item, index) => (
                <li
                  className="pl-16 relative before:content-['✓'] before:text-white before:bg-blue-300 before:rounded-[5px] before:px-[5px] before:w-[30px] before:h-[30px] before:flex before:items-center before:justify-center before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2"
                  key={index}
                >
                  <span className="italic">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-row items-center justify-center self-center gap-[5rem] xs:gap-[2rem]">
            <div className="relative flex flex-col items-center justify-center">
              <div className="absolute bottom-[50%] left-[5%] w-full h-[2px] bg-gray-500 rotate-[-40deg]" />
              <Typography variant="h3">Preț normal</Typography>
              <Typography variant="h3" className="custom-blue-text">
                600 lei
              </Typography>
            </div>
            <Image
              src="/images/double-arrow-rounded.png"
              width={33}
              height={37}
              alt="vessa"
            />
            <div className="w-[190px] h-[90px] xs:w-[150px] xs:h-[70px]  flex flex-col items-center justify-center self-center  gap-[0.5rem] bg-[url('/images/promo-tag.png')] bg-cover bg-no-repeat relative">
              <Image
                src="/images/nou.png"
                width={90}
                height={40}
                alt="vessa"
                className="absolute top-[-25%] right-[-35%] xs:w-[70px] xs:h-[30px]"
              />
              <Typography variant="menu">Preț promoțional</Typography>
              <Typography
                variant="h3"
                className="custom-blue-text text-[40px] md:text-[40px] sm:text-[40px] xs:text-[28px]"
              >
                {price}
              </Typography>
            </div>
          </div>
          <div className="flex flex-col items-center mb-[5rem]">
            <div className="custom-blue-text font-[700] text-[30px]">
              <span className="block xs:hidden">Grăbește-te!</span>
              <span className="xs:block hidden">Vrei să prinzi loc?</span>
            </div>
            <div className="hidden xs:block font-[500] text-[25px]">
              <span className="italic">
                {doctor!.name} {""}
              </span>
              <span className="custom-blue-text text-[18px] font-[400]">
                mai are
              </span>
            </div>

            <div className="mb-[3rem] flex flex-row items-center justify-center gap-0 text-[#C04F2F] font-[500] text-[40px] xs:text-[20px] sm:text-[30px]">
              <Image
                src="/images/orange-pulse.png"
                width={78}
                height={66}
                alt="vessa"
              />
              <p>
                <span className="inline-block xs:hidden">Ultimele</span>
                <span className="hidden xs:inline-block">Doar</span> 3 zile
                disponibile
              </p>
              <Image
                src="/images/orange-pulse.png"
                width={78}
                height={66}
                alt="vessa"
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
        </div>
      </div>
      <div className="mt-[2rem] flex items-center sm:hidden xs:hidden z-[1000] flex-col w-[40%]">
        <Image src={doctor!.imageUrl} width={418} height={494} alt="vessa" />
        <Typography
          variant="h3"
          className="p-[10px] w-[80%]  h-[65px] flex items-center justify-center text-white bg-medium-blue rounded-[9px]"
        >
          {doctor!.name}
        </Typography>
      </div>
    </div>
  );
};

export default IntroVar;
