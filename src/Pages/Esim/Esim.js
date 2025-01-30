import {
    Box,
    Breadcrumbs,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Container,
    CssBaseline,
    Grid,
    Typography,
  } from "@mui/material";
  import React from "react";
  import crouselBg1 from "../../Images/crouselBg1.jpg"; // Update this with the correct path to your image
  import Neotel_Logo from "../../../src/Images/Neotel_Logo.png";
  import img11 from "../../Images/ESimCard2.png";
  import img12 from "../../Images/ESimCard1.png";
  import img13 from "../../Images/ESimCard.png";
  import { useNavigate } from "react-router-dom";
  import roamingbg from "../../Images/ESim.png";
  import ChevronRightIcon from '@mui/icons-material/ChevronRight';
  
  const CustomDisplayCard = ({ image, title, description }) => {
    return (
      <Grid item lg={4} md={4} sm={12}>
        <Card
          sx={{
            maxWidth: "100%",
            border: "1px solid black", // Black border
            borderRadius: "8px", // Round corners for the card
            "&:hover": {
              boxShadow: 15,
              cursor: "pointer",
              "& .title": { color: "#233A7E" },
            },
            maxHeight: "100%",
          }}
        >
          {/* Display Image with upper corners circular */}
          <CardMedia
            sx={{
              height: 320,
              backgroundSize: "contain",
              borderTopLeftRadius: "8px", // Circular upper left corner
              borderTopRightRadius: "8px", // Circular upper right corner
              overflow: "hidden", // Ensure the radius effect is applied
              
            }}
            image={image}
            title={title}
          />
          <CardContent>
            <Box sx={{ padding: 2 }}>
              <Typography
                gutterBottom
                component="div"
                className="title"
                sx={{
                  fontSize: "16px",
                  color: "black",
                  fontWeight: "450",
                  textAlign: "left",
                }}
              >
                {title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: "12px",
                  color: "black",
                  fontWeight: "430",
                  textAlign: "left",
                  
                }}
              >
                {description}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    );
  };
  
  const cardData1 = [
    {
      image: img11,
      title: "E-Sim",
      description:
        "Enjoy unlimited Broadband at ₹999 Up to 200 Mbps speed, unlimited calls & OTT apps",
    },
    {
      image: img12,
      title: "E-sim",
      description:
        "Enjoy unlimited wi-fi at ₹999 Up to 200 Mbps speed, unlimited calls & OTT apps",
    },
    {
        image: img13,
        title: "E-sim",
        description:
          "Enjoy unlimited wi-fi at ₹999 Up to 200 Mbps speed, unlimited calls & OTT apps",
      },
  ];
  
  export default function Esim() {
    const navigate = useNavigate();
    return (
      <Box sx={{ textAlign: "center", paddingBottom: 5 }}>
        <Box
          sx={{
            width: "100%",
            height: { xs: "300px", sm: "400px", md: "500px" }, // Responsive heights for different screen sizes
            marginBottom: 2,
            backgroundImage: `url(${roamingbg})`,
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
  
        <Grid sx={{ backgroundColor: "#FFFFFF", paddingTop: 3 }}>
          <Container component="main" maxWidth="lg" sx={{ padding: 2 }}>
            <Breadcrumbs />
            <CssBaseline />
            <Grid container>
              <Grid item xs={12}>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                  commodi aspernatur neque sit maxime eum pariatur vel alias
                  suscipit rem ad magnam, doloribus fuga voluptatum nulla placeat
                  ullam quas. Cumque.
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={3} paddingTop={2} paddingBottom={2}>
              <Grid item xs={12}>
                <Typography variant="h3" sx={{ color: '#233A7E' }} fontWeight={"1000"}>
                  E-Sim
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>
                  Choose a prepaid service that suits your unique digital
                  aspirations.
                </Typography>
              </Grid>
            </Grid>
            <Box
              sx={{
                marginTop: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Grid container spacing={2} justifyContent="center">
                {cardData1.map((card, index) => (
                  <CustomDisplayCard
                    key={index}
                    image={card.image}
                    title={card.title}
                    description={card.description}
                  />
                ))}
              </Grid>
            </Box>
          </Container>
        </Grid>
      </Box>
    );
  }
  