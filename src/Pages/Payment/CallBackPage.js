import React, { useEffect, useState, useRef } from "react";
import {
  Typography,
  CircularProgress,
  Button,
  Box,
  Modal,
  Backdrop,
  Fade,
} from "@mui/material";
import axios from "axios";
import Confetti from "react-confetti";

const CallBackPage = () => {
  const [loading, setLoading] = useState(true); // Initial page load state
  const [apiLoading, setApiLoading] = useState(false); // API call state
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [transactionId, setTransactionId] = useState("");
  const [error, setError] = useState("");
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const number = localStorage.getItem("Number");
  const token = localStorage.getItem("token");
  const CRM_TOKEN = localStorage.getItem("CRM_TOKEN");
  const packId = localStorage.getItem("packID");
  const packPrice = localStorage.getItem("packPrice");
  const topUpValue = localStorage.getItem("topUpValue"); // Get topUpValue from localStorage

  const urlParams = new URLSearchParams(window.location.search);
  const status = urlParams.get("status");
  const transactionIdFromURL = urlParams.get("transactionId");

  const apiCalledRef = useRef(false);

  const confirmPayment = async (transactionId) => {
    if (apiCalledRef.current) return;
    apiCalledRef.current = true;
    setApiLoading(true); // Show loader while API is being called

    const apiData = {
      partnerId: 0,
      amount: parseFloat(packPrice),
      product: "plan",
      planId: parseInt(packId, 10),
      paymentNotes: "Thank you !!",
      paymentStatus: true,
      transactionId: transactionId,
    };

    try {
      await axios.post(
        `https://bssproxy01.neotel.nr/eua/api/savepayment/currency/1/paymentrsult/${number}`,
        apiData,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setPaymentStatus("success");
      setShowSuccessPopup(true); // Show popup on success
    } catch (err) {
      setError("Failed to confirm payment.");
      console.error("Error confirming payment:", err);
    } finally {
      setApiLoading(false); // Hide loader when API call is complete
    }
  };

  const confirmTopUpPayment = async (transactionId) => {
    if (apiCalledRef.current) return;
    apiCalledRef.current = true;
    setApiLoading(true); // Show loader while API is being called

    const apiData = {
      msisdn: number,
      amount: parseFloat(topUpValue),
      remark: "TOP-UP",
      transactionId: transactionId,
    };

    try {
      await axios.post(
        "https://bssproxy01.neotel.nr/erp/api/save/payment/currency/1/paymentResult/1/paymentMethod/1/creditCard/1",
        apiData,
        { headers: { Authorization: `Bearer ${CRM_TOKEN}` } }
      );
      setPaymentStatus("success");
      setShowSuccessPopup(true); // Show popup on success
    } catch (err) {
      setError("Failed to confirm top-up payment.");
      console.error("Error confirming top-up payment:", err);
    } finally {
      setApiLoading(false); // Hide loader when API call is complete
    }
  };

  useEffect(() => {
    const fetchPaymentStatus = async () => {
      if (!number || !token) {
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
        if (topUpValue) {
          await confirmTopUpPayment(transactionIdFromURL); // Call top-up API if topUpValue exists
        } else {
          await confirmPayment(transactionIdFromURL); // Call regular payment API
        }
      } else if (status === "failure") {
        setPaymentStatus("failed");
      }

      setLoading(false);
    };

    fetchPaymentStatus();
  }, []);

  // Show loader during API fetching
  if (loading || apiLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#f0f2f5",
        }}
      >
        <CircularProgress size={60} />
        <Typography variant="h6" mt={2}>
          {loading ? "Checking payment status..." : "Processing payment..."}
        </Typography>
      </Box>
    );
  }

  // Error Message
  if (error) {
    return (
      <Box textAlign="center" mt={10} sx={{paddingTop:10,paddingBottom:10}}>
        <Typography variant="h6" color="error">
          {error}
        </Typography>
        <Button
          variant="contained"
          sx={{ mt: 2 }}
          onClick={() => (window.location.href = "/")}
        >
          Go Back
        </Button>
      </Box>
    );
  }

  return (
    <Box textAlign="center" mt={10} p={3} paddingTop={20} paddingBottom={15}>
      {paymentStatus === "success" && (
        <>
          <Typography variant="h4" sx={{ color: "green", fontWeight: "bold" }}>
            ✅ Payment Successful!
          </Typography>
          <Typography variant="body1" mt={1}>
            Thank you for your purchase. Your transaction has been completed successfully.
          </Typography>
          <Typography variant="body1" fontWeight="bold" mt={1}>
            Transaction ID: {transactionId}
          </Typography>
        </>
      )}

      {paymentStatus === "failed" && (
        <>
          <Typography variant="h4" sx={{ color: "red", fontWeight: "bold" }}>
            ❌ Payment Failed!
          </Typography>
          <Typography variant="body1" mt={1}>
            Your payment could not be processed. Please try again.
          </Typography>
          <Typography variant="body1" fontWeight="bold" mt={1}>
            Transaction ID: {transactionId}
          </Typography>
          <Button
            variant="contained"
            sx={{ mt: 3, backgroundColor: "#d9534f", color: "white" }}
            onClick={() => (window.location.href = "/123")}
          >
            Try Again
          </Button>
        </>
      )}

      {/* Success Modal with Confetti */}
      <Modal
        open={showSuccessPopup}
        onClose={() => setShowSuccessPopup(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
      >
        <Fade in={showSuccessPopup}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              bgcolor: "white",
              p: 4,
              boxShadow: 24,
              borderRadius: 2,
              textAlign: "center",
              width: "90%",
              maxWidth: 400,
            }}
          >
            <Typography variant="h4" sx={{ color: "green", fontWeight: "bold" }}>
              🎉 Payment Successful!
            </Typography>
            <Typography variant="body1" mt={1}>
              Your transaction was completed successfully.
            </Typography>
            <Button
              variant="contained"
              sx={{ mt: 3, backgroundColor: "#28a745", color: "white" }}
              onClick={() => (window.location.href = "/")}
            >
              Go to Home
            </Button>
          </Box>
        </Fade>
      </Modal>

      {/* Confetti Animation */}
      {showSuccessPopup && <Confetti numberOfPieces={200} />}
    </Box>
  );
};

export default CallBackPage;