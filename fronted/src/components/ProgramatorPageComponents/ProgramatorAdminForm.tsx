"use client";
import React, { useState, useEffect } from "react";
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
import { addDays } from "date-fns";
import Button from "../UI/Button";
import DatePicker from "react-datepicker";
import TimeSlotPickerDropdown from "../UI/TimeSlotPicker";
import "react-datepicker/dist/react-datepicker.css";
import { jwtDecode } from "jwt-decode";
import { ProgramatorEmailTemplate } from "./ProgramatorEmailTemplate";
import { User, UserApi } from "../../app/api/userApi";
import "./select.css";

interface CustomJwtPayload {
  userId: string;
  username: string;
  role: string;
  fullname: string;
  iat: number;
}

export type AppointmentData = {
  _id: string;
  lastName: string;
  firstName: string;
  email: string;
  phone: string;
  specialization: string;
  doctor: string;
  date: Date;
  timeSlot: string;
  isModify?: boolean;
  appointmentType: string;
  createdBy: string;
};

export type TimeSlot = {
  time: string;
  isBooked: boolean;
};

type AppointmentFormProps = {
  initialData?: AppointmentData | null;
  onSubmitSuccess: (message: string) => void;
  onSubmitError: (message: string) => void;
  onCancel: () => void;
};

