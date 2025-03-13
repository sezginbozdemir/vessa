import { doctorsData } from "../../mock-data/doctorsData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeaderProfileMedic from "@/components/ProfileMedicPageComponents/ProfileMedicHeader";
import DoctorDetailsSection from "@/components/ProfileMedicPageComponents/DoctorDetailsSection";
import Spacing from "@/components/UI/Spacing";
import ArticleSection from "@/components/ArticleSection";
import NewsletterSection from "@/components/NewsletterSection";
import GoogleMaps from "@/components/UI/GoogleMaps";
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return doctorsData.map((doctor) => ({
    slug: doctor.slug,
  }));
}

const ProfileMedic = ({ params }: { params: { slug: string } }) => {
  const doctor = doctorsData.find((doc) => doc.slug === params.slug);

  if (!doctor) {
    notFound();
  }

  return (
    <div>
      <Header />
      <HeaderProfileMedic />
      <Spacing size="10" md="8" sm="8" />
      <DoctorDetailsSection doctor={doctor} />
      <Spacing size="10" md="8" sm="8" />
      <ArticleSection />
      <NewsletterSection shape1 />
      <GoogleMaps />
      <Footer />
    </div>
  );
};

export default ProfileMedic;

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const doctor = doctorsData.find((doc) => doc.slug === params.slug);

  if (!doctor) {
    return {
      title: "Profil medic - Vessa Hospital",
      description: "Profilul medicului solicitat nu a fost găsit.",
      keywords: "profil medic, medici Vessa Hospital",
    };
  }

  return {
    title: doctor.metaTitle || "Profil medic - Vessa Hospital",
    description:
      doctor.metaDescription ||
      "Descoperă informații despre medicii noștri specializați și serviciile oferite la Vessa Hospital.",
    keywords:
      doctor.keywords ||
      "medici, sănătate, tratamente personalizate, Vessa Hospital",
  };
}
