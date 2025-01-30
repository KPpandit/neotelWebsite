import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

export default function SwitchPrepaidToPostpaid() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

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
            ></Typography>
          </Grid>
          <Grid sx={{ paddingTop: 3, paddingRight: 1 }}>
            <Typography
              variant="h5"
              component={"h5"}
              sx={{ color: "white", textAlign: "right" }}
            >
              {/* Faster recharges - anywhere, any time */}
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={7} sx={{ backgroundColor: "#F7F7FA", padding: 2 }}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Typography
                variant="h6"
                component={"h6"}
                sx={{
                  color: "grey",
                  fontWeight: "600",
                  fontSize: "1000",
                  textAlign: "left",
                }}
              >
                What can we help you with ?
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <FormControl component={"fieldset"}>
                    <RadioGroup
                      value={selectedOption}
                      onChange={handleOptionChange}
                      sx={{ flexDirection: "row", color: "#979797" }}
                    >
                      <FormControlLabel
                        value="option1"
                        control={<Radio />}
                        label={<Box>New connection</Box>}
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid item xs={4}>
                  <FormControl component={"fieldset"}>
                    <RadioGroup
                      value={selectedOption}
                      onChange={handleOptionChange}
                      sx={{ flexDirection: "row", color: "#979797" }}
                    >
                      <FormControlLabel
                        value="option2"
                        control={<Radio />}
                        label={
                          <Box>
                            Switch To Neotel
                            <Typography
                              variant="body2"
                              sx={{ fontSize: "10px", color: "#979797" }}
                            >
                              (with same number)
                            </Typography>
                          </Box>
                        }
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid item xs={4}>
                  <FormControl component={"fieldset"}>
                    <RadioGroup
                      value={selectedOption}
                      onChange={handleOptionChange}
                      sx={{ flexDirection: "row", color: "#979797" }}
                    >
                      <FormControlLabel
                        value="option3"
                        control={<Radio />}
                        label={<Box>Neotel Prepaid to Postpaid</Box>}
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Typography
                sx={{
                  color: "grey",
                  fontWeight: "600",
                  fontSize: "1000",
                  textAlign: "left",
                  paddingTop: 5,
                }}
              >
                Please provide following details
              </Typography>
            </Grid>
            {selectedOption === "option3" ? (
              <Grid item xs={12}>
                <Grid container spacing={4}>
                  <Grid item xs={4}>
                    <TextField
                      id="standard-basic"
                      label="Enter Mobile Number"
                      fullWidth
                      variant="standard"
                    />
                  </Grid>
                </Grid>
              </Grid>
            ) : (
              selectedOption !== "option3" && (
                <Grid item xs={12}>
                  <Grid container spacing={4}>
                    <Grid item xs={4}>
                      <TextField
                        id="standard-basic"
                        label="Name"
                        fullWidth
                        variant="standard"
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <TextField
                        id="standard-basic"
                        label="Enter Mobile Number"
                        fullWidth
                        variant="standard"
                      />
                    </Grid>
                  </Grid>
                </Grid>
              )
            )}
            <Grid item xs={12}>
              <Typography
                sx={{
                  color: "grey",
                  fontWeight: "600",
                  fontSize: "1000",
                  textAlign: "left",
                  paddingTop: 5,
                }}
              >
                Schedule doorstep KYC
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={4}>
                <Grid item xs={6}>
                  <TextField
                    id="standard-basic"
                    label="City"
                    fullWidth
                    variant="standard"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="standard-basic"
                    label="Location"
                    fullWidth
                    variant="standard"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="standard-basic"
                    label="House no/Flat no"
                    fullWidth
                    variant="standard"
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <Button
                    variant="contained"
                    sx={{ backgroundColor: "#253A7D", width: "40%" }}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}></Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
