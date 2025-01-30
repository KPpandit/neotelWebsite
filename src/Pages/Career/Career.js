import React from "react";
import { Box, Typography, Grid, Button, Card, Divider } from "@mui/material";
import brandImage1 from "../../Images/brandImage1.png";
import brandImage from "../../Images/brandImage.png";
import perkImage from "../../Images/starImage.png"; // Replace this with your desired image path
import brandimage2 from "../../Images/brandimage2.png";
import Commerical from "../../Images/Commerical.png";
import Enterprise from "../../Images/Enterprise.png";
import Sales from "../../Images/Sales.png";
import Retail from "../../Images/Retail.png";
import DIGITAL from "../../Images/DIGITAL.png";
import Learning from "../../Images/Learning.png";
import { useNavigate } from "react-router-dom";

export default function Career() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/about-company/careers/jobForm");
  };
  const perks = [
    {
      title: "Agility",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing magna aliquam erat volutpat. ",
    },
    {
      title: "Benefits",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing magna aliquam erat volutpat. ",
    },
    {
      title: "PEOPLE FIRST",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing magna aliquam erat volutpat. ",
    },
    {
      title: "FREEDOM TO GROW",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing magna aliquam erat volutpat. ",
    },
    {
      title: "LEARNING NEVER STOPS",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing magna aliquam erat volutpat. ",
    },
    {
      title: "NEW VALUES",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing magna aliquam erat volutpat. ",
    },
  ];

  const additionalPerks = [
    {
      title: "ENTERPRISE",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing magna aliquam erat volutpat.",
      image: Enterprise,
    },
    {
      title: "DIGITAL",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing magna aliquam erat volutpat.",
      image: DIGITAL,
    },
    {
      title: "SALES & DISTRIBUTION",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing magna aliquam erat volutpat.",
      image: Sales,
    },
    {
      title: "RETAIL",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing magna aliquam erat volutpat.",
      image: Retail,
    },
    {
      title: "COMMERCIAL / FINANCE",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing magna aliquam erat volutpat.",
      image: Commerical,
    },
    {
      title: "LEARNING NEVER STOPS",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing magna aliquam erat volutpat.",
      image: Learning,
    },
  ];

  return (
    <Box sx={{ paddingTop: 7, paddingX: 2 }}>
      {/* First Section */}
      <Grid
        container
        spacing={0}
        alignItems="center"
        justifyContent="center"
        sx={{ flexDirection: { xs: "column", md: "row" } }}
      >
        <Grid item xs={12} sx={{ paddingBottom: 10 }}>
          <Box
            sx={{
              width: "100%",
              height: { xs: "300px", sm: "400px", md: "500px" },
              backgroundImage: `url(${brandImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </Grid>

        <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Box
            component="img"
            src={brandImage1}
            alt="Brand"
            sx={{
              width: { xs: "100%", md: "80%" },
              height: "auto",
              marginBottom: { xs: 2, md: 0 },
            }}
          />
        </Grid>

        <Grid item xs={12} md={6} sx={{ padding: 3 }}>
          <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: 2 }}>
            Career Opportunities with Neotel
          </Typography>
          <Typography sx={{ marginBottom: 2, textAlign: "justify", fontSize: "14px" }}>
            At Neotel, our brand represents the future of connectivity. We stand for
            innovation, trust, and global reach.
          </Typography>
          <Typography sx={{ textAlign: "justify", fontSize: "14px" }}>
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
      </Grid>

      {/* Perks Section */}
      <Box sx={{ paddingLeft: { lg: 10, md: 0 }, paddingRight: { lg: 10, md: 0 }, paddingY: 10 }}>
        <Typography
          variant="h3"
          sx={{ fontWeight: "bold", textAlign: "center", marginBottom: 5 }}
        >
          Perks of being with Neotel
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {perks.map((perk, index) => (
            <Grid item xs={12} md={5} key={index}>
              <Card
                sx={{
                  padding: 4,
                  borderRadius: "15px",
                  backgroundColor: "#f5f5f5",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  border: "1px solid black",
                }}
              >
                <Box
                  component="img"
                  src={perkImage}
                  alt="Perk Icon"
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: "50%",
                    marginBottom: 0,
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", marginBottom: 1, textAlign: "left" }}
                >
                  {perk.title}
                </Typography>
                <Typography sx={{ textAlign: "left", fontSize: "14px" }}>
                  {perk.description}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Third Section */}
      <Grid container spacing={1}>
        <Grid item xs={12} sx={{ paddingBottom: 10, paddingTop: 10 }}>
          <Box
            sx={{
              width: "100%",
              height: { xs: "300px", sm: "400px", md: "500px" },
              backgroundImage: `url(${brandimage2})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </Grid>
      </Grid>


      <Box sx={{ paddingY: 8 }}>
        <Typography
          variant="h3"
          sx={{ fontWeight: "bold", textAlign: "center", marginBottom: 5 }}
        >
          Perks of being with Neotel
        </Typography>
        <Grid
          container
          spacing={4}
          justifyContent="center"
          sx={{
            paddingLeft: { lg: 10, md: 0 },
            paddingRight: { lg: 10, md: 0 },
          }}
        >
          {additionalPerks.map((perk, index) => (
            <Grid item key={index} xs={12} md={5}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between", // Ensures content and button are spaced
                  alignItems: "flex-start",
                  padding: 1,
                  borderRadius: "15px",
                  backgroundColor: "#f5f5f5",
                  border: "1px solid black",
                  height: "100%", // Ensure consistent height for cards
                }}
              >
                <Box>
                  <Box
                    component="img"
                    src={perk.image}
                    alt={perk.title}
                    sx={{
                      width: 60,
                      height: 60,
                      marginBottom: 2,
                    }}
                  />
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      marginBottom: 1,
                      textAlign: "left",
                      width: "100%",
                    }}
                  >
                    {perk.title}
                  </Typography>
                  <Typography sx={{ textAlign: "left", fontSize: "14px", width: "100%" }}>
                    {perk.description}
                  </Typography>
                </Box>
                <Box sx={{ alignSelf: "flex-start", marginTop: 2 }}>

                  <Button variant="contained" sx={{backgroundColor:'#4A59A7'}}>
                    View Jobs
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>


    </Box>
  );
}
