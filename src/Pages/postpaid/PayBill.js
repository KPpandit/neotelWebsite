import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import React from "react";
export default function PayBill() {
  return (
    <Box sx={{ paddingTop: 2.2, height: "100%" }}>
      <Grid container spacing={2} height={"100%"}>
        <Grid
          item
          xs={5}
          sx={{
            backgroundColor: "#3E4146",
            backgroundImage:
              "url('https://storage.needpix.com/rsynced_images/background-image-1273097_1280.jpg')",
            height: "100vh",
          }}
        >
          <Grid sx={{ paddingTop: 3, paddingRight: 1 }}>
            <Typography
              variant="h3"
              component={"h3"}
              sx={{ color: "white", textAlign: "right" }}
            >
              Postpaid Bill Payment
            </Typography>
          </Grid>
          <Grid sx={{ paddingTop: 3, paddingRight: 1 }}>
            <Typography
              variant="h5"
              component={"h5"}
              sx={{ color: "white", textAlign: "right" }}
            >
              Let's get your bill done
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          xs={7}
          sx={{
            backgroundColor: "#F7F7FA",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: '#393939',
            paddingBottom: '150px', // Add padding to the bottom
           
          }}
        >
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography
                variant="h6"
                component={"h6"}
                sx={{
                  fontWeight: "600",
                  fontSize: "1000",
                  textAlign: "center",
                }}
              >
               Enter Your Details Below
              </Typography>
            </Grid>
           
            <Grid item xs={12}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingTop: "15px",
                }}
              >
                <TextField
                  sx={{
                    color: "grey",
                    fontWeight: "600",
                    fontSize: "1rem",
                    width: "50%", // Adjusted font size
                  }}
                  id="outlined-basic"
                  label="Enter your 11 Digit Mobile Number"
                  variant="outlined"
                />
              </div>
            </Grid>
            <Grid item xs={12}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingTop: "15px",
                }}
              >
                <TextField
                  sx={{
                    color: "grey",
                    fontWeight: "600",
                    fontSize: "1rem",
                    width: "50%", // Adjusted font size
                  }}
                  id="outlined-basic"
                  label="Enter Amount"
                  variant="outlined"
                />
              </div>
            </Grid>
            <Grid item xs={12}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingTop: "15px",
                }}
              >
               <Button variant="contained" sx={{width:'50%',backgroundColor:'#E1AA2E'}}>Pay Bill</Button>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
