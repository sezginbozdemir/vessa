import React from "react";
import Typography from "../UI/Typography";

type ConfirmationModalProps = {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
};

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  message,
  onConfirm,
  onCancel,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-[1.2rem] shadow-lg p-8 w-[30rem] text-center">
        <Typography
          variant="paragraph"
          className="mb-6">
          {message}
        </Typography>
        <div className="flex justify-center space-x-8">
          <button
            onClick={onConfirm}
            className="text-black hover:text-blue-500 text-detailsBold ">
            Da
          </button>
          <button
            onClick={onCancel}
            className="text-black hover:text-blue-500 text-detailsBold">
            Nu
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
