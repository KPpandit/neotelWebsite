import { Grid, Typography, Button, Box } from "@mui/material";
import React from "react";
import internationalRoaming from "../../Images/internationalRoaming.png"; // Update with the correct path to your image
import flyingPlan from '../../Images/flyingPlan.jpg'
import Neotel_Logo from '../../Images/Neotel_Logo.png'
import { useNavigate } from "react-router-dom";
export default function InternationalRoaming() {
    const navigate = useNavigate();
  return (
    <>
   <Box
  sx={{
    width: "100%",
    height: { xs: "300px", sm: "400px", md: "500px" }, // Responsive heights for different screen sizes
    marginBottom: -10, // Adjust this value to reduce the space
    backgroundImage: `url(${flyingPlan})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
  }}
>
  <Box
    sx={{
      position: "absolute",
      color: "white",
      padding: "8px",
    }}
  >
    <Typography variant="h6">
      <img
        src={Neotel_Logo}
        alt="logo"
        style={{
          width: "12%", // Adjust the size as needed
          height: "10%",
          margin: "20px", // Adjust the margin as needed
          cursor: "pointer",
        }}
        onClick={() => navigate("/")}
      />
    </Typography>
  </Box>
</Box>
      <Grid
      container
      spacing={2}
      alignItems="center"
      justifyContent="left"
      sx={{ backgroundColor: "#FFFFFF", minHeight: "100vh" }}
    >
        
        
      <Grid item xs={12} md={6}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="left"
          sx={{ padding: 20}}
        >
          <Typography variant="h4" sx={{ marginBottom: 2,fontWeight:'1000' }}>
            Travelling abroad?
          </Typography>
          <Typography sx={{ marginBottom: 4 }}>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, iure soluta. Sit veritatis nobis ex odio aspernatur tenetur voluptatum totam, architecto quos iure id nulla, dicta perferendis officia consequatur blanditiis.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{
              backgroundColor: '#233A7E',
              height:'50px'
            }}
          >
            Get Best Plans Ever
          </Button>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="100%"
          sx={{ padding: 4 }}
        >
          <img
            src={internationalRoaming}
            alt="International Roaming"
            style={{ maxWidth: "100%",  borderRadius: "10px", boxShadow: 20 }}
          />
        </Box>
      </Grid>
    </Grid>
      </>
   
  );
}
