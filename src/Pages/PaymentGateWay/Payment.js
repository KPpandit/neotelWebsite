import React, { useState } from "react";
import {
  Grid,
  Paper,
  Typography,
  Tabs,
  Tab,
  Box,
  Divider,
  Container,
} from "@mui/material";
import { useLocation } from "react-router-dom";
import UPI from "./UPI";
import CreditOrDebitCard from "./CreditOrDebitCard";
import NetBanking from "./NetBanking";

export default function Payment() {
  const location = useLocation();
  const { mobileNumber, amount } = location.state || {};
  console.log(mobileNumber);
  console.log(amount);
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const renderTabContent = () => {
    switch (selectedTab) {
      case 0:
        return <UPI />;
      case 1:
        return <NetBanking/>;
      case 2:
        return <CreditOrDebitCard/>;
      default:
        return null;
    }
  };

  return (
    <Container maxWidth="lg" sx={{ padding: 2 }}>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        style={{ minHeight: "100vh", padding: 10 }}
      >
        <Grid item xs={3}>
          <Paper elevation={3} sx={{ padding: 2, textAlign: "center" }}>
            <Box>
              <Tabs
                orientation="vertical"
                value={selectedTab}
                onChange={handleTabChange}
                variant="scrollable"
                sx={{
                    "& .MuiTab-root": {
                      "&:hover": {
                        backgroundColor: "#FBB716",
                      },
                    },
                    "& .Mui-selected": {
                      color: "white !important",
                      backgroundColor: "#92a6e1",
                    }}}
              >
                <Tab label="Payment by QR Code" />
                <Tab label="NetBanking" />
                <Tab label="Credit Card /Debit Card" />
              </Tabs>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper elevation={3} sx={{ padding: 2 ,backgroundColor:'#F4F6FC'}}>
            <Box sx={{ marginTop: 2 }}>{renderTabContent()}</Box>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper elevation={3} sx={{ padding: 2, backgroundColor: '#FDE9B9' }}>
            <Grid container spacing={2} sx={{ padding: 2 }}>
              <Grid item xs={12}>
                <Typography sx={{ fontWeight: "1000" }}>
                  Payment Details
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Typography>Pay Bill for {mobileNumber}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid item xs={12}>
                <Typography>Amount Payable</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>{amount} A$</Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
