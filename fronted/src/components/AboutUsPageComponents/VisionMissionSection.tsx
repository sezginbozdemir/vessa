import Image from "next/image";
import Spacing from "../UI/Spacing";
import Typography from "../UI/Typography";

const VisionMissionSection = () => {
  return (
    <section className="relative w-full bg-white  px-[23.4rem] md:px-[6.4rem] sm:px-[2rem]">
      <div className="relative z-10 flex justify-center">
        <Image
          src="/images/vessa-logo.png"
          alt="Vessa Hospital Logo"
          width={200}
          height={100}
          className="h-auto"
        />
      </div>

      <Spacing size="10" md="6" sm="3.6" />

      <div className="relative z-10 grid justify-between grid-cols-12 md:gap-4 md:items-center md:grid-cols-8 sm:grid-cols-2 sm:gap-12">
        {/* Vision Card */}
        <div className="bg-light-blue col-span-5 md:col-span-4 sm:col-span-2 rounded-lg py-[3rem] px-[3rem] md:py-[3rem] md:px-[1rem] ml-[10%] md:ml-0  sm:ml-0 text-center max-w-[80%  md:max-w-[95%] sm:max-w-full">
          <Typography variant="h3" className="text-dark-blue">
            Viziunea noastră
          </Typography>
          <Spacing size="1" md="1.5" />
          <Typography
            variant="paragraph"
            className="text-center text-black opacity-75"
          >
            Să devenim lideri în îngrijirea medicală, oferind servicii de
            calitate, inovative și personalizate, pentru o comunitate sănătoasă
            și încrezătoare.
          </Typography>
        </div>

        {/* <Spacing sm="3" /> */}

        {/* Mission Card */}
        <div className="bg-light-blue col-span-5 col-start-8 md:col-span-4 sm:col-span-2 rounded-lg py-[3rem] px-[3rem] md:py-[3rem] md:px-[1rem] ml-[10%] md:ml-0  sm:ml-0 text-center max-w-[80%] md:max-w-[95%] sm:max-w-full">
          <Typography variant="h3" className="text-dark-blue">
            Misiunea noastră
          </Typography>
          <Spacing size="1" md="1.5" />
          <Typography variant="paragraph" className="text-black opacity-75">
            Să oferim îngrijire medicală de excepție, cu o echipă dedicată și
            tehnologie avansată, adaptându-ne permanent după pacient și nevoile
            sale.
          </Typography>
        </div>
      </div>

      <div className="absolute top-[0] left-0 md:top-[5%] w-full h-[32rem] z-0 pointer-events-none">
        <Image
          src="/images/vission-mission-line.png"
          alt="Vission and Mission Line"
          layout="fill"
          objectFit="contain"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
};

export default VisionMissionSection;
