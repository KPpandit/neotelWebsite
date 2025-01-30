import React, { useState } from "react";
import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import QrCode2OutlinedIcon from "@mui/icons-material/QrCode2Outlined";
import QRCode from "qrcode.react";

export default function UPI() {
  const [qrCodeData, setQrCodeData] = useState("");
  const [upiId, setUpiId] = useState(""); // State to handle UPI ID input

  const handleGenerateQRCode = () => {
    const uniqueData = `upi://pay?pa=your-upi-id@upi&pn=YourName&am=1&cu=INR&tn=TestTransaction${Date.now()}`;
    setQrCodeData(uniqueData);
  };

  return (
    <Grid container spacing={1} padding={2}>
      <Grid item xs={12}>
        <Typography sx={{ fontWeight: "1000", fontSize: "19px" }}>
          Pay using UPI
        </Typography>
      </Grid>
      <Grid item xs={9}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography sx={{ fontWeight: "1000", fontSize: "16px" }}>
              Scan & Pay
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              Scan the QR code using any UPI app on your mobile phone to pay
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={3}>
        {qrCodeData ? (
          <QRCode value={qrCodeData} size={120} />
        ) : (
          <QrCode2OutlinedIcon sx={{ fontSize: 120 }} />
        )}
      </Grid>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          marginTop: 4,
        }}
      >
        <Button
          variant="contained"
          sx={{
            p: 2,
            borderRadius: "20px",
            backgroundColor: "#FBB716",
            color: "black",
          }}
          onClick={handleGenerateQRCode}
        >
          Generate QR Code
        </Button>
      </Box>
      {qrCodeData ? null : (
        <>
          <Grid item xs={12}>
            {/* <Divider>OR</Divider> */}
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              marginTop: 4,
            }}
          >
            {/* <TextField
              fullWidth
              label="Enter your UPI ID"
              value={upiId}
              onChange={(e) => setUpiId(e.target.value)}
            /> */}
          </Grid>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              marginTop: 4,
            }}
          >
            {/* <Button
              variant="contained"
              fullWidth
              sx={{
                p: 2,
                borderRadius: "20px",
                backgroundColor: "#253A7D",
              }}
            >
              Verify and Pay
            </Button> */}
          </Box>
        </>
      )}
    </Grid>
  );
}
