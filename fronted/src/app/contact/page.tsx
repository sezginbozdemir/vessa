import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterSection from "@/components/NewsletterSection";
import GoogleMaps from "@/components/UI/GoogleMaps";
import Spacing from "@/components/UI/Spacing";
import HeaderContact from "@/components/ContactPageComponents/HeaderContact";
import ContactForm from "@/components/ContactPageComponents/ContactForm";

const Contact = () => {
  return (
    <>
      <Header />
      <HeaderContact />
      <Spacing
        size="8"
        md="8"
        sm="8"
      />
      <ContactForm />
      <NewsletterSection />
      <GoogleMaps />
      <Footer />
    </>
  );
};

export default Contact;
