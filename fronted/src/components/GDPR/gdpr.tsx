"use client";
import React from "react";
import Typography from "../UI/Typography";
import Spacing from "../UI/Spacing";

const GDPR = () => {
  return (
    <section className="px-[30rem] md:px-[6.4rem] sm:px-[2rem] py-12">
      <Typography variant="h2" className="text-dark-blue">
        Politica de Protecție a Datelor cu Caracter Personal (GDPR)
      </Typography>
      <Spacing size="5" md="2" sm="2" />
      <Typography variant="paragraph" className="text-black">
        La Vessa Hospital Timișoara, respectăm confidențialitatea și protecția
        datelor dumneavoastră personale, conform prevederilor Regulamentului
        (UE) 2016/679 privind protecția persoanelor fizice în ceea ce privește
        prelucrarea datelor cu caracter personal (GDPR).
      </Typography>
      <Spacing size="5" md="3" sm="3" />
      <Typography variant="h3" className="text-black">
        Categorii de Date Personale Prelucrate
      </Typography>
      <Spacing size="2.5" md="3" sm="2" />
      <ul className="list-disc ml-[2rem] space-y-3">
        <li>
          <Typography variant="paragraph" className="text-black">
            Date de identificare: nume, prenume, CNP, data nașterii, sexul,
            semnătura.
          </Typography>
        </li>
        <li>
          <Typography variant="paragraph" className="text-black">
            Date de contact: adresa de domiciliu/reședință, număr de telefon,
            e-mail.
          </Typography>
        </li>
        <li>
          <Typography variant="paragraph" className="text-black">
            Date medicale: istoricul medical, diagnostice, tratamente, analize
            de laborator, imagistică, rețete medicale.
          </Typography>
        </li>
        <li>
          <Typography variant="paragraph" className="text-black">
            Date financiare: detalii bancare, informații despre asigurarea de
            sănătate.
          </Typography>
        </li>
        <li>
          <Typography variant="paragraph" className="text-black">
            Date tehnice: adresa IP, informații despre browser și dispozitiv,
            colectate prin utilizarea site-ului nostru.
          </Typography>
        </li>
      </ul>
      <Spacing size="5" md="3" sm="3" />
      <Typography variant="h3" className="text-black">
        Scopurile Prelucrării Datelor
      </Typography>
      <Spacing size="2.5" md="3" sm="2" />
      <ul className="list-disc ml-[2rem] space-y-3">
        <li>
          <Typography variant="paragraph" className="text-black">
            Furnizarea serviciilor medicale: diagnostic, tratament, consultații
            și alte servicii legate de sănătate.{" "}
          </Typography>
        </li>
        <li>
          <Typography variant="paragraph" className="text-black">
            Respectarea obligațiilor legale: raportări către autoritățile
            medicale, facturare, arhivare, respectarea cerințelor legale și
            fiscale.
          </Typography>
        </li>
        <li>
          <Typography variant="paragraph" className="text-black">
            Îmbunătățirea serviciilor noastre: analizarea feedback-ului
            pacienților și optimizarea procedurilor medicale.
          </Typography>
        </li>
        <li>
          <Typography variant="paragraph" className="text-black">
            Comunicare: notificări legate de programări, tratamente sau alte
            informații relevante.
          </Typography>
        </li>
        <li>
          <Typography variant="paragraph" className="text-black">
            {" "}
            Siguranța și securitatea spitalului: monitorizare video (CCTV) în
            spațiile publice pentru prevenirea incidentelor și asigurarea
            siguranței.
          </Typography>
        </li>
      </ul>
      <Spacing size="5" md="3" sm="3" />
      <Typography variant="h3" className="text-black">
        Temeiul Legal al Prelucrării{" "}
      </Typography>
      <Spacing size="2.5" md="3" sm="3" />
      <ul className="list-disc ml-[2rem] space-y-3">
        <li>
          <Typography variant="paragraph" className="text-black">
            Executarea unui contract: furnizarea serviciilor medicale
            solicitate.
          </Typography>
        </li>
        <li>
          <Typography variant="paragraph" className="text-black">
            Obligații legale: îndeplinirea cerințelor de raportare medicală,
            fiscală sau juridică.
          </Typography>
        </li>
        <li>
          <Typography variant="paragraph" className="text-black">
            Interes vital: protejarea vieții și sănătății dumneavoastră sau a
            altor persoane.
          </Typography>
        </li>
        <li>
          <Typography variant="paragraph" className="text-black">
            Consimțământ: pentru utilizări specifice, cum ar fi comunicări
            non-urgente (de exemplu, notificări de marketing, dacă este cazul).
          </Typography>
        </li>
      </ul>
      <Spacing size="5" md="3" sm="3" />
      <Typography variant="h3" className="text-black">
        Drepturile Dumneavoastră
      </Typography>
      <Spacing size="2.5" md="3" sm="2" />
      <ul className="list-disc ml-[2rem] space-y-3">
        <li>
          <Typography variant="paragraph" className="text-black">
            Dreptul de acces: Puteți solicita informații despre datele personale
            pe care le deținem despre dumneavoastră.
          </Typography>
        </li>
        <li>
          <Typography variant="paragraph" className="text-black">
            Dreptul la rectificare: Aveți dreptul să corectați datele personale
            inexacte sau incomplete.
          </Typography>
        </li>
        <li>
          <Typography variant="paragraph" className="text-black">
            Dreptul la ștergere: („dreptul de a fi uitat”) – Puteți solicita
            ștergerea datelor personale în anumite condiții.
          </Typography>
        </li>
        <li>
          <Typography variant="paragraph" className="text-black">
            Dreptul la restricționarea prelucrării: Puteți solicita limitarea
            utilizării datelor dumneavoastră personale.
          </Typography>
        </li>
        <li>
          <Typography variant="paragraph" className="text-black">
            Dreptul la portabilitatea datelor: Aveți dreptul să primiți datele
            personale într-un format structurat, utilizat frecvent și să le
            transferați altui operator.
          </Typography>
        </li>
        <li>
          <Typography variant="paragraph" className="text-black">
            Dreptul de opoziție: Vă puteți opune prelucrării datelor, în special
            în scopuri de marketing.
          </Typography>
        </li>
        <li>
          <Typography variant="paragraph" className="text-black">
            Dreptul de retragere a consimțământului: Dacă prelucrarea datelor se
            bazează pe consimțământ, îl puteți retrage în orice moment.
          </Typography>
        </li>
        <li>
          <Typography variant="paragraph" className="text-black">
            Dreptul de a depune plângere: Dacă considerați că drepturile
            dumneavoastră au fost încălcate, puteți depune o plângere la
            Autoritatea Națională de Supraveghere a Prelucrării Datelor cu
            Caracter Personal (ANSPDCP).
          </Typography>
        </li>
      </ul>
      <Spacing size="5" md="3" sm="3" />
      <Typography variant="h3" className="text-black">
        Securitatea Datelor
      </Typography>
      <Spacing size="2.5" md="3" sm="2" />
      <Typography variant="paragraph" className="text-black">
        Vessa Hospital Timișoara utilizează măsuri tehnice și organizatorice
        adecvate pentru a proteja datele personale împotriva accesului
        neautorizat, pierderii, distrugerii sau utilizării abuzive. Aceste
        măsuri includ: acces restricționat la datele medicale, stocare
        securizată a datelor, inclusiv criptare și programe de instruire pentru
        personal în domeniul protecției datelor.
      </Typography>{" "}
      <Spacing size="5" md="3" sm="3" />
      <Typography variant="h3" className="text-black">
        Transferul Datelor către Terți
      </Typography>
      <Spacing size="1.6" md="2" sm="2" />
      <ul className="list-disc ml-[2rem] space-y-3">
        <li>
          <Typography variant="paragraph" className="text-black">
            Autoritățile publice și instituțiile medicale, conform obligațiilor
            legale.{" "}
          </Typography>
        </li>
        <li>
          <Typography variant="paragraph" className="text-black">
            Parteneri medicali (laboratoare, clinici partenere) pentru a asigura
            tratamentul dumneavoastră.
          </Typography>
        </li>
        <li>
          <Typography variant="paragraph" className="text-black">
            Furnizori de servicii IT, care asigură funcționarea sistemelor
            noastre informatice.
          </Typography>
        </li>
      </ul>
      <Spacing size="5" md="3" sm="3" />
      <Typography variant="h3" className="text-black">
        Perioada de Stocare a Datelor
      </Typography>
      <Spacing size="1.6" md="2" sm="2" />
      <ul className="list-disc ml-[2rem] space-y-3">
        <li>
          <Typography variant="paragraph" className="text-black">
            Date medicale: minim 10 ani, conform legislației în domeniul
            sănătății.
          </Typography>
        </li>
        <li>
          <Typography variant="paragraph" className="text-black">
            Date de contact: pe durata relației contractuale sau până când
            solicitați ștergerea acestora, dacă este aplicabil.
          </Typography>
        </li>
        <li>
          <Typography variant="paragraph" className="text-black">
            Date colectate prin cookie-uri: conform perioadei specificate în
            Politica de Cookie-uri.
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

export default GDPR;
