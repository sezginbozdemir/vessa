import Typography from "@/components/UI/Typography";
import Image from "next/image";
import Link from "next/link";
import { Doctor } from "./type";

interface IntroProps {
  title: string;
  price: string;
  availability: string;
  doctor: Doctor | undefined;
}

const IntroVar: React.FC<IntroProps> = ({
  title,
  price,
  availability,
  doctor,
}) => {
  return (
    <div className="flex flex-row  pt-[10px]">
      <div className="flex flex-col gap-[2rem] w-[60%] sm:w-full xs:w-full">
        <Link
          href="/"
          className="mb-[2rem] mt-[2rem] inline-block self-end sm:self-center xs:self-center"
        >
          <Image
            src="/images/vessa-logo.png"
            alt="Vessa Hospital"
            width={260}
            height={80}
            className="xs:w-[135px] sm:w-[152px]"
          />
        </Link>
        <div className=" z-[1000] flex flex-col self-center">
          <Typography variant="h2" className="md:text-[50px]">
            Oferta lunii {availability}!
          </Typography>
        </div>
        <div className=" z-[1000] flex flex-col gap-[4rem] ">
          <div className="flex flex-col self-center w-[90%]">
            <Typography
              variant="h3"
              className="text-center text-[40px] xl:text-[40px] lg:text-[40px] md:text-[40px] sm:text-[30px] xs:text-[20px]"
            >
              Ofertă pachet - {""}
              <span className="custom-blue-text">{title}</span>
            </Typography>
          </div>
          <div className="flex flex-row items-center justify-center self-center gap-[5rem] xs:gap-[2rem]">
            <div className="relative flex flex-col items-center justify-center">
              <div className="absolute bottom-[50%] left-[5%] w-full h-[2px] bg-gray-500 rotate-[-40deg]"></div>
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
