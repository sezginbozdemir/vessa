import React from "react";
import Spacing from "./Spacing";
import Typography from "./Typography";
import Button from "./Button";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center px-[2.7rem] py-[3rem] rounded-lg shadow-lg bg-light-blue w-[80%]">
      <Typography
        variant="h3"
        className="text-dark-blue">
        Contact
      </Typography>
      <Spacing size="2.4" />
      <Typography
        variant="paragraph"
        className="text-black">
        office@vessahospital.ro
      </Typography>
      <Spacing size="2" />
      <div className="z-10 flex ">
        <Button
          label="+40 744 833 815"
          className="h-[5rem] text-base"
        />
      </div>
    </div>
  );
};

export default Contact;
