"use client";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Typography from "@/components/UI/Typography";
import Spacing from "@/components/UI/Spacing";
import { CgProfile } from "react-icons/cg";
import { IoExitOutline } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BiPlus } from "react-icons/bi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { BsChevronDown, BsThreeDotsVertical } from "react-icons/bs";
import Link from "next/link";
import AppointmentFormAdmin, {
  AppointmentData,
} from "@/components/ProgramatorPageComponents/ProgramatorAdminForm";
import { sortOptions, filterOptions } from "../mock-data/programatorAdmin";
import Toast from "@/components/UI/Toast";
import ConfirmationModal from "@/components/UI/ConfirmationModal";
import DatePicker from "react-datepicker";
import PrintComponent from "@/components/UI/PrintComponent";
import { SlPrinter } from "react-icons/sl";
import { ProgramatorDeleteEmail } from "./ProgramatorDeleteEmail";
import DoctorSelection from "./doctorSelection";
import EditSchedule from "@/components/ProgramatorPageComponents/EditSchedule";
import { jwtDecode } from "jwt-decode";

export interface User {
  username: string;
  role?: string;
  fullname: string;
}

const ProgramatorAdmin = () => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [sortMenuOpen, setSortMenuOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [openedRow, setOpenedRow] = useState<number | null>(null);
  const [expandedRows, setExpandedRows] = useState<string[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [showProgram, setShowProgram] = useState(false);
  const [formData, setFormData] = useState<AppointmentData | null>(null);
  const [appointments, setAppointments] = useState<AppointmentData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState<string | undefined>(
    undefined
  );
  const [existingSchedule, setExistingSchedule] = useState<Date[] | undefined>(
    []
  );

  const [appointmentToDelete, setAppointmentToDelete] =
    useState<AppointmentData | null>(null);

  const [filteredAppointments, setFilteredAppointments] = useState<
    AppointmentData[]
  >([]);
  // const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
  const [showPrintView, setShowPrintView] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const isAdmin = (): boolean => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        const decodedToken = jwtDecode<{ role: string }>(token);
        return decodedToken.role === "guru";
      } catch (error) {
        console.error("Failed to decode token", error);
        return false;
      }
    }

    return false;
  };
  const handleExistingScheduleChange = (schedule: Date[] | undefined) => {
    setExistingSchedule(schedule);
  };

  useEffect(() => {
    const userInfo = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    if (!token || !userInfo) {
      router.push("/login");
    }

    if (userInfo) {
      setUser(JSON.parse(userInfo) as User);
    } else {
      setUser(null);
    }
  }, [router]);

  const toggleSortMenu = () => {
    setSortMenuOpen(!sortMenuOpen);
  };
  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };

  const toggleRowMenu = (index: number) => {
    if (!isMobile) {
      setOpenedRow((prevOpenedRow) => (prevOpenedRow === index ? null : index));
    }
  };

  const handleShowProgram = () => {
    setShowForm(false);
    setShowProgram(true);
  };

  const handleAddAppointment = () => {
    setShowProgram(false);
    setFormData(null);
    setShowForm(true);
  };

  const handleEditAppointment = (appointment: AppointmentData) => {
    setFormData(appointment);
    setShowForm(true);
  };

  const handleCloseAppointment = () => {
    setShowForm(false);
  };

  const handleSubmitSuccess = (message: string) => {
    // Afișăm toast-ul
    setToastMessage(message);
    // Ascundem formularul și revenim la tabel
    setShowForm(false);
    // Refacem lista de programări după succes
    fetchAppointments();
  };

  const handleSubmitError = (errorMessage: string) => {
    // Afișăm toast-ul pentru eroare
    setToastMessage(errorMessage);
  };

  const toggleCalendar = () => {
    setIsCalendarOpen((prev) => !prev);
  };

  // Fetch appointments from backend API
  const fetchAppointments = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`${backendUrl}/api/appointments`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();

        const normalizeString = (str: string) =>
          str
            ?.replace(/^dr\.?\s*/i, "") // Elimină prefixul "Dr" sau "Dr."
            .replace(/-/g, "") // Elimină toate cratimele
            .replace(/\s+/g, "") // Elimină toate spațiile
            .toLowerCase() || ""; // Convertim la litere mici

        let filteredData = [];

        if (user?.role === "admin" || user?.role === "guru") {
          filteredData = data; // Admin and guru can see all appointments
        } else if (user?.role === "medic") {
          filteredData = data.filter((appointment: AppointmentData) => {
            return (
              normalizeString(appointment.doctor) ===
              normalizeString(user.fullname)
            );
          });
        }

        setAppointments(filteredData);
        setFilteredAppointments(
          filterAppointmentsByDateRange(filteredData, startDate, endDate)
        );
      } else {
        console.error("Failed to fetch appointments");
      }
    } catch (error) {
      console.error("Error fetching appointments:", error);
    } finally {
      setLoading(false);
    }
  };

  const filterAppointmentsByDateRange = (
    appointments: AppointmentData[],
    startDate: Date | undefined,
    endDate: Date | undefined
  ) => {
    return appointments.filter((appointment) => {
      if (!startDate || !endDate) return true;
      if (!appointment.date) return false;

      const appointmentDate = new Date(appointment.date);
      // Asigurăm includerea datelor de început și sfârșit
      return (
        appointmentDate >= new Date(startDate.setHours(0, 0, 0, 0)) &&
        appointmentDate <= new Date(endDate.setHours(23, 59, 59, 999))
      );
    });
  };

  /*  useEffect(() => {
    setFilteredAppointments(
      filterAppointmentsByDateRange(appointments, startDate, endDate)
    );
  }, [appointments, startDate, endDate]);
*/

  /////////

  useEffect(() => {
    // 1. Sort appointments by date (default sorting)
    const sortedAppointments = [...appointments].sort((a, b) => {
      // Convert dates to strings
      const dateA = a.date
        ? typeof a.date === "string"
          ? a.date
          : a.date.toISOString()
        : "1970-01-01T00:00:00Z";
      const dateB = b.date
        ? typeof b.date === "string"
          ? b.date
          : b.date.toISOString()
        : "1970-01-01T00:00:00Z";

      return dateA.localeCompare(dateB); // Sort by date as strings
    });

    // 2. Apply date range filter after sorting
    const filteredSortedAppointments = filterAppointmentsByDateRange(
      sortedAppointments,
      startDate,
      endDate
    );

    // 3. Update the table's data
    setFilteredAppointments(filteredSortedAppointments);
  }, [appointments, startDate, endDate]);

  useEffect(() => {
    if (user) {
      console.log("User is present, fetching appointments...", user.fullname); // Log user presence
      fetchAppointments();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const handleFilter = (filterOption: string) => {
    let filteredAppointmentsList = [...appointments];

    if (filterOption.toLowerCase() !== "toate") {
      filteredAppointmentsList = filteredAppointmentsList.filter(
        (appointment) =>
          appointment.appointmentType &&
          appointment.appointmentType.toLowerCase() ===
            filterOption.toLowerCase()
      );
    }

    setFilteredAppointments(filteredAppointmentsList);

    setFilterOpen(false);
  };

  const handleSort = (sortOption: string) => {
    console.log("Sorting started with option:", sortOption);

    // Clone the current filtered appointments
    let sortedAppointments = [...filteredAppointments];

    // Default sorting: Sort by date first, then by timeslot
    sortedAppointments.sort((a, b) => {
      const dateA = a.date ? new Date(a.date) : new Date(0); // Default to epoch if invalid
      const dateB = b.date ? new Date(b.date) : new Date(0); // Default to epoch if invalid

      // First, compare by date
      if (dateA.getTime() !== dateB.getTime()) {
        return dateA.getTime() - dateB.getTime(); // Sort by date
      }

      // If the dates are the same, compare by timeslot
      const timeA = a.timeSlot || "00:00"; // Default if timeslot is null
      const timeB = b.timeSlot || "00:00"; // Default if timeslot is null
      return timeA.localeCompare(timeB); // Sort by timeslot
    });

    // Apply additional sorting or filtering based on the sort option
    switch (sortOption) {
      case "Specialitate Medicală (A-Z)":
        sortedAppointments = sortedAppointments.sort((a, b) =>
          a.specialization.localeCompare(b.specialization)
        );
        break;

      case "Nume Medic (A-Z)":
        sortedAppointments = sortedAppointments.sort((a, b) =>
          a.doctor.localeCompare(b.doctor)
        );
        break;

      case "Programări modificate":
        sortedAppointments = sortedAppointments.filter(
          (appointment) => appointment.isModify
        );
        break;

      case "Programări nemodificate":
        sortedAppointments = sortedAppointments.filter(
          (appointment) => !appointment.isModify
        );
        break;
      case "Tip Programare (A-Z)":
        sortedAppointments = sortedAppointments.sort((a, b) =>
          (a.appointmentType || "").localeCompare(b.appointmentType || "")
        );
        break;

      default:
        // No additional sorting or filtering
        break;
    }

    // Update the table's filtered appointments
    console.log("Sorted appointments:", sortedAppointments);
    setFilteredAppointments(sortedAppointments);

    // Close the sort menu
    setSortMenuOpen(false);
  };

  const handleOpenModal = (appointment: AppointmentData) => {
    setAppointmentToDelete(appointment);
    setShowModal(true);
  };

  const handleDeleteAppointment = async () => {
    if (!appointmentToDelete) return;

    try {
      const response = await fetch(
        `${backendUrl}/api/appointments/${appointmentToDelete._id}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        setAppointments((prevAppointments) =>
          prevAppointments.filter(
            (appointment) => appointment._id !== appointmentToDelete._id
          )
        );
        setOpenedRow(null);
        setShowModal(false);
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });

        setToastMessage("Programarea a fost ștearsă");
        const emailDate = new Date(
          appointmentToDelete.date
        ).toLocaleDateString();

        const emailData = {
          to: "programari@vessahospital.ro",
          subject: "Programare ștearsă cu succes",
          text: ProgramatorDeleteEmail(
            appointmentToDelete.firstName,
            appointmentToDelete.lastName,
            appointmentToDelete.email,
            appointmentToDelete.phone,
            appointmentToDelete.specialization,
            appointmentToDelete.doctor,
            emailDate,
            appointmentToDelete.timeSlot
          ),
        };
        await fetch("/api/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(emailData),
        });
      } else {
        console.error("Failed to delete appointment");
      }
    } catch (error) {
      console.error("Error deleting appointment:", error);
    }
  };

  const handleCancelDelete = () => {
    setShowModal(false);
  };

  const handlePrint = () => {
    setShowPrintView(true);
    setTimeout(() => {
      window.print();
      setShowPrintView(false);
    }, 1000);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    router.push("/login");
  };
  const [isMobile, setIsMobile] = useState<boolean>();
  useEffect(() => {
    const handleResize = () => {
      const isMobileNow = window.innerWidth <= 768;
      if (!isMobileNow) {
        // Clear expanded rows when screen size is no longer mobile
        setExpandedRows([]);
      }
      setIsMobile(isMobileNow);
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Toggle row expansion based on ID
  const toggleRow = (id: string) => {
    if (isMobile) {
      setExpandedRows((prevExpandedRows) =>
        prevExpandedRows.includes(id)
          ? prevExpandedRows.filter((rowId) => rowId !== id)
          : [...prevExpandedRows, id]
      );
    }
  };
  if (showPrintView) {
    return <PrintComponent appointments={filteredAppointments} />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen mb-5 px-[10rem] md:px-[6.4rem] sm:px-[2rem] overflow-y-hidden relative">
      {/* Toast-ul pentru mesaje */}
      {toastMessage && (
        <div className="absolute right-[9rem] top-[15rem] z-50">
          <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
        </div>
      )}

      {/* Header */}
      <header className="flex items-center justify-between py-4">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/images/vessa-logo.png"
              alt="Vessa Hospital Logo"
              width={120}
              height={40}
            />
          </Link>
        </div>

        {/* User Info */}
        <div className="flex flex-col items-end">
          <div className="flex items-center justify-end gap-2">
            <Typography variant="paragraph" className="text-black">
              {user ? `${user.username}` : "Nume Prenume"}
            </Typography>
            <CgProfile className="w-[2.5rem] h-[2.5rem]" />
          </div>
          <div
            onClick={handleLogout}
            className="flex space-x-2 cursor-pointer text-medium-blue"
          >
            <IoExitOutline className="w-[2.5rem] h-[2.5rem]" />
            <Typography variant="paragraph">Ieșire cont</Typography>
          </div>
        </div>
      </header>

      <Spacing size="12" md="6.8" sm="5" />

      <div className="relative flex justify-between mb-2  mt-4">
        <div className={`${!showProgram && "hidden"}`}>
          <DoctorSelection
            selectedDoctor={selectedDoctor}
            setSelectedDoctor={setSelectedDoctor}
            setExistingSchedule={handleExistingScheduleChange}
          />
        </div>

        {/* Data Programarii Container */}
        <div
          className={`${showForm && "invisible"} ${
            showProgram && "hidden"
          } flex flex-col justify-between gap-12`}
        >
          <div
            className="flex items-start space-x-4 cursor-pointer"
            onClick={toggleCalendar}
          >
            <Typography variant="detailsBold" className="text-black">
              Data programării
            </Typography>
            <MdKeyboardArrowDown className="w-[2.5rem] h-[2.5rem]" />
          </div>
          {/* Data Selectată */}
          <Typography variant="detailsBold" className="text-dark-blue">
            {startDate && endDate
              ? `${startDate.toLocaleDateString("ro-RO", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })} - ${endDate.toLocaleDateString("ro-RO", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}`
              : "Selectează o dată"}
          </Typography>
        </div>

        {/* Calendarul afișat doar dacă isCalendarOpen este true */}
        {isCalendarOpen && (
          <div className="absolute z-10 p-2 mt-2 bg-white rounded-lg shadow-lg top-[3rem] left-[0rem]">
            <DatePicker
              onChange={(dates: [Date | null, Date | null]) => {
                const [start, end] = dates;
                setStartDate(start || undefined);
                setEndDate(end || undefined);

                // Închidem calendarul doar dacă ambele date sunt selectate
                if (start && end) {
                  setIsCalendarOpen(false);
                }
              }}
              startDate={startDate}
              endDate={endDate}
              selectsRange
              dateFormat="dd MMM yyyy"
              className="w-full py-[1.6rem] px-[1.2rem] border border-gray-400 rounded-2xl text-details placeholder:text-details h-[6.4rem]"
              calendarClassName="custom-datepicker-calendar"
              inline
            />
          </div>
        )}

        <Spacing sm="3.6" />
        <div className="flex flex-col justify-end">
          {isAdmin() && (
            <div
              className="flex items-center cursor-pointer text-medium-blue"
              onClick={handleShowProgram}
            >
              <Typography
                variant="buttonText"
                className="text-medium-blue mb-2"
              >
                Editeaza programul medicilor
              </Typography>
              <FaRegCalendarAlt className="ml-3 w-[2rem] h-[2rem]" />
            </div>
          )}
          <div
            className="flex cursor-pointer justify-end text-medium-blue"
            onClick={handleAddAppointment}
          >
            <Typography
              variant="buttonText"
              className="items-end text-medium-blue"
            >
              Adaugă o programare
            </Typography>
            <BiPlus className="w-[2.5rem] h-[2.5rem]" />
          </div>
        </div>
      </div>

      <Spacing size="2" />
      <hr className="border-t border-dark-opacity-80" />
      <Spacing size="2" />

      {!showForm && !showProgram && (
        <>
          {/* Info and Sort Section */}

          <div className="relative flex justify-between sm:flex mt-2">
            <div className="flex items-center space-x-2">
              <div className="w-[1.6rem] h-[1.6rem] rounded-full bg-light-blue"></div>
              <Typography variant="paragraph">
                reprezintă programările care au suferit modificări
              </Typography>
            </div>
            <div className="sm:hidden xs:hidden">
              <Spacing sm="2" />
            </div>

            <div className="flex sm:w-[40%] gap-[4rem]">
              <div className="flex items-center justify-center  sm:hidden">
                <button
                  className="flex items-center gap-2 text-medium-blue"
                  onClick={handlePrint}
                >
                  <Typography variant="detailsBold"> Printează</Typography>
                  <SlPrinter className="w-[2.5rem] h-[2.5rem]" />
                </button>
              </div>
              <div className="flex gap-[3rem] sm:w-full xs:justify-end sm:justify-end sm:mb-[1rem]">
                <div
                  className="flex items-center  cursor-pointer text-medium-blue md:justify-start"
                  onClick={toggleFilter}
                >
                  <Typography variant="detailsBold">Alege tipul</Typography>
                  <MdKeyboardArrowDown className="w-[2.5rem] h-[2.5rem]" />
                </div>
              </div>

              <div className="flex gap-[3rem] sm:w-full xs:justify-end sm:justify-end sm:mb-[1rem]">
                <div
                  className="flex items-center  cursor-pointer text-medium-blue md:justify-start"
                  onClick={toggleSortMenu}
                >
                  <Typography variant="detailsBold">Sortează</Typography>
                  <MdKeyboardArrowDown className="w-[2.5rem] h-[2.5rem]" />
                </div>
              </div>
            </div>

            {/* Dropdown menu */}
            {filterOpen && (
              <div className="absolute sm:top-[3.5rem] sm:right-[20%] right-[7.5%] md:right-[13%] top-[3rem] bg-white border border-gray-300 p-[2rem] shadow-lg rounded-[1.2rem] z-10">
                {filterOptions.map((option, index) => (
                  <div
                    key={index}
                    onClick={() => handleFilter(option.label)} // Setăm opțiunea de sortare
                    className="cursor-pointer hover:text-medium-blue"
                  >
                    <Typography variant="detailsBold">
                      {option.label}
                    </Typography>
                    <Spacing size="2" />
                  </div>
                ))}
              </div>
            )}
            {sortMenuOpen && (
              <div className="absolute right-0 sm:top-[4.5rem] top-[3rem] bg-white border border-gray-300 p-[2rem] shadow-lg rounded-[1.2rem] z-10">
                {sortOptions.map((option, index) => (
                  <div
                    key={index}
                    onClick={() => handleSort(option.label)} // Setăm opțiunea de sortare
                    className="cursor-pointer hover:text-medium-blue"
                  >
                    <Typography variant="detailsBold">
                      {option.label}
                    </Typography>
                    <Spacing size="2" />
                  </div>
                ))}
              </div>
            )}
          </div>
        </>
      )}

      <Spacing size="5" md="5" sm="4" />

      {/* Tabel Programări */}
      {!showForm && !showProgram && (
        <table className="w-full text-left border border-collapse border-gray-200 table-auto">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border border-gray-200 text-menu">
                Data
              </th>
              <th className="sm:hidden xs:hidden px-4 py-2 border border-gray-200 text-menu">
                Tip
              </th>

              <th className="px-4 py-2 border border-gray-200 text-menu">
                <span className="block sm:hidden">Nume Prenume & Email</span>
                <span className="hidden sm:block">Nume</span>
              </th>

              <th className="sm:hidden xs:hidden px-4 py-2 border border-gray-200 text-menu">
                Medic
              </th>
              <th className="sm:hidden xs:hidden px-4 py-2 border border-gray-200 text-menu">
                Specialități
              </th>
              <th className="sm:hidden xs:hidden px-4 py-2 border border-gray-200 text-menu">
                Număr de telefon
              </th>

              <th className="px-4 py-2 border border-gray-200 text-menu">
                Oră
              </th>
              {(user?.role === "admin" || user?.role === "guru") && (
                <th className="px-4 py-2 border border-gray-200 text-menu"></th>
              )}
            </tr>
          </thead>
          <tbody>
            {filteredAppointments.map((appointment, index) => {
              const isExpanded = expandedRows.includes(appointment._id);
              return (
                <React.Fragment key={index}>
                  <tr
                    onClick={() => toggleRow(appointment._id)}
                    className={`${appointment.isModify ? "bg-light-blue" : ""}`}
                  >
                    <td className="px-4 py-2 border border-gray-200 text-paragraph">
                      {appointment.date
                        ? new Date(appointment.date).toLocaleDateString(
                            "ro-RO",
                            {
                              day: "2-digit",
                              month: "2-digit",
                              year: "2-digit",
                            }
                          )
                        : "-"}
                    </td>

                    <td className="sm:hidden xs:hidden px-4 py-2 border border-gray-200 text-paragraph">
                      {appointment.appointmentType}
                    </td>

                    <td className="px-4 py-2 border border-gray-200 text-paragraph">
                      {appointment.lastName} {appointment.firstName} <br />
                      <span className="block sm:hidden">
                        {appointment.email}
                      </span>
                    </td>

                    <td className="sm:hidden px-4 py-2 border border-gray-200 text-paragraph">
                      {appointment.doctor}
                    </td>
                    <td className="sm:hidden px-4 py-2 border border-gray-200 text-paragraph">
                      {appointment.specialization}
                    </td>
                    <td className="sm:hidden px-4 py-2 border border-gray-200 text-paragraph">
                      {appointment.phone}
                    </td>

                    <td className="px-4 py-2 border border-gray-200 text-paragraph">
                      {appointment.timeSlot}
                    </td>

                    {(user?.role === "admin" || user?.role === "guru") && (
                      <td className="relative items-center px-4 py-2 text-center border border-gray-200">
                        {isMobile ? (
                          // Mobile: Chevron down icon
                          <BsChevronDown
                            className="cursor-pointer"
                            onClick={() => toggleRowMenu(index)}
                          />
                        ) : (
                          // Desktop: Three dots icon
                          <BsThreeDotsVertical
                            size={15}
                            className="cursor-pointer"
                            onClick={() => toggleRowMenu(index)}
                          />
                        )}

                        {openedRow === index && (
                          <div
                            ref={menuRef}
                            className="absolute right-[0rem] z-20 px-[2rem] py-[2.5rem] min-w-[23.4rem] whitespace-nowrap bg-white border border-gray-300 rounded-lg shadow-lg menu top-[4rem]"
                          >
                            <Typography
                              variant="detailsBold"
                              className="text-black cursor-pointer hover:text-medium-blue"
                              onClick={() => handleEditAppointment(appointment)}
                            >
                              Modifică programarea
                            </Typography>
                            <Spacing size="1.5" />
                            <Typography
                              variant="detailsBold"
                              onClick={() => handleOpenModal(appointment)}
                              className="text-black cursor-pointer hover:text-medium-blue"
                            >
                              Șterge programarea
                            </Typography>
                          </div>
                        )}
                      </td>
                    )}
                  </tr>
                  {isExpanded && (
                    <tr className="bg-gray-100">
                      <td
                        colSpan={user?.role === "admin" ? 4 : 3}
                        className="px-4 py-2 border border-gray-200"
                      >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
                          <div>
                            <strong>Email:</strong> {appointment.email || "-"}
                          </div>
                          <div>
                            <strong>Medic:</strong> {appointment.doctor || "-"}
                          </div>
                          <div>
                            <strong>Telefon:</strong> {appointment.phone || "-"}
                          </div>

                          <div>
                            <strong>Specializatii:</strong>
                            {appointment.specialization || "-"}
                          </div>
                          <div>
                            <strong>Tip programare: </strong>
                            {appointment.appointmentType}
                          </div>
                          <div></div>
                          <Typography
                            variant="detailsBold"
                            className="text-black cursor-pointer hover:text-medium-blue"
                            onClick={() => handleEditAppointment(appointment)}
                          >
                            Modifică
                          </Typography>

                          <Typography
                            variant="detailsBold"
                            onClick={() => handleOpenModal(appointment)}
                            className="text-black cursor-pointer hover:text-medium-blue"
                          >
                            Șterge
                          </Typography>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      )}

      {/* Afișăm modalul de confirmare dacă este necesar */}
      {showModal && (
        <ConfirmationModal
          message="Ești sigur că dorești să ștergi programarea?"
          onConfirm={handleDeleteAppointment} // Funcția pentru ștergerea programării
          onCancel={handleCancelDelete} // Funcția pentru anularea ștergerii
        />
      )}

      {/* Formular pentru programare */}
      {showForm && (
        <AppointmentFormAdmin
          initialData={formData}
          onSubmitSuccess={handleSubmitSuccess}
          onSubmitError={handleSubmitError}
          onCancel={handleCloseAppointment}
        />
      )}
      {showProgram && isAdmin() && (
        <EditSchedule
          selectedDoctor={selectedDoctor}
          setShowProgram={setShowProgram}
          setSelectedDoctor={setSelectedDoctor}
          existingSchedule={existingSchedule}
        />
      )}

      <Spacing size="15" />
      <Spacing size="15" />
    </div>
  );
};

export default ProgramatorAdmin;
