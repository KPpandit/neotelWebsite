import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Typography,
  CircularProgress,
  InputAdornment,
  Grid,
} from "@mui/material";
import axios from "axios";

const OtpVerification = ({ phoneNumber, onOtpVerified }) => {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [timer, setTimer] = useState(0); // Countdown timer in seconds

  let authHash = "6BAADEEE331503D91CB427020E64AE1C";

  const handleSendOtp = async () => {
    setLoading(true);
    try {
      await axios.get(
        `https://bssproxy01.neotel.nr/eua/api/client/auth/requestOtp/${phoneNumber}/en`,
        {
          headers: {
            "auth-hash": authHash,
          },
        }
      );
      setOtpSent(true);
      setTimer(60); // Start 1-minute countdown
      setError("");
    } catch (err) {
      setError("Failed to send OTP.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let interval;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const handleVerifyOtp = async () => {
    if (!otp || otp.length !== 4) {
      setError("Please enter a valid 4-digit OTP.");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(
        "https://bssproxy01.neotel.nr/eua/api/client/auth/verifyOtp/",
        {
          phoneNo: phoneNumber,
          otp: otp,
        },
        {
          headers: {
            "auth-hash": authHash,
          },
        }
      );

      if (response.data.status === "success") {
        localStorage.setItem("token", response.data.jwt);
        onOtpVerified();
      } else {
        setError("Invalid OTP.");
      }
    } catch (err) {
      setError("Failed to verify OTP.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ paddingTop: 150, textAlign: "center", maxWidth: 400, margin: "auto" }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h6" style={{ color: "#253A7D" }}>Please Send OTP To Verify Your Number {phoneNumber}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            onClick={handleSendOtp}
            disabled={loading || otpSent}
            style={{
              backgroundColor: otpSent ? "#ccc" : "#F6B625",
              color: "#253A7D",
              marginBottom: "10px",
            }}
          >
            {otpSent ? `Resend OTP in ${timer}s` : "Send OTP"}
          </Button>

          {otpSent && (
            <>
              <TextField
                label="Enter OTP"
                value={otp}
                onChange={(e) => {
                  const val = e.target.value;
                  if (/^\d{0,4}$/.test(val)) setOtp(val); // Allow only 4-digit numbers
                }}
                fullWidth
                margin="normal"
                InputProps={{
                  endAdornment: timer > 0 ? (
                    <InputAdornment position="end">
                      <Typography color="textSecondary">{timer}s</Typography>
                    </InputAdornment>
                  ) : null,
                }}
              />

              {error && <Typography color="error">{error}</Typography>}

              <Button
                variant="contained"
                onClick={handleVerifyOtp}
                disabled={loading}
                style={{ backgroundColor: "#F6B625", color: "#253A7D", marginTop: "10px" }}
              >
                {loading ? <CircularProgress size={24} /> : "Verify OTP"}
              </Button>
            </>
          )}
        </Grid>

      </Grid>



    </div>
  );
};

export default OtpVerification;
