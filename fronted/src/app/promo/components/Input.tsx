"use client";
import Image from "next/image";
import Typography from "@/components/UI/Typography";
import Button from "@/components/UI/Button";
import { useState } from "react";
const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
import { MailTemp } from "../MailTemp";

interface InputProps {
  width?: string;
  label?: string;
  mobileWidth?: string;
}
const Input: React.FC<InputProps> = ({
  width = "60%",
  mobileWidth = "80%",
  label = "Vreau să fiu sunat",
}) => {
  const [phone, setPhone] = useState("");
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!/[0-9]/.test(e.key) && e.key !== "Backspace") {
      e.preventDefault();
    }
  };
  const handleSubmit = async () => {
    if (!phone) return;

    const emailData = {
      to: `programari@vessahospital.ro`,
      subject: "Programare Nouă - Vessa Hospital",
      text: MailTemp(phone),
    };

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailData),
      });

      if (response.ok) {
        console.log("Email trimis cu succes!");
        setPhone("");
      } else {
        console.error("A apărut o eroare la trimiterea emailului.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };
  return (
    <div className="flex flex-col items-center">
      <Typography variant="h3" className="custom-blue-text mt-16 mb-16">
        Lasă-ne numărul și te sunăm noi!
      </Typography>
      <div
        className={`w-[${width}] sm:w-[${mobileWidth}] gap-5 flex items-end`}
      >
        <div className="flex w-[60%] flex-col items-start">
          <div className="flex  gap-5 mb-3">
            <div>
              <Image
                src="/images/phone-icon.png"
                width={15}
                height={15}
                alt="vessa hospital"
              />
            </div>

            <Typography variant="detailsBold">Număr de telefon</Typography>
          </div>

          <input
            type="text"
            onKeyDown={handleKeyDown}
            onChange={handlePhoneChange}
            className="text-2xl w-full h-[61px] rounded-[16px] border border-gray-300 px-4 outline-none focus:border-blue-500"
          />
        </div>
        <div className="flex items-center justify-center w-[40%]">
          <Typography variant="buttonText">
            <Button
              className="h-[50px]"
              onClick={handleSubmit}
              label={label}
            ></Button>
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Input;
