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
        <Typography sx={{ maxWidth: 631,fontSize: "0.9rem", margin: "0 auto 4rem", color: "black", fontSize: "14px" }}>
          At Neotel, we thrive on building strong connections—just like the ones we enable for our customers.
          We have partnered with global technology leaders like <strong>Nokia ,</strong> <strong>Samsung ,</strong> <strong> Apple ,</strong> and <strong>Starlink ,</strong>  to bring
          you the most advanced, accessible and reliable telecommunications solutions. Together, we aim to
          make the world a little more connected.
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
        <Grid container spacing={1} sx={{ padding: { lg: 10, md: 5, sm: 2, xs: 2 }, paddingTop: { xs: 10 } }}>
                <Grid item xs={12} md={12}>
                    <Box sx={{ padding: "20px" }}>
                        <Typography

                            sx={{
                                fontWeight: "bold",
                                color: "#4052A6",
                                marginBottom: "16px",
                                fontSize: { lg: "40px", md: "40px", xs: "30px" },

                            }}
                        >
                            Why Do Our Partnerships Matter?
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{ fontSize: "0.9rem", textAlign: 'justify', lineHeight: 1.6, color: "black" }}
                        >
                            Neotel’s <strong> 5G Plus </strong>isn’t just a network; it’s a revolution. From
                            real-time gaming with zero lag to crystal-clear video calls with
                            loved ones halfway around the world, Neotel’s 5G Plus is designed
                            to meet the demands of the modern digital lifestyle.
                        </Typography>

                        {/* Points with Ticks */}
                        <List>
                            <ListItem>
                               
                                <ListItemText
                                    primary={
                                        <Typography
                                            component="span"
                                            sx={{
                                                fontSize: "1.0rem",
                                                color: "black",
                                                // fontWeight: 600,
                                                lineHeight: 1.6,
                                            }}
                                        >
                                           
                                                <strong>For Everyone : </strong>
                                            
                                            Neotel’s 5G Plus is designed for everyone. Whether you’re a student, a professional, or just someone who loves to stay connected, our network offers something for you. With Neotel, you can explore, create, and connect with confidence.
                                        </Typography>
                                    }
                                    sx={{
                                        fontSize: "1.2rem",
                                        lineHeight: 1.6,
                                    }}
                                />


                            </ListItem>
                            <ListItem>
                               
                            <ListItemText
                                    primary={
                                        <Typography
                                            component="span"
                                            sx={{
                                                fontSize: "1.0rem",
                                                color: "black",
                                                // fontWeight: 600,
                                                lineHeight: 1.6,
                                            }}
                                        >
                                           
                                                <strong>For Businesses : </strong>
                                            
                                                 In today’s fast-paced world, connectivity is key to success. Neotel’s 5G Plus network offers businesses the tools they need to thrive in the digital economy, from cloud-based solutions to seamless video conferencing and beyond.

                                        </Typography>
                                    }
                                    sx={{
                                        fontSize: "1.2rem",
                                        lineHeight: 1.6,
                                    }}
                                />
                            </ListItem>
                            <ListItem>
                               
                            <ListItemText
                                    primary={
                                        <Typography
                                            component="span"
                                            sx={{
                                                fontSize: "1.0rem",
                                                color: "black",
                                                // fontWeight: 600,
                                                lineHeight: 1.6,
                                            }}
                                        >
                                           
                                                <strong>For Gamers : </strong>
                                            
                                                Experience gaming like never before with lightning-fast speeds and ultra-low latency. Neotel’s 5G Plus lets you compete in real-time, whether you’re battling it out in your favorite game or streaming your gameplay to a global audience.
                                        </Typography>
                                    }
                                    sx={{
                                        fontSize: "1.2rem",
                                        lineHeight: 1.6,
                                    }}
                                />
                            </ListItem>
                        </List>
                        {/* <Box sx={{ marginTop: "5px" }}>
                            <Button
                                variant="contained"
                                sx={{
                                    color: "white", // Text color
                                    backgroundColor: "#4A5AA6", // Background color
                                    borderRadius: "50px", // Circular corners
                                    padding: "12px 30px", // Adjust size
                                    fontSize: "1rem", // Font size
                                    fontWeight: "600", // Bold text
                                    textTransform: "none", // Prevent uppercase
                                    "&:hover": {
                                        backgroundColor: "#4A5AA6", // Hover effect
                                    },
                                }}
                            >
                                Learn More
                            </Button>
                        </Box> */}

                    </Box>

                </Grid>

                
            </Grid>
      </Box>
    </Box>
  );
}
