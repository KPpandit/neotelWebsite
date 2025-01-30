import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  TextField,
  Card,
  CardContent,
  Typography,
  Grid,
  Divider,
  Button,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function EnterOrderDetail({
  orderDetails,
  handleOrderDetailsChange,
  data
}) {
  const sliderSettings = {
    dots: true,             // Show dots for navigation
    infinite: true,         // Infinite loop
    speed: 500,             // Transition speed
    slidesToShow: 3,        // Number of cards to show at once
    slidesToScroll: 1,      // Number of cards to scroll at once
    responsive: [
      {
        breakpoint: 1024,   // Adjust the number of slides for medium screens
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,    // Adjust the number of slides for smaller screens
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,    // Adjust the number of slides for mobile screens
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  
  const [topupPlans, setTopupPlans] = useState([]);

  useEffect(() => {
    const fetchTopupPlans = async () => {
      try {
        const response = await axios.get(
          "https://bssproxy01.neotel.nr/abmf/api/prepaid/packs?pack_status=Approved"
        );
        setTopupPlans(response.data);
      } catch (error) {
        console.error("Error fetching topup plans:", error);
      }
    };

    fetchTopupPlans();
  }, []);

  const handleCardClick = (id, ratesOffer, data) => {
    handleOrderDetailsChange({ ...orderDetails, selectedPlan: id, ratesOffer, data: data });
  };

  const handlePhoneNumberChange = (event) => {
    const value = event.target.value;
    // Allow only digits and restrict length to 10
    if (/^\d*$/.test(value) && value.length <= 10) {
      handleOrderDetailsChange({ ...orderDetails, phoneNumber: value });
    }
  };

  const planID = localStorage.getItem("planID");
  const rates = localStorage.getItem("rates");
  const number = localStorage.getItem("number");

  const showOrderSummary = planID && rates && number;

  return (
    <Box sx={{ padding: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={showOrderSummary ? 9 : 12}>
          <Grid container spacing={1} alignItems="center">
            <Grid item xs={12}>
              <Typography
                sx={{
                  fontSize: "22px",
                  fontWeight: "1000",
                  color: "#5A5A88",
                  textAlign: "center",
                  paddingBottom: 3,
                }}
              >
                Neotel Online Recharge
              </Typography>
            </Grid>
            <Grid item xs={12} lg={4}>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: "500",
                  color: "#5A5A88",
                  textAlign: "left",
                  paddingLeft:{lg:4,md:2}
                }}
              >
                Please Enter Number :
              </Typography>
            </Grid>
            <Grid item xs={12} lg={8}>
              <TextField
                variant="outlined"
                fullWidth
                value={orderDetails.phoneNumber}
                name="phoneNumber"
                onChange={handlePhoneNumberChange}
                inputProps={{ maxLength: 10 }}
              />
            </Grid>
          </Grid>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginTop: 4,
              justifyContent: "space-between",
            }}
          >
            <Typography
              sx={{ fontSize: "18px", paddingLeft:{lg:4,md:2}, fontWeight: "500", color: "#5A5A88",paddingBottom:2 }}
            >
              Select Recharge  :
            </Typography>
          </Box>

          <Slider {...sliderSettings}>
            {topupPlans.map((plan) => (
              <Grid item xs={12} sm={12} md={6} lg={10} key={plan.plan_id}>
                <Card
                  onClick={() => handleCardClick(plan.plan_id, plan.price, plan)}
                  elevation={10}
                  sx={{
                    backgroundColor:
                      orderDetails.selectedPlan === plan.plan_id
                        ? "#233A7E"
                        : "#FCB813",
                    color:
                      orderDetails.selectedPlan === plan.plan_id
                        ? "white"
                        : "black",
                    border:
                      orderDetails.selectedPlan === plan.plan_id
                        ? "2px solid #FCB813"
                        : "1px solid #e0e0e0",
                    "&:hover": {
                      cursor: "pointer",
                      backgroundColor: "#233A7E",
                      color: "white", // Ensure text color changes on hover
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "100%",
                    alignItems: "center",
                  }}
                >
                  <CardContent
                    sx={{
                      color:
                        orderDetails.selectedPlan === plan.plan_id
                          ? "white"
                          : "black",
                    }}
                  >
                    <Table size="small">
                      <TableBody>
                        {[
                          { label: "Plan Name", value: plan.plan_name },
                          { label: "Price", value: `${plan.price} AUD` },
                          { label: "Voice", value: plan.onn_assigned_call_balance },
                          { label: "Data", value: plan.assigned_data_balance },
                          { label: "SMS", value: plan.onn_sms_balance },
                        ].map((row, index) => (
                          <TableRow key={index}>
                            <TableCell
                              component="th"
                              scope="row"
                              sx={{
                                color:
                                  orderDetails.selectedPlan === plan.plan_id
                                    ? "white"
                                    : "black",
                              }} // Change text color dynamically
                            >
                              {row.label}
                            </TableCell>
                            <TableCell
                              sx={{
                                color:
                                  orderDetails.selectedPlan === plan.plan_id
                                    ? "white"
                                    : "black",
                              }} // Change text color dynamically
                            >
                              {row.value}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Slider>
        </Grid>

        {showOrderSummary && (
          <Grid item xs={12} sm={12}  md={3} lg={3}>
            <Card
              elevation={20}
              sx={{
                backgroundColor: "#233A7E",
                color: "white",
                border: "5px solid grey",
                borderRadius: "15px",
              }}
            >
              <CardContent>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    textAlign: "center",
                    mb: 2,
                    fontSize: "22px",
                  }}
                >
                  Your Cart
                </Typography>
                <Typography
                  sx={{ fontWeight: "bold", textAlign: "left", mb: 2 }}
                >
                  Total Payment: AUD ${rates}.00
                </Typography>
                <Divider />
                <Grid
                  container
                  spacing={1}
                  sx={{ paddingTop: 3, paddingBottom: 3 }}
                >
                  <Grid item xs={6}>
                    <Typography sx={{ textAlign: "left", fontSize: "11px" }}>
                      {number}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography sx={{ textAlign: "right", fontSize: "11px" }}>
                      {rates.split(" ")[0]}.00
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography
                      sx={{ textAlign: "left", fontSize: "13px", pl: 1 }}
                    >
                      Mobile Recharge
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{ mt: 2, backgroundColor: "#FCB813" }}
                    >
                      Check Out
                    </Button>
                  </Grid>
                </Grid>

                <Typography
                  sx={{
                    textAlign: "left",
                    fontSize: "11px",
                    pl: 1,
                    color: "grey",
                  }}
                >
                  Please note that some receive amounts may have updated since
                  your last visit.
                </Typography>
                <Divider />
              </CardContent>
            </Card>
          </Grid>
        )}
      </Grid>
    </Box>
  );
}
