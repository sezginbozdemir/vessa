import { articleCards } from "@/app/mock-data/articleCards";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NewsletterSection from "@/components/NewsletterSection";
import GoogleMaps from "@/components/UI/GoogleMaps";
import ArticleDetail from "@/components/ArticolePageComponents/ArticleDetails";
import HeaderArticole from "@/components/ArticolePageComponents/HeaderArticole";
import Spacing from "@/components/UI/Spacing";
import { Metadata } from "next";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return articleCards
    .filter((article) => article.isArticle)
    .map((article) => ({
      slug: article.slug,
    }));
}
const ArticleDetailPage = async ({ params }: PageProps) => {
  const article = articleCards.find((item) => item.slug === params.slug);

  if (!article) {
    return <p>Articolul nu a fost găsit.</p>;
  }

  return (
    <div>
      <Header />
      <HeaderArticole />
      <Spacing size="8" md="8" sm="8" />
      <ArticleDetail article={article} />
      <NewsletterSection />
      <GoogleMaps />
      <Footer />
    </div>
  );
};

export default ArticleDetailPage;

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const article = articleCards.find((item) => item.slug === params.slug);

  if (!article) {
    return {
      title: "Articol - VESSA Hospital",
      description:
        "Articolul solicitat nu a fost găsit. Explorează articolele noastre pentru mai multe informații.",
      keywords: "articole medicale, sănătate, VESSA Hospital",
    };
  }

  return {
    title: article.metaTitle || article.title,
    description: article.metaDescription || article.description,
    keywords: article.keywords || "articole medicale, sănătate, VESSA Hospital",
  };
}
