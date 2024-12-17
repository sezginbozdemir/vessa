import Image from "next/image";
import Spacing from "../UI/Spacing";
import Typography from "../UI/Typography";
import WrapperLarge from "../UI/WrapperLarge";

type CollaborationSectionProps = {
  displayTitle?: boolean;
};

const CollaborationSection = ({ displayTitle }: CollaborationSectionProps) => {
  return (
    <div className="relative">
      <div className="absolute left-0 top-0 lg:top-[15%] md:top-[30%] xl:top-[-20%] z-0 w-full ">
        <Image
          src="/images/collaborationLine.png"
          alt="Newsletter Line"
          width={1100}
          height={600}
          className="absolute lg:w-[100%] xl:w-[100%] md:w-[100%] sm:hidden lg:h-auto xl:h-auto z-0"
          priority
        />
      </div>

      <WrapperLarge>
        <section className="relative w-full">
          {displayTitle && (
            <div className="relative z-10 mb-8 text-center">
              <Typography variant="h2" className="text-black">
                Colaboram pentru o
                <br />
                <span className="text-dark-blue">sănătate</span> mai bună
              </Typography>
            </div>
          )}
          <Spacing size="8" md="1.5" sm="2" />
          {/* Structura desktop și tablet */}
          <div className="relative z-10 grid items-end grid-cols-12 gap-8 md:grid-cols-8 sm:grid-cols-2">
            {/* Secțiunea de text și imaginea portocalie pe desktop */}
            <div className="col-span-9 md:col-span-8 sm:col-span-2 md:text-left sm:text-left sm:mb-[4.2rem]">
              <Typography variant="paragraph" className="text-black opacity-75">
                La Vessa Hospital, sănătatea ta este prioritatea noastră. Credem
                că fiecare pacient merită îngrijire personalizată și un plan de
                tratament adaptat nevoilor sale. Vessa Hospital este un loc în
                care fiecare detaliu contează, iar echipa noastră dedicată se
                asigură că îți oferim nu doar tratamente eficiente, ci și
                sprijin constant pe parcursul întregii tale recuperări.
              </Typography>
            </div>

            <div className="items-end justify-end col-span-6 text-center md:col-span-4 sm:col-span-2 md:text-left sm:text-left ">
              <div className="relative w-full h-[30rem] md:h-[23rem] sm:h-[37rem] z-10">
                <Image
                  src="/images/about-l.jpg"
                  alt="Left image"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </div>

            {/* Imaginea dreapta pentru desktop */}
            <div className="z-10 flex justify-center col-span-6 mt-4 md:col-span-4 sm:col-span-2 md:mt-0">
              <div className="relative w-[80%]  h-[35rem] md:h-[27rem] sm:hidden xl:h-[35rem]">
                <Image
                  src="/images/about-r.jpg"
                  alt="Right image"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </div>
            {/* Forma decorativă albastră */}
            <div className="absolute w-[20rem] h-[20rem] md:w-[11rem] md:h-[11rem] md:top-[20%] md:right-[-1%] sm:right-[-4%] sm:top-[30%] sm:w-[10rem] sm:h-[10rem] bg-light-blue rounded-2xl lg:right-[2%] lg:top-[18%] xl:right-[2%] xl:top-[18%] z-0"></div>
          </div>
        </section>
      </WrapperLarge>
    </div>
  );
};

export default CollaborationSection;
