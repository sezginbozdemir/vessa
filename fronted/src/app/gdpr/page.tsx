import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterSection from "@/components/NewsletterSection";
import GoogleMaps from "@/components/UI/GoogleMaps";
import Spacing from "@/components/UI/Spacing";
import GDPR from "@/components/GDPR/gdpr";
import HeaderTermsCondition from "@/components/TermsAndConditions/HeaderTermsConditions";

const gdpr = () => {
  return (
    <div>
      <Header />
      <HeaderTermsCondition />
      <Spacing size="6" md="8" sm="6" />
      <GDPR />
      <NewsletterSection />
      <GoogleMaps />
      <Footer />
    </div>
  );
};

export default gdpr;
