export const ProgramatorEmailTemplate = (
  firstName: string,
  lastName: string,
  email: string,
  phone: string,
  selectedSpecialty: string,
  selectedDoctor: string,
  selectedDate: string | null,
  selectedTimeSlot: string | null,
  message = "Programarea ta este confirmată."
): string => {
  return `
   <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- Import Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&family=Open+Sans:wght@300;400;600&display=swap" rel="stylesheet">
  </head>
  <body style="font-family: 'Open Sans', sans-serif; background-color: #DFF6FF; padding: 20px; max-width: 800px; margin: 0 auto;">
    <div>
      <!-- Header Section -->
      <div style="text-align: center; padding-bottom: 20px;">
        <a href="https://vessahospital.ro" target="_blank">
          <img src="https://vessahospital.ro/images/vessa-logo.png" alt="Vessa Hospital" style="margin-bottom: 2rem; max-width: 200px;" />
        </a>
        <h2 style="text-align: center; font-size: 32px; color: #080808; font-family: 'Montserrat', sans-serif;">Bună ${firstName},</h2> <!-- Montserrat applied -->
        <h3 style="text-align: center; font-size: 24px; color: #080808; font-family: 'Montserrat', sans-serif;">${message}</h3> <!-- Montserrat applied -->
      </div>

      <!-- Main Content Section -->
      <div style="background-color: #ffffff; padding: 20px; border-radius: 8px;">
        <!-- Appointment Details -->
        <div style="font-size: 20px; color: #333; padding-top: 20px;">
          <div style="padding: 15px 0;">
            <div style="font-size: 16px; color: #7a7a7a; text-transform: uppercase; font-weight: lighter;">
              Nume:
            </div>
            <div style="font-size: 20px; color: #333;">${firstName}</div>
          </div>
          <div style="padding: 15px 0;">
            <div style="font-size: 16px; color: #7a7a7a; text-transform: uppercase; font-weight: lighter;">
              Prenume:
            </div>
            <div style="font-size: 20px; color: #333;">${lastName}</div>
          </div>
          <div style="padding: 15px 0;">
            <div style="font-size: 16px; color: #7a7a7a; text-transform: uppercase; font-weight: lighter;">
              Email:
            </div>
            <div style="font-size: 20px; color: #333;">${email}</div>
          </div>
          <div style="padding: 15px 0;">
          <div style="padding: 15px 0;">
            <div style="font-size: 16px; color: #7a7a7a; text-transform: uppercase; font-weight: lighter;">
              Specialitate:
            </div>
            <div style="font-size: 20px; color: #333;">${selectedSpecialty}</div>
          </div>
          <div style="padding: 15px 0;">
            <div style="font-size: 16px; color: #7a7a7a; text-transform: uppercase; font-weight: lighter;">
              Doctor:
            </div>
            <div style="font-size: 20px; color: #333;">${selectedDoctor}</div>
          </div>
          <div style="padding: 15px 0;">
            <div style="font-size: 16px; color: #7a7a7a; text-transform: uppercase; font-weight: lighter;">
              Data:
            </div>
            <div style="font-size: 20px; color: #333;">${
              selectedDate ? selectedDate : "Nespecificată"
            }</div>
          </div>
          <div style="padding: 15px 0;">
            <div style="font-size: 16px; color: #7a7a7a; text-transform: uppercase; font-weight: lighter;">
              Interval orar:
            </div>
            <div style="font-size: 20px; color: #333;">${
              selectedTimeSlot || "Nespecificat"
            }</div>
          </div>
          <div style="padding: 15px 0;">
            <div style="font-size: 16px; color: #7a7a7a; text-transform: uppercase; font-weight: lighter;">
              Locație:
            </div>
            <div style="font-size: 20px; color: #333;">Str. Franyo Zoltan, nr 6, Timișoara</div>
          </div>

          <!-- Location Button -->
          <div style="text-align: center; margin-top: 20px;">
            <a href="https://www.google.com/maps?q=Str.+Franyo+Zoltan,+nr+6,+Timișoara" target="_blank" style="text-decoration: none;">
              <button style="background-color: #1E40AF; color: #ffffff; border: none; padding: 12px 24px; border-radius: 5px; font-size: 18px; cursor: pointer;">
                Vezi locația pe hartă
              </button>
            </a>
          </div>
        </div>
      </div>

      <!-- Footer Section -->
      <div style="margin-top: 20px; text-align: center; font-size: 16px; color: #7a7a7a; font-family: 'Open Sans', sans-serif;">
        <p style="font-size: 14px;">Ai primit această notificare deoarece adresa ta de email a fost utilizată ca adresă de contact. Dacă email-ul a fost utilizat de către altcineva, fără aprobarea ta, te rugăm să ne scrii la <a href="mailto:office@vessahospital.ro" style="color: #1D4ED8; text-decoration: none;">office@vessahospital.ro</a>.</p>
        <hr style="border: none; border-top: 1px solid #ddd; margin: 20px auto; width: 80%;" />
        <p style="font-size: 12px; color: #333;">vessahospital.ro</p>
      </div>
    </div>
  </body>
</html>


  `;
};
