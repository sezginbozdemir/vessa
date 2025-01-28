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
    title: "Colaborăm pentru o Sănătate Mai Bună | VESSA Hospital Timișoara",
    description:
      "La VessaHospital, sănătatea ta este prioritatea noastră. Credem că fiecare pacient merită îngrijire personalizată și un plan de tratament adaptat nevoilor sale. Fiind un spital privat, punem accent pe confort, discreție și cele mai înalte standarde de calitate. VessaHospital este un loc în care fiecare detaliu contează, iar echipa noastră dedicată se asigură că îți oferim nu doar tratamente eficiente, ci și sprijin constant pe parcursul întregii tale recuperări.",
    keywords:
      "îngrijire medicală personalizată, tehnologie avansată, echipă medicală dedicată, sănătatea pacientului, VessaHospital, tratament adaptat, spitalul tău, spital privat, medicii tăi, servicii medicale de top, medici empatici, plan de tratament personalizat,inovație în sănătate, recuperare completă, servicii de sănătate accesibile, evoluție medicală",
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
