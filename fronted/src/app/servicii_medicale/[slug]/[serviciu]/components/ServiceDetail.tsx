"use client";
import React from "react";
import Typography from "@/components/UI/Typography";
import Spacing from "@/components/UI/Spacing";
import BackLink from "@/components/UI/BackLink";
import Image from "next/image";
import WrapperLarge from "@/components/UI/WrapperLarge";

type ServiceDetailsSection = {
  serviceDetails: {
    title: string;
    servicesText: string;
    title1?: string;
    title2?: string;
    title3?: string;
    title4?: string;
    title5?: string;
    title6?: string;
    title7?: string;
    text1?: string;
    text2?: string;
    text3?: string;
    text4?: string;
    text5?: string;
    list1?: string[];
    list2?: string[];
    list3?: string[];
    list4?: string[];
  };
};

const ServiceDetail = ({ serviceDetails }: ServiceDetailsSection) => {
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
            <Typography variant="h2" className="capitalize text-dark-blue">
              {serviceDetails.title}
            </Typography>
          </div>

          <Spacing size="4" md="6" sm="6" />

          <Typography variant="h3" className="text-black">
            Prezentare
          </Typography>
          <Spacing size="2" md="3" sm="3" />
          <Typography variant="paragraph" className="text-dark-black-75">
            {serviceDetails.servicesText}
          </Typography>

          {/* Section 1: Title 1, Text 1, List 1 */}
          {serviceDetails.title1 && (
            <>
              <Spacing size="4" md="6" sm="6" />
              <Typography variant="h3" className="text-black">
                {serviceDetails.title1}
              </Typography>
              <Spacing size="2" md="3" sm="3" />
              <Typography variant="paragraph" className="text-dark-black-75">
                {serviceDetails.text1}
              </Typography>
              <Spacing size="2" md="3" sm="3" />
              {serviceDetails.list1 && (
                <Typography variant="paragraph" className="text-dark-black-75">
                  <ul className="list-disc pl-[2rem]">
                    {serviceDetails.list1.map((item, index) => (
                      <li
                        key={index}
                        dangerouslySetInnerHTML={{ __html: item }}
                      />
                    ))}
                  </ul>
                </Typography>
              )}
            </>
          )}

          {/* Section 2: Title 2, Text 2 */}
          {serviceDetails.title2 && (
            <>
              <Spacing size="4" md="6" sm="6" />
              <Typography variant="h3" className="text-black">
                {serviceDetails.title2}
              </Typography>
              <Spacing size="2" md="3" sm="3" />
              <Typography variant="paragraph" className="text-dark-black-75">
                <span
                  dangerouslySetInnerHTML={{ __html: serviceDetails.text2! }}
                />
              </Typography>
              <Spacing size="2" md="3" sm="3" />
            </>
          )}

          {/* Section 3: Title 3, List 3 */}
          {serviceDetails.title3 && (
            <>
              <Spacing size="4" md="6" sm="6" />
              <Typography variant="h3" className="text-black">
                {serviceDetails.title3}
              </Typography>
              <Spacing size="2" md="3" sm="3" />
              {serviceDetails.list2 && (
                <Typography variant="paragraph" className="text-dark-black-75">
                  <ul className="list-none pl-[2rem]">
                    {serviceDetails.list2.map((item, index) => (
                      <li
                        key={index}
                        dangerouslySetInnerHTML={{ __html: item }}
                        className="mb-[2rem] pl-16 relative before:content-['✓'] before:text-white before:bg-dark-blue before:rounded-[5px] before:px-[5px] before:w-[20px] before:h-[20px] before:flex before:items-center before:justify-center before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2"
                      />
                    ))}
                  </ul>
                </Typography>
              )}

              <Spacing size="2" md="3" sm="3" />
            </>
          )}

          {/* Section 4: Title 4, Text 4 */}
          {serviceDetails.title4 && (
            <>
              <Spacing size="4" md="6" sm="6" />
              <Typography variant="h3" className="text-black">
                {serviceDetails.title4}
              </Typography>
              <Spacing size="2" md="3" sm="3" />
              <Typography variant="paragraph" className="text-dark-black-75">
                {serviceDetails.text3}
              </Typography>
              <Spacing size="2" md="3" sm="3" />
            </>
          )}

          {/* Section 5: Title 5, Text 5 */}
          {serviceDetails.title5 && (
            <>
              <Spacing size="4" md="6" sm="6" />
              <Typography variant="h3" className="text-black">
                {serviceDetails.title5}
              </Typography>
              <Spacing size="2" md="3" sm="3" />
              <Typography variant="paragraph" className="text-dark-black-75">
                {serviceDetails.text4}
              </Typography>
              <Spacing size="2" md="3" sm="3" />
              {serviceDetails.list3 && (
                <Typography variant="paragraph" className="text-dark-black-75">
                  <ul className="list-disc pl-[2rem]">
                    {serviceDetails.list3.map((item, index) => (
                      <li
                        key={index}
                        dangerouslySetInnerHTML={{ __html: item }}
                      />
                    ))}
                  </ul>
                </Typography>
              )}
            </>
          )}

          {/* Section 6: Title 6 */}
          {serviceDetails.title6 && (
            <>
              <Spacing size="4" md="6" sm="6" />
              <Typography variant="h3" className="text-black">
                {serviceDetails.title6}
              </Typography>
              <Spacing size="2" md="3" sm="3" />
              <Typography variant="paragraph" className="text-dark-black-75">
                <span
                  dangerouslySetInnerHTML={{ __html: serviceDetails.text5! }}
                />
              </Typography>
            </>
          )}

          {/* Section 7: Title 7 and List 4 */}
          {serviceDetails.title7 && serviceDetails.list4 && (
            <>
              <Spacing size="4" md="6" sm="6" />
              <Typography variant="h3" className="text-black">
                {serviceDetails.title7}
              </Typography>
              <Spacing size="2" md="3" sm="3" />
              <Typography variant="paragraph" className="text-dark-black-75">
                <ul className="list-none pl-6">
                  {serviceDetails.list4.map((item, index) => (
                    <li
                      key={index}
                      dangerouslySetInnerHTML={{ __html: item }}
                      className="mb-[2rem] pl-16 relative before:content-['✓'] before:text-white before:bg-dark-blue before:rounded-[5px] before:px-[5px] before:w-[20px] before:h-[20px] before:flex before:items-center before:justify-center before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2"
                    />
                  ))}
                </ul>
              </Typography>
            </>
          )}
        </WrapperLarge>
      </div>
    </section>
  );
};

export default ServiceDetail;
