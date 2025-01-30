import {
  Box,
  Breadcrumbs,
  Container,
  CssBaseline,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import React from "react";
import prepaid1 from "../../Images/prepaid1.png";
import prepaid2 from "../../Images/prepaid2.png";
import prepaid3 from "../../Images/prepaid3.png";
import postpaidBgImage from "../../Images/prepaidBgImage.png";

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
            height: 300,
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
                fontSize: "18px",
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
                fontSize: "15px",
                color: "grey",
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
    image: prepaid1,
    title: "PAY BILL / RECHARGE",
    description:
      "Enjoy unlimited Broadband at ₹999 Up to 200 Mbps speed, unlimited calls & OTT app",
  },
  {
    image: prepaid2,
    title: "BUY NEW CONNECTION",
    description:
      "Enjoy unlimited Broadband at ₹999 Up to 200 Mbps speed, unlimited calls & OTT app",
  },
  {
    image: prepaid3,
    title: "VIEW PLAN",
    description:
      "Enjoy unlimited Broadband at ₹999 Up to 200 Mbps speed, unlimited calls & OTT app",
  },
];

export default function Prepaid() {
  return (
    <Box sx={{ textAlign: "center", paddingBottom: 5, paddingTop: 15 }}>
      <Box>
        <img
          src={postpaidBgImage}
          alt="Brand Banner"
          style={{ width: "100%", display: "block" }}
        />
      </Box>

      <Grid sx={{ backgroundColor: "#FFFFFF", paddingTop: 3 }}>
        <Container component="main" maxWidth="lg" sx={{ padding: 2 }}>
          <Breadcrumbs />
          <CssBaseline />
          <Grid container></Grid>
          <Grid container spacing={3} paddingTop={2} paddingBottom={2}>
            <Grid item xs={12}>
              <Typography
                variant="h4"
                sx={{ fontWeight: "bold", marginBottom: 2, color: "black" }}
              >
                Refuel your digital life
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                sx={{
                  maxWidth: 631,
                  margin: "0 auto 4rem",
                  color: "black",
                  fontSize: "12px",
                  fontWeight: "440",
                }}
              >
                Choose a Data Bundles service that suits your unique digital aspirations.
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
