"use client";

declare global {
  interface Window {
    fbq: (
      eventType: "track" | "trackCustom" | "init",
      eventName: string,
      parameters?: object
    ) => void;
  }
}
import Script from "next/script";
import Image from "next/image";
import "./globals.css";
import { FaWhatsapp } from "react-icons/fa";
import { SpecialtyProvider } from "@/components/ProgramatorPageComponents/SpecialtyContext";

const WhatsAppIcon = () => {
  return (
    <a
      href="https://wa.me/+40770520904"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-16 right-16 z-[5000] bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition"
      onClick={() => {
        if (typeof window !== "undefined" && window.fbq) {
          window.fbq("trackCustom", "WhatsApp");
        }
      }}
    >
      <FaWhatsapp size={58} />
    </a>
  );
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <head>
        {/* Google Analytics Tag */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                      gtag('config', 'G-Q1PS9ZXCXD');
                  `,
          }}
        />
        {/* Facebook Pixel */}
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '982367670512175');
              fbq('track', 'PageView');
            `,
          }}
        />
        {/* WhatsApp Click Tracking */}
        <Script
          id="whatsapp-tracking"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener("DOMContentLoaded", function() {
                const whatsappButton = document.querySelector("a[href^='https://wa.me/']");
                if (whatsappButton) {
                  whatsappButton.addEventListener("click", function() {
                    fbq('trackCustom', 'WhatsApp');
                  });
                }
              });
            `,
          }}
        />
      </head>
      <body className={`antialiased`}>
        <SpecialtyProvider>{children}</SpecialtyProvider>
        <WhatsAppIcon />
        {/* Facebook Pixel */}
        <noscript>
          <Image
            height="1"
            width="1"
            style={{ display: "none" }}
            alt="facebook"
            src="https://www.facebook.com/tr?id=982367670512175&ev=PageView&noscript=1"
          />
        </noscript>
      </body>
    </html>
  );
}
