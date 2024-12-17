"use client";
import React from "react";
import Typography from "../UI/Typography";
import Spacing from "../UI/Spacing";
import BackLink from "../UI/BackLink";
import Image from "next/image";
import WrapperLarge from "../UI/WrapperLarge";

type ServiceDetailsSection = {
  serviceDetails: {
    title: string;
    servicesText: string;
  };
};

const ServiciuDetalii = ({ serviceDetails }: ServiceDetailsSection) => {
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

      <div className="relative z-10 ">
        <WrapperLarge>
          <div className="text-center mt-[8rem]">
            <Typography
              variant="h2"
              className="capitalize text-dark-blue">
              {serviceDetails.title}
            </Typography>
          </div>

          <Spacing
            size="4"
            md="6"
            sm="6"
          />

          <Typography
            variant="h3"
            className="text-black">
            Prezentare
          </Typography>
          <Spacing
            size="2"
            md="3"
            sm="3"
          />
          <Typography
            variant="paragraph"
            className="text-dark-black-75">
            {serviceDetails.servicesText}
          </Typography>
        </WrapperLarge>
      </div>
    </section>
  );
};

export default ServiciuDetalii;
