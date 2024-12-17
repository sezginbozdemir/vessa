export const ProgramatorDeleteEmail = (
  firstName: string,
  lastName: string,
  email: string,
  phone: string,
  selectedSpecialty: string,
  selectedDoctor: string,
  selectedDate: string | null,
  selectedTimeSlot: string | null
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
        <a href="https://demo.vessahospital.ro/" target="_blank">
          <img src="https://demo.vessahospital.ro/images/vessa-logo.png" alt="Logo" style="max-width: 200px; margin-bottom: 20px;" />
        </a>
        <h1 style="text-align: center; font-size: 32px; color: #080808; font-family: 'Montserrat', sans-serif;">Programarea a fost ștearsă cu succes:</h1> <!-- Montserrat applied -->
      </div>

      <!-- Main Content Section -->
      <div style="background-color: #ffffff; padding: 20px; border-radius: 8px;">
        <!-- Appointment Details -->
        <div style="font-size: 20px; color: #333; padding-top: 20px;">
          <div style="padding: 15px 0;">
            <div style="font-size: 16px; color: #7a7a7a; text-transform: uppercase; font-weight: lighter;">
              Nume complet:
            </div>
            <div style="font-size: 20px; color: #333;">${firstName} ${lastName}</div>
          </div>
          <div style="padding: 15px 0;">
            <div style="font-size: 16px; color: #7a7a7a; text-transform: uppercase; font-weight: lighter;">
              Email:
            </div>
            <div style="font-size: 20px; color: #333;">${email}</div>
          </div>
          <div style="padding: 15px 0;">
            <div style="font-size: 16px; color: #7a7a7a; text-transform: uppercase; font-weight: lighter;">
              Telefon:
            </div>
            <div style="font-size: 20px; color: #333;">${phone}</div>
          </div>
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
        </div>
      </div>
    </div>
  </body>
</html>


  `;
};
