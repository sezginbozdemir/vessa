import Image from "next/image";
import Typography from "../UI/Typography";
import Spacing from "../UI/Spacing";
import Wrapper from "../UI/Wrapper";

const HeaderDetaliiAfectiune = () => {
  return (
    <section className="relative w-full h-[50vh] lg:h-[70vh] bg-light-blue">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/detaliiAfectiuneHeader.png"
          alt="Despre noi"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
          className="opacity-90"
        />
      </div>

      <div className="relative z-10 flex items-end justify-start h-full px-8 md:px-0 sm:px-0">
        <Wrapper>
          <Typography
            variant="h2"
            className="text-black">
            Dicționar Afecțiuni
          </Typography>
          <div className="w-[8rem] h-[0.3rem] bg-dark-blue mt-1"></div>
          <Spacing size="6.8" />
        </Wrapper>
      </div>
    </section>
  );
};

export default HeaderDetaliiAfectiune;
