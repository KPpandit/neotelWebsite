import React from "react";
import { Box, Typography, TextField, Button, useMediaQuery } from "@mui/material";
import jobBgImage from "../../Images/jobBgImage.jpg"; // Assuming the path is correct

export default function JobForm() {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        backgroundColor: isSmallScreen ? "#FDE3A0" : "transparent",
        backgroundImage: isSmallScreen ? "none" : `url(${jobBgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "top", // Adjusted to leave space at the bottom
        backgroundRepeat: "no-repeat",
        marginTop:15
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          padding: 4,
        }}
      >
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            width: "90%",
            maxWidth: 450, // Reduced form width
            display: "flex",
            flexDirection: "column",
            gap: 2,
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            padding: 3, // Reduced padding to decrease height
            borderRadius: 2,
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
            backdropFilter: isSmallScreen ? "none" : "blur(5px)",
            marginTop:10,
            marginBottom:5
          }}
        >
          <Typography
            variant="h4"
            sx={{
              marginBottom: 2, // Reduced margin
              textAlign: "center",
              color: "black",
            }}
          >
            Job Application Form
          </Typography>
          <TextField
            label="Full Name"
            fullWidth
            required
            InputLabelProps={{ style: { color: "black" } }}
          />
          <TextField
            label="Email Address"
            type="email"
            fullWidth
            required
            InputLabelProps={{ style: { color: "black" } }}
          />
          <TextField
            label="Phone Number"
            type="tel"
            fullWidth
            required
            InputLabelProps={{ style: { color: "black" } }}
          />
          <TextField
            label="Resume (Upload)"
            type="file"
            InputLabelProps={{ shrink: true, style: { color: "black" } }}
            fullWidth
            required
          />
          <TextField
            label="Why do you want to work with us?"
            multiline
            rows={3} // Reduced rows for smaller height
            fullWidth
            required
            InputLabelProps={{ style: { color: "black" } }}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{
              alignSelf: "center",
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              color: "white",
              marginTop: 2, // Adjusted margin
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 1)",
              },
            }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
}