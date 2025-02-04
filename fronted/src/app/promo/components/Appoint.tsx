"use client";

import Typography from "@/components/UI/Typography";
import Button from "@/components/UI/Button";
import { useSpecialty } from "@/components/ProgramatorPageComponents/SpecialtyContext";
import { useRouter } from "next/navigation";
interface AppointProps {
  specialty: string;
}
const Appoint: React.FC<AppointProps> = ({ specialty }) => {
  const { setSelectedSpecialty } = useSpecialty();
  const router = useRouter();
  const handleButtonClick = () => {
    const capitalizedSpecialty =
      specialty.charAt(0).toUpperCase() + specialty.slice(1);

    setSelectedSpecialty(capitalizedSpecialty);
    router.push("/programator");
  };
  return (
    <div className="flex justify-center items-center mt-36">
      <div className="flex flex-row  xs:flex-col gap-36 justify-center items-center">
        <Typography variant="h2" className="w-1/3 xs:hidden">
          Rezervă-ți consultul și monitorizarea inimii tale,într-un interval
          care <span className="custom-blue-text">ți se potrivește.</span>
        </Typography>
        <Typography variant="h2" className="w-1/3 text-center hidden xs:block">
          sau
        </Typography>
        <Typography variant="buttonText">
          <Button
            onClick={handleButtonClick}
            className="bg-transparent"
            label="Programează-te direct!"
          />
        </Typography>
      </div>
    </div>
  );
};

export default Appoint;
