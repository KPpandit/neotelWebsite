import React from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  Button,
  Container,
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import tableImage from "../../Images/tableImage.png";
import Services from "../Services/Services";

export default function ValuePlan() {
  // APK file path (inside public folder)
  const apkFilePath = "/Neotel_1.2.59_IMS.apk";

  return (
    <Container
      sx={{
        // minHeight: "100vh",
        py: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
        paddingTop:-10
      }}
    >
   
      
      {/* Image */}
     <Services/>
      {/* Subheading */}
      <Typography
        variant="h5"
        align="center"
        sx={{
          fontWeight: 500,
          mt: -10,
          fontSize: { lg: "40px", md: "40px", xs: "30px" },
          color: "black",
          paddingTop:5
        }}
      >
        Download this app to make voice calls on the Neotel network from Android
        devices
      </Typography>

      {/* Download Button */}
      <Button
        variant="contained"
        size="large"
        startIcon={<DownloadIcon />}
        sx={{
          mt: 2,
          px: 4,
          py: 1.5,
          fontSize: "1rem",
          fontWeight: "bold",
          textTransform: "none",
          backgroundColor: "#F9B616",
          color: "black",
          borderRadius: 2,
        }}
        component="a"
        href={apkFilePath} // Set the APK path
        download="Neotel_1.2.59_IMS.apk" // Ensures the file gets downloaded
      >
        Download App
      </Button>
    </Container>
  );
}
