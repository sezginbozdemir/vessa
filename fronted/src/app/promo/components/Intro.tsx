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

      <div className="bg-[url('/images/promo-white-shape.png')] bg-[100%_-5%] sm:bg-[100%_-15%] xs:bg-[100%_-150%] bg-cover bg-no-repeat">
        <div className="flex flex-row  pt-16">
          <div className="flex flex-col gap-[5rem] w-[60%] sm:w-full xs:w-full">
            <Link
              href="/"
              className="inline-block self-end sm:self-center xs:self-center"
            >
              <Image
                src="/images/vessa-logo.png"
                alt="Vessa Hospital"
                width={260}
                height={80}
              />
            </Link>
            <div className=" z-[1000] flex flex-col self-end sm:self-center xs:self-center">
              <Typography variant="h2" className="">
                <span className="custom-blue-text">Beneficiază</span> acum de
              </Typography>
              <Typography variant="h2" className="">
                oferta lunii {availability}!
              </Typography>
            </div>
            <div className=" z-[1000] flex flex-col gap-[3rem] ">
              <div className="flex flex-col self-center  mr-[10rem]">
                <Typography
                  variant="h3"
                  className="text-[40px] md:text-[40px] sm:text-[30px] xs:text-[20px]"
                >
                  Ofertă pachet -
                  <span className="custom-blue-text"> Consult</span>
                </Typography>
                <Typography
                  variant="h3"
                  className="text-[40px] md:text-[40px] sm:text-[30px] xs:text-[20px]"
                >
                  <span className="custom-blue-text">{title}</span>
                </Typography>
              </div>
              <div className="rotate-[10deg] w-[200px] h-[90px]  flex flex-col items-center justify-center self-end sm:self-center xs:self-center mr-[5rem] gap-[0.5rem] bg-[url('/images/promo-tag.png')] bg-cover bg-no-repeat relative">
                <Image
                  src="/images/nou.png"
                  width={90}
                  height={40}
                  alt="vessa"
                  className="absolute top-[-25%] right-[-35%]"
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
          <div className="flex items-center sm:hidden xs:hidden z-[1000] flex-col w-[40%]">
            <Image
              src={firstDoctor.imageUrl}
              width={518}
              height={594}
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
