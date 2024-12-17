import Image from "next/image";

const HeaderTermsCondition = () => {
  return (
    <section className="relative w-full h-[50vh] lg:h-[70vh] bg-light-blue">
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
