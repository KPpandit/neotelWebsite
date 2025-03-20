import { Container, Typography, Box } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import Neotel_HomepagePlan from '../../Images/Neotel_HomepagePlan.png';

export default function Services() {
  const navigate = useNavigate();

  // Corrected Clickable area data with adjusted top values
  const plans = [
    // { name: "EGOW", top: "20%", height: "12%" },
    { name: "ITSIBAB", top: "32%", height: "12%" },  // Adjusted starting position
    { name: "EAE", top: "44%", height: "12%" },
    { name: "EAPWE", top: "56.5%", height: "12%" },
    { name: "IYIBUR", top: "68.5%", height: "12%" },
    { name: "NEO 5G", top: "81%", height: "14%" },
  ];

  const handleRowClick = (planName) => {
    console.log(`Navigating to: /buy?plan=${planName}`);
    navigate(`/pay?plan=${encodeURIComponent(planName)}`); // Use encodeURIComponent for safer URL
  };

  return (
    <Container
      sx={{
        py: 5,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 4,
        position: "relative",
      }}
    >
      <Typography
        variant="h4"
        align="center"
        sx={{
          fontWeight: "bold",
          mb: 2,
          textTransform: "uppercase",
          color: "black",
          fontSize: { lg: "40px", md: "40px", xs: "30px" },
        }}
      >
       Select the Desired Bundle 
      </Typography>

      <Box sx={{ position: "relative", width: "100%", maxWidth: "800px" }}>
        <img
          src={Neotel_HomepagePlan}
          alt="Plan"
          style={{
            width: "100%",
            borderRadius: "10px",
            objectFit: "cover",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
          }}
        />

        {/* Corrected Clickable Areas */}
        {plans.map((plan) => (
          <Box
            key={plan.name}
            sx={{
              position: "absolute",
              top: plan.top,
              left: 0,
              width: "100%",
              height: plan.height,
              cursor: "pointer",
              "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)" },
            }}
            onClick={() => handleRowClick(plan.name)}
          />
        ))}
      </Box>
    </Container>
  );
}
