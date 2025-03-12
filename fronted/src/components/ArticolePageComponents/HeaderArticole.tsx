import Image from "next/image";
import Typography from "../UI/Typography";
import Spacing from "../UI/Spacing";
import WrapperLarge from "../UI/WrapperLarge";

interface HeaderArticoleProps {
  promo: boolean | undefined;
  slug: string;
}

const HeaderArticole = ({ promo, slug }: HeaderArticoleProps) => {
  let imageSrc = "/images/header-articole.jpg";

  if (slug === "beneficiile-infiltratiilor-acid-hialuronic") {
    imageSrc = "/images/header-acid.png";
  } else if (slug === "consulturi-preventive-neurochirurgie") {
    imageSrc = "/images/header-neuro.png";
  } else if (slug === "beneficiile-holter-ekg") {
    imageSrc = "/images/header-holter.png";
  } else if (promo) {
    imageSrc = "/images/header-articole-promo.jpg";
  }
  return (
    <section className="relative w-full h-[60vh] md:h-[50vh] sm:h-[40vh] xs:h-[30vh] transition-all bg-light-blue">
      <div className="absolute inset-0 z-0">
        <Image
          src={imageSrc}
          alt="Despre noi"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
          className="opacity-90"
        />
      </div>

      <div className="relative z-10 flex items-end justify-start h-full ">
        <WrapperLarge>
          <div>
            <Typography variant="h2" className="text-black">
              ARTICOLE
            </Typography>
            <div className="w-[8rem] h-[0.3rem] bg-dark-blue mt-1"></div>
            <Spacing size="6.8" />
          </div>
        </WrapperLarge>
      </div>
    </section>
  );
};

export default HeaderArticole;
