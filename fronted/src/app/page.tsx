import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import MedicalSpecialities from "@/components/MedicalSpecialities";
import NewsletterSection from "@/components/NewsletterSection";
import AboutSection from "@/components/AboutSection";
import ArticleSection from "@/components/ArticleSection";
import DictionarySection from "@/components/DictionarySection";
import DoctorsCarouselSection from "@/components/DoctorsCarouselSection";
import GoogleMaps from "@/components/UI/GoogleMaps";
import ImageSection from "@/components/ImageSection";
import Spacing from "@/components/UI/Spacing";
import CookiePopup from "@/components/CookiePopup";
import { Metadata } from "next";
import Script from "next/script";

export const generateMetadata = (): Metadata => {
  return {
    title: "Îngrijire Medicală Personalizată | VESSA Hospital Timișoara",
    description:
      "La VessaHospital, sănătatea ta este prioritatea noastră. Spitalul tău privat din Timișoara îți oferă îngrijire medicală personalizată, susținută de medicii tăi dedicați și tehnologie avansată.",
    keywords:
      "îngrijire medicală personalizată, tehnologie avansată, echipă medicală dedicată, sănătatea pacientului, VessaHospital, tratament adaptat, spitalul tău, spital privat, medicii tăi, servicii medicale de top, medici empatici, plan de tratament personalizat, inovație în sănătate, recuperare completă, servicii de sănătate accesibile",
    openGraph: {
      title: "Îngrijire Medicală Personalizată | VESSA Hospital Timișoara",
      description:
        "La VessaHospital, sănătatea ta este prioritatea noastră. Spitalul tău privat din Timișoara îți oferă îngrijire medicală personalizată, susținută de medicii tăi dedicați și tehnologie avansată.",
      url: "https://vessahospital.ro",
      type: "website",
      images: [
        {
          url: "https://vessahospital.ro/images/Logo_square.webp",
          width: 512,
          height: 512,
          alt: "Logo Vessa Hospital",
        },
        {
          url: "https://vessahospital.ro/images/Vessa-Hospital_square.webp",
          width: 1024,
          height: 1024,
          alt: "Vessa Hospital",
        },
        {
          url: "https://vessahospital.ro/images/Vessa-Hospital_wide.webp",
          width: 1200,
          height: 675,
          alt: "Vessa Hospital",
        },
      ],
    },
  };
};

const Home = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Hospital",
    "name": "Vessa Hospital",
    "url": "https://www.vessahospital.ro",
    "logo": "https://vessahospital.ro/images/logo_square.webp",
    "image": [
      {
        "@type": "ImageObject",
        "url": "https://vessahospital.ro/images/Vessa-Hospital_square.webp",
        "width": 1024,
        "height": 1024
      },
      {
        "@type": "ImageObject",
        "url": "https://vessahospital.ro/images/Vessa-Hospital_wide.webp",
        "width": 1200,
        "height": 675
      }
    ],
    "description": "Spital privat multidisciplinar în Timișoara, oferind îngrijire medicală de înaltă calitate.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Strada Franyo Zoltan, nr. 6",
      "addressLocality": "Timișoara",
      "addressRegion": "TM",
      "postalCode": "300014",
      "addressCountry": "RO"
    },
    "telephone": "+40 744 833 815",
    "email": "office@vessahospital.ro",
    "sameAs": [
      "https://www.facebook.com/vessahospital.ro",
      "https://www.instagram.com/vessahospital.ro",
      "https://www.tiktok.com/@vessahospital.ro",
      "https://wa.me/+40770520904"
    ],
   "department": [
     {
       "@type": "MedicalClinic",
       "name": "Specialități",
       "url": "https://vessahospital.ro/specialitati",
       "address": {
         "@type": "PostalAddress",
         "streetAddress": "Strada Franyo Zoltan, nr. 6",
         "addressLocality": "Timișoara",
         "addressRegion": "TM",
         "postalCode": "300014",
         "addressCountry": "RO"
       }
     },
     {
       "@type": "Physician",
       "name": "Medici",
       "url": "https://vessahospital.ro/medici",
       "address": {
         "@type": "PostalAddress",
         "streetAddress": "Strada Franyo Zoltan, nr. 6",
         "addressLocality": "Timișoara",
         "addressRegion": "TM",
         "postalCode": "300014",
         "addressCountry": "RO"
       }
     }
   ]
  };

  return (
    <div>
      <Script
        type="application/ld+json"
        id="json-ld"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header />
      <HeroSection />
      <Spacing size="10" md="8" sm="8" />
      <AboutSection />
      <Spacing size="10" md="8" sm="6" />
      <Spacing size="10" md="4" sm="8" />
      <MedicalSpecialities />
      <Spacing size="10" md="5" sm="8" />
      <ImageSection />
      <Spacing size="15" md="8" sm="8" />
      <DoctorsCarouselSection />
      <Spacing size="10" md="6.8" sm="8" />
      <DictionarySection />
      <Spacing size="10" md="8" sm="8" />
      <ArticleSection />
      <NewsletterSection shape1 />
      <GoogleMaps />
      <Footer />
      <CookiePopup />
    </div>
  );
};

export default Home;