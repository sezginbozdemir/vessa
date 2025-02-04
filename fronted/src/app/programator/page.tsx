import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterSection from "@/components/NewsletterSection";
import GoogleMaps from "@/components/UI/GoogleMaps";
import Spacing from "@/components/UI/Spacing";
import HeaderProgramator from "@/components/ProgramatorPageComponents/HeaderProgramator";
import AppointmentForm from "@/components/ProgramatorPageComponents/ProgramatorForm";

import { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  return {
    title: "Programare on-line | vessahospital.ro",
  };
};

const Programator = () => {
  return (
    <>
      <Header />
      <HeaderProgramator />
      <Spacing size="8" md="6" sm="6" />
      <AppointmentForm />
      <NewsletterSection />
      <GoogleMaps />
      <Footer />
    </>
  );
};

export default Programator;
