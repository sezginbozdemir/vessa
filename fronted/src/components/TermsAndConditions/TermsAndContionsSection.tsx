"use client";
import React from "react";
import Typography from "../UI/Typography";
import Spacing from "../UI/Spacing";

const TermsAndConditions = () => {
  return (
    <section className="px-[30rem] md:px-[6.4rem] sm:px-[2rem] py-12">
      <Typography variant="h2" className="text-dark-blue">
        Termeni și Condiții
      </Typography>
      <Spacing size="5" md="2" sm="2" />

      <Typography variant="paragraph" className="text-black">
        Acest document stabilește termenii și condițiile de utilizare a
        site-ului nostru. Prin accesarea și utilizarea acestui site, sunteți de
        acord cu termenii și condițiile descrise mai jos. Vă rugăm să citiți cu
        atenție acest document.
      </Typography>
      <Spacing size="5" md="3" sm="3" />

      <Typography variant="h3" className="text-black">
        Utilizarea Site-ului
      </Typography>
      <Spacing size="2.5" md="3" sm="2" />
      <ul className="list-disc ml-[2rem] space-y-3">
        <li>
          <Typography variant="paragraph" className="text-black">
            Site-ul Vessa Hospital este destinat informării generale despre
            serviciile oferite de spital, programări online, și alte informații
            de interes pentru pacienți și vizitatori.
          </Typography>
        </li>
        <li>
          <Typography variant="paragraph" className="text-black">
            Informațiile prezentate pe acest site nu constituie un consult
            medical și nu înlocuiesc sfaturile unui medic specialist. Pentru un
            diagnostic corect și un tratament adecvat, vă rugăm să vă adresați
            direct unui medic.
          </Typography>
        </li>
      </ul>
      <Spacing size="5" md="3" sm="3" />

      <Typography variant="h3" className="text-black">
        Confidențialitatea Datelor
      </Typography>
      <Spacing size="2.5" md="3" sm="2" />
      <ul className="list-disc ml-[2rem] space-y-3">
        <li>
          <Typography variant="paragraph" className="text-black">
            Vessa Hospital respectă confidențialitatea datelor dvs. personale.
            Colectarea și prelucrarea datelor se face conform Politicii de
            Confidențialitate, pe care vă rugăm să o consultați pentru mai multe
            detalii.
          </Typography>
        </li>
        <li>
          <Typography variant="paragraph" className="text-black">
            Datele personale colectate prin intermediul formularelor online sunt
            folosite exclusiv pentru scopurile declarate și nu vor fi partajate
            cu terți fără consimțământul dvs., cu excepția cazurilor prevăzute
            de lege.
          </Typography>
        </li>
      </ul>
      <Spacing size="5" md="3" sm="3" />

      <Typography variant="h3" className="text-black">
        Proprietatea Intelectuală
      </Typography>
      <Spacing size="2.5" md="3" sm="3" />
      <ul className="list-disc ml-[2rem] space-y-3">
        <li>
          <Typography variant="paragraph" className="text-black">
            Conținutul și designul site-ului Vessa Hospital inclusiv toate
            materialele, textele, grafica, imaginile, și logo-urile, sunt
            protejate de drepturile de autor și alte drepturi de proprietate
            intelectuală.
          </Typography>
        </li>
        <li>
          <Typography variant="paragraph" className="text-black">
            Utilizarea neautorizată a oricărei părți a acestui site poate
            constitui o încălcare a legii drepturilor de autor.
          </Typography>
        </li>
      </ul>
      <Spacing size="5" md="3" sm="3" />

      <Typography variant="h3" className="text-black">
        Limitarea Răspunderii
      </Typography>
      <Spacing size="2.5" md="3" sm="2" />
      <ul className="list-disc ml-[2rem] space-y-3">
        <li>
          <Typography variant="paragraph" className="text-black">
            Vessa Hospital nu garantează că site-ul va funcționa fără erori sau
            întreruperi. Utilizarea site-ului se face pe propriul risc al
            utilizatorului.
          </Typography>
        </li>
        <li>
          <Typography variant="paragraph" className="text-black">
            Vessa Hospital nu este responsabil pentru eventualele daune directe
            sau indirecte ce pot apărea din utilizarea sau imposibilitatea
            utilizării informațiilor furnizate pe acest site.
          </Typography>
        </li>
      </ul>
      <Spacing size="5" md="3" sm="3" />

      <Typography variant="h3" className="text-black">
        Modificări ale Termenilor și Condițiilor
      </Typography>
      <Spacing size="2.5" md="3" sm="2" />
      <ul className="list-disc ml-[2rem] space-y-3">
        <li>
          <Typography variant="paragraph" className="text-black">
            Vessa Hospital își rezervă dreptul de a modifica oricând acești
            termeni și condiții. Modificările vor fi afișate pe această pagină
            și vor intra în vigoare de la data publicării.
          </Typography>
        </li>
        <li>
          <Typography variant="paragraph" className="text-black">
            Vă recomandăm să verificați periodic această pagină pentru a fi la
            curent cu orice actualizări.
          </Typography>
        </li>
      </ul>
      <Spacing size="5" md="3" sm="3" />
      <Typography variant="h3" className="text-black">
        Contact
      </Typography>
      <Spacing size="1.6" md="2" sm="2" />
      <Typography variant="paragraph" className="text-black">
        Pentru orice întrebări sau nelămuriri legate de acești termeni și
        condiții, vă rugăm să ne contactați la{" "}
        <span className="text-dark-blue">office@vessahospital.ro</span> sau la{" "}
        <span className="text-dark-blue">+40 744 833 815</span>.
      </Typography>
    </section>
  );
};

export default TermsAndConditions;
