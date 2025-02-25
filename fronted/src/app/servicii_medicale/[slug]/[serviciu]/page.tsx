import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterSection from "@/components/NewsletterSection";
import GoogleMaps from "@/components/UI/GoogleMaps";
import Spacing from "@/components/UI/Spacing";
import HeaderServiciiMedicale from "@/components/ServiciiMedicalePageComponents/HeaderServiciiMedicale";
import { doctorsData } from "@/app/mock-data/doctorsData";
import { serviciiMedicale } from "@/app/mock-data/serviciiMedicale";
import MedicalTeam from "@/components/ServiciiMedicalePageComponents/MedicalTeam";
import ServiciOrar from "@/components/ServiciiMedicalePageComponents/ServiciInfo";
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import ServiceDetail from "./components/ServiceDetail";

export async function generateMetadata({
  params,
}: {
  params: { slug: string; serviciu: string };
}): Promise<Metadata> {
  const { slug, serviciu } = params;

  const doctor = doctorsData.find((doc) => {
    const specializationSlug = doc.specialization
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/gi, "");
    return specializationSlug === slug;
  });

  if (!doctor) {
    return {
      title: "Specialitate medicală - VESSA Hospital",
      description:
        "Serviciul medical solicitat nu a fost găsit. Explorează serviciile noastre pentru mai multe informații.",
      keywords: "servicii medicale, sănătate, VESSA Hospital",
    };
  }

  const serviceWithDetails = doctor.servicesWithDetails?.find(
    (service) => service.slug === serviciu
  );

  if (!serviceWithDetails) {
    return {
      title: "Serviciu medical - VESSA Hospital",
      description:
        "Detaliile serviciului medical solicitat nu sunt disponibile.",
      keywords: "servicii medicale, sănătate, VESSA Hospital",
    };
  }

  return {
    title: serviceWithDetails.metaTitle || "Serviciu medical - VESSA Hospital",
    description:
      serviceWithDetails.metaDescription ||
      "Descoperă detalii despre acest serviciu medical.",
    keywords:
      serviceWithDetails.keywords ||
      "servicii medicale, sănătate, VESSA Hospital",
  };
}

type ParamsType = {
  slug: string;
  serviciu: string | undefined;
};

// Generating static params for all possible combinations of slug and serviciu
export async function generateStaticParams() {
  const params: ParamsType[] = doctorsData.flatMap((doctor) => {
    const slug = doctor.specialization
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/gi, ""); // Generează slug pentru specializare

    if (
      !doctor.servicesWithDetails ||
      doctor.servicesWithDetails.length === 0
    ) {
      return []; // Dacă nu există servicii, nu generăm parametri
    }

    // Utilizăm slug-ul real din servicesWithDetails
    return doctor.servicesWithDetails.map((service) => ({
      slug,
      serviciu: service.slug,
    }));
  });

  return params;
}

const ServiciuMedical = async ({
  params,
}: {
  params: { slug: string; serviciu: string };
}) => {
  const { slug, serviciu } = params;

  // Găsește doctorul pe baza slug-ului specializării
  const doctor = doctorsData.find((doc) => {
    const specializationSlug = doc.specialization
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/gi, ""); // Generează slug pentru specializare

    return specializationSlug === slug;
  });

  if (!doctor) {
    return <p>Doctorul pentru specialitatea respectivă nu a fost găsit.</p>;
  }

  // Găsește serviciul pe baza slug-ului primit
  const normalizeSlug = (text: string) =>
    text
      ?.normalize("NFD") // Normalizează caracterele cu diacritice
      .replace(/[\u0300-\u036f]/g, "") // Elimină diacriticele
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-") // Înlocuiește spațiile cu `-`
      .replace(/[^a-z0-9-]/gi, ""); // Elimină caracterele nepermise

  const serviceWithDetails = doctor.servicesWithDetails?.find(
    (service) => normalizeSlug(service.slug!) === normalizeSlug(serviciu)
  );

  if (!serviceWithDetails) {
    return (
      <p>Serviciul specificat nu a fost găsit pentru această specialitate.</p>
    );
  }
  const serviciuDetails = serviciiMedicale.find((serv) => serv.slug === slug);

  return (
    <div>
      <Header />
      <HeaderServiciiMedicale
        headerImageUrl={serviciuDetails?.headerImageUrl}
      />
      <Spacing size="6" md="6" sm="6" />
      <ServiceDetail serviceDetails={serviceWithDetails} />
      <Spacing size="10" md="6" sm="6" />
      <ServiciOrar newTitle />
      <Spacing size="10" md="6" sm="6" />
      <MedicalTeam selectedSpecialization={doctor.specialization} />
      <NewsletterSection />
      <GoogleMaps />
      <Footer />
    </div>
  );
};

export default ServiciuMedical;
