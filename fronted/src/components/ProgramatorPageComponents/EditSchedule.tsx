"use client";
import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import "react-datepicker/dist/react-datepicker.css";
import Typography from "../UI/Typography";
import Spacing from "../UI/Spacing";
import DatePicker from "react-datepicker";
import ToggleSwitch from "./ToggleSwitch";
import Select, { MultiValue, SingleValue } from "react-select";
import "./select.css";
import Button from "../UI/Button";
import { UserApi } from "../../app/api/userApi";
import Toast from "../UI/Toast";

type OptionType = { value: string; label: string };
type EditScheduleProps = {
  selectedDoctor: string | undefined;
  setShowProgram: Dispatch<SetStateAction<boolean>>;
  setSelectedDoctor: Dispatch<SetStateAction<string | undefined>>;
  existingSchedule: Date[] | undefined;
};

const EditSchedule: React.FC<EditScheduleProps> = ({
  selectedDoctor,
  setShowProgram,
  setSelectedDoctor,
  existingSchedule,
}) => {
  const [isToggled, setIsToggled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [selectedDates, setSelectedDates] = useState<Date[] | null>([]);
  const [availableDays, setAvailableDays] = useState<string[]>([]);
  const [maxSelect, setMaxSelect] = useState<OptionType | null>(null);
  const [allMonths, setAllMonths] = useState(false);
  const [startInterval, setStartInterval] = useState<OptionType | null>(null);
  const [endInterval, setEndInterval] = useState<OptionType | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [duration, setDuration] = useState<OptionType | null>(null);
  const [selectedInterval, setSelectedInterval] = useState<string[]>([]);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [showToast, setShowToast] = useState(false);

  const { updateUser, getUsers } = UserApi();

  const startOptions: OptionType[] = [
    { value: "13:00", label: "13:00" },
    { value: "14:00", label: "14:00" },
    { value: "15:00", label: "15:00" },
    { value: "16:00", label: "16:00" },
    { value: "17:00", label: "17:00" },
  ];

  const endOptions: OptionType[] = [
    { value: "15:00", label: "15:00" },
    { value: "16:00", label: "16:00" },
    { value: "17:00", label: "17:00" },
    { value: "18:00", label: "18:00" },
    { value: "19:00", label: "19:00" },
  ];

  const durationOptions: OptionType[] = [
    { value: "30", label: "30 min" },
    { value: "45", label: "45 min" },
    { value: "60", label: "60 min" },
    { value: "90", label: "90 min" },
  ];
  const days: OptionType[] = [
    { value: "Luni", label: "Luni" },
    { value: "Marti", label: "Marti" },
    { value: "Miercuri", label: "Miercuri" },
    { value: "Joi", label: "Joi" },
    { value: "Vineri", label: "Vineri" },
  ];
  const dayNumbers: OptionType[] = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
  ];

  const frecventa: OptionType[] = [
    { value: "everyweek", label: "In fiecare saptamana" },
  ];

  useEffect(() => {
    if (isToggled && selectedDoctor) {
      if (existingSchedule) {
        setSelectedDates(existingSchedule.map((date) => new Date(date)));
      }
    }
  }, [isToggled, selectedDoctor, existingSchedule]);

  useEffect(() => {
    const handleResize = () => {
      setIsVisible(window.innerWidth > 1000);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleToggle = (value: boolean) => {
    setIsToggled(value);
    setSelectedDates([]);
  };

  const handleDaySelect = (selectedOptions: MultiValue<OptionType> | null) => {
    setAvailableDays(
      selectedOptions ? selectedOptions.map((option) => option.value) : []
    );
  };
  const handleDaysNumber = (selectedOption: SingleValue<OptionType>) => {
    setMaxSelect(selectedOption);
  };
  const isDate = () => {
    return false;
  };
  const handleCheckboxChange = () => {
    setAllMonths((prevState) => !prevState);
  };
  useEffect(() => {
    if (isToggled) {
      return;
    }
    const isDateAvailable = (date: Date) => {
      const dayOfWeekIndex = date.getDay();
      const daysMap = [
        "Duminica",
        "Luni",
        "Marti",
        "Miercuri",
        "Joi",
        "Vineri",
        "Sambata",
      ];
      return availableDays!.includes(daysMap[dayOfWeekIndex]);
    };

    const getHighlightedDates = () => {
      const highlightedDates: Date[] = [];
      const currentDate = new Date();
      const currentMonth = currentDate.getMonth();
      const currentYear = currentDate.getFullYear();
      const currentDay = currentDate.getDate();

      const getMaxDaysInMonth = (month: number) => {
        return new Date(currentYear, month + 1, 0).getDate();
      };

      const monthsToProcess = allMonths
        ? Array.from({ length: 12 - currentMonth }, (_, i) => currentMonth + i)
        : [currentMonth];

      for (const month of monthsToProcess) {
        const startDay = month === currentMonth ? currentDay : 1;
        const maxDaysInMonth = getMaxDaysInMonth(month);

        for (let day = startDay; day <= maxDaysInMonth; day++) {
          const date = new Date(currentYear, month, day);
          if (isDateAvailable(date)) {
            highlightedDates.push(date);
          }
        }
      }

      return highlightedDates;
    };
    const highlightedDates = getHighlightedDates();

    setSelectedDates((prevDates) => {
      const isSame =
        prevDates!.length === highlightedDates.length &&
        prevDates!.every(
          (date, idx) => date.getTime() === highlightedDates[idx].getTime()
        );
      return isSame ? prevDates : highlightedDates;
    });
  }, [availableDays, allMonths, isToggled]);

  const handleDateChange = (dates: Date[] | null) => {
    setSelectedDates(dates);
  };
  const handleStartIntervalSelect = (
    selectedOption: SingleValue<OptionType>
  ) => {
    setStartInterval(selectedOption);
    setError(null);
    if (selectedOption && endInterval && duration) {
      if (selectedOption.value < endInterval.value) {
        generateTimeIntervals(
          selectedOption!.value,
          endInterval!.value,
          duration!.value
        );
      } else {
        setError(
          "Intervalul de început nu poate fi mai mare decât intervalul de sfârșit."
        );
      }
    } else {
      return;
    }
  };
  const handleEndIntervalSelect = (selectedOption: SingleValue<OptionType>) => {
    setEndInterval(selectedOption);
    setError(null);
    if (selectedOption && startInterval && duration) {
      if (selectedOption.value > startInterval.value) {
        generateTimeIntervals(
          startInterval!.value,
          selectedOption!.value,
          duration!.value
        );
      } else {
        setError(
          "Intervalul de sfârșit nu poate fi mai mic decât intervalul de început."
        );
      }
    } else {
      return;
    }
  };

  const handleDurationSelect = (selectedOption: SingleValue<OptionType>) => {
    setDuration(selectedOption);
    if (startInterval && endInterval && selectedOption) {
      generateTimeIntervals(
        startInterval.value,
        endInterval.value,
        selectedOption.value
      );
    }
  };

  const generateTimeIntervals = (
    start: string | null,
    end: string | null,
    duration: string | null
  ) => {
    if (!start || !duration || !end) return;

    const intervalDuration = parseInt(duration, 10);
    const intervals: string[] = [];

    const [startHour, startMinute] = start.split(":").map(Number);
    const [endHour, endMinute] = end.split(":").map(Number);

    let currentTime = startHour * 60 + startMinute;
    const endTime = endHour * 60 + endMinute;

    while (currentTime < endTime) {
      const currentHour = Math.floor(currentTime / 60);
      const currentMinute = currentTime % 60;

      intervals.push(
        `${String(currentHour).padStart(2, "0")}:${String(
          currentMinute
        ).padStart(2, "0")}`
      );

      currentTime += intervalDuration;
    }

    setSelectedInterval(intervals);
  };
  const handleCancel = () => {
    setSelectedInterval([]);
    setSelectedDates([]);
    setAvailableDays([]);
    setShowProgram(false);
    setSelectedDoctor(undefined);
  };
  const handleSubmit = async () => {
    if (
      !selectedDoctor ||
      selectedDates!.length === 0 ||
      selectedInterval.length === 0
    ) {
      setToastMessage("Asigură-te că toate câmpurile sunt selectate!");
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });

      return;
    }

    const currentDate = new Date();

    const filteredDates = selectedDates!.filter((date) => date >= currentDate);

    const newAvailability = filteredDates.map((date) => ({
      date,
      timeSlots: selectedInterval.map((interval) => {
        const [start] = interval.split("-");
        return start;
      }),
    }));

    try {
      const users = await getUsers();
      const doctor = users.find((user) => user.fullname === selectedDoctor);

      if (!doctor) {
        console.error("Doctor not found");
        return;
      }

      const updatedDoctor = {
        ...doctor,
        availability: newAvailability,
      };

      const res = await updateUser(doctor._id, updatedDoctor);

      if (res) {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });

        setToastMessage(
          "Disponibilitatea doctorului a fost actualizată cu succes!"
        );
        setShowToast(true);
        setTimeout(() => {
          setShowToast(false);
          setShowProgram(false);
        }, 3000);

        setSelectedInterval([]);
        setSelectedDates([]);
        setAvailableDays([]);

        setSelectedDoctor(undefined);
      } else {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });

        setToastMessage("Actualizarea disponibilității doctorului a eșuat.");
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
      }
    } catch (error) {
      console.error("Error updating availability:", error);
    }
  };
  console.log("Selected Dates", selectedDates);
  //console.log("Existing Schedule", existingSchedule);

  return (
    <>
      {showToast && (
        <div className="absolute right-[8%] top-[8%] lg:right-[8%] lg:top-[8%] md:right-[9%] md:top-[8%] sm:right-[5%] sm:top-[4%]">
          <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
        </div>
      )}
      <section className="px-4 xl:px-[15rem] lg:px-[10rem] md:px-[3rem]">
        <div className="flex sm:flex-wrap gap-[5rem]  ">
          {/* Calendar Section */}
          <div
            className={`${
              !isVisible ? "w-1/2" : "w-1/3"
            } mb-[3.8rem] sm:w-full flex items-end sm:px-[4rem]`}
          >
            {!isToggled ? (
              <DatePicker
                dateFormat="dd MMM yyyy"
                className="w-full text-details"
                filterDate={isDate}
                highlightDates={
                  selectedDates && selectedDates.length > 0
                    ? selectedDates.map((date) => new Date(date))
                    : existingSchedule && existingSchedule.length > 0
                    ? existingSchedule.map((date) => new Date(date))
                    : []
                }
                calendarClassName="custom-datepicker-calendar custom-date no-nav"
                dayClassName={(date) => {
                  return selectedDates!.some(
                    (highlightedDate) =>
                      highlightedDate.toDateString() === date.toDateString()
                  )
                    ? "custom-highlighted-date"
                    : "";
                }}
                inline
              />
            ) : (
              <DatePicker
                disabledKeyboardNavigation
                selectedDates={selectedDates!}
                onChange={handleDateChange}
                selectsMultiple
                dateFormat="dd MMM yyyy"
                className="w-full text-details"
                calendarClassName="custom-datepicker-calendar custom-date"
                inline
                minDate={new Date()}
                filterDate={(date) => {
                  const day = date.getDay();
                  return day !== 0 && day !== 6;
                }}
              />
            )}
          </div>

          {/* Form Section */}
          <div
            className={`${
              !isVisible ? "w-1/2" : "w-1/3"
            } overflow-visible sm:w-full flex flex-col ${
              isToggled ? "h-[46rem] md:h-[40rem] sm:h-auto" : "justify-between"
            } ${
              !isVisible && isToggled ? "md:h-[46rem]" : ""
            } gap-[1.8rem] sm:gap-1 `}
          >
            <Typography variant="h3" className="text-dark-black-75">
              Setează data consultațiilor
            </Typography>
            {!isVisible && (
              <ToggleSwitch isToggled={isToggled} onToggle={handleToggle} />
            )}
            {!isToggled ? (
              <div className="flex flex-col justify-between mt-[4rem] md:mt-[1rem] sm:mt-0">
                <label className="flex items-center">
                  <Typography
                    variant="detailsBold"
                    className="text-dark-black-75"
                  >
                    Nr. de zile pe săptămână
                  </Typography>
                </label>
                <Select
                  isDisabled={isToggled}
                  placeholder="Selectează..."
                  onChange={handleDaysNumber}
                  value={maxSelect}
                  classNamePrefix="custom-select"
                  options={dayNumbers}
                />
              </div>
            ) : (
              <div className="flex flex-col justify-between mt-[4rem] md:mt-[1rem] sm:mt-0">
                <Typography
                  variant="detailsBold"
                  className="text-dark-black-75"
                >
                  Selectează data pentru consultații din calendar
                </Typography>
              </div>
            )}
            <Spacing size="0" md="0" sm="3" />
            {!isToggled ? (
              <div className="flex flex-col justify-between">
                <label className="flex items-center">
                  <Typography
                    variant="detailsBold"
                    className="text-dark-black-75"
                  >
                    Ziua specifică din săptămână
                  </Typography>
                </label>
                <Select
                  isDisabled={isToggled}
                  placeholder="Selectează..."
                  isMulti
                  isOptionDisabled={() =>
                    availableDays.length >= parseInt(maxSelect?.value || "0")
                  }
                  value={availableDays.map((day) => ({
                    value: day,
                    label: day,
                  }))}
                  onChange={handleDaySelect}
                  classNamePrefix="custom-select"
                  options={days}
                />
              </div>
            ) : (
              <div className="flex flex-col justify-between">
                <Typography variant="menu" className="text-dark-blue">
                  *selectează pentru toată luna
                </Typography>
              </div>
            )}
            <Spacing size="0" md="0" sm="3" />
            <div
              className={`${
                !isToggled ? "" : "hidden"
              } flex flex-col justify-between`}
            >
              <label className="flex items-center">
                <Typography
                  variant="detailsBold"
                  className="text-dark-black-75"
                >
                  Frecvența consultațiilor
                </Typography>
              </label>
              <Select
                isDisabled={isToggled}
                placeholder="Selectează..."
                classNamePrefix="custom-select"
                options={frecventa}
              />
            </div>
            <div
              className={`${isVisible && "w-max"} ${
                isToggled && "invisible"
              } mt-5 flex items-center space-x-2`}
            >
              <input
                type="checkbox"
                className="w-5 h-5 text-medium-blue cursor-pointer"
                checked={allMonths}
                onChange={handleCheckboxChange}
              />
              <span>
                <Typography
                  variant="detailsBold"
                  className="text-dark-black-75"
                >
                  Selectează opțiunea pentru a seta aceste informații pentru
                  toate lunile
                </Typography>
              </span>
            </div>{" "}
          </div>
          <div className={`${isVisible ? "w-1/3" : "hidden"}`}>
            <ToggleSwitch isToggled={isToggled} onToggle={handleToggle} />
          </div>
        </div>
        <Spacing size="3" md="3" sm="3" />
      </section>
      <section className="mt-[5rem] px-4 xl:px-[15rem] lg:px-[10rem] md:px-[3rem]">
        <div className="flex sm:flex-wrap gap-[5rem]">
          {/* Display  Section */}
          <div
            className={`${
              !isVisible ? "w-1/2" : "w-1/3"
            } mb-[3.8rem] sm:w-full flex items-end sm:px-[4rem]`}
          >
            <div className="sm:h-[25rem] xs:h-[20rem] w-full h-full border border-dark-blue rounded-3xl flex justify-center items-center lg:pb-[8rem] md:pb-[5rem]">
              <Typography variant="paragraph" className="text-dark-black-75">
                {selectedInterval ? (
                  <div className="flex justify-center flex-wrap gap-4">
                    {selectedInterval.map((interval, index) => (
                      <div
                        key={index}
                        className="flex-2 min-w-[20%] p-5 text-details"
                      >
                        {interval}
                      </div>
                    ))}
                  </div>
                ) : (
                  ""
                )}
              </Typography>
            </div>
          </div>

          {/* Form Section */}
          <div
            className={`${
              !isVisible ? "w-1/2" : "w-1/3"
            } overflow-visible sm:w-full flex flex-col justify-between gap-[1.8rem] sm:gap-1 `}
          >
            <Typography variant="h3" className="text-dark-black-75">
              Setează ora consultațiilor
            </Typography>
            <div className="flex flex-col justify-between mt-[4rem] md:mt-[1rem] sm:mt-0">
              <label className="flex items-center">
                <Typography
                  variant="detailsBold"
                  className="text-dark-black-75"
                >
                  Intervalul orar
                </Typography>
              </label>
              <Select
                placeholder="Selectează..."
                classNamePrefix="custom-select"
                onChange={handleStartIntervalSelect}
                options={startOptions}
              />
              <Select
                className="mt-[1rem]"
                placeholder="Selectează..."
                classNamePrefix="custom-select"
                onChange={handleEndIntervalSelect}
                options={endOptions}
              />
              {error && (
                <div className="text-red-500 text-xl ml-3 mt-1">{error} </div>
              )}
            </div>
            <Spacing size="0" md="0" sm="3" />
            <div className="flex flex-col justify-between">
              <label className="flex items-center">
                <Typography
                  variant="detailsBold"
                  className="text-dark-black-75"
                >
                  Durata consultației/programării
                </Typography>
              </label>
              <Select
                placeholder="Selectează..."
                classNamePrefix="custom-select"
                onChange={handleDurationSelect}
                options={durationOptions}
              />
            </div>
            <div
              className={`invisible ${
                isVisible && "w-max"
              } mt-5 flex items-center space-x-2`}
            >
              <input
                type="checkbox"
                className="w-5 h-5 text-medium-blue cursor-pointer"
              />
              <span>
                <Typography
                  variant="detailsBold"
                  className="text-dark-black-75"
                >
                  Selectează opțiunea pentru a seta aceste informații pentru
                  toate lunile
                </Typography>
              </span>
            </div>{" "}
          </div>
          <div className={`invisible ${isVisible ? "w-1/3" : "hidden"}`}></div>
        </div>
        <Spacing size="3" md="3" sm="3" />
      </section>
      <section className="px-4 xl:px-[15rem] lg:px-[10rem] mt-[5rem] md:px-[3rem]">
        <div className="flex sm:flex-wrap gap-[5rem]">
          {/* Calendar Section */}
          <div
            className={`${
              !isVisible ? "w-1/2" : "w-1/3"
            }  sm:w-full flex justify-around sm:justify-center xs:justify-center gap-5`}
          >
            <Button label="Anulează" onClick={handleCancel} />
            <Button label="Salveaza" onClick={handleSubmit} />
          </div>
          <div className="invisible w-1/3"></div>{" "}
          <div className="invisible w-1/3"></div>
        </div>
        <Spacing size="3" md="3" sm="3" />
      </section>
    </>
  );
};

export default EditSchedule;
