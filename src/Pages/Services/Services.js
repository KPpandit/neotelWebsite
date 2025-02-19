import { Button, Card, CardMedia, Container, Typography } from "@mui/material";
import React from "react";
import DownloadIcon from "@mui/icons-material/Download";
import tableImage from "../../Images/tableImage.png";
export default function Services(){
    const apkFilePath = "/Neotel_1.2.59_IMS.apk";
    return(
        <Container
      sx={{
        minHeight: "100vh",
        py: 20,
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

     
    </Container>
    )
}