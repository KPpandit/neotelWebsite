import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  CardMedia,
  Divider,
  Button
} from "@mui/material";
import visa from "../../Images/visa.png";
import masterCard from "../../Images/masterCard.png";
import americanExpress from "../../Images/americanExpress.png";

const paymentMethods = [
  { name: "Visa", img: visa },
  { name: "Mastercard", img: masterCard },
  // { name: "Amex", img: americanExpress },
];

export default function PayAndCheckOut({ orderDetails, selectedPaymentMethod, setSelectedPaymentMethod, addToCart }) {
  const handleCardClick = (method) => setSelectedPaymentMethod(method.name);

  const formatPhoneNumber = (phoneNumber) => {
    if (phoneNumber.length === 10) {
      return `+${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
    }
    return phoneNumber;
  };
  localStorage.setItem("rates",orderDetails.ratesOffer);
  localStorage.setItem("number",orderDetails.phoneNumber);
  localStorage.setItem("planID",orderDetails.selectedPlan);


  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: 4 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography sx={{ fontSize: "22px", fontWeight: "bold", textAlign: "left", mb: 2 }}>
            Select a Payment Method
          </Typography>
          <Typography sx={{ fontSize: "18px", fontWeight: "bold", textAlign: "left", mb: 2 }}>
            Add a new method of payment
          </Typography>
        </Grid>
        <Grid item xs={12}  md={9} lg={9} xl={9}>
          <Grid container spacing={2}>
            {paymentMethods.map((method) => (
              <Grid item xs={6} md={6}  lg={4} key={method.name}>
                <Card
                  onClick={() => handleCardClick(method)}
                  elevation={10}
                  sx={{
                    backgroundColor: selectedPaymentMethod === method.name ? "#233A7E" : "#FCB813",
                    color: selectedPaymentMethod === method.name ? "white" : "black",
                    border: selectedPaymentMethod === method.name ? "2px solid #FCB813" : "1px solid #e0e0e0",
                    "&:hover": {
                      cursor: "pointer",
                      backgroundColor: "#233A7E",
                      color: "white",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
                    },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "200px",
                    p: 1
                  }}
                >
                  <CardMedia
                    component="img"
                    image={method.img}
                    alt={method.name}
                    sx={{ width: "auto", height: "80px", mb: 0.5, mt: 2, pt: 1 }}
                  />
                  <CardContent>
                    <Typography variant="body2" sx={{ fontWeight: "500" }}>
                      {method.name}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} lg={3}>
          <Card
            elevation={20}
            sx={{ backgroundColor: "#233A7E", color: "white", border: "5px solid grey", borderRadius: "15px" }}
          >
            <CardContent>
              <Typography sx={{ fontWeight: "bold", textAlign: "left", mb: 2 }}>
                Total Payment: USD ${orderDetails.ratesOffer}.00
              </Typography>
              <Divider />
              <Typography sx={{ fontWeight: "bold", textAlign: "left", mb: 2, mt: 2 }}>
                Order Details
              </Typography>
              <Typography sx={{ textAlign: "left" }}>
                {formatPhoneNumber(orderDetails.phoneNumber)}
              </Typography>
              <Typography sx={{ textAlign: "right" }}>
                {orderDetails.ratesOffer}.00
              </Typography>
              <Typography sx={{ textAlign: "left", fontSize: "13px", pl: 1 }}>
                Mobile Top Up
              </Typography>
              <Typography sx={{ textAlign: "left", fontSize: "14px", pl: 1, color: "grey" }}>
                Mobile will receive: AUD ${orderDetails.ratesOffer}
              </Typography>
              <Divider />
              <Button
                variant="contained"
                color="primary"
                onClick={() => addToCart(orderDetails)}
                sx={{ mt: 2, backgroundColor: '#FCB813' }}
              >
                Add to Cart
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
