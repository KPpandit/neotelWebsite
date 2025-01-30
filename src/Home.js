import React, { useState } from "react";
import { Box, Container, CssBaseline, Grid, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CarouselComponent from "./Pages/Components/CarouselComponent";
import CardItem from "../src/Pages/Components/CardItem";
import CardData from "../src/Pages/data/cardData";
import CardData1 from "../src/Pages/data/cardData1";
import Neotel_Homepage from "../src/Images/Neotel_Homepage.png";
import ValuePlan from "./Pages/ValuePlans/Valueplan";
import Commitment from "./Pages/ValuePlans/Commitment";
import NetworkSolution from "./Pages/Home/NetwokSolution";
import InnovationTomorrow from "./Pages/Home/InnovationTomorrow";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Box sx={{ backgroundColor: "#F7F7FA", paddingTop: 10 }}>
        {/* Carousel Component */}
        <CarouselComponent />
        <Grid container spacing={2} sx={{ padding: 0 }} id="value-plan">
          <ValuePlan />
        </Grid>
        <Grid container  >
          <Commitment />
        </Grid>
        <Grid container spacing={2} sx={{ padding: 0 }}>
          <InnovationTomorrow />
        </Grid>
        <Container component="main" maxWidth="lg" sx={{ padding: 0 }}>
          <CssBaseline />
          <Box
            sx={{
              marginTop: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >

            <NetworkSolution />



          </Box>
        </Container>
      </Box>
      <Divider />
    </>
  );
}
