import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterSection from "@/components/NewsletterSection";
import GoogleMaps from "@/components/UI/GoogleMaps";
import Spacing from "@/components/UI/Spacing";
import HeaderServiciiMedicale from "@/components/ServiciiMedicalePageComponents/HeaderServiciiMedicale";
import DetaliiServicii from "@/components/ServiciiMedicalePageComponents/DetaliiServicii";
import MedicalTeam from "@/components/ServiciiMedicalePageComponents/MedicalTeam";
import { serviciiMedicale } from "@/app/mock-data/serviciiMedicale";
import { doctorsData } from "@/app/mock-data/doctorsData";
import ServiciInfo from "@/components/ServiciiMedicalePageComponents/ServiciInfo";
import { Metadata } from "next";

type ParamsType = {
  slug: string;
  serviciu: string;
};

export async function generateStaticParams() {
  const params: ParamsType[] = [];

  serviciiMedicale.forEach((servici) => {
    params.push({
      slug: servici.slug,
      serviciu: servici.slug,
    });
  });

  doctorsData.forEach((doctor) => {
    doctor.servicesWithDetails?.forEach((service) => {
      const serviceSlug = service.title
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]+/g, "");
      params.push({
        slug: doctor.specialization.toLowerCase().replace(/\s+/g, "-"),
        serviciu: serviceSlug,
      });
    });
  });

  return params;
}

const ServiciiMedicale = async ({
  params,
}: {
  params: { slug?: string; serviciu?: string };
}) => {
  // Verificăm dacă parametrii sunt validați
  if (!params || !params.slug) {
    return <p>Se încarcă...</p>;
  }

  const { slug } = params;

  // Găsim serviciile pe baza slug-ului
  const serviciuDetails = serviciiMedicale.find((serv) => serv.slug === slug);

  if (!serviciuDetails) {
    return <p>Serviciul nu a fost găsit.</p>;
  }

  return (
    <div>
      <Header />
      <HeaderServiciiMedicale headerImageUrl={serviciuDetails.headerImageUrl} />
      <Spacing size="6" md="6" sm="2" />
      <DetaliiServicii serviciu={serviciuDetails} />
      <Spacing size="10" md="8" sm="8" />
      <ServiciInfo />
      <Spacing size="10" md="6" sm="6" />
      <MedicalTeam selectedSpecialization={slug} />
      <NewsletterSection />
      <GoogleMaps />
      <Footer />
    </div>
  );
};

export default ServiciiMedicale;

export async function generateMetadata({
  params,
}: {
  params: { slug?: string };
}): Promise<Metadata> {
  if (!params || !params.slug) {
    return {
      title: "Servicii medicale - VESSA Hospital",
      description: "Descoperă serviciile medicale oferite de VESSA Hospital.",
      keywords: "servicii medicale, sănătate, VESSA Hospital",
    };
  }

  const serviciuDetails = serviciiMedicale.find(
    (serv) => serv.slug === params.slug
  );

  if (!serviciuDetails) {
    return {
      title: "Serviciu medical - VESSA Hospital",
      description:
        "Serviciul solicitat nu a fost găsit. Explorează toate serviciile noastre pentru mai multe informații.",
      keywords: "servicii medicale, sănătate, VESSA Hospital",
    };
  }

  return {
    title: serviciuDetails.metaTitle || serviciuDetails.title,
    description: serviciuDetails.metaDescription || serviciuDetails.description,
    keywords: serviciuDetails.keywords,
  };
}
