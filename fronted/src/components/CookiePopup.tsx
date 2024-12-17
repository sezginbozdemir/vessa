"use client";
import { useState, useEffect } from "react";
import Typography from "./UI/Typography";
import { BiCookie } from "react-icons/bi";
import Spacing from "./UI/Spacing";

const CookiePopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const cookieNoticed = localStorage.getItem("cookieNoticed");

    if (!cookieNoticed) {
      // Initially, show the popup with opacity 0 to allow fade-in
      setIsVisible(true);

      const timer = setTimeout(() => {
        localStorage.setItem("cookieNoticed", "true");

        // Trigger fade-out after 10 seconds
        setFadeOut(true);

        // Hide the popup after the fade-out transition ends
        setTimeout(() => setIsVisible(false), 300); // Popup removed after the fade-out duration
      }, 10000);

      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
    }
  }, []);

  return (
    <>
      {isVisible && (
        <div
          className={`fixed bottom-4 left-10 bg-white border border-gray-200 shadow-lg rounded-xl z-50 max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl p-6 sm:p-8 md:p-10 transition-opacity duration-300 ${
            fadeOut ? "opacity-0" : "opacity-100"
          }`}
        >
          {/* Title with Icon */}
          <div className="flex items-center space-x-2">
            <BiCookie size={30} className="text-primary" /> {/* Cookie icon */}
            <Typography variant="menu" className="text-gray-900">
              Respectăm confidențialitatea ta
            </Typography>
          </div>
          <Spacing size="0" md="0" />

          {/* Paragraph */}
          <Typography variant="paragraph" className="text-gray-700 mt-2">
            Utilizăm cookies pentru a îmbunătăți experiența ta pe site-ul nostru
            și de a-ți oferi o navigare mai eficientă. Prin continuarea
            navigării, ești de acord cu utilizarea cookie-urilor.{" "}
            <a href="/cookie" className="text-blue-500">
              [ Politica de cookies ]
            </a>
          </Typography>
        </div>
      )}
    </>
  );
};

export default CookiePopup;
