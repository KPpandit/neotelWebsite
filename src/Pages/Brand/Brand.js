import React from "react";
import { Box, Typography, Grid, Card, CardContent, CardMedia } from "@mui/material";
import BrandBgImage from "../../Images/BrandBgImage.png";
import SamsungImage from "../../Images/SamsungImage.png";
import AppleImage from "../../Images/AppleImage.png";
import VivoImage from "../../Images/VivoImage.png";
import OnePlusImage from "../../Images/OnePlusImage.png";



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
          Our Brand 
        </Typography>
        <Typography sx={{ maxWidth: 631, margin: "0 auto 4rem", color: "black", fontSize: '14px', fontSize: "16px" ,textAlign:'start'}}>
        Neotel is reimagining the power of  connectivity with innovation, accessibility, and reliability. Rooted in Nauru and aiming to become the preferred Network of the Pacific, we are the fastest 5G Plus network, ensuring that individuals, businesses, and communities stay seamlessly connected, no matter where they are.
        </Typography>

        {/* Cards */}
        <Grid container spacing={3} justifyContent="center" sx={{marginTop:-8}}>
         
            <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" ,textAlign:'start', fontSize: "16px"}}>
              <Typography sx={{ maxWidth: 631, color: "black", fontSize: '16px',  }}>
              At our core, we bridge the digital divide, making cutting-edge technology affordable and accessible to all. Through strategic partnerships and state-of-the-art security protocols, we deliver high-performance, secure, and customer-centric solutions designed for the modern world.
              </Typography>
            </Grid>
            <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" ,textAlign:'start', fontSize: "16px"}}>
              <Typography sx={{ maxWidth: 631, color: "black", fontSize: '16px',  }}>
              We believe in unleashing innovation to push the boundaries of what’s possible, empowering our customers with borderless opportunities in the digital age. Neotel is not just a network—it’s a future-driven ecosystem that ensures no one is left behind in the digital revolution. Wherever you are, we connect you to what matters most.
              </Typography>
            </Grid>
         
        </Grid>
      </Box>
    </Box>
  );
}
