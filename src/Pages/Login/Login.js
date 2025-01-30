import React, { useState } from "react";
import {
  Grid,
  TextField,
  Button,
  Box,
  Typography,
  Paper,
  List,
  ListItem,
  Link,
} from "@mui/material";
import QRCode from "qrcode.react";
import Neotel_Logo from "../../../src/Images/Neotel_Logo.png";
import manageAccountBg from "../../Images/loginBgImage.png";
import loginLogo from "../../Images/loginLogo.png";
import { useNavigate } from "react-router-dom";
export default function Login() {

  const [editable, setEditable] = useState({
    phoneNumber: false,
    firstName: false,
    lastName: false,
  });

  const [accountDetails, setAccountDetails] = useState({
    phoneNumber: "123-456-7890",
    firstName: "John",
    lastName: "123-456-7890",
  });

  const handleEdit = (field) => {
    setEditable({ ...editable, [field]: !editable[field] });
  };

  const handleChange = (e) => {
    setAccountDetails({ ...accountDetails, [e.target.name]: e.target.value });
  };

  const qrValue = 'https://example.com';

  return (
    <Grid container spacing={2} sx={{ paddingTop: 15, paddingBottom: 10 }}>
      <Grid item xs={12}>
        <Box
          sx={{
            position: "relative",
            textAlign: "center",

          }}
        >
          {/* Background Image */}
          <img
            src={manageAccountBg}
            alt="Background"
            style={{ width: "100%", display: "block" }}
          />




        </Box>
      </Grid>
      <Grid item
        xs={12}
        md={12}
      >
        <Grid container spacing={4} sx={{ padding: {lg:10,md:3,sm:0,xs:0} }}>
          <Grid
            item
            xs={12}
            md={7.5}
            sx={{
              backgroundColor: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "0 30px",
            }}
          >
            <Box
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
              justifyContent="left"
              sx={{ padding: {lg:10,md:0,sm:0,xs:2} }}
            >
              <Typography variant="h4" sx={{ marginBottom: 2, fontWeight: "1000" }}>
                Log in to unlock a world of digital experiences
              </Typography>
              <List sx={{ paddingLeft: 0, paddingTop: 1, paddingBottom: 5 }}>
                <ListItem>
                  <Typography sx={{ fontSize: "14px", fontWeight: '500' }}>
                    • Lorem ipsum dolor sit amet.
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography sx={{ fontSize: "14px", fontWeight: '500' }}>
                    • Consectetur adipisicing elit.
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography sx={{ fontSize: "14px", fontWeight: '500' }}>
                    {" "}
                    • Iusto, iure soluta. Sit veritatis.
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography sx={{ fontSize: "14px", fontWeight: '500' }}>
                    • Nobis ex odio aspernatur tenetur.
                  </Typography>
                </ListItem>
              </List>
              <Grid>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="flex-start"
                  sx={{
                    marginTop: -2,
                    backgroundColor: "#F5F5F7",
                    marginRight: { lg: 12, md: 0, sm: 0, xs: 0 },
                    padding: 3,
                    borderRadius: "20px",
                    border: "1px solid #F9B515", // Add yellow border
                  }}
                >
                  <Box sx={{ marginRight: 2 }}>
                    <QRCode value={qrValue} size={70} />
                    {/* Adjust the size as needed */}
                  </Box>
                  <Box>
                    <Typography variant="body1" sx={{ marginBottom: 1, fontWeight: "1000" }}>
                      Download neotel App Now
                    </Typography>
                    <Typography variant="body2">
                      Scan the QR code with your mobile to download the app.
                    </Typography>
                  </Box>
                </Box>
              </Grid>


            </Box>
          </Grid>


          {/* Right Side */}
          <Grid
            item
            xs={12}
            md={4.5}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: { xs: 5, md: 20 },
            }}
          >
            <Box
              elevation={0}
              sx={{
                padding: { xs: 2, md: 4 },
                borderRadius: "50px",
              }}
            >

              <Box component="form" noValidate autoComplete="off" sx={{ mt: 0 }}>
                <Grid container spacing={4}>
                  <Grid
                    item
                    xs={12}
                    container
                    alignItems="center"
                    spacing={1}
                    justifyContent="center"
                  >
                    <Box
                      sx={{
                        width: "100%",
                        borderRadius: "20px", // Circular corners
                        border: "3px solid #FBB715", // Yellow border
                        overflow: "hidden", // Ensure image respects the borderRadius
                      }}
                    >
                      <img
                        src={loginLogo}
                        alt="Background"
                        style={{
                          width: "100%",
                          display: "block",
                        }}
                      />
                    </Box>
                  </Grid>

                  <Grid item xs={12}>
                    <Typography
                      sx={{
                        color: "grey",
                        textAlign: "center",
                        fontSize: "18px",
                        fontWeight: "500",
                        marginBottom: 0,
                      }}
                    >
                      Welcome to neotel
                    </Typography>

                  </Grid>


                  <Grid item xs={12} container alignItems="center" spacing={0}>
                    <TextField
                      label="Phone Number"
                      name="lastName"
                      value={accountDetails.lastName}
                      onChange={handleChange}
                      variant="outlined"
                      fullWidth
                      disabled={!editable.lastName}
                      sx={{
                        borderRadius: "20px",
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "20px", // Set corner radius
                          height: "45px", // Adjust overall height of the input
                        },
                        "& .MuiInputBase-input": {
                          padding: "8px", // Adjust padding inside the TextField
                          fontSize: "14px", // Optional: Adjust font size
                        },
                      }}
                    />
                  </Grid>

                </Grid>
              </Box>
              <Button
                fullWidth
                variant="contained"
                sx={{
                  marginTop: 2,
                  backgroundColor: "#233A7E",
                  "&:hover": { backgroundColor: "#253A7D", color: "white" },
                  color: "white",
                  borderRadius: "50px",
                }}
              >
                Send OTP
              </Button>

            </Box>

          </Grid>
        </Grid>

      </Grid>

    </Grid>
  );
}
