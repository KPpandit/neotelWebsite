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
  import img11 from "../../Images/img11.jpg";
  import img12 from "../../Images/img12.jpg";
  import img13 from "../../Images/img13.jpg";
  import { useNavigate } from "react-router-dom";
  import roamingbg from "../../Images/roamingbg.jpg";
  import ChevronRightIcon from '@mui/icons-material/ChevronRight';
  
  const CustomDisplayCard = ({ image, title, description }) => {
    const navigate = useNavigate();
  
    const handleButtonClick = () => {
      let route = "";
      switch (title) {
        case "Login":
          route = "/login";
          break;
        case "Recharge":
          route = "/databundles/payandRecharge";
          break;
        case "Contact us":
          route = "/connectUs";
          break;
        default:
          // route = "/";
      }
      navigate(route);
    };
  
    return (
      <Grid item xs={12} sm={6} md={4}>
        <Card
          sx={{
            maxWidth: "100%",
            "&:hover": {
              boxShadow: 15,
              cursor: "pointer",
              "& .title": { color: "#233A7E" },
            },
            maxHeight: "100%",
            borderTop: "4px solid #233A7E",
          }}
        >
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className="title"
            >
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: "right" }}>
            <Button
              size="small"
              onClick={handleButtonClick}
            >
              <ChevronRightIcon sx={{
                color: "#233A7E",
                "&:hover": {
                  color: "#FCB813",
                },
              }}/>
            </Button>
          </CardActions>
        </Card>
      </Grid>
    );
  };
  
  const cardData1 = [
    {
      image: img11,
      title: "Login",
      description:
        "Enjoy unlimited Broadband at ₹999 Up to 200 Mbps speed, unlimited calls & OTT apps",
    },
    {
      image: img12,
      title: "Recharge",
      description:
        "Enjoy unlimited wi-fi at ₹999 Up to 200 Mbps speed, unlimited calls & OTT apps",
    },
    {
        image: img12,
        title: "Contact us",
        description:
          "Enjoy unlimited wi-fi at ₹999 Up to 200 Mbps speed, unlimited calls & OTT apps",
      },
  ];
  
  export default function MyAccountSection() {
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
                  Refuel your digital life
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
  