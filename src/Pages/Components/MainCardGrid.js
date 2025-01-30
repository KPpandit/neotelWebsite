import React from "react";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CardItem from "./CardItem"; // Assuming CardItem is in a separate file

const MainCardGrid = ({ cardData }) => {
  const navigate = useNavigate();

  return (
    <Grid container spacing={2}>
      {cardData.map((card, index) => (
        <CardItem
          key={index}
          icon={card.icon}
          title={card.title}
          description={card.description}
          onClick={() => navigate(card.route)}
        />
      ))}
    </Grid>
  );
};

export default MainCardGrid;
