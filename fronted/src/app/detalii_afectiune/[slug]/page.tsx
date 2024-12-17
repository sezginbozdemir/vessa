import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterSection from "@/components/NewsletterSection";
import GoogleMaps from "@/components/UI/GoogleMaps";
import Spacing from "@/components/UI/Spacing";
import HeaderDetaliiAfectiune from "@/components/DetaliiAfectiunePageComponents/DetaliiAfectiuneHeader";
import AfectiuniMedicale from "@/components/DetaliiAfectiunePageComponents/AfectiuniMedicale";
import { afectiuniData } from "@/app/mock-data/afectiuniData";
import Head from "next/head";
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";

interface DetaliiAfectiuneProps {
  params: { slug: string };
}

export async function generateMetadata({
  params,
}: DetaliiAfectiuneProps): Promise<Metadata> {
  const afectiune = afectiuniData.find(
    (afectiune) => afectiune.slug === params.slug
  );

  if (!afectiune) {
    return {
      title: "Afectiune necunoscută",
      description: "Detalii despre afectiune necunoscută",
    };
  }

  return {
    title: afectiune.titleMeta,
    description: afectiune.descriptionMeta,
    keywords: afectiune.keywordsMeta,
  };
}

const DetaliiAfectiune = async ({ params }: DetaliiAfectiuneProps) => {
  const afectiune = afectiuniData.find(
    (afectiune) => afectiune.slug === params.slug
  );

  if (!afectiune) {
    return <p>Afectiunea nu a fost găsita.</p>;
  }

  return (
    <div>
      <Head>
        <title>{afectiune.titleMeta}</title>
        <meta name="description" content={afectiune.descriptionMeta} />
        <meta name="keywords" content={afectiune.keywordsMeta} />
      </Head>
      <Header />
      <HeaderDetaliiAfectiune />
      <Spacing size="6" />
      <AfectiuniMedicale afectiune={afectiune} />
      <NewsletterSection />
      <GoogleMaps />
      <Footer />
    </div>
  );
};

export default DetaliiAfectiune;

export async function generateStaticParams() {
  return afectiuniData.map((afectiune) => ({
    slug: afectiune.slug,
  }));
}
