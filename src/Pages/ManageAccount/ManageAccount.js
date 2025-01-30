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
import manageAccountBg from "../../Images/manageAccountBg.png";
import { useNavigate } from "react-router-dom";
export default function ManageAccount() {
  const navigate = useNavigate();
  const [value, setValue] = useState(0);
  const [editable, setEditable] = useState({
    phoneNumber: false,
    firstName: false,
    lastName: false,
  });

  const [accountDetails, setAccountDetails] = useState({
    phoneNumber: "123-456-7890",
    firstName: "John",
    lastName: "Doe",
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
        <Grid container spacing={4} sx={{ padding: 10 }}>
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
              sx={{ padding: 5 }}
            >
              <Typography variant="h4" sx={{ marginBottom: 2, fontWeight: "1000" }}>
                Manage your Digital Life with the neotel app
              </Typography>
              <List sx={{ paddingLeft: 0, paddingTop: 1, paddingBottom: 5 }}>
                <ListItem>
                  <Typography sx={{ fontSize: "16px", fontWeight: '500' }}>
                    • Lorem ipsum dolor sit amet.
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography sx={{ fontSize: "16px", fontWeight: '500' }}>
                    • Consectetur adipisicing elit.
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography sx={{ fontSize: "16px", fontWeight: '500' }}>
                    {" "}
                    • Iusto, iure soluta. Sit veritatis.
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography sx={{ fontSize: "16px", fontWeight: '500' }}>
                    • Nobis ex odio aspernatur tenetur.
                  </Typography>
                </ListItem>
              </List>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="flex-start"
                sx={{
                  marginTop: -2,
                  backgroundColor: "#F5F5F7",
                  padding: 3,
                  borderRadius: "20px",
                  border: "1px solid #F9B515", // Add yellow border
                }}
              >
                <Box sx={{ marginRight: 2 }}>
                  <QRCode value={qrValue} size={80} />
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
              <Typography
                sx={{
                  color: "#233A7E",
                  textAlign: "center",
                  fontSize: "26px",
                  fontWeight: "1000",
                  marginBottom: 0,
                }}
              >
                Manage Your Account
              </Typography>
              <Box component="form" noValidate autoComplete="off" sx={{ mt: 2 }}>
                <Grid container spacing={0}>
                  <Grid item xs={12} container alignItems="center" spacing={0}>
                    <Grid item xs={8}>
                      <TextField
                        label="Phone Number"
                        name="phoneNumber"
                        value={accountDetails.phoneNumber}
                        onChange={handleChange}
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        disabled={!editable.phoneNumber}
                        sx={{
                          borderRadius: "20px",
                          "& .MuiOutlinedInput-root": {
                            borderRadius: "20px",
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={4} container justifyContent="flex-end">
                      <Button
                        variant="outlined"
                        sx={{
                          p: 1,
                          mt: 1,
                          mb: 1,
                          borderRadius: "10px",
                          backgroundColor: editable.phoneNumber ? "lightgreen" : "transparent",
                          color: editable.phoneNumber ? "black" : "primary.main",
                          "&:hover": {
                            backgroundColor: editable.phoneNumber ? "green" : "primary.light",
                          },
                        }}
                        onClick={() => handleEdit("phoneNumber")}
                      >
                        {editable.phoneNumber ? "Save" : "Edit"}
                      </Button>
                    </Grid>
                  </Grid>

                  <Grid item xs={12} container alignItems="center" spacing={0}>
                    <Grid item xs={8}>
                      <TextField
                        label="First Name"
                        name="firstName"
                        value={accountDetails.firstName}
                        onChange={handleChange}
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        disabled={!editable.firstName}
                        sx={{
                          borderRadius: "20px",
                          "& .MuiOutlinedInput-root": {
                            borderRadius: "20px",
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={4} container justifyContent="flex-end">
                      <Button
                        variant="outlined"
                        sx={{
                          p: 1,
                          mt: 1,
                          mb: 1,
                          borderRadius: "10px",
                        }}
                        onClick={() => handleEdit("firstName")}
                      >
                        {editable.firstName ? "Save" : "Edit"}
                      </Button>
                    </Grid>
                  </Grid>

                  <Grid item xs={12} container alignItems="center" spacing={0}>
                    <Grid item xs={8}>
                      <TextField
                        label="Last Name"
                        name="lastName"
                        value={accountDetails.lastName}
                        onChange={handleChange}
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        disabled={!editable.lastName}
                        sx={{
                          borderRadius: "20px",
                          "& .MuiOutlinedInput-root": {
                            borderRadius: "20px",
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={4} container justifyContent="flex-end">
                      <Button
                        variant="outlined"
                        sx={{
                          p: 1,
                          mt: 1,
                          mb: 1,
                          borderRadius: "10px",
                        }}
                        onClick={() => handleEdit("lastName")}
                      >
                        {editable.lastName ? "Save" : "Edit"}
                      </Button>
                    </Grid>
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
                Proceed to Continue
              </Button>
              <Box display="flex" justifyContent="space-between" sx={{ marginTop: 2 }}>
                <Link href="/forgot-password" sx={{ textDecoration: "none", color: "#233A7E" }}>
                  <Typography sx={{ fontSize: "14px", fontWeight: "500" }}>Forgot Password?</Typography>
                </Link>
                <Link href="/change-password" sx={{ textDecoration: "none", color: "#233A7E" }}>
                  <Typography sx={{ fontSize: "14px", fontWeight: "500" }}>Change Password</Typography>
                </Link>
              </Box>
            </Box>

          </Grid>
        </Grid>

      </Grid>

    </Grid>
  );
}
