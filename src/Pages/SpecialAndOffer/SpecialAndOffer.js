import React from "react";
import { Box, Typography, Grid, Card, CardContent, CardMedia } from "@mui/material";
import specialAndofferBg from "../../Images/specialAndofferBg.png";
import specialOffer1 from "../../Images/specialOffer1.png";
import spedcialOffer2 from "../../Images/spedcialOffer2.png";
import specialOffer3 from "../../Images/specialOffer3.png";
import specialOffer4 from "../../Images/specialOffer4.png";

const brandCards = [
  {
    image: specialOffer1,
    title: "Data Promotions",
    description: "Enjoy unlimited Broadband at ₹999 Up to 200 Mbps speed, unlimited calls & OTT apps",
  },
  {
    image: spedcialOffer2,
    title: "Promotions",
    description: "Enjoy unlimited Broadband at ₹999 Up to 200 Mbps speed, unlimited calls & OTT apps",
  },
  {
    image: specialOffer3,
    title: "Device Specials",
    description: "Enjoy unlimited Broadband at ₹999 Up to 200 Mbps speed, unlimited calls & OTT apps",
  },
  {
    image: specialOffer4,
    title: "Specials",
    description: "Enjoy unlimited Broadband at ₹999 Up to 200 Mbps speed, unlimited calls & OTT apps",
  },
];

export default function SpecialAndOffer() {
  return (
    <Box sx={{ paddingTop: 15 }}>
      {/* Full-Width Image */}
      <Box>
        <img src={specialAndofferBg} alt="Brand Banner" style={{ width: "100%", display: "block" }} />
      </Box>

      {/* Section Content */}
      <Box sx={{ padding: 4, textAlign: "center", maxWidth: "1200px", margin: "0 auto" }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: 2, color: "black" }}>
        Refuel your digital life
        </Typography>
        <Typography sx={{ maxWidth: 631, margin: "0 auto 4rem", color: "black", fontSize: '14px' ,fontWeight:'440'}}>
        Choose a Roaming service that suits your unique digital aspirations
        </Typography>

        {/* Cards */}
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
                <Grid sx={{padding:1}}>
                <Typography variant="body2" sx={{ color: "black",fontWeight:'500',fontSize:'19px',textAlign:'left',paddingLeft:{lg:1,xs:0} }}>
                    {card.title}
                  </Typography>
                </Grid>
               
                <CardContent>
                  <Typography variant="body2" sx={{ color: "black" ,textAlign:'left'}}>
                    {card.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
