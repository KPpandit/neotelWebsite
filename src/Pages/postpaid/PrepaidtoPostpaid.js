import {
  Avatar,
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
import SimCardIcon from "@mui/icons-material/SimCard";
import Person2Icon from "@mui/icons-material/Person2";
import EditLocationIcon from "@mui/icons-material/EditLocation";

export default function PrepaidtoPostpaid() {
  const [showPaper, setShowPaper] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const togglePaper = () => {
    setShowPaper(!showPaper);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <Box sx={{ paddingTop: 0.5, height: "100%" }}>
      <Grid container spacing={2} height="100vh">
        <Grid item xs={12} md={5}>
          <Paper
            sx={{
              backgroundColor: "#E3E5FF",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h5"
              component="h5"
              sx={{ color: "grey", textAlign: "center" }}
            >
              Get Neotel Postpaid Connection
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={7}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Paper
                sx={{ backgroundColor: "#F7F7FA", backgroundColor: "#253A7D" }}
              >
                <Grid container spacing={0} padding={2} alignItems="center">
                  <Grid item xs={1}>
                    <Avatar>
                      <SimCardIcon sx={{ color: "white" }} />
                    </Avatar>
                  </Grid>
                  <Grid item xs={6}>
                    <Grid container spacing={1} sx={{ color: "white" }}>
                      <Grid item xs={12}>
                        <Typography variant="subtitle1">STEP 1</Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="subtitle1">
                          Pick a connection type
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid container item xs={5} justifyContent="flex-end">
                    <Button
                      onClick={togglePaper}
                      sx={{
                        backgroundColor: "#253A7D",
                        color: "#FAC22E",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography variant="body1">Change</Typography>
                    </Button>
                  </Grid>
                </Grid>
                {showPaper && (
                  <Grid
                    sx={{
                      padding: 2,
                      backgroundColor: "#FAC22E",
                      color: "#253A7D",
                    }}
                  >
                    <FormControl component="fieldset">
                      <RadioGroup
                        value={selectedOption}
                        onChange={handleOptionChange}
                      >
                        <Grid container justifyContent="flex-end">
                          <Grid item xs={11.5}>
                            New Connection
                          </Grid>
                          <Grid item xs={0.5}>
                            <FormControlLabel
                              value="option1"
                              control={<Radio sx={{ color: "#253A7D" }} />}
                            />
                          </Grid>
                          <Grid item xs={11.5}>
                            Prepaid to Postpaid
                          </Grid>
                          <Grid item xs={0.5}>
                            <FormControlLabel
                              value="option2"
                              control={<Radio sx={{ color: "#253A7D" }} />}
                            />
                          </Grid>
                          <Grid item xs={11.5}>
                            Port SIM to Neotel
                          </Grid>
                          <Grid item xs={0.5}>
                            <FormControlLabel
                              value="option3"
                              control={<Radio sx={{ color: "#253A7D" }} />}
                            />
                          </Grid>
                        </Grid>
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                )}
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper
                sx={{ backgroundColor: "#F7F7FA", backgroundColor: "#253A7D" }}
              >
                <Grid container spacing={1} padding={2} alignItems="center">
                  <Grid item xs={1}>
                    <Avatar>
                      <Person2Icon sx={{ color: "white" }} />
                    </Avatar>
                  </Grid>
                  <Grid item xs={8}>
                    <Grid container spacing={1} sx={{ color: "white" }}>
                      <Grid item xs={12}>
                        <Typography variant="subtitle1">STEP 2</Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="subtitle1">
                          Add Contact Detail
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Grid container spacing={2}>
                          <Grid item xs={6}>
                            <TextField
                              id="outlined-basic"
                              sx={{
                                backgroundColor: "white",
                                borderRadius: 2,
                                width: "100%",
                              }}
                              fullWidth
                              label="Enter Mobile Number"
                              variant="outlined"
                            />
                          </Grid>
                          <Grid item xs={6}>
                            <TextField
                              id="outlined-basic"
                              sx={{
                                backgroundColor: "white",
                                borderRadius: 2,
                                width: "100%",
                              }}
                              fullWidth
                              label="Enter Full Name"
                              variant="outlined"
                            />
                          </Grid>
                          {selectedOption === "option2" && (
                            <>
                              <Grid item xs={6}>
                                <TextField
                                  id="outlined-basic"
                                  sx={{
                                    backgroundColor: "white",
                                    borderRadius: 2,
                                    width: "100%",
                                  }}
                                  fullWidth
                                  label="Enter Address"
                                  variant="outlined"
                                />
                              </Grid>
                              <Grid item xs={6}>
                                <TextField
                                  id="outlined-basic"
                                  sx={{
                                    backgroundColor: "white",
                                    borderRadius: 2,
                                    width: "100%",
                                  }}
                                  fullWidth
                                  label="Enter Email"
                                  variant="outlined"
                                />
                              </Grid>
                            </>
                          )}
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            {(selectedOption === "option1" || selectedOption === "option3") && (
              <Grid item xs={12}>
                <Paper
                  sx={{
                    backgroundColor: "#F7F7FA",
                    backgroundColor: "#253A7D",
                  }}
                >
                  <Grid container spacing={0} padding={2} alignItems="center">
                    <Grid item xs={1}>
                      <Avatar>
                        <EditLocationIcon sx={{ color: "white" }} />
                      </Avatar>
                    </Grid>
                    <Grid item xs={6}>
                      <Grid container spacing={1} sx={{ color: "white" }}>
                        <Grid item xs={12}>
                          <Typography variant="subtitle1">STEP 3</Typography>
                        </Grid>
                        <Grid item xs={12}>
                          <Typography variant="subtitle1">
                            Add Delivery Address
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            )}
            {selectedOption === "option2" && (
              <>
                <Grid item xs={12}> 
                  <Grid container justifyContent="center" alignItems="center">
                    <Button variant="contained" sx={{backgroundColor:'#FAC22E',width:'35%'}}>Upgrade to Postpaid</Button>
                  </Grid>
                </Grid>
              </>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
