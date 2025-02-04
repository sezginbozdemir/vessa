import Footer from "@/components/Footer";
import FooterPromo from "../components/FooterPromo";
import NewsletterSection from "@/components/NewsletterSection";
import GoogleMaps from "@/components/UI/GoogleMaps";
import Spacing from "@/components/UI/Spacing";
import { notFound } from "next/navigation";
import Intro from "../components/Intro";
import Input from "../components/Input";
import Appoint from "../components/Appoint";
import Doctors from "../components/Doctors";
import Info from "../components/Info";
import Header from "@/components/Header";
import { promos } from "../data";

export async function generateStaticParams() {
  return promos.map((promo) => ({
    slug: promo.id,
  }));
}

export default function Page({ params }: { params: { slug: string } }) {
  const promo = promos.find((p) => p.id === params.slug);

  if (!promo) {
    notFound();
  }

  return (
    <div>
      <div className="sm:hidden xs:hidden">
        <Header />
      </div>
      <Intro
        title={promo.title}
        title2={promo.title2}
        subTitle={promo.subTitle}
        price={promo.price}
        oldPrice={promo.oldPrice}
        availability={promo.availability}
      />
      <Input />
      <Appoint specialty={promo.specialization} />
      <Doctors specialization={promo.specialization} />
      <Info
        packageData={promo.package}
        forWho={promo.forWho}
        benefits={promo.benefits}
      />
      <FooterPromo specialty={promo.specialization} />
      <Spacing size="10" md="6" sm="4" />
      <NewsletterSection />
      <GoogleMaps />
      <Footer />
    </div>
  );
}
