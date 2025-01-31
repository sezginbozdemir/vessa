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
    title: "Îngrijire Medicală Personalizată | VESSA Hospital Timișoara",
    description:
      "La VessaHospital, sănătatea ta este prioritatea noastră. Spitalul tău privat din Timișoara îți oferă îngrijire medicală personalizată, susținută de medicii tăi dedicați și tehnologie avansată. Descoperă cum ne adaptăm permanent pentru a răspunde nevoilor tale, într-un mediu sigur și confortabil, orientat către binele tău.",
    keywords:
      "îngrijire medicală personalizată, tehnologie avansată, echipă medicală dedicată, sănătatea pacientului, VessaHospital, tratament adaptat, spitalul tău, spital privat, medicii tăi, servicii medicale de top, medici empatici, plan de tratament personalizat, inovație în sănătate, recuperare completă, servicii de sănătate accesibile",
    openGraph: {
      title: "Îngrijire Medicală Personalizată | VESSA Hospital Timișoara",
      description:
        "La VessaHospital, sănătatea ta este prioritatea noastră. Spitalul tău privat din Timișoara îți oferă îngrijire medicală personalizată, susținută de medicii tăi dedicați și tehnologie avansată.",
      url: "https://vessahospital.ro",
      type: "website",
      images: [
        {
          url: "https://vessahospital.ro/images/vessa-logo.png",
          alt: "VESSA Hospital - Îngrijire Medicală Personalizată",
        },
      ],
    },
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
