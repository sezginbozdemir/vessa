"use client";
import React from "react";
import Typography from "../UI/Typography";
import Spacing from "../UI/Spacing";

const CookiePolicy = () => {
  return (
    <section className="px-[30rem] md:px-[6.4rem] sm:px-[2rem] py-12">
      <Typography variant="h2" className="text-dark-blue">
        Politică de Cookie-uri
      </Typography>
      <Spacing size="5" md="2" sm="2" />

      <Typography variant="paragraph" className="text-black">
        Această politică explică modul în care Vessa Hospital folosește
        cookie-uri și tehnologii similare pe site-ul nostru.
      </Typography>
      <Spacing size="3" md="3" sm="3" />

      <Typography variant="h3" className="text-black">
        Ce sunt cookie-urile?
      </Typography>
      <Spacing size="2.5" md="3" sm="3" />
      <Typography variant="paragraph" className="text-black">
        Cookie-urile sunt fișiere mici de text stocate pe dispozitivul dvs.
        (computer, tabletă, telefon mobil) atunci când utilizați un site web.
        Aceste fișiere ajută site-ul să rețină informații despre vizita dvs.,
        cum ar fi preferințele de limbă și alte setări, pentru a vă oferi o
        experiență de navigare mai bună și mai eficientă.
      </Typography>
      <Spacing size="3" md="3" sm="3" />

      <Typography variant="h3" className="text-black">
        Tipuri de cookie-uri utilizate
      </Typography>
      <Spacing size="2.5" md="3" sm="3" />
      <ul className="list-disc ml-[2rem] space-y-3">
        <li>
          <Typography variant="paragraph" className="text-black">
            Cookie-uri necesare: Aceste cookie-uri sunt esențiale pentru
            funcționarea corectă a site-ului și permit utilizarea
            funcționalităților de bază, cum ar fi navigarea pe pagini și accesul
            la zonele securizate ale site-ului. Fără aceste cookie-uri, site-ul
            nu poate funcționa corect.
          </Typography>
        </li>
        <li>
          <Typography variant="paragraph" className="text-black">
            Cookie-uri de performanță: Aceste cookie-uri colectează informații
            despre modul în care vizitatorii utilizează site-ul nostru, cum ar
            fi paginile cele mai vizitate sau mesajele de eroare afișate.
            Informațiile colectate sunt anonime și sunt folosite exclusiv pentru
            a îmbunătăți funcționalitatea site-ului.
          </Typography>
        </li>
        <li>
          <Typography variant="paragraph" className="text-black">
            Cookie-uri de funcționalitate: Aceste cookie-uri permit site-ului
            nostru să rețină alegerile pe care le faceți (cum ar fi preferințele
            de limbă sau regiune) și să ofere funcționalități îmbunătățite și
            mai personalizate.
          </Typography>
        </li>
        <li>
          <Typography variant="paragraph" className="text-black">
            Cookie-uri de publicitate: Site-ul nostru nu utilizează cookie-uri
            de publicitate pentru a vă afișa reclame personalizate.
          </Typography>
        </li>
      </ul>
      <Spacing size="3" md="3" sm="3" />

      <Typography variant="h3" className="text-black">
        Cum utilizăm cookie-urile?
      </Typography>
      <Spacing size="2.5" md="3" sm="3" />
      <Typography variant="paragraph" className="text-black">
        Vessa Hospital folosește cookie-uri pentru a asigura o experiență optimă
        de navigare pe site-ul nostru, pentru a colecta date statistice anonime
        despre utilizarea site-ului și pentru a îmbunătăți funcționalitatea și
        conținutul acestuia.
      </Typography>
      <Spacing size="3" md="3" sm="3" />
      <Typography variant="paragraph" className="text-black">
        Cookie-urile utilizate pe site-ul nostru nu colectează informații
        personale care ar putea duce la identificarea dvs. fără consimțământul
        dvs. explicit.
      </Typography>
      <Spacing size="3" md="3" sm="3" />

      <Typography variant="h3" className="text-black">
        Gestionarea cookie-urilor
      </Typography>
      <Spacing size="2.5" md="3" sm="3" />
      <Typography variant="paragraph" className="text-black">
        Majoritatea browserelor web permit controlul cookie-urilor prin setările
        browserului. Puteți seta browserul să blocheze cookie-urile sau să vă
        alerteze atunci când un cookie este plasat pe dispozitivul dvs.
      </Typography>
      <Spacing size="3" md="3" sm="3" />
      <Typography variant="paragraph" className="text-black">
        Dacă selectați să blocați cookie-urile, este posibil ca anumite
        funcționalități ale site-ului nostru să nu fie disponibile și să nu
        funcționeze corect.
      </Typography>
      <Spacing size="3" md="3" sm="3" />
      <Typography variant="paragraph" className="text-black">
        Pentru a afla mai multe despre cookie-urile și cum să le gestionați,
        puteți vizita www.allaboutcookies.org sau secțiunea de ajutor a
        browserului dvs.
      </Typography>
      <Spacing size="3" md="3" sm="3" />

      <Typography variant="h3" className="text-black">
        Modificări ale politicii de Cookie-uri
      </Typography>
      <Spacing size="2.5" md="3" sm="3" />
      <Typography variant="paragraph" className="text-black">
        Vessa Hospital își rezervă dreptul de a actualiza această politică de
        cookie-uri. Orice modificare va fi publicată pe această pagină și va
        intra în vigoare imediat după publicare.
      </Typography>
      <Spacing size="3" md="3" sm="3" />
      <Typography variant="paragraph" className="text-black">
        Vă recomandăm să consultați periodic această politică pentru a fi la
        curent cu eventualele modificări.
      </Typography>
      <Spacing size="3" md="3" sm="3" />

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

export default CookiePolicy;
