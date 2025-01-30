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
    <Grid container spacing={1.5} padding={2}>
    <Grid item xs={12} md={6}>
    <Paper sx={{paddingBottom:0.8,paddingTop:2}}>
            <Grid
              container
              justifyContent="center"
              alignItems="center"
            
            >
                
              <Box sx={{ width: "100%", maxWidth: 600 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography sx={{ fontWeight: "1000",fontSize:'25px' }}>
                      Enter Your Details
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField label="Mobile Number" fullWidth />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField label="PinCode" fullWidth />
                  </Grid>
                  <Grid item xs={12}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <TextField
                        label="Installation Address"
                        fullWidth
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </Box>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginTop: -2.5,
                    }}
                  >
                    <IconButton onClick={handleLocationClick}>
                      <LocationOnIcon sx={{ color: "#253A7D" }} />
                    </IconButton>
                    <Typography sx={{ marginLeft: 1, color: "#253A7D" }}>
                      Use Current Location
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField label="House/Flat number" fullWidth />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField label="Your Name" fullWidth />
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
                      Next
                    </Button>
                  </Grid>
                </Grid>
              </Box>
             
            </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <img src={img13} width={"100%"} />
          </Grid>
      
     
    </Grid>
  );
}
