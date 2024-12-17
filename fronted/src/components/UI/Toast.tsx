import React, { useEffect } from "react";
import { IoCheckmark } from "react-icons/io5";
import Typography from "../UI/Typography";

type ToastProps = {
  message?: string | null;
  onClose?: () => void; // Adăugăm proprietatea onClose
};

const Toast = ({ message, onClose }: ToastProps) => {
  useEffect(() => {
    // Închidem toast-ul după 3 secunde
    const timer = setTimeout(() => {
      if (onClose) {
        onClose();
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="top-10 right-margin200 bg-dark-blue text-white flex items-center py-[2rem] px-[1.3rem] rounded-lg shadow-lg">
      <IoCheckmark className="w-[2.4rem] h-[2.4rem] text-white mr-4" />
      <Typography variant="detailsBold">
        {message ? message : "Mesajul a fost trimis cu succes"}
      </Typography>
    </div>
  );
};

export default Toast;
