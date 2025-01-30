import React from "react";
import { Grid } from "@mui/material";
import CustomCard from "./CustomCard"; // Assuming CustomCard is in a separate file

const SecondaryCardGrid = ({ cardData1 }) => (
  <Grid container spacing={2}>
    {cardData1.map((card, index) => (
      <CustomCard
        key={index}
        image={card.image}
        title={card.title}
        description={card.description}
      />
    ))}
  </Grid>
);

export default SecondaryCardGrid;
