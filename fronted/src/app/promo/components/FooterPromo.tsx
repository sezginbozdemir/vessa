"use client";
import Typography from "@/components/UI/Typography";
import Input from "./Input";
import Button from "@/components/UI/Button";
import { useSpecialty } from "@/components/ProgramatorPageComponents/SpecialtyContext";
import { useRouter } from "next/navigation";

interface FooterProps {
  specialty: string;
  footerTitle: string;
  id: string;
  title: string;
}

const FooterPromo: React.FC<FooterProps> = ({
  title,
  id,
  specialty,
  footerTitle,
}) => {
  const { setSelectedSpecialty } = useSpecialty();
  const router = useRouter();
  const handleButtonClick = async () => {
    const emailData = {
      to: `debug@vessahospital.ro`,
      subject: "Programare Nouă - Vessa Hospital",
      text: "Buton click - Programare direct",
    };
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailData),
      });

      if (response.ok) {
        console.log("Email trimis cu succes!");
      } else {
        console.error("A apărut o eroare la trimiterea emailului.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }

    const capitalizedSpecialty =
      specialty.charAt(0).toUpperCase() + specialty.slice(1);

    setSelectedSpecialty(capitalizedSpecialty);
    router.push("/programator");
  };

  return (
    <>
      <div className=" mt-[7rem] mb-[10rem] flex flex-col items-center justify-center">
        <Typography variant="h2" className="accent text-center">
          <span dangerouslySetInnerHTML={{ __html: footerTitle }} />
        </Typography>
      </div>
      <div className="flex items-center justify-center ">
        <div className="w-full flex flex-row sm:flex-col xs:flex-col items-end custom:items-center justify-center gap-12 xs:gap-8">
          <div className="w-[65%] sm:w-full xs:w-full z-[1000]">
            <Input title={title} id={id} label="Vreau să fiu sunat" />
          </div>

          <Typography
            variant="h3"
            className="w-[5%] pb-[1rem] xs:pb-0 sm:w-full xs:w-full flex justify-center"
          >
            sau
          </Typography>
          <div className="w-[30%] sm:w-full xs:w-full flex justify-center xs:px-[3rem]">
            <Button
              onClick={handleButtonClick}
              label="Mă programez on-line!"
              className="rounded-[9px] bg-transparent xs:w-full justify-center"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default FooterPromo;
