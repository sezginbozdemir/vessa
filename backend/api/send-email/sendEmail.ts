import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

// Creează transportatorul SMTP
const transporter = nodemailer.createTransport({
  host: process.env.GMAIL_HOST,
  port: 25,
  secure: false,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

// Funcție pentru trimiterea e-mailului
export const sendEmail = async (to: string, subject: string, html: string) => {
  try {
    const info = await transporter.sendMail({
      from: '"Vessa Hospital" <noreply@vessahospital.ro>',
      to,
      subject,
      html,
    });

    console.log("E-mail trimis: %s", info.messageId);
  } catch (error) {
    console.error("Eroare la trimiterea e-mailului:", error);
  }
};
