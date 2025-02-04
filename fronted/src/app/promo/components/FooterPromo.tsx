"use client";
import Typography from "@/components/UI/Typography";
import Input from "./Input";
import Button from "@/components/UI/Button";
import { useSpecialty } from "@/components/ProgramatorPageComponents/SpecialtyContext";
import { useRouter } from "next/navigation";

interface FooterProps {
  specialty: string;
}

const FooterPromo: React.FC<FooterProps> = ({ specialty }) => {
  const { setSelectedSpecialty } = useSpecialty();
  const router = useRouter();
  const handleButtonClick = () => {
    const capitalizedSpecialty =
      specialty.charAt(0).toUpperCase() + specialty.slice(1);

    setSelectedSpecialty(capitalizedSpecialty);
    router.push("/programator");
  };

  return (
    <>
      <div className=" mt-36 mb-16 flex flex-col items-center justify-center">
        <Typography variant="h2" className="accent">
          Sănătatea Ta Contează!
        </Typography>
        <Typography variant="h2" className="accent">
          Fă-ți un Control
        </Typography>
        <Typography variant="h2" className="accent">
          Cardiologic!
        </Typography>
      </div>
      <div className="flex items-center justify-center">
        <div className="w-[80%] flex flex-row sm:flex-col xs:flex-col items-center justify-center gap-12">
          <div className="w-full">
            <Input width="100%" mobileWidth="100%" label="Trimite numărul" />
          </div>

          <Typography variant="h3">sau</Typography>
          <div className="w-full flex justify-center">
            <Button
              onClick={handleButtonClick}
              label="Programează-te singur!"
              className="rounded-[9px] bg-transparent"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default FooterPromo;
