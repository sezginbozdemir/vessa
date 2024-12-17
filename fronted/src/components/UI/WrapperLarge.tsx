import React, { ReactNode } from "react";

interface WrapperProps {
  children: ReactNode;
  className?: string;
}

const WrapperLarge: React.FC<WrapperProps> = ({ children, className }) => {
  return (
    <div
      className={`px-[27rem] lg:px-[20rem]  xl:px-[30rem]  sm:px-[2rem] md:px-[6.4rem] ${className}`}>
      {children}
    </div>
  );
};

export default WrapperLarge;
