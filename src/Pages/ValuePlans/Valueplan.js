import React from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  Button,
  Container,
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download"; // Import the download icon
import viewPlan from "../../Images/viewPlan.png";
import tableImage from "../../Images/tableImage.png";
export default function ValuePlan() {
  return (
    <Container
      sx={{
        minHeight: "100vh",
        py: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
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

      {/* Image */}
      <Card
        sx={{
          maxWidth: "100%",
          borderRadius: 2,
          boxShadow: 3,
          overflow: "hidden",
          marginLeft:{xs:1.7}
        }}
      >
        <CardMedia
          component="img"
          image={tableImage}
          alt="Value Plan"
          sx={{
            height: "auto",
            width: "100%",
            objectFit: "cover",
            maxHeight: { xs: 250, sm: 400 },
            
          }}
        />
      </Card>

      {/* Subheading */}
      <Typography
        variant="h5"
        align="center"
        sx={{
          fontWeight: 500,
          mt: 3,
          fontSize: { lg: "40px", md: "40px", xs: "30px" },
          color: "black",
        }}
      >
        Download this app to make voice calls on the Neotel network from Android
        devices
      </Typography>

      {/* Download Button */}
      <Button
        variant="contained"
        
        size="large"
        startIcon={<DownloadIcon />} // Add the download icon here
        sx={{
          mt: 2,
          px: 4,
          py: 1.5,
          fontSize: "1rem",
          fontWeight: "bold",
          textTransform: "none",
          backgroundColor:'#F9B616',
          color:'black',
          borderRadius: 2,
        }}
      >
        Download App
      </Button>
    </Container>
  );
}
