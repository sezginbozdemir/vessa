import Footer from "@/components/Footer";
import FooterPromo from "../../components/FooterPromo";
import NewsletterSection from "@/components/NewsletterSection";
import GoogleMaps from "@/components/UI/GoogleMaps";
import Spacing from "@/components/UI/Spacing";
import { notFound } from "next/navigation";
import Intro from "../../components/Intro";
import Appoint from "../../components/Appoint";
import Doctors from "../../components/Doctors";
import Info from "../../components/Info";
import { promos } from "../../data";
import { Metadata } from "next";
import InfoDef from "../../components/InfoDef";

export async function generateStaticParams() {
  return promos.map((promo) => ({
    specialization: promo.specialization,
    par: promo.par,
  }));
}
export const generateMetadata = ({
  params,
}: {
  params: { specialization: string; par: string };
}): Metadata => {
  const promo = promos.find(
    (p) => p.specialization === params.specialization && p.par === params.par
  );

  return {
    title: promo?.metaTitle,
  };
};

export default function Page({
  params,
}: {
  params: { specialization: string; par: string };
}) {
  const promo = promos.find(
    (p) => p.specialization === params.specialization && p.par === params.par
  );

  if (!promo) {
    notFound();
  }

  return (
    <>
      <Intro
        title={promo.title}
        price={promo.price}
        availability={promo.availability}
        doctor={promo.doctor}
        id={promo.id}
      />

      <Appoint specialty={promo.specialization} />
      <div className="flex flex-row sm:flex-col xs:flex-col items-start justify-center sm:gap-[80px] xs:gap-[80px] mt-36">
        <div className="w-full order-0 sm:order-1 xs:order-1">
          {promo.id === "variant" ? (
            <Info
              packageData={promo.package}
              forWho={promo.forWho}
              benefits={promo.benefits}
              main={promo.main}
            />
          ) : (
            <InfoDef
              packageData={promo.package}
              forWho={promo.forWho}
              benefits={promo.benefits}
              main={promo.main}
              info={promo.info}
            />
          )}
        </div>
        <Doctors doctor={promo.doctor} />
      </div>
      <FooterPromo
        footerTitle={promo.footerTitle}
        specialty={promo.specialization}
      />
      <Spacing size="10" md="6" sm="4" />
      <NewsletterSection />
      <GoogleMaps />
      <Footer />
    </>
  );
}
