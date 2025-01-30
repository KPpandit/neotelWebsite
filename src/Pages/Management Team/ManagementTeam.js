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
            sx={{fontSize:'18px',color:'black',fontWeight:'450'}}
          >
            {title}
          </Typography>
          <Typography variant="body2"  sx={{fontSize:'15px',color:'grey',fontWeight:'430'}}>
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
                Our Management Team
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                sx={{
                  maxWidth: 631,
                  margin: "0 auto 4rem",
                  color: "black",
                  fontSize: "12px",
                  fontWeight: "440",
                }}
              >
                Our leadership team at Neotel consists of industry veterans who
                bring extensive experience in telecommunications. Seiuli Deepak
                Khanna, our CEO and Director, leads with a vision to transform
                global connectivity, guiding Neotel to the forefront of the
                industry with strategic insight and innovative thinking.
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
            <Grid container spacing={2} justifyContent="center">
              {cardData1.map((card, index) => (
                <CustomDisplayCard
                  key={index}
                  image={card.image}
                  title={card.title}
                  description={card.description}
                />
              ))}
            </Grid>
          </Box>
        </Container>
      </Grid>
    </Box>
  );
}
