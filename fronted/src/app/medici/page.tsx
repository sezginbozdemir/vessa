import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterSection from "@/components/NewsletterSection";
import GoogleMaps from "@/components/UI/GoogleMaps";
import HeaderMedici from "@/components/MediciPageComponents/HeaderMedici";
import MedicFilter from "@/components/MediciPageComponents/MedicFilter";
import Spacing from "@/components/UI/Spacing";
import { Metadata } from "next";

const MediciPage = () => {
  return (
    <div>
      <Header />
      <HeaderMedici />
      <Spacing size="8" md="6" sm="6" />
      <MedicFilter />
      <NewsletterSection />
      <GoogleMaps />
      <Footer />
    </div>
  );
};

export default MediciPage;

export const generateMetadata = (): Metadata => {
  return {
    title: "Medici Specializați în Sănătate | VESSA Hospital Timișoara",
    description:
      "Descoperă echipa de specialiști a VESSA Hospital Timișoara. Medici dedicați și cu experiență, oferind tratamente personalizate și soluții inovatoare pentru sănătatea ta.",
    keywords:
      "medici specialiști, profesioniști în sănătate, echipă medicală dedicată, profiluri medici, servicii personalizate, tratamente inovatoare, diagnostic precis, experți medicali, tehnologie avansată, VESSA Hospital Timișoara",
  };
};
