import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Container,
  Typography,
  Box,
  Grid,
  useTheme,
  useMediaQuery,
  Button,
} from "@mui/material";
import crouselImagetwo from "../../Images/HomePage_neotel2.png";
import CommitmentInnovation from "../../Images/CommitmentInnovation.png";
import CuttingEdge from "../../Images/CuttingEdge.png";
import GlobalSearch from "../../Images/GlobalSearch.png";

export default function Commitment() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const cardData = [
    {
      title: "Cutting-Edge Technology",
      content:
        "Neotel’s 5G Plus network is built on the latest advancements in telecommunications, offering unmatched speed, reliability, and coverage. We’ve partnered with industry giants like Nokia, Samsung, WPITS, Apple, Blue Arcus, Motorola, and Starlink to ensure that our technology is not only state-of-the-art but also globally recognized for its excellence.",
      image: CuttingEdge,
    },
    {
      title: "A Commitment to Innovation",
      content:
        "Innovation is at the heart of everything we do. Neotel is dedicated to continuously pushing the boundaries of what’s possible in telecommunications, ensuring that our customers always have access to the best technology available.",
      image: CommitmentInnovation,
    },
    {
      title: "Global Reach, Local Roots",
      content:
        "While Neotel is a global player in the telecommunications industry, we are proudly based in Nauru. Our mission is to bring world-class connectivity to our home base and extend it to the entire Pacific, making sure that no one is left behind in the digital revolution.",
      image: GlobalSearch,
    },
  ];
  return (
    <Container sx={{  padding: 0,
      // width: "100%",
      // maxWidth: "100%",
      // marginLeft: { lg: -3, md: 8, sm: -2, xs: -2 },
      // position: "relative",
      }}>
      {/* Banner Section */}
      <Box
        sx={{
          padding: 0,
          marginLeft: {lg:-7,md:0},
          width: "100vw",
          maxWidth: "100vw",
          position: "relative",
          overflow: "hidden",
          boxSizing: "border-box",
        }}
      >
        {/* Image Section */}
        <Box
          sx={{
           
            margin: 0,
            // width: "100%",
            // maxWidth: "100%",
            position: "relative",
            overflow: "hidden",
            boxSizing: "border-box",
            
           
          }}
        >
          <Card sx={{ maxWidth: "100%", boxShadow: 0, borderRadius: 0 }}>
            <CardMedia
              component="img"
              image={crouselImagetwo}
              alt="Commitment"
              sx={{
                width: "100%",
              }}
            />
          </Card>
          {/* Text Overlay for Larger Screens */}
          {!isSmallScreen && (
            <Box
              sx={{
                position: "absolute",
                top: "15%",
                right: "5%",
                textAlign: "left",
                color: "black",
                maxWidth: "50%",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  marginBottom: "0px",
                  fontSize: { lg: "40px", md: "40px", xs: "30px" },
                }}
              >
               Welcome to Neotel:
              </Typography>
              <Typography
                sx={{
                  fontWeight: "bold",
                  marginBottom: "16px",
                  fontSize: { lg: "40px", md: "40px", xs: "30px" },
                }}
              >
                Connect with Confidence
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "0.9rem",
                  marginBottom: "10px",
                  lineHeight: 1.5,
                  color: "black",
                }}
              >
               Neotel is poised to revolutionize the telecommunications landscape with the launch of Nauru’s 
               first 5G Plus technology. As a leader in next-gen connectivity, we’re dedicated to providing a
                fast, reliable, and seamless communication experience for Nauru and beyond.
              </Typography>
             
            </Box>
          )}

          {/* Text Below the Image for Small Screens */}
          {isSmallScreen && (
            <Box
              sx={{
                textAlign: "center",
                color: "black",
                marginTop: "20px",
                padding: "20px",
              }}
            >
               <Typography
                sx={{
                  fontWeight: "bold",
                  marginBottom: "0px",
                  fontSize: { lg: "40px", md: "40px", xs: "30px" },
                }}
              >
               Welcome to Neotel:
              </Typography>
              <Typography
                sx={{
                  fontWeight: "bold",
                  marginBottom: "16px",
                  fontSize: { lg: "40px", md: "40px", xs: "30px" },
                }}
              >
                Connect with Confidence
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "0.9rem",
                  marginBottom: "10px",
                  lineHeight: 1.5,
                  color: "black",
                }}
              >
               Neotel is poised to revolutionize the telecommunications landscape with the launch of Nauru’s 
               first 5G Plus technology. As a leader in next-gen connectivity, we’re dedicated to providing a
                fast, reliable, and seamless communication experience for Nauru and beyond.
              </Typography>
              <Box sx={{ marginTop: "35px" }}>

              </Box>
            </Box>
          )}
        </Box>

        {/* Text Section (Overlay for Large Screens, Below for Small Screens) */}
       
      </Box>

      {/* Cards Section */}
      <Grid
  container
  spacing={4}
  justifyContent="center"
  sx={{
    marginTop: 4,
    paddingLeft: { lg: 5, md: 3, xs: 2 },
    paddingRight: { lg: 5, md: 3, xs: 2 },
  }}
>
  {cardData.map((card, index) => (
    <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: "flex", justifyContent: "center" }}>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start", // Ensures title starts from top
          alignItems: "center",
          boxShadow: 3,
          textAlign: "center",
          border: "1px solid #eee",
          borderRadius: "8px",
          transition: "transform 0.2s",
          height: 420, // Fixed height for uniformity
          width: { xs: "90%", sm: "80%", md: "100%" },
          "&:hover": {
            transform: "scale(1.05)",
          },
        }}
      >
        {/* Image Section */}
        <CardMedia
          component="img"
          image={card.image}
          alt={card.title}
          sx={{
            width: "100%", // Uniform width
            height: 130, // Fixed height for all images
            objectFit: "cover",
            backgroundColor: "#f0f0f0",
          }}
        />

        {/* Card Content */}
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 1, // Ensures content fills the available space
            justifyContent: "flex-start", // Aligns title at the top
            alignItems: "center",
            padding: 2,
          }}
        >
          {/* Title */}
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              color: "#6775B5",
              textAlign: "center",
              marginBottom: 1,
              minHeight: 50, // Ensures all titles align
              display: "flex",
              alignItems: "center", // Centers text vertically
            }}
          >
            {card.title}
          </Typography>

          {/* Content */}
          <Typography
            variant="body2"
            sx={{
              color: "gray",
              textAlign: "justify",
              flexGrow: 1, // Makes sure content fills space
            }}
          >
            {card.content}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  ))}
</Grid>
    </Container>
  );
}
