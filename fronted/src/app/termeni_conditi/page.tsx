import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterSection from "@/components/NewsletterSection";
import GoogleMaps from "@/components/UI/GoogleMaps";
import Spacing from "@/components/UI/Spacing";
import TermsAndConditions from "@/components/TermsAndConditions/TermsAndContionsSection";
import HeaderTermsCondition from "@/components/TermsAndConditions/HeaderTermsConditions";

const TermsAndContion = () => {
  return (
    <div>
      <Header />
      <HeaderTermsCondition />
      <Spacing
        size="6"
        md="8"
        sm="6"
      />
      <TermsAndConditions />
      <NewsletterSection />
      <GoogleMaps />
      <Footer />
    </div>
  );
};

export default TermsAndContion;
