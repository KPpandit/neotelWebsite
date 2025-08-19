import React from "react";
import { Box, Typography, Grid, Card, CardContent, CardMedia } from "@mui/material";
import BrandBgImage from "../../Images/BrandBgImage.png";
import SamsungImage from "../../Images/SamsungImage.png";
import AppleImage from "../../Images/AppleImage.png";
import VivoImage from "../../Images/VivoImage.png";
import OnePlusImage from "../../Images/OnePlusImage.png";

const brandCards = [
  {
    image: SamsungImage,
    title: "Samsung",
    // description: "Enjoy unlimited Broadband at ₹999 Up to 200 Mbps speed, unlimited calls & OTT apps",
  },
  {
    image: AppleImage,
    title: "Apple",
    // description: "Enjoy unlimited Broadband at ₹999 Up to 200 Mbps speed, unlimited calls & OTT apps",
  },
  {
    image: VivoImage,
    title: "Vivo",
    // description: "Enjoy unlimited Broadband at ₹999 Up to 200 Mbps speed, unlimited calls & OTT apps",
  },
  {
    image: OnePlusImage,
    title: "OnePlus",
    // description: "Enjoy unlimited Broadband at ₹999 Up to 200 Mbps speed, unlimited calls & OTT apps",
  },
];

export default function Brand() {
  return (
    <Box sx={{ paddingTop: 15 }}>
      {/* Full-Width Image */}
      <Box>
        <img src={BrandBgImage} alt="Brand Banner" style={{ width: "100%", display: "block" }} />
      </Box>

      {/* Section Content */}
      <Box sx={{ padding: 4, textAlign: "center", maxWidth: "1200px", margin: "0 auto" }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: 2, color: "black" }}>
          Our Brand Partners
        </Typography>
        <Typography sx={{ maxWidth: 650, margin: "0 auto 1rem", color: "black", fontSize: '14px' ,fontWeight:'400'}}>
         At Neotel, we thrive on building strong connections—just like the ones we enable for our customers. We have partnered with global technology leaders like <strong>Nokia</strong>, <strong>Samsung</strong>, <strong>Apple</strong>, and <strong> Starlink </strong>to bring you the most advanced, accessible and reliable telecommunications solutions. Together, we aim to make the world a little more connected.

        </Typography>
         <Typography sx={{ maxWidth: 650, margin: "0 auto 1rem", color: "black", fontSize: '14px' ,fontWeight:'400'}}>
         At Neotel, we thrive on building strong connections—just like the ones we enable for our customers. We have partnered with global technology leaders like <strong>Nokia</strong>, <strong>Samsung</strong>, <strong>Apple</strong>, and <strong> Starlink </strong>to bring you the most advanced, accessible and reliable telecommunications solutions. Together, we aim to make the world a little more connected.

        </Typography>
         <Typography sx={{ maxWidth: 650, margin: "0 auto 1rem", color: "black", fontSize: '14px' ,fontWeight:'400'}}>
         At Neotel, we thrive on building strong connections—just like the ones we enable for our customers. We have partnered with global technology leaders like <strong>Nokia</strong>, <strong>Samsung</strong>, <strong>Apple</strong>, and <strong> Starlink </strong>to bring you the most advanced, accessible and reliable telecommunications solutions. Together, we aim to make the world a little more connected.

        </Typography>
         

        
        <Grid container spacing={3} justifyContent="center">
          {brandCards.map((card, index) => (
            <Grid item key={index} sx={{ display: "flex", justifyContent: "center" }}>
              <Card
                sx={{
                  width: 370,
                  boxShadow: 3,
                  textAlign: "center",
                  border: "1px solid black", // Black border added
                  borderRadius: "8px", // Optional: Add rounded corners
                }}
              >
                <CardMedia component="img" height="140" image={card.image} alt={card.title} />
                {/* <CardContent>
                  <Typography variant="body2" sx={{ color: "black" }}>
                    {card.description}
                  </Typography>
                </CardContent> */}
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
