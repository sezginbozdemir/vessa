"use client";
import React from "react";
import Typography from "../UI/Typography";
import Spacing from "../UI/Spacing";
import BackLink from "../UI/BackLink";
import Image from "next/image";
import WrapperLarge from "../UI/WrapperLarge";

type ServiceDetailsSection = {
  serviciu?: {
    title: string;
    prezentare?: string;
    statistici?: string[];
    title3?: string;
    text3?: string;
    title4?: string;
    text4?: string;
    title5?: string;
    text5?: string;
    buttonText?: string;
    imageUrl?: string;
    headerImageUrl?: string;
    slug?: string;
  };
};

const DetaliiServicii = ({ serviciu }: ServiceDetailsSection) => {
  return (
    <section className="relative w-full">
      <WrapperLarge>
        <BackLink />
      </WrapperLarge>

      <div className="absolute top-[-3vw] left-0 w-full h-[31rem] z-0 pointer-events-none">
        <Image
          src="/images/serviciiMedicaleLine.png"
          alt="Shape Line"
          layout="fill"
          objectFit="cover"
          className="w-full h-auto"
        />
      </div>

      <WrapperLarge>
        <div className="relative z-10">
          <div className="text-center mt-[8rem]">
            <Typography variant="h2" className="text-dark-blue">
              {serviciu?.title || "Titlu indisponibil"}
            </Typography>
          </div>

          <Spacing size="4" md="4" sm="4" />

          {serviciu?.prezentare && (
            <>
              <Typography variant="h3" className="text-black">
                Prezentare
              </Typography>
              <Spacing size="2" md="2" sm="2" />
              <Typography variant="paragraph" className="text-dark-opacity-75">
                {serviciu.prezentare}
              </Typography>
            </>
          )}

          <Spacing size="4" md="3" sm="3" />

          {serviciu?.statistici && serviciu.statistici.length > 0 && (
            <>
              <Typography variant="h3" className="text-black">
                Statistici
              </Typography>
              <Spacing size="2" md="2" sm="2" />
              <ul className="flex flex-col pl-8 ml-4 list-disc text-dark-opacity-75">
                {serviciu.statistici.map((statistic, index) => (
                  <li key={index}>
                    <Typography variant="paragraph">{statistic}</Typography>
                  </li>
                ))}
              </ul>
            </>
          )}

          <Spacing size="4" md="3" sm="3" />

          {serviciu?.title3 && serviciu?.text3 && (
            <>
              <Typography variant="h3" className="text-black">
                {serviciu.title3}
              </Typography>
              <Spacing size="2" md="2" sm="2" />
              <Typography variant="paragraph" className="text-dark-opacity-75">
                {serviciu.text3}
              </Typography>
            </>
          )}

          <Spacing size="4" md="3" sm="4" />

          {serviciu?.title4 && serviciu?.text4 && (
            <>
              <Typography variant="h3" className="text-black">
                {serviciu.title4}
              </Typography>
              <Spacing size="2" md="2" sm="2" />
              <Typography variant="paragraph" className="text-dark-opacity-75">
                {serviciu.text4}
              </Typography>
            </>
          )}

          <Spacing size="4" md="3" sm="4" />

          {serviciu?.title5 && serviciu?.text5 && (
            <>
              <Typography variant="h3" className="text-black">
                {serviciu.title5}
              </Typography>
              <Spacing size="2" md="2" sm="2" />
              <Typography variant="paragraph" className="text-dark-opacity-75">
                {serviciu.text5}
              </Typography>
            </>
          )}
        </div>
      </WrapperLarge>
    </section>
  );
};

export default DetaliiServicii;
