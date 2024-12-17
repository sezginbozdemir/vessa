import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterSection from "@/components/NewsletterSection";
import GoogleMaps from "@/components/UI/GoogleMaps";
import Spacing from "@/components/UI/Spacing";
import HeaderGalerie from "@/components/GalerieFotoPageComponents/HeaderGalerie";
import GalerieSection from "@/components/GalerieFotoPageComponents/GalerieSection";

const GaleriePage = () => {
  return (
    <div>
      <Header />
      <HeaderGalerie />
      <Spacing
        size="8"
        md="6"
        sm="6"
      />
      <GalerieSection />
      <NewsletterSection />
      <GoogleMaps />
      <Footer />
    </div>
  );
};

export default GaleriePage;
