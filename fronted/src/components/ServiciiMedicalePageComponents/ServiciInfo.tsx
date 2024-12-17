"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { doctorsData } from "@/app/mock-data/doctorsData";
import Typography from "../UI/Typography";
import Spacing from "../UI/Spacing";
import WrapperLarge from "../UI/WrapperLarge";

type ServiciInfoProps = {
  newTitle?: boolean;
};

const ServiciInfo = ({ newTitle }: ServiciInfoProps) => {
  const [slug, setSlug] = useState<string | undefined>(undefined);
  const pathname = usePathname();

  useEffect(() => {
    const slugFromPath = pathname.split("/")[2];
    setSlug(slugFromPath);
  }, [pathname]);

  // Ensure the slug is defined before filtering
  if (!slug) {
    return <p>Nu există date despre această specialitate medicală.</p>;
  }

  const doctorsWithSpecialization = doctorsData.filter((doctor) => {
    const formattedSpecialization = doctor.specialization
      .normalize("NFD") // Decompose accented characters into base characters
      .replace(/[\u0300-\u036f]/g, "") // Remove the accents
      .toLowerCase()
      .replace(/\s+/g, "-") // Replace spaces with dashes to match the slug format
      .replace(/[^\w-]+/g, ""); // Remove any non-word characters except dashes

    return formattedSpecialization === slug;
  });

  // Combine all services from doctors with the same specialization into a single list
  const allServices = doctorsWithSpecialization
    .flatMap(
      (doctor) => doctor.servicesWithDetails || [] // Asigură-te că e întotdeauna un array
    )
    .filter((service) => service !== undefined);

  if (doctorsWithSpecialization.length === 0) {
    return <p>Nu există date despre această specialitate medicală.</p>;
  }

  return (
    <WrapperLarge>
      <section className="grid grid-cols-12 gap-8 md:grid-cols-8 ">
        <div className="col-span-12 md:col-span-8 ">
          <Typography variant="h3" className="text-dark-blue">
            {newTitle ? "Servicii medicale asociate" : "Servicii medicale"}
          </Typography>
          <Spacing size="3.6" md="3" sm="3" />
          <ul className="gap-4 ml-12 list-disc  md:col-span-8 md:gap-[2rem] md:flex md:flex-col  sm:gap-[2rem] sm:flex sm:flex-col text-dark-blue">
            {allServices.map((service, index) => (
              <li key={index}>
                <Link href={`/servicii_medicale/${slug}/${service?.slug}`}>
                  <Typography
                    variant="detailsBold"
                    className="text-dark-blue hover:text-medium-blue"
                  >
                    {service?.title}
                  </Typography>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </WrapperLarge>
  );
};

export default ServiciInfo;
