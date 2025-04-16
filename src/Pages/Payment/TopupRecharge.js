import React, { useEffect, useState } from "react";
import { Typography, Button, Box, CircularProgress, FormControlLabel, Checkbox } from "@mui/material";
import axios from "axios";

const TopupRecharge = ({ topUpValue, disabled }) => {
  console.log(disabled, "  --disabled");
  console.log("Top-up value from TopupRecharge Component: ", topUpValue);

  const [buttonText, setButtonText] = useState(`Failed Please try again`);
  const [loading, setLoading] = useState(false);
  const [privacyChecked, setPrivacyChecked] = useState(true);

  // Auto-trigger API call when the component mounts
  useEffect(() => {
    if (!disabled && topUpValue) {
      handlePayment();
    }
  }, [topUpValue, disabled]); // Runs when topUpValue or disabled changes

  const handlePayment = async () => {
    if (disabled || loading) return;

    setLoading(true);

    sessionStorage.setItem("topUpValue", topUpValue);
    let msisdn =sessionStorage.getItem('Number');
    const paymentData = {
      amount: topUpValue,
      quantity: 1,
      msisdn:msisdn,
      currency: "AUD",
      name: "Top Up",
      successUrl: "https://payment.neotel.nr/callbackstatus?status=success&transactionId=_transactionId_",
      failureUrl: "https://payment.neotel.nr/callbackstatus?status=failure&transactionId=_transactionId_",
    };

    try {
      const response = await axios.post("https://bssproxy01.neotel.nr/tpayment/api/payment", paymentData);
      setButtonText("wait");
      window.location.href = response.data.sessionUrl;
    } catch (err) {
      console.error("Payment failed:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 3 }}>
      {!disabled && (
        <Button
          variant="contained"
          disabled={true} // Disable button since API is auto-triggered
          sx={{
            backgroundColor: loading ? "#ccc" : "#F6B625",
            color: "#253A7D",
            fontWeight: "bold",
            px: 4,
            py: 1,
            "&:hover": {
              backgroundColor: loading ? "#ccc" : "#e0a720",
            },
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          {loading ? <CircularProgress size={24} sx={{ color: "#253A7D" }} /> : buttonText}
        </Button>
      )}

     
    </Box>
  );
};

export default TopupRecharge;
