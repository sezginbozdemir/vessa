import React from "react";
import Typography from "@/components/UI/Typography";
import Image from "next/image";
import Spacing from "./UI/Spacing";
import Button from "./UI/Button";

const SolutionSection = () => {
  return (
    <section className="relative grid grid-cols-12 gap-[3.2rem] px-[20rem] py-[6rem] bg-light-blue overflow-hidden">
      {/* Shape 1 */}
      <div className="absolute left-0 z-0 w-full h-full top-4 xl:top-0">
        <Image
          src="/images/solutionLine1.png"
          alt="Shape 1"
          layout="intrinsic"
          width={1100}
          height={800}
          className="max-w-full max-h-full lg:w-[65%] lg:h-auto lg:max-w-[100vw]"
        />
      </div>

      {/* Shape 2 */}
      <div className="absolute top-0 z-0 w-full h-full left-[40%] xl:left-[45%]">
        <Image
          src="/images/solutionLine2.png"
          alt="Shape 2"
          layout="intrinsic"
          width={1100}
          height={800}
          className="max-w-full max-h-full lg:w-[60%] lg:h-auto"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center col-span-12 mx-auto text-center">
        <div className="relative">
          <Typography
            variant="h2"
            className="text-black">
            Soluțiile noastre
          </Typography>
          <div className="flex justify-start mt-[1rem]">
            <div className="w-[10rem] h-[0.3rem] bg-dark-blue" />
          </div>
        </div>

        <Spacing size="2.5" />
        <Typography
          variant="paragraph"
          className="text-black opacity-75 max-w-[50%] mx-auto lg:mx-0">
          Lorem ipsum dolor sit amet consectetur. Vel ut aliquet feugiat
          consectetur felis nunc nunc amet vitae. Mi sit aliquet mauris graseda
          ut.
        </Typography>
      </div>

      <div className="relative col-span-12 grid grid-cols-2 gap-[3.2rem] items-start justify-center z-10">
        <div className="flex flex-col items-center text-center">
          <Typography
            variant="h3"
            className="text-black">
            Orar zilnic
          </Typography>

          <Spacing size="4" />

          <div className="w-full">
            <div className="flex justify-between w-[100%] lg:w-[45rem] mx-auto">
              <div className="text-left">
                <Typography
                  variant="paragraph"
                  className="pb-[1.2rem]">
                  Luni-Miercuri
                </Typography>
              </div>
              <div className="text-right">
                <Typography
                  variant="paragraph"
                  className="pb-[1.2rem]">
                  10:00-21:30
                </Typography>
              </div>
            </div>
            <div className="flex justify-center">
              <hr className="border-white my-[0.8rem] w-[45rem] text-center" />{" "}
            </div>
            <div className="flex justify-between w-[100%] lg:w-[45rem] mx-auto">
              <div className="text-left">
                <Typography
                  variant="paragraph"
                  className="pb-[1.2rem]">
                  Joi-Vineri
                </Typography>
              </div>
              <div className="text-right">
                <Typography
                  variant="paragraph"
                  className="pb-[1.2rem]">
                  09:00-22:30
                </Typography>
              </div>
            </div>
            <div className="flex justify-center">
              <hr className="border-white my-[0.8rem] w-[45rem] text-center" />{" "}
            </div>
            <div className="flex justify-between w-[100%] lg:w-[45rem] mx-auto">
              <div className="text-left">
                <Typography
                  variant="paragraph"
                  className="pb-[1.2rem]">
                  Sâmbătă-Duminică
                </Typography>
              </div>
              <div className="text-right">
                <Typography
                  variant="paragraph"
                  className="pb-[1.2rem]">
                  09:30-20:30
                </Typography>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center text-center">
          <Typography
            variant="h3"
            className="text-black">
            Contact
          </Typography>

          <Spacing size="2" />

          <div className="flex items-center space-x-[1.6rem]">
            <Typography
              variant="paragraph"
              className="text-black">
              office@vessahospital.ro
            </Typography>

            <Button
              label="+0123 456 789"
              className="bg-medium-blue"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
