import nodemailer from "nodemailer";

// Create the SMTP transporter
const transporter = nodemailer.createTransport({
  host: process.env.GMAIL_HOST,
  port: 587, // Use STARTTLS
  secure: false, // Not using SSL directly
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false, // Ignore self-signed certificate errors
  },
});

// Function to send the email
export const sendEmail = async (to: string, subject: string, text: string) => {
  try {
    const info = await transporter.sendMail({
      from: '"Programari Vessa Hospital" <noreply@vessahospital.ro>',
      to,
      subject,
      text,
    });

    console.log("E-mail trimis: %s", info.messageId);
  } catch (error) {
    console.error("Eroare la trimiterea e-mailului:", error);
  }
};
