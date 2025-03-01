import React from "react";
import { Box, Typography, Grid, Card, CardContent, CardMedia, Link, List, ListItem, ListItemText } from "@mui/material";
import partnersBgImage from "../../Images/partnersBgImage.png";

import nokia from "../../Images/nokia.png";
import Samsung from "../../Images/Samsung.png";
import SamsungImage from "../../Images/SamsungCard.jpg";
import AppleImage from "../../Images/AppleCard.jpg";
import NokiaCard from "../../Images/NokiaCard.jpg";
import MotoRolaCard from "../../Images/MotoRolaCard.jpg";
import WPITCard from "../../Images/WPITCard.jpg";
import BlueArcusCard from "../../Images/BlueArcusCard.jpg";

const brandCards = [
  {
    image: SamsungImage,
    title: "Samsung",
    description: "Our partnership with Samsung enables us to offer high-end handsets, tablets and accessories to our customers.",
    link: "https://www.samsung.com/au/",
  },
  {
    image: NokiaCard,
    title: "Nokia",
    description: "Together, we provide cutting-edge 5G+ mobile solutions that allow our customers to access high-speed internet anytime, anywhere.",
    link: "https://www.nokia.com/",
  },
  {
    image: AppleImage,
    title: "Apple",
    description: "Our partnership with Apple enables us to offer high-end handsets, tablets and accessories to our customers.",
    link: "https://www.apple.com/au/",
  },
  {
    image: WPITCard,
    title: "World Phone IT Services",
    description: "We integrate WPIT’s advanced cloud technology with our network to deliver seamless and scalable services to businesses in Nauru and Pacific.",
    link: "https://wpits.com",
  },
  {
    image: BlueArcusCard,
    title: "Bluearcus",
    description: "Together with Blue Arcus, we offer advanced telecommunications solutions that enable seamless communication for businesses worldwide.",
    link: "https://www.bluearcus.com",
  },
  {
    image: MotoRolaCard,
    title: "Motorola",
    description: "Through our partnership with Motorola, we provide our customers with premium handsets, tablets, and accessories.",
    link: "https://www.motorola.com.au/",
  },
];

