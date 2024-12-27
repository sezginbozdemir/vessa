import Image from "next/image";

const HeaderTermsCondition = () => {
  return (
    <section className="relative w-full h-[60vh] md:h-[50vh] sm:h-[40vh] xs:h-[30vh] transition-all bg-light-blue">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/gdpr.jpg"
          alt="Despre noi"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
          className="opacity-90"
        />
      </div>
    </section>
  );
};

export default HeaderTermsCondition;
