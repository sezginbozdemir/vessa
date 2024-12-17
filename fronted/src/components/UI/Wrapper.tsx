import React, { ReactNode } from "react";

interface WrapperProps {
  children: ReactNode;
  className?: string;
}

const Wrapper: React.FC<WrapperProps> = ({ children, className }) => {
  return (
    <div
      className={`z-1 sm:px-[2rem] md:px-[6.4rem] lg:px-[20rem] xl:px-[30rem] ${className}`}>
      {children}
    </div>
  );
};

export default Wrapper;
