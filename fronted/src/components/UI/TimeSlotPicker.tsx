import React, { useState, useRef, useEffect } from "react";
import Typography from "../UI/Typography";
import { FaClock } from "react-icons/fa"; // React icons

type TimeSlot = {
  time: string;
  isBooked: boolean;
};

type TimeSlotPickerDropdownProps = {
  availableTimeSlots: TimeSlot[];
  selectedTimeSlot?: string | null;
  selectedDate?: Date | null;
  onTimeSlotChange?: (time: string) => void;
  className?: string;
};

const TimeSlotPickerDropdown = ({
  selectedDate,
  availableTimeSlots,
  selectedTimeSlot,
  onTimeSlotChange,
  className,
}: TimeSlotPickerDropdownProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSelectTime = (time: string) => {
    if (onTimeSlotChange) {
      onTimeSlotChange(time);
      setIsDropdownOpen(!isDropdownOpen);
    }
  };

  // Close the dropdown if a click is detected outside the component
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className={`relative ${className}`}>
      <label className="flex items-center mb-2">
        <FaClock className="mr-2 text-dark-blue w-[1.5rem] h-[1.5rem]" />
        <Typography variant="detailsBold" className="text-dark-black-75">
          Selectează ora
        </Typography>
      </label>
      <div
        onClick={handleToggleDropdown}
        className={`w-full h-[6.4rem] p-[1.9rem] mt-2 border border-gray-400 rounded-2xl text-details placeholder:text-details cursor-pointer bg-white flex items-center justify-between ${
          isDropdownOpen ? "rounded-b-none" : ""
        }`}
      >
        <span className="text-dark-opacity-75">
          {selectedTimeSlot
            ? selectedTimeSlot
            : selectedDate !== null
            ? "Selectează ora"
            : "Selectează întâi data"}
        </span>
        <FaClock className="text-dark-blue" />
      </div>
      {isDropdownOpen && (
        <div className="absolute z-90 w-full p-4 overflow-y-auto bg-white border border-t-0 border-gray-400 shadow-lg rounded-b-2xl max-h-64">
          <div className="grid grid-cols-4 gap-4">
            {availableTimeSlots.map((slot) => (
              <button
                key={slot.time}
                onClick={() => !slot.isBooked && handleSelectTime(slot.time)}
                className={`p-2 text-paragraph text-center rounded-lg ${
                  slot.isBooked
                    ? "text-gray-400 line-through"
                    : "text-black hover:text-medium-blue cursor-pointer"
                } ${selectedTimeSlot === slot.time ? "bg-light-blue" : ""}`}
                disabled={slot.isBooked}
              >
                {slot.time}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TimeSlotPickerDropdown;
