import Image from "next/image";
import Typography from "../UI/Typography";
import Spacing from "../UI/Spacing";
import WrapperLarge from "../UI/WrapperLarge";

const HeaderProgramator = () => {
  return (
    <section className="relative w-full h-[50vh] lg:h-[70vh] bg-light-blue">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/programator-header.jpg"
          alt="Despre noi"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
          className="opacity-90"
        />
      </div>

      <div className="relative z-10 flex items-end justify-start h-full px-8 ">
        <WrapperLarge>
          <Typography variant="h2" className="text-black uppercase">
            Programator
          </Typography>
          <div className="w-[8rem] h-[0.3rem] bg-dark-blue mt-1"></div>
          <Spacing size="6.8" />
        </WrapperLarge>
      </div>
    </section>
  );
};

export default HeaderProgramator;
