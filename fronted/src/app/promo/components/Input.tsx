"use client";
import Typography from "@/components/UI/Typography";
import Button from "@/components/UI/Button";
import { useState } from "react";
import { MailTemp } from "../MailTemp";
import { FaPhone, FaUser } from "react-icons/fa";

interface InputProps {
  label?: string;
}
const Input: React.FC<InputProps> = ({ label = "Vreau să fiu sunat" }) => {
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!/[0-9]/.test(e.key) && e.key !== "Backspace") {
      e.preventDefault();
    }
  };
  const handleSubmit = async () => {
    const emailData = {
      to: `debug@vessahospital.ro`,
      subject: "Programare Nouă - Vessa Hospital",
      text: MailTemp(phone, name),
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
    <div className="flex flex-col items-center lg:-mt-[2rem] xl:-mt-[2rem] md:-mt-[0rem] sm:mt-[2rem] xs:mt-[2rem]">
      <Typography
        variant="h3"
        className="custom-blue-text lg:self-start lg:pl-[10%] xl:self-start xl:pl-[10%] md:self-start md:pl-[10%] mb-16 xs:mb-[15px]"
      >
        Lasă numele și numărul tău și te sunăm noi!
      </Typography>
      <div className="flex gap-5 flex-col items-center justify-center w-full">
        <div className="flex flex-row items-end justify-center xs:flex-col w-[90%] gap-[3rem] xs:gap-[1rem]">
          <div className="flex flex-col w-full items-start">
            <div className="flex items-center justify-center  gap-5 mb-3">
              <div>
                <FaUser className="text-dark-blue w-[1.5rem] h-[1.5rem]" />
              </div>

              <Typography variant="detailsBold">Nume</Typography>
            </div>

            <input
              type="text"
              onChange={handleNameChange}
              className="text-2xl h-[51px] w-full xs:w-full rounded-[16px] border border-gray-300 px-4 outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex flex-col w-full items-start">
            <div className="flex items-center justify-center gap-5 mb-3">
              <div>
                <FaPhone className="rotate-[90deg] text-dark-blue w-[1.5rem] h-[1.5rem]" />
              </div>

              <Typography variant="detailsBold">Număr de telefon</Typography>
            </div>

            <input
              type="text"
              onKeyDown={handleKeyDown}
              onChange={handlePhoneChange}
              className="text-2xl w-full xs:w-full h-[51px] rounded-[16px] border border-gray-300 px-4 outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex items-center justify-center w-full sm:hidden xs:hidden ">
            <Typography variant="buttonText" className="xs:w-full">
              <Button
                className="h-[50px] text-white justify-center hover:text-black xs:w-full"
                onClick={handleSubmit}
                label={label}
              ></Button>
            </Typography>
          </div>
        </div>
        <div className="hidden xs:flex sm:flex items-center justify-center w-full xs:w-[90%]">
          <Typography variant="buttonText" className="w-[30%] xs:w-full">
            <Button
              className="w-full h-[50px] text-white justify-center hover:text-black xs:w-full"
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
