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
} from "@mui/material";
import crouselImagetwo from "../../Images/HomePage_neotel2.png";
import tableImage from "../../Images/tableImage.png";
export default function Commitment() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container
      sx={{
        padding: 0,
        maxWidth: "120%",
        marginLeft: { lg: -2.8, md: 2, sm: 0, xs: 0 },
        margin: 0,
        position: "relative",
      }}
    >
      <Box
        xs={12}
        sx={{
          padding: 0,
          margin: 0,
          maxWidth: "100vw",
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

        {!isSmallScreen && (
          <Box
            sx={{
              position: "absolute",
              top: "30%",
              right: "15%",
              textAlign: "right",
              color: "black",
              maxWidth: "45%",
            }}
          >
            <Typography
              sx={{
                fontSize: { lg: "40px", md: "40px", xs: "30px" },
                fontWeight: "bold",
                marginBottom: "-7px",
                textAlign: "justify",
              }}
            >
              Welcome to Neotel:
            </Typography>
            <Typography
              sx={{
                fontSize: { lg: "40px", md: "40px", xs: "30px" },
                fontWeight: "bold",
                marginBottom: "15px",
                textAlign: "justify",
              }}
            >
              Connect with Confidence
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: "0.9rem",
                marginBottom: "32px",
                lineHeight: 1.5,
                color: "black",
                textAlign: "justify",
                maxWidth: 450,
              }}
            >
              <strong>Neotel</strong> is poised to revolutionize the telecommunications landscape
              with the launch of Nauru’s first <strong>5G Plus</strong> technology. As a leader in
              next-gen connectivity, we’re dedicated to providing a fast,
              reliable, and seamless communication experience for Nauru and
              beyond.
            </Typography>
          </Box>
        )}
      </Box>

      {/* Text below the image for small screens */}
      {isSmallScreen && (
        <Box
          sx={{
            marginTop: 2,
            textAlign: "center",
            padding: 2,
          }}
        >
          <Typography
            sx={{
              fontSize: { lg: "40px", md: "40px", xs: "30px" },
              fontWeight: "bold",
              marginBottom: 1,
              textAlign: "center",
            }}
          >
            Welcome to Neotel:
          </Typography>
          <Typography
            sx={{
              fontSize: { lg: "40px", md: "40px", xs: "30px" },
              fontWeight: "bold",
              marginBottom: "15px",
              textAlign: "center",
            }}
          >
            Connect with Confidence
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: "0.9rem",
              marginBottom: "32px",
              lineHeight: 1.5,
              color: "black",
              textAlign: "center",
              maxWidth: "90%",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <strong>Neotel</strong> is poised to revolutionize the telecommunications landscape
            with the launch of Nauru’s first <strong>5G Plus</strong> technology. As a leader in
            next-gen connectivity, we’re dedicated to providing a fast, reliable, and seamless
            communication experience for Nauru and beyond.
          </Typography>
        </Box>
      )}

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          marginTop: { xs: "0px", lg: "80px" },
          paddingLeft: { lg: 3, md: 5 },
          paddingRight: { lg: 0, md: 5 },
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            marginBottom: "40px",
            color: "black",
            maxWidth: 550,
            fontSize: { lg: "40px", md: "40px", xs: "20px" },
            padding: { lg: 0, md: 0, xs: 2 },
            marginLeft: { lg: 10, md: 0, sm: -2.2, xs: 0 },
            textAlign: "center",
            paddingTop: { lg: 2, md: 2, sm: 5, xs: 5 },
          }}
        >
          Why Neotel? Because the Future Deserves the Best
        </Typography>
        <Grid
          container
          spacing={4}
          justifyContent="center"
          alignItems="center"
          sx={{
            padding: { xs: 2, md: 4, lg: 0 },
            paddingLeft: { lg: 13, md: 12, sm: 10, xs: 3 },
            display: "flex-center",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          {[
            {
              title: "Cutting-Edge Technology",
              content:
                "Neotel’s 5G Plus network is built on the latest advancements in telecommunications, offering unmatched speed, reliability, and coverage. We’ve partnered with industry giants like Nokia, Samsung, WPITS ,Apple, Blue Arcus, Motorola, and Starlink to ensure that our technology is not only state-of-the-art but also globally recognized for its excellence.",
            },
            {
              title: "A Commitment to Innovation",
              content:
                "Innovation is at the heart of everything we do. Neotel is dedicated to continuously pushing the boundaries of what’s possible in telecommunications, ensuring that our customers always have access to the best technology available.",
            },
            {
              title: "Global Reach, Local Roots",
              content:
                "While Neotel is a global player in the telecommunications industry, we are proudly based in Nauru. Our mission is to bring world-class connectivity to our home base and extend it to the entire Pacific, making sure that no one is left behind in the digital revolution.",
            },
          ].map((card, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={index}
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                margin: "0 auto",
                padding: { xs: 1, sm: 2 },
              }}
            >
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  boxShadow: 3,
                  textAlign: "center",
                  border: "1px solid white",
                  borderRadius: "8px",
                  transition: "transform 0.2s",
                  height: 400,
                  width: { xs: "90%", sm: "100%" },
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                {card.image ? (
                  <CardMedia
                    component="img"
                    height="130"
                    image={card.image}
                    alt={card.title}
                    sx={{
                      objectFit: "cover",
                      backgroundColor: "#f0f0f0",
                      margin: 0,
                      padding: 0,
                    }}
                  />
                ) : (
                  <Box sx={{ height: 130, backgroundColor: "#f0f0f0" }} />
                )}

                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "bold",
                        color: "#6775B5",
                        textAlign: "left",
                        marginBottom: 1,
                      }}
                    >
                      {card.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "gray", textAlign: "left" }}>
                      {card.content}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
