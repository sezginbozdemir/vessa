import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterSection from "@/components/NewsletterSection";
import GoogleMaps from "@/components/UI/GoogleMaps";
import HeaderTermsCondition from "@/components/TermsAndConditions/HeaderTermsConditions";
import Spacing from "@/components/UI/Spacing";
import CookiePolicy from "@/components/Cookie/CookieSection";

const Cookie = () => {
  return (
    <div>
      <Header />
      <HeaderTermsCondition />
      <Spacing
        size="6"
        md="8"
        sm="6"
      />
      <CookiePolicy />
      <NewsletterSection />
      <GoogleMaps />
      <Footer />
    </div>
  );
};

export default Cookie;
