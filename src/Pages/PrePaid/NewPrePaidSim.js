import React, { useRef, useState } from "react";
import {
  Box,
  Grid,
  TextField,
  Typography,
  IconButton,
  Button,
  Tabs,
  Tab,
  Paper,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import img11 from "../../Images/img11.jpg";
import img12 from "../../Images/img12.jpg";
import img13 from "../../Images/img13.jpg";
import img14 from "../../Images/img14.jpg";
import jioRecharge from "../../Images/jioRecharge.png";

export default function BroadbandNewConnection() {
  const [address, setAddress] = useState("");
  const [selectedTab, setSelectedTab] = useState(0);
  const formRef = useRef(null);

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=YOUR_API_KEY`
        );
        const data = await response.json();
        if (data.results && data.results[0]) {
          setAddress(data.results[0].formatted_address);
        } else {
          alert("Address not found.");
        }
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  const handleImageClick = () => {
    formRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Grid container spacing={1.5} padding={1.5}>
      <Grid item xs={12} md={6} sx={{ height: "50%" }}>
        <Paper sx={{ paddingBottom: 15, paddingTop: 15, height: "50%" }}>
          <Grid container justifyContent="center" alignItems="center">
            <Box sx={{ width: "100%", maxWidth: 600 }}>
              <Grid container spacing={2} justifyContent={"center"} padding={2}>
                <Grid item xs={12}>
                  <Typography
                    sx={{
                      fontWeight: "1000",
                      fontSize: "25px",
                      textAlign: "center",
                    }}
                  >
                    Get a neotel SIM
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography sx={{ fontSize: "14px", textAlign: "center" }}>
                    Just validate your number, share your address, and we'll
                    deliver it to your doorstep for FREE
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Your Name" fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Mobile Number" fullWidth />
                </Grid>

                <Grid
                  item
                  xs={12}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                  }}
                >
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      p: 2,
                      borderRadius: "5px",
                      backgroundColor: "#253A7D",
                    }}
                  >
                    SEND OTP
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <img src={img13} width={"100%"} style={{height:'100%'}}/>
      </Grid>
    </Grid>
  );
}
