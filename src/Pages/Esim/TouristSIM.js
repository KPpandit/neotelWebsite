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
  import cardTourist2 from "../../Images/cardTourist2.png"; // Ensure the path is correct
  import cardTourist from "../../Images/cardTourist.png"; // Ensure the path is correct
  import TouristBgImage from "../../Images/TouristBgImage.png"; // Ensure the path is correct
  import ChevronRightIcon from "@mui/icons-material/ChevronRight";
  import { useNavigate } from "react-router-dom";
  
  const CustomDisplayCard = ({ image, title, description }) => {
    const navigate = useNavigate();
  
    const handleButtonClick = () => {
      let route = "";
      switch (title) {
        case "Recharge":
          // route = "/prepaid/recharge";
          break;
        case "New Prepaid Sim":
          // route = "/prepaid/new-prepaid-sim";
          break;
        case "View Plan":
          // route = "/prepaid/view-plans";
          break;
        default:
          route = "/";
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
            border: "1px solid black", // Black border for the card
          }}
        >
          <CardMedia
            component="img"
            height="140"
            image={image}
            alt={title}
            sx={{ objectFit: "cover" }} // Ensure the image fits properly
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              className="title"
              sx={{ textAlign: "left",color:'black',fontWeight:'500' }} // Align title to the left
            >
              {title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ textAlign: "left",color:'black'}} // Align description to the left
            >
              {description}
            </Typography>
          </CardContent>
        
        </Card>
      </Grid>
    );
  };
  
  const cardData1 = [
    {
      image: cardTourist,
      title: "Tourist Sim Plan 1",
      description:
        "Enjoy unlimited wi-fi at ₹999 Up to 200 Mbps speed, unlimited calls & OTT apps",
    },
    {
      image: cardTourist2,
      title: "Tourist Sim Plan 2",
      description:
        "Enjoy unlimited wi-fi at ₹999 Up to 200 Mbps speed, unlimited calls & OTT apps",
    },
  ];
  
  export default function TouristSim() {
    return (
      <Box sx={{ textAlign: "center", paddingBottom: 5, paddingTop: 16 }}>
        <Box
          sx={{
            width: "100%",
            height: { xs: "300px", sm: "400px", md: "500px" }, // Responsive heights for different screen sizes
            marginBottom: 2,
            backgroundImage: `url(${TouristBgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
          }}
        ></Box>
  
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
                <Typography
                  variant="h3"
                  sx={{ color: "#233A7E" }}
                  fontWeight={"1000"}
                >
                  Tourist SIM
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
  