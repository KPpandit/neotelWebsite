import React, { useEffect, useState, useRef } from "react";
import { Typography, CircularProgress, Button, Box, Modal, Backdrop, Fade } from "@mui/material";
import axios from "axios";
import Confetti from "react-confetti";

const CallBackPage = () => {
  const isTestMode = false; // Set to true for UI testing

  const [loading, setLoading] = useState(true);
  const [apiLoading, setApiLoading] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [transactionId, setTransactionId] = useState("");
  const [error, setError] = useState("");
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState({
    amount: "",
    quantity: "",
    name: "",
    msisdn: ""
  });

  // Get values from localStorage as fallback
  const number = sessionStorage.getItem("Number");
  const packName = sessionStorage.getItem("packName");
  const CRM_TOKEN = sessionStorage.getItem("CRM_TOKEN");
  const packId = sessionStorage.getItem("packID");
  const packPrice = sessionStorage.getItem("packPrice");
  const topUpValue = sessionStorage.getItem("topUpValue");

  // Extract all parameters from URL
  const urlParams = new URLSearchParams(window.location.search);
  const status = urlParams.get("status");
  const transactionIdFromURL = urlParams.get("transactionId");
  const amountFromURL = urlParams.get("amount");
  const quantityFromURL = urlParams.get("quantity");
  const nameFromURL = urlParams.get("name");
  const msisdnFromURL = urlParams.get("msisdn");

  const apiCalledRef = useRef(false);
  const callRef = useRef(0);

  useEffect(() => {
    // Set payment details from URL or fallback to localStorage
    setPaymentDetails({
      amount: amountFromURL || packPrice || topUpValue || "0",
      quantity: quantityFromURL || "1",
      name: nameFromURL || packName || "Unknown Product",
      msisdn: msisdnFromURL || number || "Unknown Number"
    });

    const fetchPaymentStatus = async () => {
      if (!isTestMode && (!number || !CRM_TOKEN)) {
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

      if (isTestMode) {
        // Simulate success or failure UI
        if (status === "success") {
          setPaymentStatus("success");
          setShowSuccessPopup(true);
        } else {
          setPaymentStatus("failed");
        }
        setLoading(false);
        return;
      }

      if (status === "success") {
        await confirmPayment(transactionIdFromURL, topUpValue != null);
      } else if (status === "failure") {
        setPaymentStatus("failed");
        await callAdditionalAPI(
          msisdnFromURL || number,
          transactionIdFromURL,
          amountFromURL || topUpValue || packPrice,
          "failed",
          topUpValue ? "TOP-UP" : "BUNDAL"
        );
      }

      setLoading(false);
    };

    fetchPaymentStatus();
  }, []);

  const callAdditionalAPI = async (msisdn, transactionId, amount, status, remark) => {
    if (callRef.current <= 0) {
      callRef.current += 1;

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

        if (status === "success") {
          setPaymentStatus("success");
          setShowSuccessPopup(true);
        } else {
          setPaymentStatus("failed");
        }
      } catch (err) {
        console.error("Error calling additional API:", err);
        setPaymentStatus("failed");
      }
    }
  };

  const confirmPayment = async (transactionId, isTopUp = false) => {
    if (apiCalledRef.current) return;
    apiCalledRef.current = true;
    setApiLoading(true);

    const amountToUse = amountFromURL || (isTopUp ? topUpValue : packPrice);

    const apiData = isTopUp ? {
      msisdn: msisdnFromURL || number,
      amount: parseFloat(amountToUse),
      remark: "TOP-UP",
      transactionId,
    } : {
      partnerId: 0,
      amount: parseFloat(amountToUse),
      product: "plan",
      planId: parseInt(packId, 10),
      paymentNotes: "Thank you !!",
      paymentStatus: true,
      transactionId,
    };

    const apiUrl = isTopUp ?
      "https://bssproxy01.neotel.nr/erp/api/save/payment/currency/1/paymentResult/1/paymentMethod/1/creditCard/1" :
      `https://bssproxy01.neotel.nr/erp/api/savepayment/currency/1/paymentrsult/1/paymentmethod/1?creditCard=2&msisdn=${msisdnFromURL || number}`;

    try {
      await axios.post(apiUrl, apiData, { headers: { Authorization: `Bearer ${CRM_TOKEN}` } });
      await callAdditionalAPI(
        msisdnFromURL || number,
        transactionId,
        amountToUse,
        "success",
        isTopUp ? "TOP-UP" : "BUNDALE"
      );
    } catch (err) {
      setError(`Failed to confirm ${isTopUp ? "top-up" : ""} payment.`);
      console.error(`Error confirming ${isTopUp ? "top-up" : ""} payment:`, err);
      await callAdditionalAPI(
        msisdnFromURL || number,
        transactionId,
        amountToUse,
        "failed",
        isTopUp ? "TOP-UP" : "BUNDALE"
      );
    } finally {
      setApiLoading(false);
    }
  };

  if (loading || apiLoading) {
    return (
      <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "#f0f2f5" }}>
        <CircularProgress size={60} />
        <Typography variant="h6" mt={2}>{loading ? "Checking payment status..." : "Processing payment..."}</Typography>
      </Box>
    );
  }

  if (error) {
    return (
      <Box textAlign="center" mt={10} sx={{ paddingTop: 10, paddingBottom: 10 }}>
        <Typography variant="h6" color="error">{error}</Typography>
        <Button variant="contained" sx={{ mt: 2 }} onClick={() => (window.location.href = "/")}>Go Back</Button>
      </Box>
    );
  }

  return (
    <Box textAlign="center" mt={10} p={3} paddingTop={20} paddingBottom={15}>
      {paymentStatus === "success" && (
        <>
          <Typography variant="h4" sx={{ color: "green", fontWeight: "bold" }}>✅ Payment Successful!</Typography>
          <Typography variant="body1" mt={1}>Thank you for your purchase of {paymentDetails.name}.</Typography>
          <Typography variant="body1">Amount: ${paymentDetails.amount}</Typography>
          <Typography variant="body1">Quantity: {paymentDetails.quantity}</Typography>
          <Typography variant="body1" fontWeight="bold" mt={1}>Transaction ID: {transactionId}</Typography>
          <Typography variant="body1">MSISDN: {paymentDetails.msisdn}</Typography>
        </>
      )}

      {paymentStatus === "failed" && (
        <>
          <Typography variant="h4" sx={{ color: "red", fontWeight: "bold" }}>❌ Payment Failed!</Typography>
          <Typography variant="body1" mt={1}>Your payment for {paymentDetails.name} could not be processed.</Typography>
          <Typography variant="body1">Amount: ${paymentDetails.amount}</Typography>
          <Typography variant="body1" fontWeight="bold" mt={1}>Transaction ID: {transactionId}</Typography>
          <Button variant="contained" sx={{ mt: 3, backgroundColor: "#d9534f", color: "white" }} onClick={() => (window.location.href = "/buy")}>Try Again</Button>
        </>
      )}

      <Modal open={showSuccessPopup} onClose={() => setShowSuccessPopup(false)} closeAfterTransition BackdropComponent={Backdrop} BackdropProps={{ timeout: 500 }}>
        <Fade in={showSuccessPopup}>
          <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", bgcolor: "white", p: 4, boxShadow: 24, borderRadius: 2, textAlign: "center", width: "90%", maxWidth: 400 }}>
            <Typography variant="h4" sx={{ color: "green", fontWeight: "bold" }}>🎉 Payment Successful!</Typography>
            <Typography variant="body1" mt={1}>Your transaction for {paymentDetails.name} was completed successfully.</Typography>
            <Typography variant="body1">Amount: ${paymentDetails.amount}</Typography>
            <Button variant="contained" sx={{ mt: 3, backgroundColor: "#28a745", color: "white" }} onClick={() => (window.location.href = "/")}>Go to Home</Button>
          </Box>
        </Fade>
      </Modal>

      {showSuccessPopup && <Confetti numberOfPieces={200} />}
    </Box>
  );
};

export default CallBackPage;