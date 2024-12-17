import { afectiuniData } from "@/app/mock-data/afectiuniData";
import BackLink from "../UI/BackLink";
import Breadcrumbs from "../UI/Breadcrumbs";
import Spacing from "../UI/Spacing";
import Typography from "../UI/Typography";
import Image from "next/image";
import Wrapper from "../UI/Wrapper";
type AfectiuneMedicalaProps = {
  afectiune: {
    name: string;
    slug: string;
  };
};

interface Afectiune {
  name: string;
  afectiuneMedicale: string;
  cauze: string;
  factoriRisc: string;
  simptome: string;
  diagnosticare: string;
  tratament: string;
  preventie: string;
  slug: string;
}

const AfectiuniMedicale = ({ afectiune }: AfectiuneMedicalaProps) => {
  const selectedAfectiune = afectiuniData.find(
    (item: Afectiune) => item.slug === afectiune.slug
  );

  if (!selectedAfectiune) {
    return <div>Afecțiune medicală nu a fost găsită.</div>;
  }

  const sections = [
    {
      title: "Despre afecțiunea medicală",
      content: selectedAfectiune.afectiuneMedicale,
      imageSrc: "/images/medicalCross.png",
    },
    {
      title: "Cauze",
      content: selectedAfectiune.cauze,
      imageSrc: "/images/cauzeDetails.png",
    },
    {
      title: "Factori de risc",
      content: selectedAfectiune.factoriRisc,
      imageSrc: "/images/warningDetails.png",
    },
    {
      title: "Simptome",
      content: selectedAfectiune.simptome,
      imageSrc: "/images/maskDetails.png",
    },
    {
      title: "Diagnosticare",
      content: selectedAfectiune.diagnosticare,
      imageSrc: "/images/medicalSearchDetails.png",
    },
    {
      title: "Tratament",
      content: selectedAfectiune.tratament,
      imageSrc: "/images/syringeDetails.png",
    },
    {
      title: "Prevenție",
      content: selectedAfectiune.preventie,
      imageSrc: "/images/shieldDetails.png",
    },
  ];

  return (
    <div className="relative w-full">
      {/* <div className="absolute bottom-0 left-0 w-screen h-[65vh] z-10 pointer-events-none xl:bottom-[10vh] transform translate-y-[10%] xl:translate-y-[40%]">
        <Image
          src="/images/detailsShape.png"
          alt="Shape Line"
          layout="fill"
          objectFit="contain"
          className="w-full h-auto"
        />
      </div> */}

      <div className="relative z-10 py-8 ">
        <Wrapper>
          {/* BackLink și Breadcrumbs */}
          <div className="flex md:flex-col sm:flex-col gap-[12rem] md:gap-[2rem] sm:gap-[1rem]">
            <BackLink />
            <Breadcrumbs item={afectiune} />
          </div>
          <Spacing size="4" />
          <Spacing size="8" md="6" sm="5" />

          {sections.map((section, index) => (
            <div
              key={index}
              className="grid grid-cols-12 md:grid-cols-8 sm:grid-cols-2  gap-[3.2rem]"
            >
              <div className="col-span-1 md:col-span-1 sm:hidden">
                <Image
                  src={section.imageSrc}
                  alt={section.title}
                  width={100}
                  height={100}
                  objectFit="contain"
                  className="w-[9rem] h-[9rem]  md:w-[7rem] md:h-[7rem] sm:w-[4rem] sm:h-[4rem]"
                />
              </div>

              <div className="col-span-10 md:col-span-6 ">
                <div className="flex items-center sm:gap-[1rem]">
                  <div className="hidden sm:inline-block">
                    <Image
                      src={section.imageSrc}
                      alt={section.title}
                      width={100}
                      height={100}
                      objectFit="contain"
                      className="w-[9rem] h-[9rem]  md:w-[7rem] md:h-[7rem] sm:w-[4rem] sm:h-[4rem]"
                    />
                  </div>
                  <Typography variant="h3" className="text-dark-blue">
                    {section.title}
                  </Typography>
                </div>
                <Spacing size="2.2" md="2" sm="2" />
                <Typography
                  variant="paragraph"
                  className="text-dark-opacity-75"
                >
                  {section.content}
                </Typography>
                <Spacing size="6" md="4" sm="4" />
              </div>
            </div>
          ))}

          {/* <div className="relative z-10 grid grid-cols-12 md:hidden sm:hidden gap-[16rem] xl:gap-[18rem]">
            <div className="col-span-4 md:col-span-4 xl:ml-[8rem] lg:ml-[6rem]">
              <Orar />
            </div>
            <div className="col-span-4 md:col-span-4">
              <Spacing size="2" />
              <Contact />
            </div>
          </div> */}
        </Wrapper>
      </div>
    </div>
  );
};

export default AfectiuniMedicale;
