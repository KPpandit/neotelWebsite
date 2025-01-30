import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import coporateImage from "../../Images/coporateImage.png";
import corporateTopImage from "../../Images/corporateTopImage.png";
import trasnformation from "../../Images/trasnformation.png";
export default function CorporateResponsibility() {
  const navigate = useNavigate();
  const handleGetStarted = () => navigate("/about-company/careers/jobForm");

  return (
    <Box sx={{ paddingTop: 15, paddingX: 2 }}>
      {/* Hero Section */}
      <Grid container spacing={0} alignItems="center" justifyContent="center" sx={{ flexDirection: { xs: "column", md: "row" } }}>
        <Grid item xs={12} sx={{ paddingBottom: 10 }}>
          <Box sx={{ width: "100%", height: { xs: "300px", sm: "400px", md: "500px" }, backgroundImage: `url(${corporateTopImage})`, backgroundSize: "cover", backgroundPosition: "center" }} />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h3" sx={{ fontWeight: "bold", marginBottom: 2, color: "black", textAlign: "center" }}>
            Corporate Responsibility
          </Typography>
          <Typography sx={{ maxWidth: 631, margin: "0 auto 1rem", color: "black", fontSize: "13px", fontWeight: "440", textAlign: "center" }}>
          At Neotel, we believe in making a positive impact beyond our business. Our corporate responsibility initiatives focus on Health, Education, Sports, and Environment. We are dedicated to creating a healthier, more educated, and environmentally sustainable world.

          </Typography>
          <Typography sx={{ maxWidth: 631, margin: "0 auto 4rem", color: "black", fontSize: "22px", fontWeight: "440", textAlign: "center" }}>
          Core Values Driving Our Corporate Responsibility
          </Typography>
        </Grid>
      </Grid>

      {/* Content Section 2*/}
      <Grid container spacing={10}>
        <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Box component="img" src={coporateImage} alt="Brand" sx={{ width: { xs: "100%", md: "80%" }, height: "auto", marginBottom: { xs: 2, md: 0 } }} />
        </Grid>
        <Grid item xs={12} md={6} sx={{ padding: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: 2 }}>Caring for inclusive growth</Typography>
          <Typography sx={{ marginBottom: 2, textAlign: "justify", fontSize: "14px" }}>
            At Neotel, our brand represents the future of connectivity. We stand for innovation, trust, and global reach.
          </Typography>
          <Typography sx={{ textAlign: "justify", fontSize: "14px" }}>
            Our identity is built on the principles of technological excellence and customer-centric solutions, ensuring that every connection made through Neotel is reliable, fast, and secure.
          </Typography>
          <Box sx={{ marginTop: 3 }}>
            <Button variant="contained" sx={{ borderRadius: "50px", paddingX: 4, paddingY: 1.5, fontSize: "14px", fontWeight: "bold", backgroundColor: "#F8B413", color: "black" }} onClick={handleGetStarted}>
              Get Started
            </Button>
          </Box>
        </Grid>
      </Grid>
      {/* Content Section */}
      <Grid container spacing={10} sx={{ paddingTop: 10,paddingLeft:{lg:10,md:0,xs:0},paddingRight:{lg:10,md:0,xs:0} }}>

        <Grid
          item
          xs={12}
          md={6}
          sx={{
            padding: 4,
            textAlign: { xs: "center", md: "center" },
             // Center for small screens, right for medium and up
             
          }}
        >
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", marginBottom: 2 ,paddingTop:{lg:3,md:0,xs:0}}}
          >
            Transformation
          </Typography>
          <Typography
            sx={{
              marginBottom: 2,
              textAlign: { xs: "center", md: "left" }, // Center for small screens, right for medium and up
              fontSize: "14px",
            }}
          >
            At Neotel, our brand represents the future of connectivity. We stand for
            innovation, trust, and global reach.
          </Typography>
          <Typography
            sx={{
              textAlign: { xs: "center", md: "left" }, // Center for small screens, right for medium and up
              fontSize: "14px",
            }}
          >
            Our identity is built on the principles of technological excellence and
            customer-centric solutions, ensuring that every connection made through
            Neotel is reliable, fast, and secure.
          </Typography>
          <Box sx={{ marginTop: 3 }}>
            <Button
              variant="contained"
              sx={{
                borderRadius: "50px",
                paddingX: 4,
                paddingY: 1.5,
                fontSize: "14px",
                fontWeight: "bold",
                backgroundColor: "#F8B413",
                color: "black",
              }}
              onClick={handleGetStarted}
            >
              Get Started
            </Button>
          </Box>
        </Grid>

        <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "flex-start" }}>
          <Box component="img" src={trasnformation} alt="Brand" sx={{ width: { xs: "100%", md: "80%" }, height: "auto", marginBottom: { xs: 2, md: 0 } }} />
        </Grid>
      </Grid>
    </Box>
  );
}
