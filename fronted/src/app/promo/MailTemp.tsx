export const MailTemp = (
  phone: string,
  name: string,
  title: string
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
        <h2 style="text-align: center; font-size: 32px; color: #080808; font-family: 'Montserrat', sans-serif;">Bună,</h2> <!-- Montserrat applied -->
        <h3 style="text-align: center; font-size: 24px; color: #080808; font-family: 'Montserrat', sans-serif;">O persoană a lăsat un număr de telefon pentru a fi sunată.</h3> <!-- Montserrat applied -->
      </div>

      <!-- Main Content Section -->
      <div style="background-color: #ffffff; padding: 20px; border-radius: 8px;">
        <!-- Name Details -->
        <div style="font-size: 20px; color: #333; padding-top: 20px;">
          <div style="padding: 15px 0;">
            <div style="font-size: 16px; color: #7a7a7a; text-transform: uppercase; font-weight: lighter;">
              Nume:
            </div>
            <div style="font-size: 20px; color: #333;">${name}</div>
          </div>
        </div>

        <!-- Phone Details -->
        <div style="font-size: 20px; color: #333; padding-top: 10px;">
          <div style="padding: 15px 0;">
            <div style="font-size: 16px; color: #7a7a7a; text-transform: uppercase; font-weight: lighter;">
              Număr de telefon:
            </div>
            <div style="font-size: 20px; color: #333;">${phone}</div>
          </div>
		          <!-- Oferta Details -->
        <div style="font-size: 20px; color: #333; padding-top: 10px;">
          <div style="padding: 15px 0;">
            <div style="font-size: 16px; color: #7a7a7a; text-transform: uppercase; font-weight: lighter;">
              Oferta:
            </div>
            <div style="font-size: 20px; color: #333;">${title}</div>
          </div>


          <!-- Footer Section -->
          <div style="margin-top: 20px; text-align: center; font-size: 16px; color: #7a7a7a; font-family: 'Open Sans', sans-serif;">
            <p style="font-size: 14px;">Ai primit această notificare deoarece adresa ta de email a fost utilizată ca adresă de contact. Dacă email-ul a fost utilizat de către altcineva, fără aprobarea ta, te rugăm să ne scrii la <a href="mailto:office@vessahospital.ro" style="color: #1D4ED8; text-decoration: none;">office@vessahospital.ro</a>.</p>
            <hr style="border: none; border-top: 1px solid #ddd; margin: 20px auto; width: 80%;" />
            <p style="font-size: 12px; color: #333;">vessahospital.ro</p>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>
  `;
};
