import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterSection from "@/components/NewsletterSection";
import GoogleMaps from "@/components/UI/GoogleMaps";
import HeaderDictionar from "@/components/DictionarPageComponents/HeaderDictionar";
import DictionarFilter from "@/components/DictionarPageComponents/DictionarFilter";
import Spacing from "@/components/UI/Spacing";
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";

export const generateMetadata = (): Metadata => {
  return {
    title: "Dicționar Medical - Afecțiuni și Tratamente | VESSA Hospital",
    description:
      "Explorează Dicționarul Medical al VESSA Hospital pentru a afla informații despre diverse afecțiuni, cauze și tratamente. O resursă de încredere pentru sănătatea ta.",
    keywords:
      "dicționar medical, afecțiuni medicale, cauze afecțiuni, tratament afecțiuni, VESSA Hospital",
  };
};

const Dictionar = () => {
  return (
    <div>
      <Header />
      <HeaderDictionar />
      <Spacing size="8" md="8" sm="8" />
      <DictionarFilter />
      <NewsletterSection />
      <GoogleMaps />
      <Footer />
    </div>
  );
};

export default Dictionar;
