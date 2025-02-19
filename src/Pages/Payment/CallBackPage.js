import React, { useEffect, useState, useRef } from "react";
import { Typography, CircularProgress, Button, Modal, Box } from "@mui/material";
import axios from "axios";
import Confetti from "react-confetti"; // For sparkles effect
import Lottie from "lottie-react"; // For animations
import loadingAnimation from "./loading.json"; // Replace with your Lottie animation file
import successAnimation from "./success.json"; // Replace with your Lottie animation file

const CallBackPage = () => {
  const [loading, setLoading] = useState(true);
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [transactionId, setTransactionId] = useState("");
  const [error, setError] = useState("");
  const [showSuccessPopup, setShowSuccessPopup] = useState(false); // For success popup

  const number = localStorage.getItem("Number");
  const token = localStorage.getItem("token");
  const packId = localStorage.getItem("packID");
  const packPrice = localStorage.getItem("packPrice");

  const urlParams = new URLSearchParams(window.location.search);
  const status = urlParams.get("status");
  const transactionIdFromURL = urlParams.get("transactionId");

  // Ref to track if API has already been called
  const apiCalledRef = useRef(false);

  const confirmPayment = async (transactionId) => {
    if (apiCalledRef.current) return; // Prevent duplicate calls
    apiCalledRef.current = true; // Mark API as called

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
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setPaymentStatus("success");
      setShowSuccessPopup(true); // Show success popup
    } catch (err) {
      setError("Failed to confirm payment.");
      console.error("Error confirming payment:", err);
    } finally {
      setLoading(false);
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
        await confirmPayment(transactionIdFromURL);
      } else if (status === "failure") {
        setPaymentStatus("failed");
      }

      setLoading(false);
    };

    fetchPaymentStatus();
  }, []); // Empty dependency array ensures it runs only once

  // Success Popup Component
  const SuccessPopup = () => (
    <Modal open={showSuccessPopup} onClose={() => setShowSuccessPopup(false)}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
          textAlign: "center",
        }}
      >
        <Lottie animationData={successAnimation} loop={false} style={{ height: 150 }} />
        <Typography variant="h5" sx={{ mt: 2, fontWeight: "bold" }}>
          Payment Successful!
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          Thank you for your purchase. Your transaction has been completed successfully.
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          Transaction ID: <strong>{transactionId}</strong>
        </Typography>
        <Button
          variant="contained"
          sx={{ mt: 3, backgroundColor: "#4CAF50", color: "white" }}
          onClick={() => (window.location.href = "/")}
        >
          Go to Home
        </Button>
      </Box>
    </Modal>
  );

  if (loading) {
    return (
      <div style={{ textAlign: "center", marginTop: "20%" }}>
        <Lottie animationData={loadingAnimation} loop={true} style={{ height: 200 }} />
        <Typography variant="h6" sx={{ mt: 2 }}>
          Checking payment status...
        </Typography>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ textAlign: "center", marginTop: "20%" }}>
        <Typography variant="h6" color="error">
          {error}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => (window.location.href = "/")}
        >
          Go Back
        </Button>
      </div>
    );
  }

  return (
    <div style={{ textAlign: "center", marginTop: "20%", paddingTop: 120 }}>
      {/* Confetti for sparkles effect */}
      {showSuccessPopup && <Confetti width={window.innerWidth} height={window.innerHeight} />}

      {/* Success Popup */}
      <SuccessPopup />

      {/* Payment Failed UI */}
      {paymentStatus === "failed" && (
        <>
          <Typography variant="h4" style={{ color: "red" }}>
            Payment Failed!
          </Typography>
          <Typography variant="body1">
            Your payment could not be processed. Please try again.
          </Typography>
          <Typography variant="body1">
            Transaction ID: <strong>{transactionId}</strong>
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => (window.location.href = "/payment")}
          >
            Try Again
          </Button>
        </>
      )}
    </div>
  );
};

export default CallBackPage;