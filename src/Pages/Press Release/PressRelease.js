import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Link,
} from "@mui/material";
import pressReleaseBg from "../../Images/pressReleaseBg.png";
import pressImg from "../../Images/neotelNewsCard.jpg";
import AppleImage from "../../Images/AppleImage.png";
import preeSeleaseCard2 from "../../Images/preeSeleaseCard2.jpg";
import prereleaseCard3 from "../../Images/prereleaseCard3.jpg";

// Sample data for pagination
const cardDetails = [
  {
    image: pressImg,
    networking: "Networking",
    netflix: "Netflix",
    date: "December 4, 2024",
    heading: "The launch of Oceania's First nationwide 5G+ Service",
    description:
      "Discover the latest innovations from Samsung and how they are revolutionizing the tech world.",
    fbLink: "https://www.facebook.com/share/p/15sPYARbrw/",
  },
  {
    image: preeSeleaseCard2,
    networking: "Networking",
    netflix: "Netflix",
    date: "December 4, 2024",
    heading: "Leadership That listen : Join the movement for Change",
    description:
      "Apple continues to push boundaries with its new announcements that redefine technology.",
    fbLink: "https://www.facebook.com/photo/?fbid=891763889786116&set=pcb.891765529785952",
  },
  {
    image: prereleaseCard3,
    networking: "Networking",
    netflix: "Netflix",
    date: "December 4, 2024",
    heading: "Revitalize Our nation : Join the movement for Change",
    description: "Stay updated with key initiatives shaping the future of technology.",
    fbLink: "https://www.facebook.com/100068575385848/posts/891765529785952/?mibextid=wwXIfr&rdid=xWqH0R4IHvedlR1f#",
  },
];

export default function PressRelease() {
  return (
    <Box sx={{ paddingTop: 15 }}>
      {/* Full-Width Image */}
      <Box>
        <img
          src={pressReleaseBg}
          alt="Brand Banner"
          // style={{ width: "100%", display: "block" }}
        />
      </Box>

      {/* Section Content */}
      <Box
        sx={{
          paddingTop: 5,
          textAlign: "center",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", marginBottom: 2, color: "black" }}
        >
          Press Release
        </Typography>
        <Typography
          sx={{
            maxWidth: 631,
            margin: "0 auto 4rem",
            color: "black",
            fontSize: "14px",
            fontWeight: "440",
          }}
        >
          Stay informed with the latest news from Neotel. Our press releases
          cover new innovations, partnerships, and key initiatives as we
          continue to lead the telecommunications industry into the future.
        </Typography>

        {/* Cards Section */}
        <Grid container spacing={3} padding={2} paddingBottom={10} justifyContent="center" >
          {cardDetails.map((card, index) => (
            <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
              <Link href={card.fbLink} target="_blank" style={{ textDecoration: "none" }}>
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    boxShadow: 3,
                    borderRadius: 2,
                    cursor: "pointer",
                    width: "100%", // Ensure the card spans full width of its grid item
                    // height: 400,
                     // Set a fixed height for the card
                  }}
                >
                  <CardMedia
                    component="img"
                    image={card.image}
                    alt={card.heading}
                    // sx={{
                    //   height: 250,   // Set fixed height for the image
                    //   width: 300, // Set width to 100% to fill the card width
                    // }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    {/* Heading */}
                    <Typography
                      // variant="h6"
                      sx={{
                        fontWeight: "bold",
                        mb: 1,
                        textAlign: {
                          lg: "left",
                          md: "center",
                          xs: "center",
                        },
                      }}
                    >
                      {card.heading}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
