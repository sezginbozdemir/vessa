import Image from "next/image";
import Link from "next/link";
import Typography from "@/components/UI/Typography";
import { doctorsData } from "@/app/mock-data/doctorsData";

interface IntroProps {
  title: string;
  price: string;
  availability: string;
  specialization: string;
}

const Intro: React.FC<IntroProps> = ({
  title,
  price,
  availability,
  specialization,
}) => {
  const matchingDoctors = doctorsData.filter(
    (doctor) =>
      doctor.specialization.toLowerCase() === specialization.toLowerCase()
  );

  const firstDoctor = matchingDoctors[0];

  return (
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
        width={1650}
        height={610}
        alt="vessa"
      />

      <div className="bg-[url('/images/promo-white-shape.png')] bg-[100%_-5%] sm:bg-[100%_-15%] xs:bg-[100%_-60%] bg-cover bg-no-repeat">
        <div className="flex flex-row  pt-[10px]">
          <div className="flex flex-col gap-[2rem] w-[60%] sm:w-full xs:w-full">
            <Link
              href="/"
              className="mb-[2rem] inline-block self-end sm:self-center xs:self-center"
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
          <div className="flex items-center sm:hidden xs:hidden z-[1000] flex-col w-[40%]">
            <Image
              src={firstDoctor.imageUrl}
              width={418}
              height={494}
              alt="vessa"
            />
            <Typography
              variant="h3"
              className="p-[10px] w-[80%]  h-[65px] flex items-center justify-center text-white bg-medium-blue rounded-[9px]"
            >
              {firstDoctor.name}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Intro;
