"use client";
import React, { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import Typography from "../UI/Typography";
import Spacing from "../UI/Spacing";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaCalendarAlt,
  FaStethoscope,
} from "react-icons/fa";
import Button from "../UI/Button";
import DatePicker from "react-datepicker";
import TimeSlotPickerDropdown from "../UI/TimeSlotPicker";
import Toast from "../UI/Toast";
import Wrapper from "../UI/Wrapper";
import { TimeSlot } from "./ProgramatorAdminForm";
import { ProgramatorEmailTemplate } from "./ProgramatorEmailTemplate";
import { useRouter } from "next/navigation";
import { User, UserApi } from "../../app/api/userApi";

const AppointmentForm = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState("");
  const [users, setUsers] = useState<User[]>([]);
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [filteredDoctors, setFilteredDoctors] = useState<User[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [availableDates, setAvailableDates] = useState<Date[]>([]);
  const [availableTimeSlots, setAvailableTimeSlots] = useState<TimeSlot[]>([]);
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [showToast, setShowToast] = useState(false);
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
  const router = useRouter();
  const { getUsers, appointmentCheck } = UserApi();
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    selectedSpecialty: "",
    selectedDoctor: "",
    selectedDate: "",
    selectedTimeSlot: "",
    checkboxChecked: "",
  });

  // Validare a câmpurilor formularului
  const validateForm = () => {
    let formIsValid = true;
    const newErrors = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      selectedSpecialty: "",
      selectedDoctor: "",
      selectedDate: "",
      selectedTimeSlot: "",
      checkboxChecked: "",
    };

    if (!firstName) {
      newErrors.firstName = "Numele este obligatoriu";
      formIsValid = false;
    }
    if (!lastName) {
      newErrors.lastName = "Prenumele este obligatoriu";
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
    if (!selectedSpecialty) {
      newErrors.selectedSpecialty =
        "Selectarea unei specialități este obligatorie";
      formIsValid = false;
    }
    if (!selectedDoctor) {
      newErrors.selectedDoctor = "Selectarea unui doctor este obligatorie";
      formIsValid = false;
    }
    if (!selectedDate) {
      newErrors.selectedDate = "Data programării este obligatorie";
      formIsValid = false;
    }
    if (!selectedTimeSlot) {
      newErrors.selectedTimeSlot =
        "Selectarea unui interval orar este obligatorie";
      formIsValid = false;
    }
    if (!checkboxChecked) {
      newErrors.checkboxChecked = "Trebuie să acceptați termenii și condițiile";
      formIsValid = false;
    }

    setErrors(newErrors);
    return formIsValid;
  };

  useEffect(() => {
    (async () => {
      const fetchedDoctors = await getUsers();
      setUsers(fetchedDoctors);
    })();
  }, [getUsers]);
  const filterDoctorsByRole = (users: User[]) => {
    const doctorsData = users.filter((user) => user.role === "medic");
    return doctorsData;
  };

  const doctorsData = filterDoctorsByRole(users);

  useEffect(() => {
    if (selectedDoctor) {
      const doctor = users.find((user) => user.fullname === selectedDoctor);

      if (doctor && doctor.availability) {
        const dates = doctor.availability.map((a) => new Date(a.date));

        setAvailableDates(dates);
      } else {
        setAvailableDates([]);
      }
    }
  }, [selectedDoctor, users]);

  // Funcțiile `onChange` pentru câmpurile de input
  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
    if (e.target.value) {
      setErrors((prevErrors) => ({ ...prevErrors, firstName: "" }));
    }
  };

  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
    if (e.target.value) {
      setErrors((prevErrors) => ({ ...prevErrors, lastName: "" }));
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (/\S+@\S+\.\S+/.test(e.target.value)) {
      setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
    if (e.target.value) {
      setErrors((prevErrors) => ({ ...prevErrors, phone: "" }));
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckboxChecked(e.target.checked);
    if (e.target.checked) {
      setErrors((prevErrors) => ({ ...prevErrors, checkboxChecked: "" }));
    }
  };

  const handleSpecialtyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const specialty = e.target.value;
    setSelectedSpecialty(specialty);

    const doctorsForSpecialty = doctorsData.filter(
      (doctor) =>
        doctor.specialization.includes(specialty) && // Use includes to check for specialty in specialization array
        Array.isArray(doctor.availability!) && // Ensure availability is an array
        doctor.availability!.length > 0 // Check that there are available slots
    );

    setFilteredDoctors(doctorsForSpecialty);
    setSelectedDoctor("");
    setSelectedDate(null);
    setAvailableTimeSlots([]);
  };

  const handleDoctorChange = (doctorName: string) => {
    setSelectedDoctor(doctorName);

    setSelectedDate(null);
    setAvailableTimeSlots([]);
  };

  const uniqueSpecialties = [
    ...new Set(doctorsData.flatMap((doctor) => doctor.specialization)),
  ];

  const isDateAvailable = (date: Date) => {
    return availableDates.some(
      (availableDate) => availableDate.toDateString() === date.toDateString()
    );
  };

  const formatDateToYYYYMMDD = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // `getMonth()` returnează indexul (0 pentru ianuarie)
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const handleDateChange = async (date: Date | null) => {
    setSelectedDate(date);

    if (date && selectedDoctor) {
      const doctor = users.find((user) => user.fullname === selectedDoctor);

      if (doctor) {
        const formattedDate = formatDateToYYYYMMDD(date);

        const availabilityForDate = doctor.availability!.find(
          (entry) =>
            formatDateToYYYYMMDD(new Date(entry.date)) === formattedDate
        );

        if (availabilityForDate) {
          const timeSlotsForDate = availabilityForDate.timeSlots;

          try {
            const res = await appointmentCheck(selectedDoctor, formattedDate);
            if (res && res.data) {
              const bookedSlots = res.data;

              const updatedTimeSlots = timeSlotsForDate.map((slot) => ({
                time: slot,
                isBooked: bookedSlots.includes(slot),
              }));

              setAvailableTimeSlots(updatedTimeSlots);
            }
          } catch (error) {
            console.error("Error fetching booked slots:", error);
          }
        }
      }
    } else {
      setAvailableTimeSlots([]);
    }
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      return;
    }

    const currenDate = formatDateToYYYYMMDD(new Date());
    const formattedDate = formatDateToYYYYMMDD(selectedDate!);

    if (formattedDate < currenDate) {
      setToastMessage("Data programării nu poate fi în trecut."); // Call the error handler
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);

      return; // Stop further execution
    }

    const appointmentData = {
      lastName,
      firstName,
      email,
      phone,
      doctor: selectedDoctor,
      specialization: selectedSpecialty,
      date: formattedDate,
      timeSlot: selectedTimeSlot,
      checkboxChecked: checkboxChecked,
      appointmentType: "Consultatie",

      isModify: false, // Set isModify to false for all user-created appointments
    };

    const emailData = {
      to: `programari@vessahospital.ro, ${email}`,
      subject: "Programare Nouă - Vessa Hospital",
      text: ProgramatorEmailTemplate(
        firstName,
        lastName,
        email,
        phone,
        selectedSpecialty,
        selectedDoctor,
        selectedDate!.toLocaleDateString(),
        selectedTimeSlot
      ),
    };

    try {
      const [dbResponse, emailResponse] = await Promise.all([
        fetch(`${backendUrl}/api/appointments`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(appointmentData),
        }),
        fetch("/api/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(emailData),
        }),
      ]);

      if (dbResponse.ok && emailResponse.ok) {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
        let countdown = 3;
        setToastMessage(
          `Programarea a fost adăugată! Veți fi redirecționat în ${countdown}`
        );
        setShowToast(true);

        // Countdown logic
        const interval = setInterval(() => {
          countdown -= 1;
          if (countdown > 0) {
            setToastMessage(
              `Programarea a fost adăugată! Veți fi redirecționat în ${countdown}`
            );
          } else {
            clearInterval(interval); // Stop countdown when it reaches 0
          }
        }, 1000);

        setTimeout(() => {
          router.push("/");
          setShowToast(false);
        }, countdown * 1000);

        setLastName("");
        setFirstName("");
        setEmail("");
        setPhone("");
        setSelectedDoctor("");
        setSelectedSpecialty("");
        setSelectedDate(null);
        setSelectedTimeSlot(null);
        setCheckboxChecked(false);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
      } else {
        setToastMessage(
          "Eroare la crearea programării sau trimiterea email-ului."
        );
      }
    } catch (error) {
      console.error("Eroare de rețea:", error);
      setToastMessage("Eroare de rețea. Încearcă din nou.");
    }
  };

  return (
    <section className="py-10">
      {showToast && (
        <div className="absolute right-[16%] top-[50%] lg:right-[13%] lg:top-[68%] md:right-[9%] md:top-[53%] sm:right-[5%] sm:top-[50%]">
          <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
        </div>
      )}

      <Wrapper>
        <div className="text-center">
          <Typography variant="h2" className="text-black">
            Cere o <span className="text-dark-blue">programare</span>
          </Typography>
        </div>
        <Spacing size="5" md="5" sm="4" />

        <div className="grid grid-cols-12 md:grid-cols-8 sm:grid-cols-2 gap-x-[3.2rem]">
          {/* Name and Contact Fields */}
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
              value={firstName}
              onChange={handleFirstNameChange}
              className="w-full py-[1.6rem] px-[1.2rem] mt-2 border border-gray-400 rounded-2xl text-details placeholder:text-details h-[6.4rem]"
            />
            {errors.lastName && (
              <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>
            )}
          </div>

          <div className="col-span-6 md:col-span-4 sm:col-span-2">
            <Spacing size="0" md="0" sm="3" />
            <label className="flex items-center">
              <FaUser className="mr-2 text-dark-blue w-[1.5rem] h-[1.5rem]" />
              <Typography variant="detailsBold" className="text-dark-black-75">
                Prenumele tău
              </Typography>
            </label>
            <input
              type="text"
              placeholder="Prenume"
              value={lastName}
              onChange={handleLastNameChange}
              className="w-full py-[1.6rem] px-[1.2rem] mt-2 border border-gray-400 rounded-2xl text-details placeholder:text-details h-[6.4rem]"
            />
            {errors.firstName && (
              <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>
            )}
          </div>

          <div className="col-span-6 md:col-span-4 sm:col-span-2">
            <Spacing size="4.8" md="3" sm="3" />
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
              className="w-full py-[1.6rem] px-[1.2rem] mt-2 border border-gray-400 rounded-2xl text-details placeholder:text-details h-[6.4rem]"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          {/* Phone */}
          <div className="col-span-6 md:col-span-4 sm:col-span-2">
            <Spacing size="4.8" md="3" sm="3" />
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
              className="w-full py-[1.6rem] px-[1.2rem] mt-2 border border-gray-400 rounded-2xl text-details placeholder:text-details h-[6.4rem]"
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
            )}
          </div>

          {/* Specialty Dropdown */}
          <div className="col-span-6 md:col-span-4 sm:col-span-2">
            <Spacing size="4.8" md="3" sm="3" />
            <label className="flex items-center">
              <FaStethoscope className="mr-2 text-dark-blue w-[1.5rem] h-[1.5rem]" />
              <Typography variant="detailsBold" className="text-dark-black-75">
                Selectează Specialitatea
              </Typography>
            </label>
            <select
              value={selectedSpecialty}
              onChange={handleSpecialtyChange}
              className="w-full py-[1.6rem] px-[1.2rem] mt-2 border border-gray-400 rounded-2xl text-details placeholder:text-details h-[6.4rem]"
            >
              <option value="">Specialitate</option>
              {uniqueSpecialties.map((specialty, index) => (
                <option key={index} value={specialty}>
                  {specialty}
                </option>
              ))}
            </select>
            {errors.selectedSpecialty && (
              <p className="mt-1 text-sm text-red-500">
                {errors.selectedSpecialty}
              </p>
            )}
          </div>

          {/* Doctor Dropdown */}
          <div className="col-span-6 md:col-span-4 sm:col-span-2">
            <Spacing size="4.8" md="3" sm="3" />
            <label className="flex items-center">
              <FaUser className="mr-2 text-dark-blue w-[1.5rem] h-[1.5rem]" />
              <Typography variant="detailsBold" className="text-dark-black-75">
                Selectează Medicul
              </Typography>
            </label>
            <select
              value={selectedDoctor}
              onChange={(e) => handleDoctorChange(e.target.value)}
              className="w-full py-[1.6rem] px-[1.2rem] mt-2 border border-gray-400 rounded-2xl text-details placeholder:text-details h-[6.4rem]"
            >
              <option value="">Medic</option>
              {filteredDoctors.map((doctor, index) => (
                <option key={index} value={doctor.fullname}>
                  {doctor.fullname}
                </option>
              ))}
              {errors.selectedDoctor && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.selectedDoctor}
                </p>
              )}
            </select>
          </div>

          {/* Date Picker */}
          <div className="col-span-6 md:col-span-4 sm:col-span-2">
            <Spacing size="4.8" md="3" sm="3" />
            <label className="flex items-center">
              <FaCalendarAlt className="mr-2 text-dark-blue w-[1.5rem] h-[1.5rem]" />
              <Typography variant="detailsBold" className="text-dark-black-75">
                Selectează data
              </Typography>
            </label>
            <div className="relative w-full mt-2">
              <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                filterDate={isDateAvailable}
                dateFormat="dd MMM yyyy"
                className="w-full py-[1.6rem] px-[1.2rem] border border-gray-400 rounded-2xl text-details placeholder:text-dark-opacity-75 placeholder:text-details h-[6.4rem]"
                placeholderText="Selectează data"
                popperPlacement="bottom-end"
                popperClassName="custom-popper-style"
                calendarClassName="custom-datepicker-calendar"
              />
            </div>
            {errors.selectedDate && (
              <p className="mt-1 text-sm text-red-500">{errors.selectedDate}</p>
            )}
          </div>

          {/* Time Slot Picker */}
          <div className="col-span-6 md:col-span-4 sm:col-span-2">
            <Spacing size="4.8" md="3" sm="3" />
            <TimeSlotPickerDropdown
              availableTimeSlots={availableTimeSlots}
              selectedTimeSlot={selectedTimeSlot}
              onTimeSlotChange={(time) => {
                const slot = availableTimeSlots.find(
                  (slot) => slot.time === time
                );
                if (slot && !slot.isBooked) {
                  setSelectedTimeSlot(time);
                }
              }}
            />
            {errors.selectedTimeSlot && (
              <p className="mt-1 text-sm text-red-500">
                {errors.selectedTimeSlot}
              </p>
            )}
          </div>

          <Spacing size="3" md="4" sm="4" />

          {/* Terms and Submit Button */}
          <div className="col-span-12 md:col-span-8 sm:col-span-2">
            <div className="flex items-center gap-[1rem]">
              <input
                type="checkbox"
                checked={checkboxChecked}
                onChange={handleCheckboxChange}
                className="w-8 h-8 rounded-2xl form-checkbox text-dark-blue"
              />
              <Typography
                variant="detailsBold"
                className="text-dark-opacity-75"
              >
                Sunt de acord cu Termenii și Condițiile
              </Typography>
            </div>
            {errors.checkboxChecked && (
              <p className="mt-1 text-sm text-red-500">
                {errors.checkboxChecked}
              </p>
            )}
          </div>

          <Spacing size="3" md="3" sm="3" />

          <div className="col-span-12 md:col-span-8 sm:col-span-2">
            <Button label="Programează-te" onClick={handleSubmit} />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default AppointmentForm;