export default function Partners() {
  return (
    <Box sx={{ paddingTop: 15 }}>
      {/* Full-Width Image */}
      <Box>
        <img src={partnersBgImage} alt="Brand Banner" style={{ width: "100%", display: "block" }} />
      </Box>

      {/* Section Content */}
      <Box sx={{ padding: 4, textAlign: "center", maxWidth: "1200px", margin: "0 auto" }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: 2, color: "black" }}>
          Our Partners
        </Typography>
        <Typography sx={{ maxWidth: 631, margin: "0 auto 4rem", color: "black", fontSize: "16px" }}>


          At Neotel, we thrive on building strong connections—just like the ones we enable for our customers. We have partnered with global technology leaders like <strong>Nokia</strong>, <strong>Samsung</strong>, <strong>Apple</strong>, <strong>Blue Arcus</strong>, <strong>Motorola</strong>, and  <strong>Starlink</strong> to bring you the most advanced, accessible and reliable telecommunications solutions. Together, we aim to make the world a little more connected.
        </Typography>

        {/* Cards */}
        <Grid container spacing={3} justifyContent="center">
          {brandCards.map((card, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} display="flex" justifyContent="center">
              <Link href={card.link} target="_blank" underline="none">
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    boxShadow: 3,
                    textAlign: "center",
                    border: "1px solid black",
                    borderRadius: "8px",
                    transition: "transform 0.2s",
                    height: 400, // Ensures uniform height
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                  }}
                >
                  {/* Image */}
                  {card.image ? (
                    <CardMedia
                      component="img"
                      height="130"
                      image={card.image}
                      alt={card.title}
                      sx={{ objectFit: "contain", padding: 2 }}
                    />
                  ) : (
                    <Box sx={{ height: 130, backgroundColor: "#f0f0f0" }} />
                  )}
                  {/* Heading and Text */}
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: "bold", color: "black", textAlign: "left" }}>
                      {card.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "gray", textAlign: "left" }}>
                      {card.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
        <Grid container spacing={1} sx={{ paddingTop: { lg: 10, md: 5, sm: 2, xs: 2 }, paddingTop: { xs: 10 } }}>
          <Grid item xs={12} md={12}>
            {/* import { Box, Typography, List, ListItem } from "@mui/material"; */}

            <Box sx={{ padding: "20px" }}>
              <Typography
                sx={{
                  fontWeight: "bold",
                  color: "#4052A6",
                  marginBottom: "16px",
                  textAlign: "left",
                  fontSize: { lg: "40px", md: "40px", xs: "30px" },
                }}
              >
                Why Do Our Partnerships Matter?
              </Typography>

              <Typography
                variant="body1"
                sx={{ fontSize: "16px", textAlign: "left", lineHeight: 1.6, color: "black" }}
              >
                Collaboration drives our success at Neotel. Our partners play a vital role
                in helping us deliver cutting-edge solutions, improve efficiency, and
                provide exceptional products and services to our customers. We carefully
                select partners who share our commitment to quality, reliability, and
                service excellence.
              </Typography>

              {/* Bullet Points List */}
              <List sx={{ paddingLeft: "20px", marginTop: "10px", listStyleType: "disc" }}>
                {[
                  "Deliver enhanced technology and services.",
                  "Expand into new markets and strengthen our global presence.",
                  "Ensuring reliability and high-performance solutions",

                ].map((point, index) => (
                  <ListItem
                    key={index}
                    sx={{
                      display: "list-item",
                      listStyleType: "disc",
                      color: "black",
                      paddingLeft: "10px",
                    }}
                  >
                    <Typography variant="body1">{point}</Typography>
                  </ListItem>
                ))}
              </List>
              <Typography
                variant="body1"
                sx={{ fontSize: "16px", textAlign: "left", lineHeight: 1.6, color: "black" }}
              >
                Together, we’re shaping the future of connectivity with solutions that empower individuals, businesses, and communities worldwide.
              </Typography>
            </Box>


          </Grid>
          <Grid item xs={12} md={12}>
            {/* import { Box, Typography, List, ListItem } from "@mui/material"; */}

            <Box sx={{ padding: "20px" }}>
              <Typography
                sx={{
                  fontWeight: "bold",
                  color: "#4052A6",
                  marginBottom: "16px",
                  textAlign: "left",
                  fontSize: { lg: "40px", md: "40px", xs: "30px" },
                }}
              >
                Interested in Partnering with Us?
              </Typography>

              <Typography
                variant="body1"
                sx={{ fontSize: "16px", textAlign: "left", lineHeight: 1.6, color: "black" }}
              >
                We’re always looking to build new and exciting partnerships. If your organization shares our vision for innovation, quality, and customer excellence, we’d love to explore how we can collaborate. Reach out to us and let’s create something extraordinary together!
              </Typography>

              {/* Bullet Points List */}
              <List sx={{ paddingLeft: "20px", marginTop: "10px", listStyleType: "disc" }}>
                {[
                  "Email: partnerships@neotel.nr",
                  "Phone: +674 2222123",
                ].map((point, index) => (
                  <ListItem
                    key={index}
                    sx={{
                      display: "list-item",
                      listStyleType: "disc",
                      color: "black",
                      paddingLeft: "10px",
                    }}
                  >
                    <Typography variant="body1">
                      {point.includes("Phone:") ? (
                        <>
                          Phone: <strong>+674 2222123</strong>
                        </>
                      ) : (
                        point
                      )}
                    </Typography>
                  </ListItem>
                ))}
              </List>

              <Typography
                variant="body1"
                sx={{ fontSize: "16px", textAlign: "left", lineHeight: 1.6, color: "black" }}
              >
                Together, we’re shaping the future of connectivity with solutions that empower individuals, businesses, and communities worldwide.
              </Typography>
            </Box>


          </Grid>


        </Grid>
      </Box>
    </Box>
  );
}
