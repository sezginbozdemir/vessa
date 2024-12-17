import Header from "@/components/Header";
import Footer from "@/components/Footer";

import AboutUsSection from "@/components/AboutUsPageComponents/AboutUsSection";
import Spacing from "@/components/UI/Spacing";
import CollaborationSection from "@/components/AboutUsPageComponents/CollaborationSection";
import NewsletterSection from "@/components/NewsletterSection";
import GoogleMaps from "@/components/UI/GoogleMaps";
import VisionMissionSection from "@/components/AboutUsPageComponents/VisionMissionSection";
import SuccessJourneySection from "@/components/AboutUsPageComponents/SuccesJounerySection";
import { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  return {
    title: "Despre Noi - Îngrijire Medicală | VESSA Hospital Timișoara",
    description:
      "Descoperă VessaHospital, locul unde sănătatea ta este prioritatea noastră. Oferim servicii medicale personalizate, tehnologii avansate și o echipă dedicată pentru tratamente eficiente și sprijin continuu.",
    keywords:
      "despre noi VESSA Hospital, viziune, misiune, colaborare, succes VESSA, echipă medicală, tehnologie avansată, sănătate, îngrijire medicală personalizată",
  };
};

const AboutUs = () => {
  return (
    <div>
      <Header />
      <AboutUsSection />
      <Spacing size="10" md="8" sm="8" />
      <CollaborationSection displayTitle />
      <Spacing size="10" md="8" sm="8" />
      <SuccessJourneySection />
      <Spacing size="10" md="8" sm="8" />
      <VisionMissionSection />

      <NewsletterSection shape2 />
      <GoogleMaps />
      <Footer />
    </div>
  );
};

export default AboutUs;
