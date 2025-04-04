import {
  Box,
  Breadcrumbs,
  Container,
  CssBaseline,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  TextField,
  MenuItem,
  Button,
} from "@mui/material";
import React from "react";
import prepaid1 from "../../Images/prepaid1.png";
import prepaid2 from "../../Images/prepaid2.png";
import prepaid3 from "../../Images/prepaid3.png";
import postpaidBgImage from "../../Images/postpaidBgImage.png";
import ContactInfo from "../ContactInfo";

const CustomDisplayCard = ({ image, title, description }) => {
  return (
    <Grid item lg={4} md={4} sm={12}>
      <Card
        sx={{
          maxWidth: "100%",
          border: "1px solid black", // Black border
          borderRadius: "8px", // Round corners for the card
          "&:hover": {
            boxShadow: 15,
            cursor: "pointer",
            "& .title": { color: "#233A7E" },
          },
          maxHeight: "100%",
        }}
      >
        {/* Display Image with upper corners circular */}
        <CardMedia
          sx={{
            height: 300,
            backgroundSize: "contain",
            borderTopLeftRadius: "8px", // Circular upper left corner
            borderTopRightRadius: "8px", // Circular upper right corner
            overflow: "hidden", // Ensure the radius effect is applied
          }}
          image={image}
          title={title}
        />
        <CardContent>
          <Box sx={{ padding: 2 }}>
            <Typography
              gutterBottom
              component="div"
              className="title"
              sx={{
                fontSize: "18px",
                color: "black",
                fontWeight: "450",
                textAlign: "left",
              }}
            >
              {title}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontSize: "15px",
                color: "grey",
                fontWeight: "430",
                textAlign: "left",
              }}
            >
              {description}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};

const cardData1 = [
  {
    image: prepaid1,
    title: "PAY BILL / RECHARGE",
    description:
      "Enjoy unlimited Broadband at ₹999 Up to 200 Mbps speed, unlimited calls & OTT app",
  },
  {
    image: prepaid2,
    title: "BUY NEW CONNECTION",
    description:
      "Enjoy unlimited Broadband at ₹999 Up to 200 Mbps speed, unlimited calls & OTT app",
  },
  {
    image: prepaid3,
    title: "VIEW PLAN",
    description:
      "Enjoy unlimited Broadband at ₹999 Up to 200 Mbps speed, unlimited calls & OTT app",
  },
];

export default function Postpaid() {
  return (
    <Box sx={{ textAlign: "center", paddingBottom: 5, paddingTop: 15 }}>
      <Box>
        <img
          src={postpaidBgImage}
          alt="Brand Banner"
          style={{ width: "100%", display: "block" }}
        />
      </Box>

      <Grid sx={{ backgroundColor: "#FFFFFF", paddingTop: 3 }}>
        <Container component="main" maxWidth="lg" sx={{ padding: 2 }}>
          <Breadcrumbs />
          <CssBaseline />
          <Grid
            container
            spacing={1}
            sx={{
              paddingTop: 3,
            
              display: "flex",
              justifyContent: "center", // Centers horizontally
              alignItems: "center", // Centers vertically
            }}
          >
            <Grid item lg={8} xs={12}>
              <Typography
              
                sx={{
                  fontWeight: "bold",
                  marginBottom: 0,
                  color: "#333",
                  textAlign: "center", // Center the heading
                  fontSize: "43px",
                }}
              >
                Get a Postpaid Connection
              </Typography>
            </Grid>

            <Grid item lg={6} xs={12}>
              {/* Heading */}
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  marginTop: 6,
                  marginBottom:3,
                  color: "#333",
                  textAlign: {lg:'left',md:'left',sm:'center',sm:'center'}, // Center the heading
                 
                }}
              >
                Your Details
              </Typography>

              {/* Form Fields */}
              <Grid container spacing={3} sx={{ justifyContent: "center" }}>
                {/* First Name */}
                <Grid item xs={12} lg={6}>
                  <TextField
                    fullWidth
                    label="First Name"
                    variant="outlined"
                    required
                    InputProps={{
                      sx: {
                        paddingY: 0.5,
                        fontSize: "12px",
                      },
                    }}
                    InputLabelProps={{
                      sx: { fontSize: "12px" },
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 1,
                        fontSize: "12px",
                      },
                    }}
                  />
                </Grid>

                {/* Phone Number */}
                <Grid item xs={12} lg={6}>
                  <TextField
                    fullWidth
                    label="Your Phone"
                    variant="outlined"
                    type="tel"
                    required
                    InputProps={{
                      sx: {
                        paddingY: 0.5,
                        fontSize: "12px",
                      },
                    }}
                    InputLabelProps={{
                      sx: { fontSize: "12px" },
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 1,
                        fontSize: "12px",
                      },
                    }}
                  />
                </Grid>

                {/* Email */}
                <Grid item xs={12} lg={6}>
                  <TextField
                    fullWidth
                    label="Your Email"
                    variant="outlined"
                    type="email"
                    required
                    InputProps={{
                      sx: {
                        paddingY: 0.5,
                        fontSize: "12px",
                      },
                    }}
                    InputLabelProps={{
                      sx: { fontSize: "12px" },
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 1,
                        fontSize: "12px",
                      },
                    }}
                  />
                </Grid>

                {/* Select Default */}
                <Grid item xs={12} lg={6}>
                  <TextField
                    fullWidth
                    label="Select Default"
                    variant="outlined"
                    select
                    required
                    InputProps={{
                      sx: {
                        paddingY: 0.5,
                        fontSize: "12px",
                      },
                    }}
                    InputLabelProps={{
                      sx: { fontSize: "12px" },
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 1,
                        fontSize: "12px",
                      },
                    }}
                  >
                    <MenuItem value="Product Inquiry">Product Inquiry</MenuItem>
                    <MenuItem value="Support Request">Support Request</MenuItem>
                    <MenuItem value="Feedback">Feedback</MenuItem>
                    <MenuItem value="General Inquiry">General Inquiry</MenuItem>
                    <MenuItem value="Others">Others</MenuItem>
                  </TextField>
                </Grid>
              </Grid>

              {/* Submit Button */}
              <Box sx={{ marginTop: 6, textAlign: {lg:'left',md:'left',sm:'center'} }}> {/* Centered Button */}
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{
                    backgroundColor: '#DE0D0C',
                    paddingX: 6,
                    paddingY: 2,
                    borderRadius: 0,
                    fontSize: '11px'
                  }}
                >
                  Submit Message
                </Button>
              </Box>
            </Grid>
          </Grid>

          <Grid container spacing={3} sx={{paddingTop:{lg:20,md:15,sm:10,xs:10}}} paddingBottom={2}>
            <Grid item xs={12}>
              <Typography
                variant="h4"
                sx={{ fontWeight: "bold", marginBottom: 0, color: "black" }}
              >
                Perks of being with neotel
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                sx={{
                  maxWidth: 631,
                  margin: "0 auto 0rem",
                  color: "black",
                  fontSize: "12px",
                  fontWeight: "440",
                }}
              >
                Choose a Data Bundles service that suits your unique digital aspirations.
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
