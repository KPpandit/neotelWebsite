import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import whoweareImage from "../../Images/whoweareImage.png";
import whoweare from "../../Images/whoweare.png";
import whoweareImage2 from "../../Images/whowearecard2.jpg";

import bussinessCard4 from "../../Images/bussinessCard4.png";
import whoweareCard1 from "../../Images/whowearecard1.jpg";
import whowearecard2 from "../../Images/bussinessCard17.png";
import whowearecard3 from "../../Images/whowearecard3.jpg";
export default function WhoWeAre() {
  const navigate = useNavigate();
  const handleGetStarted = () => navigate("/about-company/careers/jobForm");

  return (
    <Box sx={{ paddingTop: 15, paddingX: 2, paddingBottom: 3 }}>
      {/* Hero Section */}
      <Grid container spacing={0} alignItems="center" justifyContent="center" sx={{ flexDirection: { xs: "column", md: "row" } }}>
        <Grid item xs={12} sx={{ paddingBottom: 10 }}>
          <Box>
            <img src={whoweare} alt="Brand Banner" style={{ width: "100%", display: "block" }} />
          </Box>
          {/* <Box sx={{ width: "100%", height: { xs: "300px", sm: "400px", md: "400px" }, backgroundImage: `url(${whoweare})`, backgroundSize: "cover", backgroundPosition: "center" }} /> */}
        </Grid>
        <Grid item xs={12}>
          <Typography sx={{ fontWeight: "bold", fontSize: { lg: "40px", md: "40px", xs: "30px" }, marginBottom: 2, color: "black", textAlign: "center" }}>
            Network of the Pacific
          </Typography>
          <Typography sx={{
            maxWidth: 700, margin: "0 auto 1rem", color: "black",
            fontSize: "15px",
            // fontWeight: "440",
            textAlign: "center"
          }}>
            We are Neotel - a multicultural team of forward-thinking innovators pushing the boundaries of what’s possible in telecommunications. Rooted in Nauru with a global reach, we are committed to delivering cutting-edge solutions that meet the evolving needs of our customers and communities worldwide.

          </Typography>

        </Grid>
      </Grid>

      {/* Content Section 2*/}
      <Grid container spacing={5} sx={{ paddingTop: 10, padding: 4 }}>
        <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Box component="img" src={whoweareCard1} alt="Brand" sx={{ width: { xs: "100%", md: "80%" }, height: "auto", marginBottom: { xs: 2, md: 0 } }} />
        </Grid>
        <Grid item xs={12} md={6} sx={{ padding: 4 }}>
          <Typography sx={{ fontWeight: "bold", fontSize: { lg: "40px", md: "40px", xs: "30px" }, marginBottom: 0 }}>Unleashing

          </Typography>
          <Typography sx={{ fontWeight: "bold", fontSize: { lg: "40px", md: "40px", xs: "30px" }, marginBottom: 2, marginTop: { lg: -2, md: 0 } }}>
            Innovation</Typography>
          <Typography sx={{ marginBottom: 2, textAlign: "left", fontSize: "15px", maxWidth: 435 }}>
            At Neotel, we are at the forefront of technological
            excellence, creating high-quality and affordable
            customer-centric solutions.
          </Typography>
          <Typography sx={{ textAlign: "left", fontSize: "15px", maxWidth: 435 }}>
            Powered by Starlink, we are the fastest 5G Plus network
            in Nauru, committed to deliver new-age connectivity that
            meets evolving needs while remaining accessible to all.
          </Typography>

        </Grid>
      </Grid>
      {/* Content Section */}
      <Grid container spacing={5} sx={{ paddingTop: 10, paddingLeft: { lg: 18, md: 0, xs: 0 }, paddingRight: { lg: 6, md: 0, xs: 0 }, padding: 4 }}>

        <Grid
          item
          xs={12}
          md={6}
          sx={{
            padding: { lg: 4, md: 4, sm: 0, xs: 10 },
            textAlign: { xs: "left", md: "left" },
            margin: { lg: 0, md: 0, sm: 4, xs: 4 }

          }}
        >
          <Typography
            sx={{ fontWeight: "bold", fontSize: { lg: "40px", md: "40px", xs: "30px" }, marginBottom: 0, paddingTop: { lg: 3, md: 0, xs: 0 } }}
          >
            Bridging the
          </Typography>
          <Typography
            sx={{ fontWeight: "bold", fontSize: { lg: "40px", md: "40px", xs: "30px" }, marginBottom: 2, paddingTop: { lg: 0, md: 0, xs: 0 }, marginTop: { lg: -2, md: 0 } }}
          >
            Digital Divide
          </Typography>
          <Typography
            sx={{
              marginBottom: 2,
              textAlign: { xs: "left", md: "left" },
              fontSize: "15px",
              // fontWeight: '500',
              maxWidth: 435
            }}
          >
            By leveraging advanced technology and strategic
            partnerships, we are shaping a world of borderless
            connectivity.

          </Typography>
          <Typography
            sx={{
              textAlign: { xs: "justify", md: "left" }, // Center for small screens, right for medium and up
              fontSize: "15px",
              // fontWeight: '500',
              maxWidth: 435
            }}
          >
            Our network empowers individuals, businesses, and
            communities to thrive in the digital age, enabling
            seamless collaboration and growth no matter where
            they are.
          </Typography>

        </Grid>

        <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "flex-start", margin: { lg: 0, md: 0, sm: 4, xs: 4 } }}>
          <Box component="img" src={whoweareImage2} alt="Brand" sx={{ width: { xs: "100%", md: "80%" }, height: "auto", marginBottom: { xs: 2, md: 0 } }} />
        </Grid>
      </Grid>
      <Grid container spacing={5} sx={{ paddingTop: 10, padding: 4 }}>
        <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "flex-end", margin: { lg: 0, md: 0, sm: 4, xs: 4 } }}>
          <Box component="img" src={bussinessCard4} alt="Brand" sx={{ width: { xs: "100%", md: "80%" }, height: "auto", marginBottom: { xs: 2, md: 0 } }} />
        </Grid>
        <Grid item xs={12} md={6} sx={{ padding: 0, margin: { lg: 0, md: 0, sm: 4, xs: 4 } }}>
          <Typography variant="h3" sx={{ fontWeight: "bold", marginBottom: 2, fontSize: { lg: "40px", md: "40px", xs: "30px" } }}>
            Future of </Typography>
          <Typography variant="h3" sx={{ fontWeight: "bold", marginBottom: 2, fontSize: { lg: "40px", md: "40px", xs: "30px" }, marginTop: { lg: -2, md: 0 } }}>
            Connectivity</Typography>
          <Typography sx={{ marginBottom: 2, textAlign: "justify", fontSize: "15px", maxWidth: 435 }}>
            We prioritize building connections you can count on,
            wherever you are. Designed to be fast, reliable and
            secure, our services meet the highest standards of
            performance and safety.

          </Typography>
          <Typography sx={{ marginBottom: 2, textAlign: "justify", fontSize: "15px", maxWidth: 435 }}>
            Every connection we make is backed by cutting-edge
            security protocols to safeguard your privacy and peace
            of mind.

          </Typography>


        </Grid>
      </Grid>
      <Grid container spacing={5} sx={{ paddingTop: 10, paddingLeft: { lg: 18, md: 0, xs: 0 }, paddingRight: { lg: 4, md: 0, xs: 0 }, padding: 4 }}>

        <Grid
          item
          xs={12}
          md={6}
          sx={{
            padding: 4,
            textAlign: { xs: "left", md: "left" },
            margin: { lg: 0, md: 0, sm: 4, xs: 4 }

          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              textAlign: "left",
              marginBottom: 2,
              fontSize: { lg: "40px", md: "40px", xs: "30px" },
              paddingTop: { lg: 3, md: 0, xs: 0 },
              maxWidth: { lg: 350 },
              lineHeight: 1.2, // Reduce gap between lines
            }}
          >
            Affordable And Accessible Services
          </Typography>

          <Typography
            sx={{
              marginBottom: 2,
              textAlign: { xs: "left", md: "left" }, // Center for small screens, right for medium and up
              fontSize: "15px",
              // fontWeight: '500',
              maxWidth: { lg: 435 }
            }}
          >
            Our services are designed to deliver exceptional value
            without compromising on performance.

          </Typography>
          <Typography
            sx={{
              marginBottom: 2,
              textAlign: { xs: "left", md: "left" }, // Center for small screens, right for medium and up
              fontSize: "15px",
              // fontWeight: '500',
              maxWidth: { lg: 435 }
            }}
          >
            By making advanced telecommunications affordable, we
            are breaking barriers to ensure that no one is left behind
            in the digital revolution.

          </Typography>


        </Grid>

        <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "flex-start", margin: { lg: 0, md: 0, sm: 4, xs: 4 } }}>
          <Box component="img" src={whowearecard3} alt="Brand" sx={{ width: { xs: "100%", md: "80%" }, height: "auto", marginBottom: { xs: 2, md: 0 } }} />
        </Grid>
      </Grid>
    </Box>
  );
}
