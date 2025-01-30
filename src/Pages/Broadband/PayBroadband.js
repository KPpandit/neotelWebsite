import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import React from "react";
export default function PayBroadband(){
    return(
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
                sx={{ color: "white", textAlign: "center" }}
              >
                Online Wifi Broadband Payment
              </Typography>
            </Grid>
            <Grid sx={{ paddingTop: 3, paddingRight: 1 }}>
              <Typography
                variant="h5"
                component={"h5"}
                sx={{ color: "white", textAlign: "center" }}
              >
               Let's get your paymnet done !
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={7} sx={{ backgroundColor: "#F7F7FA" }}>
            <Grid container spacing={1} sx={{paddingTop:10}}>
              <Grid item xs={12}>
                <Typography
                  variant="h4"
                  component={"h4"}
                  sx={{
                    color: "black",
                    fontWeight: "600",
                    fontSize: "1000",
                    textAlign: "center",
                  }}
                >
                  Enter your details below
                </Typography>
              </Grid>
             
              <Grid item xs={12} > 
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingTop:'15px'
                   
                  }}
                >
                  <TextField
                    sx={{
                      color: "grey",
                      fontWeight: "600",
                      fontSize: "1rem",
                      width:'50%' // Adjusted font size
                    }}
                    id="outlined-basic"
                    label="Register Mobile or Landline Number / Broadband Id"
                    variant="outlined"
                  />
                </div>
              </Grid>
              <Grid item xs={12} sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingTop:'15px',
                    
                    }}>
              <Button variant="contained" sx={{backgroundColor:'rgb(250, 194, 46)',width:'20%',color:'black'}}>Pay Now</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    )
}