const AppointmentFormAdmin: React.FC<AppointmentFormProps> = ({
  initialData,
  onSubmitSuccess,
  onSubmitError,
  onCancel,
}) => {
  const { getUsers, appointmentCheck } = UserApi();
  const [users, setUsers] = useState<User[]>([]);
  const [userRole, setUserRole] = useState<string>("User");
  const [lastName, setLastName] = useState(initialData?.lastName ?? "");
  const [firstName, setFirstName] = useState(initialData?.firstName ?? "");
  const [email, setEmail] = useState(initialData?.email ?? "");
  const [phone, setPhone] = useState(initialData?.phone ?? "");
  const [selectedSpecialty, setSelectedSpecialty] = useState(
    initialData?.specialization ?? ""
  );
  const [selectedDoctor, setSelectedDoctor] = useState(
    initialData?.doctor ?? ""
  );
  const [selectedType, setSelectedType] = useState<string>("Consultatie");

  const [selectedDate, setSelectedDate] = useState<Date | null>(
    initialData?.date ?? null
  );
  const [filteredDoctors, setFilteredDoctors] = useState<User[]>([]);
  const [availableDates, setAvailableDates] = useState<Date[]>([]);
  const [availableTimeSlots, setAvailableTimeSlots] = useState<TimeSlot[]>([]);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(
    initialData?.timeSlot ?? ""
  );
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  // Add these two lines
  const [role, setRole] = useState<string>("");

  const [fullname, setFullname] = useState<string>("");

  useEffect(() => {
    const getUserRole = (): string => {
      const token = localStorage.getItem("token");
      if (!token) {
        return "User";
      }
      try {
        const decodedToken = jwtDecode<CustomJwtPayload>(token);
        return decodedToken.role;
      } catch (error) {
        console.error("Invalid token", error);
        return "User";
      }
    };

    const role = getUserRole();
    setUserRole(role);
  }, [userRole]);

  useEffect(() => {
    const userData = localStorage.getItem("user");

    if (!userData) {
      console.error("No user data found in localStorage");
      return;
    }

    try {
      const parsedUser = JSON.parse(userData);

      const { fullname, role } = parsedUser || {};
      setRole(role || "");
      setFullname(fullname || "");

      if (role === "medic" && !selectedDoctor) {
        setSelectedDoctor(fullname || ""); // Set the doctor field

        // Find the doctor and populate availableDays (similar to handleDoctorChange)
      }
    } catch (err) {
      console.error("Error parsing localStorage user data:", err);
    }
  }, [selectedDoctor]);
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

  const isDateAvailable = (date: Date) => {
    const currentDate = new Date(); // Current date

    if (date < currentDate) {
      return false;
    }

    if (selectedType === "Consultatie") {
      return availableDates.some(
        (availableDate) => availableDate.toDateString() === date.toDateString()
      );
    }

    return true;
  };

  const predefinedSlots = [
    { time: "08:00", isBooked: false },
    { time: "09:00", isBooked: false },
    { time: "10:00", isBooked: false },
    { time: "13:00", isBooked: false },
    { time: "14:00", isBooked: false },
  ];

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
              let updatedTimeSlots;
              if (selectedType === "Consultatie") {
                updatedTimeSlots = timeSlotsForDate.map((slot) => ({
                  time: slot,
                  isBooked: bookedSlots.includes(slot),
                }));
                setAvailableTimeSlots(updatedTimeSlots);
              }
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

  useEffect(() => {
    if (initialData) {
      const doctorsForSpecialty = doctorsData.filter((doctor) =>
        doctor.specialization.includes(initialData.specialization)
      );
      setFilteredDoctors(doctorsForSpecialty);
    }
  }, [initialData, doctorsData]);

  const handleSpecialtyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedSpecialty = e.target.value;
    setSelectedSpecialty(selectedSpecialty);

    // Filter doctors based on selected specialization and check if they have a schedule
    const doctorsForSpecialty = doctorsData.filter(
      (doctor) =>
        doctor.specialization.includes(selectedSpecialty) &&
        Array.isArray(doctor.availability) // Ensure there are hours scheduled for the doctor
    );

    setFilteredDoctors(doctorsForSpecialty);
    setSelectedDoctor("");
  };

  const formatDateToYYYYMMDD = (date: Date | null) => {
    if (!date) return "";
    const dateY = new Date(date);
    const year = dateY.getFullYear();
    const month = String(dateY.getMonth() + 1).padStart(2, "0");
    const day = String(dateY.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };
  const handleType = (type: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedType(type.target.value);

    if (type.target.value === "Operatie") {
      const updatedTimeSlots = predefinedSlots.map((slot) => ({
        time: slot.time, //
        isBooked: false,
      }));
      setAvailableTimeSlots(updatedTimeSlots);
    } else {
      setAvailableTimeSlots([]);
    }
  };

  const handleSubmit = async () => {
    const currenDate = formatDateToYYYYMMDD(new Date());
    const formattedDate = formatDateToYYYYMMDD(selectedDate);

    if (formattedDate < currenDate) {
      if (userRole != "guru") {
        onSubmitError("Data programării nu poate fi in trecut.");
        return;
      }
    }
    const appointmentData = {
      lastName,
      firstName,
      email,
      phone,
      specialization: selectedSpecialty,
      doctor: selectedDoctor,
      date: formattedDate,
      timeSlot: selectedTimeSlot,
      isModify: initialData ? true : false,
      appointmentType: selectedType,
      createdBy: userRole,
    };

    try {
      let response;
      if (initialData && initialData._id) {
        // Actualizare programare
        response = await fetch(
          `${backendUrl}/api/appointments/${initialData._id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(appointmentData),
          }
        );
      } else {
        // Creare programare nouă
        response = await fetch(`${backendUrl}/api/appointments`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(appointmentData),
        });
      }

      if (response.ok) {
        const message = initialData
          ? "Programarea a fost actualizată!"
          : "Programarea a fost creată cu succes!";
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth", // Enables smooth scrolling
        });

        onSubmitSuccess(message);
        const emailDate = new Date(formattedDate).toLocaleDateString();
        const emailData = {
          to: `programari@vessahospital.ro, ${email}`,
          subject: message,
          text: ProgramatorEmailTemplate(
            firstName,
            lastName,
            email,
            phone,
            selectedSpecialty,
            selectedDoctor,
            emailDate,
            selectedTimeSlot,
            message
          ),
        };
        const emailResponse = await fetch("/api/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(emailData),
        });
        if (!emailResponse.ok) {
          throw new Error("Failed to send email");
        }
      } else {
        onSubmitError("Eroare la trimiterea programării");
      }
    } catch (error) {
      onSubmitError("Eroare de rețea");
      console.log(error);
    }
  };

  return (
    <section className="">
      {/* <Spacing size="2" /> */}
      <div className="grid grid-cols-12 md:grid-cols-8 sm:grid-cols-2 gap-x-[3.2rem] sm:gap-0">
        <div className="col-span-6 md:col-span-4 sm:col-span-2">
          <label className="flex items-center">
            <FaUser className="mr-2 text-dark-blue w-[1.5rem] h-[1.5rem]" />
            <Typography variant="detailsBold" className="text-dark-black-75">
              Numele pacientului
            </Typography>
          </label>
          <input
            type="text"
            placeholder="Nume"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full py-[1.6rem] px-[1.2rem] mt-2 border border-gray-400 rounded-2xl text-details placeholder:text-details h-[6.4rem]"
          />
        </div>
        <div className="col-span-6 md:col-span-4 sm:col-span-2">
          <Spacing size="0" md="0" sm="3" />
          <label className="flex items-center">
            <FaUser className="mr-2 text-dark-blue w-[1.5rem] h-[1.5rem]" />
            <Typography variant="detailsBold" className="text-dark-black-75">
              Prenume pacientului
            </Typography>
          </label>
          <input
            type="text"
            placeholder="Prenume"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full py-[1.6rem] px-[1.2rem] mt-2 border border-gray-400 rounded-2xl text-details placeholder:text-details h-[6.4rem]"
          />
        </div>
        <div className="col-span-6 md:col-span-4 sm:col-span-2">
          <Spacing size="4.8" md="3" sm="3" />
          <label className="flex items-center">
            <FaEnvelope className="mr-2 text-dark-blue w-[1.5rem] h-[1.5rem]" />
            <Typography variant="detailsBold" className="text-dark-black-75">
              Emailul pacientului
            </Typography>
          </label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full py-[1.6rem] px-[1.2rem] mt-2 border border-gray-400 rounded-2xl text-details placeholder:text-details h-[6.4rem]"
          />
        </div>
        <div className="col-span-6 md:col-span-4 sm:col-span-2">
          <Spacing size="4.8" md="3" sm="3" />
          <label className="flex items-center">
            <FaPhone className="mr-2 text-dark-blue w-[1.5rem] h-[1.5rem]" />
            <Typography variant="detailsBold" className="text-dark-black-75">
              Număr de telefon al pacientului
            </Typography>
          </label>
          <input
            type="text"
            placeholder="Număr de telefon"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full py-[1.6rem] px-[1.2rem] mt-2 border border-gray-400 rounded-2xl text-details placeholder:text-details h-[6.4rem]"
          />
        </div>

        {userRole === "guru" && (
          <div className="col-span-6 md:col-span-4 sm:col-span-2">
            <Spacing size="4.8" md="3" sm="3" />
            <label className="flex items-center">
              <FaStethoscope className="mr-2 text-dark-blue w-[1.5rem] h-[1.5rem]" />
              <Typography variant="detailsBold" className="text-dark-black-75">
                Selectați tip programare
              </Typography>
            </label>
            <select
              value={selectedType}
              onChange={handleType}
              className="w-full py-[1.6rem] px-[1.2rem] mt-2 border border-gray-400 rounded-2xl text-details placeholder:text-details h-[6.4rem]"
            >
              <option value="Consultatie">Consultatie</option>
              <option value="Operatie">Operatie</option>
            </select>
          </div>
        )}
        <div className="col-span-6 md:col-span-4 sm:col-span-2">
          <Spacing size="4.8" md="3" sm="3" />
          <label className="flex items-center">
            <FaStethoscope className="mr-2 text-dark-blue w-[1.5rem] h-[1.5rem]" />
            <Typography variant="detailsBold" className="text-dark-black-75">
              Selectați Specialitate
            </Typography>
          </label>
          <select
            value={selectedSpecialty}
            onChange={handleSpecialtyChange}
            className="w-full py-[1.6rem] px-[1.2rem] mt-2 border border-gray-400 rounded-2xl text-details placeholder:text-details h-[6.4rem]"
          >
            <option value="">Specialitate</option>
            {[
              ...new Set(
                doctorsData.flatMap((doctor) => doctor.specialization)
              ),
            ].map((specialty, index) => (
              <option key={index} value={specialty}>
                {specialty}
              </option>
            ))}
          </select>
        </div>
        <div className="col-span-6 md:col-span-4 sm:col-span-2">
          <Spacing size="4.8" md="3" sm="3" />
          <label className="flex items-center">
            <FaUser className="mr-2 text-dark-blue w-[1.5rem] h-[1.5rem]" />
            <Typography variant="detailsBold" className="text-dark-black-75">
              Selectați Medicul
            </Typography>
          </label>
          <select
            value={role === "medic" ? fullname : selectedDoctor} // If role is "medic", use fullname
            onChange={(e) => setSelectedDoctor(e.target.value)}
            disabled={role === "medic"} // Disable dropdown if role is "medic"
            className={`w-full py-[1.6rem] px-[1.2rem] mt-2 border border-gray-400 rounded-2xl text-details placeholder:text-details h-[6.4rem] ${
              role === "medic" ? "bg-gray-100 cursor-not-allowed" : ""
            }`}
          >
            <option value="">Medic</option>
            {role === "medic" ? (
              <option value={fullname}>{fullname}</option> // If "medic", display fullname as the only option
            ) : (
              filteredDoctors.map((doctor, index) => (
                <option key={index} value={doctor.fullname}>
                  {doctor.fullname}
                </option>
              ))
            )}
          </select>
        </div>
        <div className="col-span-6 md:col-span-4 sm:col-span-2">
          <Spacing size="4.8" md="3" sm="3" />
          <label className="flex items-center">
            <FaCalendarAlt className="mr-2 text-dark-blue w-[1.5rem] h-[1.5rem]" />
            <Typography variant="detailsBold" className="text-dark-black-75">
              Selectați Data
            </Typography>
          </label>
          <div className="relative w-full mt-2">
            <DatePicker
              selected={selectedDate}
              maxDate={addDays(new Date(), 30)}
              onChange={handleDateChange}
              filterDate={isDateAvailable}
              dateFormat="dd MMM yyyy"
              className="w-full py-[1.6rem] px-[1.2rem] border border-gray-400 rounded-2xl text-details placeholder:text-details h-[6.4rem]"
              placeholderText="Selectați data"
              calendarClassName="custom-datepicker-calendar"
              popperPlacement="bottom-end"
              popperClassName="custom-popper-style popper-custom"
            />
          </div>
        </div>
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
        </div>
      </div>
      <div className="z-0 col-span-12 md:col-span-4 sm:col-span-2 mt-[8rem]">
        <Spacing size="3" md="3" sm="3" />
        <div className="flex gap-[1rem]">
          <Button label="Anulează" onClick={onCancel} />

          <Button
            label={`${initialData ? "Editeaza" : "Creaza"} programarea`}
            onClick={handleSubmit}
          />
        </div>
      </div>
      <Spacing size="3" md="3" sm="3" />
    </section>
  );
};

export default AppointmentFormAdmin;
