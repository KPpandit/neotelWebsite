import { Container, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import Neotel_HomepagePlan from '../../Images/Neotel_HomepagePlan.jpg';
export default function Services() {
  const navigate = useNavigate();

  const handleImageClick = () => {
    navigate("/buy"); // Navigates to the payment page
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
      }}
    >
      {/* Title */}
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
        Discover Your Best Value Plan
      </Typography>

      {/* Single Clickable Image */}
      <img
        src={Neotel_HomepagePlan} // Replace with actual image URL
        alt="Plan"
        style={{
          width: "100%",
          maxWidth: "800px",
          borderRadius: "10px",
          cursor: "pointer",
          objectFit: "cover",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        }}
        onClick={handleImageClick}
      />
    </Container>
  );
}
