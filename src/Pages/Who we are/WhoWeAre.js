import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import whoweareImage from "../../Images/whoweareImage.png";
import whoweare from "../../Images/whoweare.png";
import whoweareImage2 from "../../Images/whoweareImage2.png";
import whoweareCard1 from "../../Images/whoweareCard1.png";
import whowearecard2 from "../../Images/whowearecard2.png";
import whowearecard3 from "../../Images/whowearecard3.png";
export default function WhoWeAre() {
  const navigate = useNavigate();
  const handleGetStarted = () => navigate("/about-company/careers/jobForm");

  return (
    <Box sx={{ paddingTop: 15, paddingX: 2, paddingBottom: 3 }}>
      {/* Hero Section */}
      <Grid container spacing={0} alignItems="center" justifyContent="center" sx={{ flexDirection: { xs: "column", md: "row" } }}>
        <Grid item xs={12} sx={{ paddingBottom: 10 }}>
          <Box sx={{ width: "100%", height: { xs: "300px", sm: "400px", md: "400px" }, backgroundImage: `url(${whoweare})`, backgroundSize: "cover", backgroundPosition: "center" }} />
        </Grid>
        <Grid item xs={12}>
          <Typography sx={{ fontWeight: "bold", fontSize: { lg: "40px", md: "40px", xs: "30px" }, marginBottom: 2, color: "black", textAlign: "center" }}>
            Network of the Pacific
          </Typography>
          <Typography sx={{
            maxWidth: 700, margin: "0 auto 1rem", color: "black",
            fontSize: "0.9rem",
            // fontWeight: "440",
            textAlign: "center"
          }}>
            We are Neotel - a multicultural team of forward-thinking innovators pushing the boundaries of what’s possible in telecommunications. Rooted in Nauru with a global reach, we are committed to delivering cutting-edge solutions that meet the evolving needs of our customers and communities worldwide.

          </Typography>

        </Grid>
      </Grid>

      {/* Content Section 2*/}
      <Grid container spacing={10} sx={{ paddingTop: 10,padding:4 }}>
        <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Box component="img" src={whoweareCard1} alt="Brand" sx={{ width: { xs: "100%", md: "80%" }, height: "auto", marginBottom: { xs: 2, md: 0 } }} />
        </Grid>
        <Grid item xs={12} md={6} sx={{ padding: 4 }}>
          <Typography sx={{ fontWeight: "bold", fontSize: { lg: "40px", md: "40px", xs: "30px" }, marginBottom: 0 }}> Innovation
           </Typography>
          <Typography sx={{ fontWeight: "bold", fontSize: { lg: "40px", md: "40px", xs: "30px" }, marginBottom: 2 }}>
            Unleashed</Typography>
          <Typography sx={{ marginBottom: 2, textAlign: "left", fontSize: "0.9rem"  ,maxWidth:350}}>
            At Neotel, we are at the forefront of technological
            excellence, creating high-quality and affordable
            customer-centric solutions
          </Typography>
          <Typography sx={{ textAlign: "left", fontSize: "0.9rem" ,maxWidth:370}}>
            Powered by Starlink, we are the fastest 5G Plus network
            in Nauru, committed to deliver new-age connectivity that
            meets evolving needs while remaining accessible to all.
          </Typography>
         
        </Grid>
      </Grid>
      {/* Content Section */}
      <Grid container spacing={10} sx={{ paddingTop: 10, paddingLeft: { lg: 17, md: 0, xs: 0 }, paddingRight: { lg: 15, md: 0, xs: 0 },padding:4 }}>

        <Grid
          item
          xs={12}
          md={6}
          sx={{
            padding: {lg:4,md:4,sm:0,xs:10},
            textAlign: { xs: "left", md: "left" },
           margin:{lg:0,md:0,sm:4,xs:4}

          }}
        >
          <Typography
            sx={{ fontWeight: "bold", fontSize: { lg: "40px", md: "40px", xs: "30px" }, marginBottom: 2, paddingTop: { lg: 3, md: 0, xs: 0 } }}
          >
            Bridging the Digital Divide
          </Typography>
          <Typography
            sx={{
              marginBottom: 2,
              textAlign: { xs: "left", md: "left" },
              fontSize: "0.9rem",
              // fontWeight: '500',
              maxWidth:350
            }}
          >
            By leveraging advanced technology and strategic
            partnerships, we are shaping a world of borderless
            connectivity

          </Typography>
          <Typography
            sx={{
              textAlign: { xs: "justify", md: "left" }, // Center for small screens, right for medium and up
              fontSize: "0.9rem",
              // fontWeight: '500',
              maxWidth:350
            }}
          >
            Our network empowers individuals, businesses, and
            communities to thrive in the digital age, enabling
            seamless collaboration and growth no matter where
            they are
          </Typography>
          
        </Grid>

        <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "flex-start", margin:{lg:0,md:0,sm:4,xs:4} }}>
          <Box component="img" src={whoweareImage2} alt="Brand" sx={{ width: { xs: "100%", md: "80%" }, height: "auto", marginBottom: { xs: 2, md: 0 } }} />
        </Grid>
      </Grid>
      <Grid container spacing={10} sx={{ paddingTop: 10 ,paddingLeft: { lg: 5, md: 0, xs: 0 }, paddingRight: { lg: 0, md: 0, xs: 0 },padding:4}}>
        <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "flex-end", margin:{lg:0,md:0,sm:4,xs:4} }}>
          <Box component="img" src={whowearecard2} alt="Brand" sx={{ width: { xs: "100%", md: "80%" }, height: "auto", marginBottom: { xs: 2, md: 0 } }} />
        </Grid>
        <Grid item xs={12} md={6} sx={{ padding: 0, margin:{lg:0,md:0,sm:4,xs:4} }}>
          <Typography variant="h3" sx={{ fontWeight: "bold", marginBottom: 2, fontSize: { lg: "40px", md: "40px", xs: "30px" } }}>
            Future of </Typography>
            <Typography variant="h3" sx={{ fontWeight: "bold", marginBottom: 2, fontSize: { lg: "40px", md: "40px", xs: "30px" } }}>
            Connectivity</Typography>
          <Typography sx={{ marginBottom: 2, textAlign: "justify", fontSize: "0.9rem", maxWidth:350 }}>
            We prioritize building connections you can count on,
            wherever you are. Designed to be fast, reliable and
            secure, our services meet the highest standards of
            performance and safety

          </Typography>
          <Typography sx={{ marginBottom: 2, textAlign: "justify", fontSize: "0.9rem", maxWidth:350}}>
            Every connection we make is backed by cutting-edge
            security protocols to safeguard your privacy and peace
            of mind

          </Typography>
        

        </Grid>
      </Grid>
      <Grid container spacing={10} sx={{ paddingTop: 10, paddingLeft: { lg: 19, md: 0, xs: 0 }, paddingRight: { lg: 14, md: 0, xs: 0 },padding:4 }}>

        <Grid
          item
          xs={12}
          md={6}
          sx={{
            padding: 4,
            textAlign: { xs: "left", md: "left" },
            margin:{lg:0,md:0,sm:4,xs:4}

          }}
        >
          <Typography

            sx={{ fontWeight: "bold", textAlign: 'left', marginBottom: 2, fontSize: { lg: "40px", md: "40px", xs: "30px" }, paddingTop: { lg: 3, md: 0, xs: 0 },maxWidth:{lg:350} }}
          >
            Affordable & Accessible Services

          </Typography>
          <Typography
            sx={{
              marginBottom: 2,
              textAlign: { xs: "left", md: "left" }, // Center for small screens, right for medium and up
              fontSize: "0.9rem",
              // fontWeight: '500',
              maxWidth:{lg:350}
            }}
          >
            Our services are designed to deliver exceptional value
            without compromising on performance

          </Typography>
          <Typography
            sx={{
              marginBottom: 2,
              textAlign: { xs: "left", md: "left" }, // Center for small screens, right for medium and up
              fontSize: "0.9rem",
              // fontWeight: '500',
              maxWidth:{lg:350}
            }}
          >
            By making advanced telecommunications affordable, we
            are breaking barriers to ensure that no one is left behind
            in the digital revolution

          </Typography>

          
        </Grid>

        <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "flex-start" , margin:{lg:0,md:0,sm:4,xs:4}}}>
          <Box component="img" src={whowearecard3} alt="Brand" sx={{ width: { xs: "100%", md: "80%" }, height: "auto", marginBottom: { xs: 2, md: 0 } }} />
        </Grid>
      </Grid>
    </Box>
  );
}
