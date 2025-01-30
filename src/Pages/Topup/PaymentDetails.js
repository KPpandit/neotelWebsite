import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Divider,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";

export default function PaymentDetails({ orderDetails }) {
  console.log(orderDetails.data, 'value in order payment details');

  const formatPhoneNumber = (phoneNumber) => {
    if (phoneNumber.length === 10) {
      const formattedNumber = `+ (674)-${phoneNumber.slice(
        0,
        3
      )}-${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
      return formattedNumber;
    }
    return phoneNumber;
  };

  const planDetails = [
    { label: "Plan Name", value: orderDetails.data.plan_name },
    { label: "Data Balance", value: `${orderDetails.data.data_balance} ${orderDetails.data.data_balance_parameter}` },
    { label: "On-Net Voice Balance", value: `${orderDetails.data.onn_call_balance} ${orderDetails.data.onn_call_balance_parameter}` },
    { label: "Off-Net Voice Balance", value: `${orderDetails.data.ofn_call_balance} ${orderDetails.data.ofn_call_balance_parameter}` },
    { label: "On-Net SMS Balance", value: orderDetails.data.onn_sms_balance },
    { label: "Off-Net SMS Balance", value: orderDetails.data.ofn_sms_balance },
    { label: "Usage Voice (On-Net)", value: `AUD $${orderDetails.data.base_pack.onn_call_tariff}` },
    { label: "Usage Voice (Off-Net)", value: `AUD $${orderDetails.data.base_pack.ofn_call_tariff}` },
    { label: "Usage SMS (On-Net)", value: `AUD $${orderDetails.data.base_pack.onn_sms_tariff}` },
    { label: "Usage SMS (Off-Net)", value: `AUD $${orderDetails.data.base_pack.ofn_sms_tariff}` },
    { label: "Usage Data", value: `AUD $${orderDetails.data.base_pack.data_tariff}` },
    { label: "Validity", value: `${orderDetails.data.validity} day(s)` },
  ];

  const halfIndex = Math.ceil(planDetails.length / 2); // Split index

  const leftDetails = planDetails.slice(0, halfIndex);  // First half of details
  const rightDetails = planDetails.slice(halfIndex);   // Second half of details

  return (
    <>
      <Grid container spacing={2}>
      <Grid item xs={12}>
          <Card elevation={10} sx={{ marginTop: 2 }}>
            <CardContent>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", marginBottom: 2, textAlign: "left" }}
              >
                Please review your order (All purchases are final)
              </Typography>
              <Divider
                sx={{
                  width: "100%",
                  height: "1.5px",
                  backgroundColor: "#233A7E",
                }}
              />

              <Grid container spacing={2} padding={2}>
                <Grid item xs={6} sx={{ textAlign: "left" }}>
                  <Typography
                    variant="body1"
                    sx={{ color: "#5A5A88", fontSize: "20px" }}
                  >
                    {formatPhoneNumber(orderDetails.phoneNumber)}
                  </Typography>
                </Grid>
                <Grid item xs={6} sx={{ textAlign: "right" }}>
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: "1000", color: "#5A5A88", fontSize: "20px" }}
                  >
                    {orderDetails.ratesOffer}
                  </Typography>
                </Grid>
              </Grid>
              <Divider
                sx={{
                  width: "100%",
                  height: "1.5px",
                  backgroundColor: "#233A7E",
                }}
              />

              <Grid container spacing={2} paddingTop={2} padding={2}>
                <Grid item xs={6}>
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: "1000",
                      color: "#5A5A88",
                      fontSize: "20px",
                      textAlign: 'left',
                    }}
                  >
                    Total Amount
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: "1000",
                      color: "#5A5A88",
                      fontSize: "20px",
                      textAlign: 'right',
                    }}
                  >
                    AUD $ {orderDetails.ratesOffer}.00
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} >
          <Card elevation={10} sx={{ marginTop: 1 }}>
            <CardContent>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", marginBottom: 2.5, textAlign: "left" }}
              >
                Plan Details
              </Typography>
              <Divider
                sx={{
                  width: "100%",
                  height: "1.5px",
                  backgroundColor: "#233A7E",
                }}
              />

              {/* Responsive layout for plan details */}
              <TableContainer >
                <Table>
                  <TableBody>
                    <Grid container>
                      {/* For small screens, stack the details vertically */}
                      <Grid item xs={12} md={6} >
                        <Table >
                          <TableBody>
                            {leftDetails.map((detail, index) => (
                              <TableRow key={index}>
                                <TableCell sx={{ fontWeight: "bold" }}>{detail.label}:</TableCell>
                                <TableCell>{detail.value}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </Grid>

                      {/* Right Column Details */}
                      <Grid item xs={12} md={6}>
                        <Table>
                          <TableBody>
                            {rightDetails.map((detail, index) => (
                              <TableRow key={index}>
                                <TableCell sx={{ fontWeight: "bold" }}>{detail.label}:</TableCell>
                                <TableCell>{detail.value}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </Grid>
                    </Grid>
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>

        {/* Bottom Section for Phone Number and Rates */}
       
      </Grid>
    </>
  );
}
