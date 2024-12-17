import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterSection from "@/components/NewsletterSection";
import GoogleMaps from "@/components/UI/GoogleMaps";
import HeaderSpecialitati from "@/components/SpecialitatiPageComponents/HeaderSpecialitati";
import SpecialityFilter from "@/components/SpecialitatiPageComponents/SpecialityFilter";
import Spacing from "@/components/UI/Spacing";
import { Metadata } from "next";

const SpecialitatiPage = () => {
  return (
    <div>
      <Header />
      <HeaderSpecialitati />
      <Spacing size="8" md="6" sm="6" />
      <SpecialityFilter />
      <NewsletterSection />
      <GoogleMaps />
      <Footer />
    </div>
  );
};

export default SpecialitatiPage;

export const generateMetadata = (): Metadata => {
  return {
    title: "Specialități Medicale Avansate | VESSA Hospital Timișoara",
    description:
      "Explorează specialitățile medicale oferite de VESSA Hospital Timișoara. De la Cardiologie și Neurochirurgie la Endocrinologie și Ortopedie, echipa noastră oferă soluții personalizate pentru sănătatea ta.",
    keywords:
      "specialități medicale, cardiologie, electrofiziologie cardiacă, neurochirurgie, chirurgie generală, endocrinologie, ortopedie, medicina internă, gastroenterologie, tratament avansat, diagnostic precis, tehnologie modernă, VESSA Hospital Timișoara",
  };
};
