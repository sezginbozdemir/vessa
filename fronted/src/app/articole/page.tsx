import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterSection from "@/components/NewsletterSection";
import GoogleMaps from "@/components/UI/GoogleMaps";
import Spacing from "@/components/UI/Spacing";
import HeaderArticole from "@/components/ArticolePageComponents/HeaderArticole";
import ArticleFilter from "@/components/ArticolePageComponents/ArticleFilter";

const ArticolePage = () => {
  return (
    <div>
      <Header />
      <HeaderArticole />
      <Spacing
        size="8"
        md="6"
        sm="6"
      />
      <ArticleFilter />
      <NewsletterSection />
      <GoogleMaps />
      <Footer />
    </div>
  );
};

export default ArticolePage;
