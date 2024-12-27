"use client";
import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import Typography from "@/components/UI/Typography";
import Image from "next/image";
import Wrapper from "./UI/Wrapper";
import Spacing from "./UI/Spacing";
import { NewsletterConfirmation } from "./NewsletterConfirmation";
import { newsletterApi } from "@/app/api/newsletterApi";

type NewsletterSectionProps = {
  shape1?: boolean;
  shape2?: boolean;
};

const NewsletterSection = ({ shape1, shape2 }: NewsletterSectionProps) => {
  const [message, setMessage] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const createSubscriber = newsletterApi().createSubscriber;
  const handleSubscription = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMessage("Introduceți o adresă de e-mail validă.");
      return;
    }

    try {
      const subscriberResponse = await createSubscriber({ email });

      if (subscriberResponse) {
        if (subscriberResponse.status !== 200) {
          setMessage(subscriberResponse.message || "A apărut o eroare.");
          setTimeout(() => setMessage(""), 5000);
          return;
        }
        const response = await fetch("/api/send-email", {
          method: "POST",
          body: JSON.stringify({
            to: email,
            subject: "Abonare newsletter",
            text: NewsletterConfirmation(),
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          setMessage("Te-ai abonat cu succes!");
          setTimeout(() => setMessage(""), 5000);
          setEmail("");
        } else {
          setMessage("A apărut o eroare.");
          setTimeout(() => setMessage(""), 5000);
        }
      }
    } catch (error) {
      console.error("Eroare", error);
      setMessage("A apărut o eroare.");
      setTimeout(() => setMessage(""), 5000);
    }
  };

  return (
    <section className="relative w-full bg-white py-[10rem] md:py-[8rem] sm:py-[8rem]">
      <Wrapper>
        <div className="relative z-10 grid justify-between grid-cols-12 md:grid-cols-8 sm:grid-cols-2">
          <div className="col-span-5 ml-10 md:col-span-3 sm:col-span-2 sm:ml-0">
            <div className="w-max relative flex">
              <div className="absolute -left-9 sm:top-0 md:top-4 top-8 z-20">
                <Image
                  src="/images/xmas/mistletoe.svg"
                  width={45}
                  height={45}
                  alt="Bell"
                />
              </div>
              <div className="sm:pl-[1.3rem]">
                <Typography
                  variant="h2"
                  className="text-black mb-[1rem] relative z-10"
                >
                  Nu rata știrile <br /> despre noi
                </Typography>
                <div className="w-[8rem] h-[0.3rem] bg-dark-blue mt-1 relative z-10"></div>
              </div>
            </div>
          </div>

          <Spacing sm="2.5" />

          <div className="flex flex-col justify-center col-span-6 col-start-8 md:col-span-4 md:col-start-5 sm:col-span-2">
            <Typography variant="h3" className="text-black mb-[1.5rem]">
              Abonează-te la Newsletter
            </Typography>
            <div className="col-span-5 ml-10 md:col-span-3 sm:col-span-2 sm:ml-0">
              <div className="relative flex">
                <div className="absolute -left-9 sm:top-0 md:top-4 top-8 z-20">
                  <Image
                    src="/images/xmas/bell.svg"
                    width={55}
                    height={55}
                    alt="Bell"
                  />
                </div>
                <div className="sm:pl-[2.5rem] w-full">
                  <div className="flex items-center border-2 border-gray-300 rounded-2xl px-[2rem] py-[1.2rem] w-[60%] lg:w-[75%] md:w-[85%] sm:w-[100%]">
                    <form
                      className="flex w-full justify-between items-center"
                      onSubmit={handleSubscription}
                    >
                      <input
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        name="email"
                        type="email"
                        placeholder="Introdu adresa de e-mail"
                        className="flex-grow transition-all duration-300 ease-in-out outline-none text-dark-opacity-99 placeholder:text-details placeholder:opacity-70 text-details"
                      />
                      <button
                        type="submit"
                        className="text-gray-500 ml-[1rem] w-[2.4rem] h-auto cursor-pointer"
                      >
                        <FaPaperPlane size={20} />
                      </button>
                    </form>
                  </div>
                  {message && (
                    <div className="text-start text-red-500 ml-8 mt-3">
                      <Typography variant="paragraph">{message}</Typography>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        {shape1 && (
          <div className="absolute xl:top-[-32%] lg:top-[-32%]  md:hidden sm:hidden xl:left-0 left-0 w-full h-[30rem] z-0 pointer-events-none">
            <Image
              src="/images/newsletterLine.png"
              alt="Newsletter Line"
              width={1100}
              height={600}
              className="absolute left-0 top-0 lg:w-[55%] xl:w-[44%] lg:h-auto xl:h-auto z-0"
              priority
            />
          </div>
        )}

        {shape2 && (
          <div className="absolute xl:top-[-6.2vw] lg:top-[-6.4vw] left-0 w-full h-[40rem] z-0 pointer-events-none">
            <Image
              src="/images/newsletterLine2.png"
              alt="Newsletter Line"
              width={1100}
              height={600}
              className="absolute left-0 top-0 lg:w-[65%] xl:w-[60%] lg:h-auto xl:h-auto z-0"
              priority
            />
          </div>
        )}
      </Wrapper>
    </section>
  );
};

export default NewsletterSection;
