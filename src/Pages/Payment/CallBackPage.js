import React, { useEffect, useState, useRef } from "react";
import { Typography, CircularProgress, Button, Box, Modal, Backdrop, Fade } from "@mui/material";
import axios from "axios";
import Confetti from "react-confetti";

const CallBackPage = () => {
  const [loading, setLoading] = useState(true); // Initial loading state
  const [apiLoading, setApiLoading] = useState(false); // API call loading state
  const [paymentStatus, setPaymentStatus] = useState(null); // Payment status (success/failed)
  const [transactionId, setTransactionId] = useState(""); // Transaction ID
  const [error, setError] = useState(""); // Error message
  const [showSuccessPopup, setShowSuccessPopup] = useState(false); // Success popup state

  const number = sessionStorage.getItem("Number");
  const packName = sessionStorage.getItem("packName");
  const CRM_TOKEN = sessionStorage.getItem("CRM_TOKEN");
  const packId = sessionStorage.getItem("packID");
  const packPrice = sessionStorage.getItem("packPrice");
  const topUpValue = sessionStorage.getItem("topUpValue");

  const urlParams = new URLSearchParams(window.location.search);
  const status = urlParams.get("status");
  const transactionIdFromURL = urlParams.get("transactionId");

  console.log("URL from beginning of data -----> :", transactionIdFromURL);

  const apiCalledRef = useRef(false); // To prevent duplicate API calls
  
const callRef = useRef(0); // Use useRef to persist across re-renders

const callAdditionalAPI = async (msisdn, transactionId, amount, status, remark) => {
  if (callRef.current <= 0) { // Ensure API is called only once
    callRef.current += 1; // Increment the counter to prevent duplicate calls

    const apiData = {
      msisdn,
      transactionId,
      createDate: new Date().toISOString().split("T")[0],
      amount,
      status: status === "success" ? "SUCCESS" : "FAILED",
      remark,
    };

    try {
      await axios.post("https://bssproxy01.neotel.nr/erp/api/ref/save/payment", apiData, {
        headers: { Authorization: `Bearer ${CRM_TOKEN}` },
      });
      console.log("URL from 2nd step success -----> :", urlParams);

      if (status === "success") {
        setPaymentStatus("success");
        setShowSuccessPopup(true);
      } else {
        setPaymentStatus("failed");
      }
    } catch (err) {
      console.log("URL from 2nd step failure -----> :", urlParams);
      console.error("Error calling additional API:", err);
      setPaymentStatus("failed"); // Set payment status to failed on error
    }
  }
};


  const confirmPayment = async (transactionId, isTopUp = false) => {
    if (apiCalledRef.current) return; // Prevent duplicate API calls
    apiCalledRef.current = true;
    setApiLoading(true);

    const apiData = isTopUp ? {
      msisdn: number,
      amount: parseFloat(topUpValue),
      remark: "TOP-UP",
      transactionId,
    } : {
      partnerId: 0,
      amount: parseFloat(packPrice),
      product: "plan",
      planId: parseInt(packId, 10),
      paymentNotes: "Thank you !!",
      paymentStatus: true,
      transactionId,
    };

    const apiUrl = isTopUp ?
      "https://bssproxy01.neotel.nr/erp/api/save/payment/currency/1/paymentResult/1/paymentMethod/1/creditCard/1" :
      `https://bssproxy01.neotel.nr/erp/api/savepayment/currency/1/paymentrsult/1/paymentmethod/1?creditCard=2&msisdn=${number}`;

    try {
      // Main API call
      await axios.post(apiUrl, apiData, { headers: { Authorization: `Bearer ${CRM_TOKEN}` } });
      console.log("URL in 1st step success -----> :", urlParams);

      // Additional API call with success status
      await callAdditionalAPI(number, transactionId, apiData.amount, "success", isTopUp ? "TOP-UP" : "BUNDALE");
    } catch (err) {
      console.log("URL in 1st step failure -----> :", urlParams);
      setError(`Failed to confirm ${isTopUp ? "top-up" : ""} payment.`);
      console.error(`Error confirming ${isTopUp ? "top-up" : ""} payment:`, err);

      // Additional API call with failed status
      await callAdditionalAPI(number, transactionId, apiData.amount, "failed", isTopUp ? "TOP-UP" : "BUNDALE");
    } finally {
      setApiLoading(false);
    }
  };

  useEffect(() => {
    const fetchPaymentStatus = async () => {
      if (!number || !CRM_TOKEN) {
        setError("Invalid session. Please log in again.");
        setLoading(false);
        return;
      }

      if (!status || !transactionIdFromURL) {
        setError("Invalid callback URL.");
        setLoading(false);
        return;
      }

      setTransactionId(transactionIdFromURL);

      if (status === "success") {
        await confirmPayment(transactionIdFromURL, topUpValue != null);
      } else if (status === "failure") {
        setPaymentStatus("failed"); // Explicitly set payment status to failed
        await callAdditionalAPI(number, transactionIdFromURL, topUpValue || packPrice, "failed", topUpValue ? "TOP-UP" : "BUNDAL");
      }

      setLoading(false); // Set loading to false after API calls are completed
    };

    fetchPaymentStatus();
  }, []);

  // Show loading spinner while checking payment status or processing API calls
  if (loading || apiLoading) {
    return (
      <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "#f0f2f5" }}>
        <CircularProgress size={60} />
        <Typography variant="h6" mt={2}>{loading ? "Checking payment status..." : "Processing payment..."}</Typography>
      </Box>
    );
  }

  // Show error message if there's an error
  if (error) {
    return (
      <Box textAlign="center" mt={10} sx={{ paddingTop: 10, paddingBottom: 10 }}>
        <Typography variant="h6" color="error">{error}</Typography>
        <Button variant="contained" sx={{ mt: 2 }} onClick={() => (window.location.href = "/")}>Go Back</Button>
      </Box>
    );
  }

  // Render success or failed UI only after API calls are completed
  return (
    <Box textAlign="center" mt={10} p={3} paddingTop={20} paddingBottom={15}>
      {paymentStatus === "success" && (
        <>
          <Typography variant="h4" sx={{ color: "green", fontWeight: "bold" }}>✅ Payment Successful!</Typography>
          <Typography variant="body1" mt={1}>Thank you for your purchase. Your transaction has been completed successfully.</Typography>
          <Typography variant="body1" fontWeight="bold" mt={1}>Transaction ID: {transactionId}</Typography>
        </>
      )}

      {paymentStatus === "failed" && (
        <>
          <Typography variant="h4" sx={{ color: "red", fontWeight: "bold" }}>❌ Payment Failed!</Typography>
          <Typography variant="body1" mt={1}>Your payment could not be processed. Please try again.</Typography>
          <Typography variant="body1" fontWeight="bold" mt={1}>Transaction ID: {transactionId}</Typography>
          <Button variant="contained" sx={{ mt: 3, backgroundColor: "#d9534f", color: "white" }} onClick={() => (window.location.href = "/buy")}>Try Again</Button>
        </>
      )}

      {/* Success Popup Modal */}
      <Modal open={showSuccessPopup} onClose={() => setShowSuccessPopup(false)} closeAfterTransition BackdropComponent={Backdrop} BackdropProps={{ timeout: 500 }}>
        <Fade in={showSuccessPopup}>
          <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", bgcolor: "white", p: 4, boxShadow: 24, borderRadius: 2, textAlign: "center", width: "90%", maxWidth: 400 }}>
            <Typography variant="h4" sx={{ color: "green", fontWeight: "bold" }}>🎉 Payment Successful!</Typography>
            <Typography variant="body1" mt={1}>Your transaction was completed successfully.</Typography>
            <Button variant="contained" sx={{ mt: 3, backgroundColor: "#28a745", color: "white" }} onClick={() => (window.location.href = "/")}>Go to Home</Button>
          </Box>
        </Fade>
      </Modal>

      {/* Confetti Animation */}
      {showSuccessPopup && <Confetti numberOfPieces={200} />}
    </Box>
  );
};

export default CallBackPage;