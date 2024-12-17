import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import MedicalSpecialities from "@/components/MedicalSpecialities";
import NewsletterSection from "@/components/NewsletterSection";
import AboutSection from "@/components/AboutSection";
import ArticleSection from "@/components/ArticleSection";
import DictionarySection from "@/components/DictionarySection";
import DoctorsCarouselSection from "@/components/DoctorsCarouselSection";
import GoogleMaps from "@/components/UI/GoogleMaps";
import ImageSection from "@/components/ImageSection";
import Spacing from "@/components/UI/Spacing";
import CookiePopup from "@/components/CookiePopup";
import { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  return {
    title: "Servicii Medicale de Top | VESSA Hospital Timișoara",
    description:
      "Bine ai venit la VESSA Hospital! Descoperă servicii medicale de top, o echipă dedicată și tehnologie avansată pentru sănătatea ta. Programează-te online și află mai multe despre specialitățile și articolele noastre recente.",
    keywords:
      "VESSA Hospital, servicii medicale, sănătate, programare online, dicționar medical, articole sănătate, medici specializați, tehnologie avansată, îngrijire personalizată",
  };
};

const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <Spacing size="10" md="8" sm="8" />
      <AboutSection />
      <Spacing size="10" md="8" sm="6" />
      <Spacing size="10" md="4" sm="8" />
      <MedicalSpecialities />
      <Spacing size="10" md="5" sm="8" />
      <ImageSection />
      {/* <Spacing size="10" />
      <SolutionSection /> */}
      <Spacing size="15" md="8" sm="8" />
      <DoctorsCarouselSection />
      <Spacing size="10" md="6.8" sm="8" />
      <DictionarySection />
      <Spacing size="10" md="8" sm="8" />
      <ArticleSection />
      <NewsletterSection shape1 />
      <GoogleMaps />
      <Footer />
      <CookiePopup />
    </div>
  );
};

export default Home;
