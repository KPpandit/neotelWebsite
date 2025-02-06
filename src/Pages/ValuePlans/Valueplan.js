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

export default function ValuePlan() {
  // APK file path (inside public folder)
  const apkFilePath = "/Neotel_1.2.59_IMS.apk";

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
          marginLeft: { xs: 1.7 },
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
