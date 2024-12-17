import React from "react";
import { afectiuniData } from "../mock-data/afectiuniData";
import Typography from "@/components/UI/Typography";

const Afectiuni = () => {
  const sortedAfectiuni = afectiuniData.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <div>
      <Typography variant="h3">Lista Afecțiunilor</Typography>
      <ul>
        {sortedAfectiuni.map((afectiune, index) => (
          <li key={index}>
            <Typography variant="menu">
              {index}
              {afectiune.name}
            </Typography>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Afectiuni;
