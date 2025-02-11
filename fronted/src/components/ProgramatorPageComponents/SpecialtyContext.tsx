"use client";

import React, { createContext, useState, useContext, useEffect } from "react";
import { usePathname } from "next/navigation";

interface SpecialtyContextType {
  selectedSpecialty: string;
  setSelectedSpecialty: React.Dispatch<React.SetStateAction<string>>;
}

const SpecialtyContext = createContext<SpecialtyContextType | undefined>(
  undefined
);

export const SpecialtyProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>("");
  const pathname = usePathname();
  useEffect(() => {
    if (pathname !== "/programator") {
      setSelectedSpecialty("");
    }
  }, [pathname]);
  return (
    <SpecialtyContext.Provider
      value={{ selectedSpecialty, setSelectedSpecialty }}
    >
      {children}
    </SpecialtyContext.Provider>
  );
};

export const useSpecialty = () => {
  const context = useContext(SpecialtyContext);
  if (context === undefined) {
    throw new Error("useSpecialty must be used within a SpecialtyProvider");
  }
  return context;
};
