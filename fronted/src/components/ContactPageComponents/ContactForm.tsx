"use client";
import React, { useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaCommentDots } from "react-icons/fa";
import Typography from "../UI/Typography";
import Spacing from "../UI/Spacing";
import Button from "../UI/Button";
import Toast from "../UI/Toast";
import Wrapper from "../UI/Wrapper";
import { ContactEmailTemplate } from "./ContactEmailTemplate";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const [errors, setErrors] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    message: "",
    termsAccepted: "",
  });

  // Validare a câmpurilor formularului
  const validateForm = () => {
    let formIsValid = true;
    const newErrors = {
      name: "",
      surname: "",
      email: "",
      phone: "",
      message: "",
      termsAccepted: "",
    };

    if (!name) {
      newErrors.name = "Numele este obligatoriu";
      formIsValid = false;
    }

    if (!surname) {
      newErrors.surname = "Prenumele este obligatoriu";
      formIsValid = false;
    }

    if (!email) {
      newErrors.email = "Emailul este obligatoriu";
      formIsValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Emailul nu este valid";
      formIsValid = false;
    }

    if (!phone) {
      newErrors.phone = "Numărul de telefon este obligatoriu";
      formIsValid = false;
    }

    if (!message) {
      newErrors.message = "Mesajul este obligatoriu";
      formIsValid = false;
    }

    if (!termsAccepted) {
      newErrors.termsAccepted = "Trebuie să acceptați termenii și condițiile";
      formIsValid = false;
    }

    setErrors(newErrors);
    return formIsValid;
  };

  // Funcțiile onChange pentru câmpuri
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    if (e.target.value) {
      setErrors((prevErrors) => ({ ...prevErrors, name: "" }));
    }
  };

  const handleSurnameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSurname(e.target.value);
    if (e.target.value) {
      setErrors((prevErrors) => ({ ...prevErrors, surname: "" }));
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (e.target.value && /\S+@\S+\.\S+/.test(e.target.value)) {
      setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
    if (e.target.value) {
      setErrors((prevErrors) => ({ ...prevErrors, phone: "" }));
    }
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
    if (e.target.value) {
      setErrors((prevErrors) => ({ ...prevErrors, message: "" }));
    }
  };

  const handleTermsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTermsAccepted(e.target.checked);
    if (e.target.checked) {
      setErrors((prevErrors) => ({ ...prevErrors, termsAccepted: "" }));
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    const formData = {
      to: "contact@vessahospital.ro",
      subject: "Formular de contact",
      text: ContactEmailTemplate(name, surname, email, phone, message),
    };

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send email");
      }

      const data = await response.json();
      setShowToast(true);
      console.log(ContactEmailTemplate(name, surname, email, phone, message));

      setName(""),
        setSurname(""),
        setEmail(""),
        setPhone(""),
        setMessage(""),
        setTermsAccepted(false),
        setTimeout(() => setShowToast(false), 3000);
      console.log(data.message);
    } catch (error) {
      console.error("Eroare la trimiterea e-mailului:", error);
    }
  };

  return (
    <Wrapper>
      <section>
        {showToast && (
          <div className="absolute right-[16%] top-[50%] lg:right-[13%] lg:top-[68%] md:right-[9%] md:top-[53%] sm:right-[5%] sm:top-[50%]">
            <Toast />
          </div>
        )}
        <div className="text-center">
          <Typography variant="h2" className="text-black">
            Formular de <span className="text-dark-blue">contact</span>
          </Typography>
        </div>
        <Spacing size="5" md="6" sm="4" />
        <form
          onSubmit={handleSubmit}
          className="grid md:grid-cols-8 sm:grid-cols-2 gap-x-[3.2rem]"
        >
          <div className="col-span-6 md:col-span-4 sm:col-span-2">
            <label className="flex items-center">
              <FaUser className="mr-2 text-dark-blue w-[1.5rem] h-[1.5rem]" />
              <Typography variant="detailsBold" className="text-dark-black-75">
                Numele tău
              </Typography>
            </label>
            <input
              type="text"
              placeholder="Nume"
              value={name}
              onChange={handleNameChange}
              className="w-full p-[1.9rem] mt-4 border border-gray-400 rounded-3xl text-details placeholder:text-details"
            />
            {errors.name && <p className="text-red-600">{errors.name}</p>}
          </div>

          <div className="col-span-6 md:col-span-4 sm:col-span-2">
            <Spacing sm="3" md="0" size="0" />
            <label className="flex items-center">
              <FaUser className="mr-2 text-dark-blue w-[1.5rem] h-[1.5rem]" />
              <Typography variant="detailsBold" className="text-dark-black-75">
                Prenumele tău
              </Typography>
            </label>
            <input
              type="text"
              placeholder="Prenume"
              value={surname}
              onChange={handleSurnameChange}
              className="w-full p-[1.9rem] mt-4 border border-gray-400 rounded-3xl text-details placeholder:text-details"
            />
            {errors.surname && <p className="text-red-600">{errors.surname}</p>}
          </div>

          <div className="col-span-6 md:col-span-4 sm:col-span-2">
            <Spacing size="6" md="4" sm="3" />
            <label className="flex items-center">
              <FaEnvelope className="mr-2 text-dark-blue w-[1.5rem] h-[1.5rem]" />
              <Typography variant="detailsBold" className="text-dark-black-75">
                Adresa ta de email
              </Typography>
            </label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
              className="w-full p-[1.9rem] mt-4 border border-gray-400 rounded-3xl text-details placeholder:text-details"
            />
            {errors.email && <p className="text-red-600">{errors.email}</p>}
          </div>

          <div className="col-span-6 md:col-span-4 sm:col-span-2">
            <Spacing size="6" md="4" sm="3" />
            <label className="flex items-center">
              <FaPhone className="mr-2 text-dark-blue w-[1.5rem] h-[1.5rem]" />
              <Typography variant="detailsBold" className="text-dark-black-75">
                Numărul tău de telefon
              </Typography>
            </label>
            <input
              type="text"
              placeholder="Număr de telefon"
              value={phone}
              onChange={handlePhoneChange}
              className="w-full p-[2rem] mt-4 border border-gray-400 rounded-3xl text-details placeholder:text-details"
            />
            {errors.phone && <p className="text-red-600">{errors.phone}</p>}
          </div>

          <Spacing size="6" md="4" sm="3" />
          <div className="col-span-12 md:col-span-8 sm:col-span-2">
            <label className="flex items-center">
              <FaCommentDots className="mr-2 text-dark-blue w-[1.5rem] h-[1.5rem]" />
              <Typography variant="detailsBold" className="text-dark-black-75">
                Mesajul tău
              </Typography>
            </label>
            <textarea
              placeholder="Mesaj"
              rows={6}
              value={message}
              onChange={handleMessageChange}
              className="w-full p-[1.9rem] mt-4 border border-gray-400 rounded-lg resize-none text-details placeholder:text-details"
            ></textarea>
            {errors.message && <p className="text-red-600">{errors.message}</p>}
          </div>

          <Spacing size="6" md="3" sm="3" />

          <div className="col-span-12 md:col-span-8 sm:col-span-2">
            <div className="flex items-center gap-[1rem]">
              <input
                type="checkbox"
                checked={termsAccepted}
                onChange={handleTermsChange}
                className="w-8 h-8 rounded-2xl form-checkbox text-dark-blue"
              />
              <Typography
                variant="detailsBold"
                className="text-dark-opacity-75"
              >
                Sunt de acord cu Termenii și Condițiile
              </Typography>
            </div>
            {errors.termsAccepted && (
              <p className="text-red-600">{errors.termsAccepted}</p>
            )}
          </div>

          <Spacing size="6" md="3" sm="3" />

          <div className="col-span-12 md:col-span-8 sm:col-span-2">
            <Button type="submit" label="Trimite mesajul" />
          </div>
        </form>
      </section>
    </Wrapper>
  );
};

export default ContactForm;
