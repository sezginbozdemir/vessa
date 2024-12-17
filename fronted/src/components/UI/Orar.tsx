import React from "react";
import Typography from "./Typography";
import Spacing from "./Spacing";

const Orar = () => {
  return (
    <div className="p-8 rounded-lg shadow-lg bg-light-blue">
      <Typography
        variant="h3"
        className="text-center text-dark-blue">
        Orar zilnic
      </Typography>
      <Spacing size="4" />
      <div className="space-y-4">
        <div className="flex justify-between">
          <Typography
            variant="paragraph"
            className="text-black">
            Luni-Miercuri
          </Typography>
          <Typography
            variant="paragraph"
            className="text-black">
            10:00-21:30
          </Typography>
        </div>
        <hr className="border-t border-white" />
        <div className="flex justify-between">
          <Typography
            variant="paragraph"
            className="text-black">
            Joi-Vineri
          </Typography>
          <Typography
            variant="paragraph"
            className="text-black">
            09:00-22:30
          </Typography>
        </div>
        <hr className="border-t border-white" />
        <div className="flex justify-between">
          <Typography
            variant="paragraph"
            className="text-black">
            Sâmbătă-Duminică
          </Typography>
          <Typography
            variant="paragraph"
            className="text-black">
            09:30-20:30
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Orar;
