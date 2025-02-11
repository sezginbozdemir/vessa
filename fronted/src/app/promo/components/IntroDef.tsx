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

const IntroDef: React.FC<IntroProps> = ({
  title,
  price,
  availability,
  doctor,
}) => {
  return (
    <>
      <Link
        href="/"
        className="mb-[2rem] pt-[2rem] w-full items-center justify-center flex "
      >
        <Image
          src="/images/vessa-logo.png"
          alt="Vessa Hospital"
          width={260}
          height={80}
          className="xs:w-[135px] sm:w-[152px]"
        />
      </Link>
      <div className="mb-[3rem] px-[5rem] sm:px-0 sm:gap-[2rem] flex flex-row xs:flex-col items-center justify-center">
        <div className="z-[1000] flex flex-col gap-[1rem] items-center justify-center">
          <Typography
            variant="h2"
            className="font-medium text-[40px] xl:text-[40px] lg:text-[40px] md:text-[40px] sm:text-[30px] xs:text-[28px]"
          >
            Profită acum de
          </Typography>
          <Typography
            variant="h2"
            className="custom-blue-text text-center text-[40px] xl:text-[40px] lg:text-[40px] md:text-[40px] sm:text-[30px] xs:text-[28px]"
          >
            <span dangerouslySetInnerHTML={{ __html: title }} />
          </Typography>
        </div>
        <div className="flex items-center sm:hidden xs:hidden z-[1000] flex-col">
          <Image src={doctor!.imageUrl} width={358} height={354} alt="vessa" />
          <Typography
            variant="h3"
            className="p-[10px] w-[80%]  h-[65px] flex items-center justify-center text-white bg-medium-blue rounded-[9px]"
          >
            {doctor!.name}
          </Typography>
        </div>
        <div className="flex flex-col justify-center items-center gap-[7rem] sm:gap-[1rem] pt-[8rem] sm:pt-[2rem]">
          <div className="flex flex-col items-center justify-center gap-[2rem]">
            <Image
              src="/images/promo-price.png"
              width={360}
              height={55}
              alt="vessa"
              className="sm:w-[260px] xs:w-[333px] xs:h-[66px]"
            />
            <Typography className="custom-blue-text" variant="h2">
              <span className="font-thin text-[50px] sm:text-[40px] xs:text-[40px]">
                la doar {""}
              </span>
              <span className="text-[80px] sm:text-[70px] xs:text-[70px]">
                {price}
                {""}
              </span>
              <span className="text-[20px]"> lei</span>
            </Typography>
          </div>
          <div className="flex flex-col items-center justify-between xs:hidden">
            <Image
              src="/images/limited-offer.png"
              width={350}
              height={115}
              alt="vessa"
              className="sm:w-[250px]"
            />
            <Typography variant="paragraph">
              Profită până în 28 {availability}
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
};

export default IntroDef;
