"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NewsletterSection from "@/components/NewsletterSection";
import Button from "@/components/UI/Button";
import GoogleMaps from "@/components/UI/GoogleMaps";
import Typography from "@/components/UI/Typography";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function NotFound() {
  const router = useRouter();
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center">
        <Image src="/images/404.png" width={550} height={250} alt="vessa" />
        <Typography className="text-medium-blue mt-[-3rem]" variant="h2">
          OOPS!
        </Typography>
        <Typography className="text-dark-blue mt-[2rem]" variant="h3">
          Doctorul a consultat pagina... și nu există!
        </Typography>
        <Typography className="mt-[2rem] text-center" variant="paragraph">
          Se pare că această pagină a fost externată.
        </Typography>
        <Typography className="text-center" variant="paragraph">
          Dar nu-ți face griji, te putem ghida înapoi!
        </Typography>
        <Button
          label="Înapoi la pagina principală"
          className="text-white mt-[2rem] hover:text-medium-blue"
          onClick={() => router.push("/")}
        />
      </div>

      <NewsletterSection shape1 />
      <GoogleMaps />
      <Footer />
    </>
  );
}
