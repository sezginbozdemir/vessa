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

export const generateMetadata = (): Metadata => {
  return {
    title: "Vessa Hospital - Oferta Holter EKG | vessahospital.ro",
  };
};

export async function generateStaticParams() {
  return promos.map((promo) => ({
    specialization: promo.specialization,
    title: promo.title
      .toLowerCase()
      .replace(/\s*\+\s*/g, "-")
      .replace(/\s+/g, "-"),
  }));
}

export default function Page({
  params,
}: {
  params: { specialization: string; title: string };
}) {
  const promo = promos.find(
    (p) =>
      p.specialization === params.specialization &&
      p.title
        .toLowerCase()
        .replace(/\s*\+\s*/g, "-")
        .replace(/\s+/g, "-") === params.title
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
        specialization={promo.specialization}
      />
      <Appoint specialty={promo.specialization} />
      <div className="flex flex-row sm:flex-col xs:flex-col items-start justify-center sm:gap-[3rem] xs:gap-[3rem] mt-36">
        <div className="w-full order-0 sm:order-1 xs:order-1">
          <Info
            packageData={promo.package}
            forWho={promo.forWho}
            benefits={promo.benefits}
          />
        </div>
        <Doctors specialization={promo.specialization} />
      </div>
      <FooterPromo specialty={promo.specialization} />
      <Spacing size="10" md="6" sm="4" />
      <NewsletterSection />
      <GoogleMaps />
      <Footer />
    </>
  );
}
