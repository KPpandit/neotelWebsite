import { Box, Card, CardContent, Divider, TextField, Typography, Button, CircularProgress, InputAdornment } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const DetailRow = ({ label, value }) => (
  <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
    <Typography variant="body1" sx={{ fontWeight: "bold", color: "#253A7D", fontSize: { xs: '10px', sm: '10px', md: '14px', lg: '16px' } }}>
      {label}
    </Typography>
    <Typography variant="body1" sx={{ fontWeight: "bold", color: "black", fontSize: { xs: '10px', sm: '10px', md: '14px', lg: '16px' } }}>
      {value}
    </Typography>
  </Box>
);

export default function PlanPay() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const planName = queryParams.get("plan");

  const [plan, setPlan] = useState(null);
  const [mobileNumber, setMobileNumber] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [validationSuccess, setValidationSuccess] = useState(false);
  const [buttonText, setButtonText] = useState("Click And Pay");

  // Fetch plan details
  useEffect(() => {
    const fetchPlanDetails = async () => {
      try {
        const response = await fetch("https://bssproxy01.neotel.nr/abmf-prepaid/api/prepaid/packs?pack_status=APPROVED");
        const data = await response.json();

        const matchedPlan = data.find((p) => p.pack_name.toUpperCase().startsWith(planName.toUpperCase()));

        if (matchedPlan) {
          setPlan(matchedPlan);

          localStorage.setItem("packID", matchedPlan.pack_id);
          localStorage.setItem("packName", matchedPlan.pack_name);
          localStorage.setItem("packPrice", matchedPlan.pack_price);
          sessionStorage.setItem("packID", matchedPlan.pack_id);
          sessionStorage.setItem("packName", matchedPlan.pack_name);
          sessionStorage.setItem("packPrice", matchedPlan.pack_price);
        } else {
          console.error(`Plan "${planName}" not found.`);
        }
      } catch (error) {
        console.error("Error fetching plan details:", error);
      }
    };

    if (planName) {
      fetchPlanDetails();
    }
  }, [planName]);

  // Automatically validate the number when it meets the criteria
  useEffect(() => {
    if (/^(674\d{7})$/.test(`674${mobileNumber}`)) {
      verifyNumber();
    } else {
      setValidationSuccess(false); // Reset validation success if the number is invalid
    }
  }, [mobileNumber]);

  // Mobile Number Validation
  const handleNumberChange = (e) => {
    const value = e.target.value;

    // Allow only digits and restrict to 7 characters
    const digitsOnly = value.replace(/\D/g, "").slice(0, 7);
    setMobileNumber(digitsOnly);

    // Validate the full number (674 + user input)
    const fullNumber = `674${digitsOnly}`;
    if (!/^(674\d{7})$/.test(fullNumber)) {
      setError("Please Enter The Valid Number");
    } else {
      setError("");
    }
  };

  // API Call to Verify Number
  const verifyNumber = async () => {
    setLoading(true);
    setValidationSuccess(false); // Reset validation success before making the API call

    try {
      const crmToken = sessionStorage.getItem("CRM_TOKEN");
      const fullNumber = `674${mobileNumber}`; // Combine 674 with user input

      const response = await axios.get(
        `https://bssproxy01.neotel.nr/abmf-prepaid/api/get/customer/detail?imsi=&msisdn=${fullNumber}`,
        {
          headers: {
            Authorization: `Bearer ${crmToken}`,
          },
        }
      );

      if (response.data.subscriber_type.toLowerCase() === 'prepaid') {
        sessionStorage.setItem('Number', fullNumber);
        localStorage.setItem('Number', fullNumber);
        setValidationSuccess(true); // Set validation success to true
        await loginAndGetToken();  // Fetch token after successful verification
      } else {
        setError('Only Prepaid Customers are Allowed.');
        setValidationSuccess(false); // Reset validation success
      }
    } catch (err) {
      console.error("Error verifying number:", err);
      setError("Not a Valid Neotel Number. Please try again.");
      setValidationSuccess(false); // Reset validation success
    } finally {
      setLoading(false);
    }
  };

  // Login and Get CRM Token
  const loginAndGetToken = async () => {
    try {
      const response = await axios.post(
        "https://bssproxy01.neotel.nr/crm/api/login",
        { email: "pawan@gmail.com", password: "pawan123" }
      );

      const { jwtToken } = response.data;
      localStorage.setItem("CRM_TOKEN", jwtToken);
      sessionStorage.setItem("CRM_TOKEN", jwtToken);
      console.log("CRM Token stored successfully:", jwtToken);
    } catch (err) {
      console.error("Login failed:", err);
      setError("Failed to login and obtain CRM token.");
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);

  // Payment API Integration
  const initiatePayment = async () => {
    const packID = localStorage.getItem('packID');
    const packName = localStorage.getItem('packName');
    const selectedPlan = plan;
    const fullNumber = `674${mobileNumber}`; // Combine 674 with user input

    const paymentData = {
      amount: selectedPlan.pack_price,
      quantity: 1,
      msisdn: fullNumber, // Use the full 10-digit number
      currency: 'AUD',
      name: 'Bundle Purchase ' + packName + '-' + packID,
      successUrl: 'https://payment.neotel.nr/callbackstatus?status=success&transactionId=_transactionId_',
      failureUrl: 'https://payment.neotel.nr/callbackstatus?status=failure&transactionId=_transactionId_',
    };

    setLoading(true);

    try {
      localStorage.removeItem('topUpValue');
      sessionStorage.removeItem('topUpValue');

      const response = await axios.post('https://bssproxy01.neotel.nr/pgw/api/payment', paymentData);

      setButtonText("Login"); // Change button text to "Login"
      window.location.href = response.data.sessionUrl; // Redirect to payment gateway
    } catch (err) {
      console.error('Payment failed:', err);
      setError('Payment failed. Please try again.');
    } finally {
      setLoading(false); // Stop loading
    }
  };

  if (!plan) {
    return (
      <Box sx={{ mt: 3, textAlign: "center", color: "#253A7D", fontSize: "18px", fontWeight: "bold", paddingTop: 20 }}>
        Loading Plan Details...
      </Box>
    );
  }

  return (
    <Box sx={{ mt: 3, pt: 7, paddingBottom: 5 }}>
      <Typography sx={{ fontSize: "24px", fontWeight: "bold", textAlign: "center", paddingTop: 5, color: "#253A7D" }}>
        Order Summary
      </Typography>
      <Divider sx={{ my: 3, backgroundColor: "#253A7D", height: 2 }} />
      <Card sx={{ maxWidth: 500, mx: "auto", boxShadow: 3, borderRadius: 2, p: 3 }}>
        <CardContent>
          <DetailRow label="Pack Name" value={plan.pack_name} />
          <DetailRow label="Pack Validity" value={`${plan.validity} Days`} />
          <DetailRow label="Data Balance" value={plan.assigned_data_balance === '931 GB' ? 'Unlimited Data' : plan.assigned_data_balance} />
          <DetailRow label="Neotel to Neotel Call" value={`${plan.onn_call_balance === 1666 ? 'Unlimited' : plan.onn_call_balance} ${plan.onn_call_balance_parameter}`} />
          <DetailRow label="Neotel to Neotel SMS" value={`${plan.onn_sms_balance === 99999 ? 'Unlimited' : plan.onn_sms_balance} SMS`} />
          <DetailRow label="Total" value={`$ ${plan.pack_price}`} />

          {/* Mobile Number Input */}
          <TextField
            label="Enter Your Phone Number"
            variant="outlined"
            fullWidth
            value={mobileNumber}
            onChange={handleNumberChange}
            error={!!error}
            helperText={error}
            inputProps={{
              maxLength: 7, // Restrict input to 7 digits
            }}
            InputProps={{
              startAdornment: <InputAdornment position="start">674</InputAdornment>,
              sx: { borderRadius: "20px" },
            }}
            sx={{ mt: 3 }}
          />

          {/* Confirm Button */}
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
            onClick={initiatePayment}
            disabled={loading || !!error || !validationSuccess}
          >
            {loading ? <CircularProgress size={24} /> : buttonText}
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}