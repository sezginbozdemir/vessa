"use client";
import Image from "next/image";
import Typography from "@/components/UI/Typography";
import Spacing from "@/components/UI/Spacing";

interface AppointmentData {
  lastName: string;
  firstName: string;
  email: string;
  doctor: string;
  date: Date;
  specialization: string;
  phone: string;
  timeSlot: string;
  isModify?: boolean;
}

const PrintCompoent = ({
  appointments,
}: {
  appointments: AppointmentData[];
}) => {
  const currentDate = new Date().toLocaleDateString("ro-RO", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="px-[5rem] py-[5rem]">
      <div className="flex items-center justify-center mb-8">
        <Image
          src="/images/vessa-logo.png"
          alt="Vessa Hospital Logo"
          width={150}
          height={40}
        />
      </div>
      <Spacing size="4" md="4" sm="4" />
      <div className="flex items-center justify-between pb-4">
        <div className="flex items-center space-x-4 cursor-pointer">
          <Typography variant="h3" className="text-black">
            Data programării
          </Typography>
        </div>
      </div>
      <Spacing size="1.5" md="1.5" sm="1.5" />
      <Typography variant="detailsBold" className="text-dark-blue">
        {currentDate}
      </Typography>

      <Spacing size="2" md="2" sm="2" />
      <hr className="border-t border-dark-opacity-80" />

      <Spacing size="4" md="4" sm="4" />

      <table className="w-full mb-8 text-left border border-collapse border-gray-200 table-auto">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 border border-gray-200 text-menu">Data</th>
            <th className="px-4 py-2 border text-[1.6rem] border-gray-200 ">
              Nume Prenume & Email
            </th>
            <th className="px-4 py-2 border border-gray-200 text-[1.6rem]">
              Medic
            </th>
            <th className="px-4 py-2 border border-gray-200 text-[1.6rem]">
              Specialități
            </th>
            <th className="px-4 py-2 border border-gray-200 text-[1.6rem]">
              Număr de telefon
            </th>
            <th className="px-4 py-2 border border-gray-200 text-[1.6rem]">
              Oră
            </th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment, index) => (
            <tr key={index}>
              <td className="px-4 py-2 border border-gray-200 text-paragraph">
                {appointment.date
                  ? new Date(appointment.date).toLocaleDateString("ro-RO", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "2-digit",
                    })
                  : "-"}
              </td>

              <td className="px-4 py-2 border border-gray-200 text-[1.4rem]">
                {appointment.lastName} {appointment.firstName} <br />
                {appointment.email}
              </td>
              <td className="px-4 py-2 border border-gray-200 text-[1.4rem]">
                {appointment.doctor}
              </td>
              <td className="px-4 py-2 border border-gray-200 text-[1.4rem]">
                {appointment.specialization}
              </td>
              <td className="px-4 py-2 border border-gray-200 text-[1.4rem]">
                {appointment.phone}
              </td>
              <td className="px-4 py-2 border border-gray-200 text-[1.4rem]">
                {appointment.timeSlot}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add this CSS for print styling */}
      <style jsx global>{`
        @media print {
          .print\\:hidden {
            display: none !important;
          }

          @page {
            margin: 1cm;
          }

          header,
          footer {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default PrintCompoent;
