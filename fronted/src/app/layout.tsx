"use client";

declare global {
  interface Window {
    fbq: (
      eventType: "track" | "trackCustom" | "init",
      eventName: string,
      parameters?: object
    ) => void;
    dataLayer: Array<{
      event: string;
      [key: string]: string | number | boolean | object;
    }>;
  }
}

import Script from "next/script";
import Image from "next/image";
import "./globals.css";
import { SpecialtyProvider } from "@/components/ProgramatorPageComponents/SpecialtyContext";

const WhatsAppIcon = () => {
  return (
    <a
      href="https://wa.me/+40770520904"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-16 right-16 z-[5000] sm:bottom-8 sm:right-8"
      onClick={() => {
        if (typeof window !== "undefined" && window.fbq) {
          window.fbq("trackCustom", "WhatsApp");
        }
      }}
    >
      <Image src="/images/whatsapp.svg" alt="vessa" width={120} height={120} />
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
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id=GTM-TG4SNGDH'+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TG4SNGDH');
          `}
        </Script>

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
      <body className="antialiased">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TG4SNGDH"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <SpecialtyProvider>{children}</SpecialtyProvider>

        <WhatsAppIcon />

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