import {
  Box,
  Breadcrumbs,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  CssBaseline,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import apple from "../../Images/apple.png";
import profilePic from "../../Images/profilePic.png";
import { useNavigate } from "react-router-dom";
import managemntBgImage from "../../Images/managemntBgImage.png";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import DeepakImage from "../../Images/Deepak.jpeg";
const CustomDisplayCard = ({ image, title, description }) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    let route = "";
    switch (title) {
      case "Recharge":
        route = "/postpaid/recharge";
        break;
      case "New Postpaid SIM":
        route = "/prepaid/new-prepaid-sim";
        break;
      case "View Plan":
        route = "/prepaid/view-plans";
        break;
      default:
        route = "/";
    }
    navigate(route);
  };

  return (
    <Grid item lg={4} md={4} sm={12}>
      <Card
        sx={{
          maxWidth: "100%",
          "&:hover": {
            boxShadow: 15,
            cursor: "pointer",
            "& .title": { color: "#233A7E" },
          },
          maxHeight: "100%",
        }}
      >
        {/* Display Image */}
        <CardMedia
          sx={{ height: 300, backgroundSize: "contain" }}
          image={profilePic} // Use profilePic for each card
          title="Profile Picture"
        />
        <CardContent>
          <Typography
            gutterBottom

            component="div"
            className="title"
            sx={{ fontSize: '18px', color: 'black', fontWeight: '450' }}
          >
            {title}
          </Typography>
          <Typography variant="body2" sx={{ fontSize: '15px', color: 'grey', fontWeight: '430' }}>
            {description}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "right" }}>
          <Button size="small">
            <ChevronRightIcon
              sx={{
                color: "#233A7E",
                "&:hover": {
                  color: "#FCB813",
                },
              }}
              onClick={handleButtonClick}
            />
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

const cardData1 = [
  {
    image: apple,
    title: "Seiuli Deepak Khanna",
    description:
      "position in organization",
  },
  {
    image: apple,
    title: "Name",
    description:
      "position in organization",
  },
  {
    image: apple,
    title: "Name",
    description:
      "position in organization",
  },
  {
    image: apple,
    title: "Name",
    description:
      "position in organization",
  },
  {
    image: apple,
    title: "Name",
    description:
      "position in organization",
  },
  {
    image: apple,
    title: "Name",
    description:
      "position in organization",
  },
];

export default function ManagemntTeam() {
  return (
    <Box sx={{ textAlign: "center", paddingBottom: 5, paddingTop: 15 }}>
      <Box>
        <img
          src={managemntBgImage}
          alt="Brand Banner"
          style={{ width: "100%", display: "block" }}
        />
      </Box>

      <Grid sx={{ backgroundColor: "#FFFFFF", paddingTop: 3 }}>
        <Container component="main" maxWidth="lg" sx={{ padding: 2 }}>
          <Breadcrumbs />
          <CssBaseline />
          <Grid container></Grid>
          <Grid container spacing={3} paddingTop={2} paddingBottom={2}>
            <Grid item xs={12}>
              <Typography
                variant="h4"
                sx={{ fontWeight: "bold", marginBottom: 2, color: "black" }}
              >
                Our Team
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                sx={{
                  maxWidth: 700,
                  margin: "0 auto ",
                  color: "black",
                  fontSize: "15px",
                  // fontWeight: "440",
                }}
              >
                We are a team of dynamic change-makers passionate about bringing world-class telecommunication
                services to our home island of Nauru and other Pacific nations.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                sx={{
                  maxWidth: 700,
                  margin: "0 auto 4rem",
                  color: "black",
                  fontSize: "15px",
                  // fontWeight: "440",
                }}
              >
                Our leadership team consists of industry veterans who bring extensive knowledge and decades of
                experience in telecommunications to make Neotel the leading telecom network of the Pacific. Seiuli
                Deepak Khanna, our CEO and Director, leads with a vision to transform global connectivity, guiding
                Neotel to the forefront of the industry with strategic insight and innovative thinking.
              </Typography>
            </Grid>
          </Grid>
          <Box
            sx={{
              marginTop: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Grid container spacing={0} justifyContent={"center"} sx={{ paddingLeft: { lg: 10, md: 5, sm: 0, xs: 0 }, paddingRight: { lg: 10, md: 5, sm: 0, xs: 0 } }}>
              <Grid item lg={6} xs={12} justifyContent={"center"} alignContent={'center'} sx={{ padding: 4, }}>
                <Card
                  sx={{
                    maxWidth: "100%",
                    "&:hover": {
                      boxShadow: 15,
                      cursor: "pointer",
                      "& .title": { color: "#233A7E" },
                    },
                    maxHeight: "100%",
                    paddingTop: 3,
                    paddingBottom: 3
                  }}
                >
                  {/* Display Image */}
                  <CardMedia
                    sx={{
                      height: 400, // Adjust height for a smaller circular image
                      width: 400, // Ensure width matches height for a perfect circle
                      backgroundSize: "cover", // Use "cover" to ensure the image fills the circle
                      borderRadius: "50%", // Make the image circular
                      margin: "auto", // Center the image
                    }}
                    image={DeepakImage} // Use profilePic for each card
                    title="Profile Picture"
                  />
                </Card>
              </Grid>
              <Grid item lg={6} xs={12} >
                <Typography
                  sx={{
                    maxWidth: 400,
                    margin: "0 auto 1rem",
                    color: "black",
                    fontSize: { lg: "28px", md: "35px", xs: "30px" },
                    fontWeight: "500",
                    textAlign: 'left'
                  }}
                >
                  Seiuli Deepak Khanna
                </Typography>
                <Typography
                  sx={{
                    maxWidth: 400,
                    margin: "0 auto 1rem",
                    color: "black",
                    // fontSize: "0.9rem",
                    // fontWeight: "440",
                    fontSize: "15px",
                    textAlign: 'justify'
                  }}
                >
                  Deepak is an experienced entrepreneur with 25 years in the
                  telecommunications industry and a track record across regions
                  such as Australia, India, Asia Pacific, Africa, the Middle East, and
                  South America. Specializing in market expansion, he has
                  successfully led businesses in seven countries, with a focus on
                  the Pacific region.
                </Typography>
                <Typography
                  sx={{
                    maxWidth: 400,
                    margin: "0 auto 1rem",
                    color: "black",
                    fontSize: "15px",
                    // fontWeight: "440",
                    textAlign: 'justify'
                  }}
                >
                  His expertise spans strategic planning, operations management,
                  business development, supply chain management, organizational
                  development, financial management, negotiation, telecom
                  consultancy, and building strategic relationships.
                </Typography>
                <Typography
                  sx={{
                    maxWidth: 400,
                    margin: "0 auto 1rem",
                    color: "black",
                    fontSize: "15px",
                    // fontWeight: "440",
                    textAlign: 'justify'
                  }}
                >
                  Deepak’s significant contributions to the telecom industry have
                  earned him recognition through the Global Talent Alumni award
                  from Australia and the esteemed President’s Medal of Honour,
                  Vanuatu’s highest civilian accolade
                </Typography>
               

              </Grid>

            </Grid>
            {/* <Grid container spacing={2} justifyContent="center">
              {cardData1.map((card, index) => (
                <CustomDisplayCard
                  key={index}
                  image={card.image}
                  title={card.title}
                  description={card.description}
                />
              ))}
            </Grid> */}
          </Box>
        </Container>
      </Grid>
    </Box>
  );
}
