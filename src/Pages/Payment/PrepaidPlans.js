import React, { useState, useEffect, useRef } from "react";
import {
  Typography,
  Card,
  CardContent,
  CircularProgress,
  Box,
  Divider,
  Grid,
  Button,
  useMediaQuery,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import axios from "axios";
import { useLocation } from "react-router-dom";
import TopupRecharge from "./TopupRecharge";
import DataUsageIcon from "@mui/icons-material/DataUsage"; // Icon for Bundles
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn"; // Icon for Top-U
const PrepaidPlans = ({ selectedPlan, onPlanSelect, disabled }) => {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedPack, setSelectedPack] = useState(null);
  const [topUpValue, setTopUpValue] = useState(sessionStorage.getItem("topUpValue") || "");
  const [inputError, setInputError] = useState("");
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const orderSummaryRef = useRef(null);
  const location = useLocation();
  const [showTopupRecharge, setShowTopupRecharge] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showOrderSummary, setShowOrderSummary] = useState(false);

  const isSmallScreen = useMediaQuery("(max-width:600px)");

  useEffect(() => {
    if (selectedPlan) setSelectedPack(selectedPlan);
  }, [selectedPlan]);

  useEffect(() => {
    const fetchPlans = async () => {
      setLoading(true);
      try {
        const response = await axios.get("https://bssproxy01.neotel.nr/abmf-prepaid/api/prepaid/packs?pack_status=APPROVED");
        let fetchedPlans = response.data.filter(plan => plan.pack_id !== 78 && plan.category_name !== "Reseller");
        const queryParams = new URLSearchParams(location.search);
        const packId = queryParams.get('pack_id');

        if (packId) {
          const selectedPlan = fetchedPlans.find(plan => plan.pack_id == packId);
          if (selectedPlan && !disabled) {
            setSelectedPack(selectedPlan);
            onPlanSelect(selectedPlan);
            setShowOrderSummary(true);
          }
          fetchedPlans = [];
        }

        setPlans(fetchedPlans);
      } catch (err) {
        setError("Failed to fetch plans.");
      } finally {
        setLoading(false);
      }
    };
    fetchPlans();
  }, [location.search, disabled]);

  const handleTopUpChange = (event) => {
    const value = event.target.value;
    setTopUpValue(value);
    sessionStorage.setItem("topUpValue", value);
    setIsButtonVisible(value !== "");
  };

  const handleButtonClick = () => {
    console.log("Button clicked!", topUpValue);
    setShowTopupRecharge(true);
  };

  const handleCardClick = (plan) => {
    if (disabled) return;
    setSelectedPack(plan);
    onPlanSelect(plan);
    setShowOrderSummary(true);
    setTimeout(() => orderSummaryRef.current?.scrollIntoView({ behavior: "smooth" }), 0);
  };

  const renderPlanDetails = (plan) => (
    <Box sx={circleStyle}>
      <Typography variant="subtitle2" sx={priceStyle}>${plan.pack_price}</Typography>
      {plan.description.toLowerCase().includes("data") && (
        <Typography variant="body2" sx={{ color: "black", fontSize: "14px", fontWeight: 'bold' }}>
          {plan.data_balance} GB
        </Typography>
      )}
      <Typography variant="body2" sx={{ color: "black", fontSize: '14px', fontWeight: 'bold' }}>For {plan.validity} Days</Typography>
      {plan.description.toLowerCase().includes("router") && (
        <Typography variant="body2" sx={{ color: "black", textAlign: 'center', fontSize: '14px' }}>UNLIMITED Data</Typography>
      )}
      {(plan.description.toLowerCase().includes("call") || plan.description.toLowerCase().includes("data")) && (
        <Typography variant="body2" sx={{ color: "black", textAlign: 'center', fontSize: '14px' }}>Neotel to Neotel Call <br /> & <br /> SMS Free</Typography>
      )}
    </Box>
  );

  const renderPlans = (title, plans) => (
    <Box sx={{ mt: 2 }}>
      <Box
        sx={{
          display: "flex",
          gap: 1,
          overflowX: "auto",
          justifyContent: "center",
          flexWrap: { xs: "wrap", sm: "nowrap" }
        }}
      >
        {plans.map(plan => (
          <Card
            key={plan.pack_id}
            sx={{
              ...cardStyles,
              backgroundColor: selectedPack?.pack_id === plan.pack_id ? "#F7B416" : "#A1B5BD",
              minWidth: 150
            }}
          >
            <CardContent>
              <Typography variant="subtitle2" align="center" sx={titleStyle}>
                {plan.pack_name.toUpperCase()}
              </Typography>
              {renderPlanDetails(plan)}

              {/* Hide the Select button if this plan is selected */}
              {selectedPack?.pack_id !== plan.pack_id && (
                <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                  <Button
                    variant="contained"
                    sx={{ backgroundColor: "#B3BADE", color: "black" }}
                    onClick={() => handleCardClick(plan)}
                  >
                    Select
                  </Button>
                </Box>
              )}
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );


  const renderInitialCards = () => {
    if (disabled) return null; // Do not render if disabled is true

    return (
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        {/* Heading */}
        <Grid item xs={12} textAlign="center">
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              color: "black",
              fontSize: "20px",
            }}
          >
            Click the Option Required
          </Typography>
        </Grid>

        {/* Cards */}
        <Grid item xs={12}>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              justifyContent: "center",
              flexDirection: isSmallScreen ? "column" : "row",
              alignItems: "center",
            }}
          >
            {/* Buy Data Bundles Card */}
            <Card
              sx={{
                background: selectedOption === "bundles"
                  ? "linear-gradient(135deg, #FFA726, #F57C00)"
                  : "linear-gradient(135deg, #4A59A7, #3A4A97)",
                cursor: "pointer",
                width: isSmallScreen ? "90%" : "240px",
                borderRadius: "16px",
                boxShadow: selectedOption === "bundles"
                  ? "0 8px 15px rgba(255, 165, 0, 0.6)"
                  : "0 5px 12px rgba(0, 0, 0, 0.3)",
                "&:hover": {
                  transform: "scale(1.05)",
                  transition: "all 0.3s ease-in-out",
                },
              }}
              onClick={() => setSelectedOption("bundles")}
            >
              <CardContent sx={{ display: "flex", alignItems: "center", gap: 1, py: 3 }}>
                <DataUsageIcon sx={{ color: "white", fontSize: 30 }} />
                <Typography
                  variant="h6"
                  align="center"
                  sx={{ color: "white", flexGrow: 1, fontWeight: "bold", fontSize: "16px" }}
                >
                  Buy Data Bundles
                </Typography>
              </CardContent>
            </Card>

            {/* Buy Top-Up Card */}
            <Card
              sx={{
                background: selectedOption === "topup"
                  ? "linear-gradient(135deg, #4CAF50, #2E7D32)"
                  : "linear-gradient(135deg, #4A59A7, #3A4A97)",
                cursor: "pointer",
                width: isSmallScreen ? "90%" : "240px",
                borderRadius: "16px",
                boxShadow: selectedOption === "topup"
                  ? "0 8px 15px rgba(76, 175, 80, 0.6)"
                  : "0 5px 12px rgba(0, 0, 0, 0.3)",
                "&:hover": {
                  transform: "scale(1.05)",
                  transition: "all 0.3s ease-in-out",
                },
              }}
              onClick={() => setSelectedOption("topup")}
            >
              <CardContent sx={{ display: "flex", alignItems: "center", gap: 1, py: 3 }}>
                <MonetizationOnIcon sx={{ color: "white", fontSize: 30 }} />
                <Typography
                  variant="h6"
                  align="center"
                  sx={{ color: "white", flexGrow: 1, fontWeight: "bold", fontSize: "16px" }}
                >
                  Buy Top-Up
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Grid>
    );
  };

  const queryParams = new URLSearchParams(location.search);
  const packId = queryParams.get('pack_id');

  return (
    <Box sx={{ padding: 0, position: "relative", paddingTop: 10 }}>

      {!packId && (
        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, alignItems: "center", justifyContent: "center", gap: 4, mt: 4 }}>
          {!selectedOption && renderInitialCards()}
          {selectedOption === "bundles" && (
            <Box sx={{ width: "100%" }}>
              <Typography align="center" sx={{ color: "black", fontWeight: "bold", mb: 1, fontSize: "20px" }}>Select the Desired Bundle and Proceed to Checkout</Typography>
              {renderPlans("Data Plans", plans)}
            </Box>
          )}
          {selectedOption === "topup" && (
            <Box sx={{ width: "100%" }}>
              <Typography variant="body1" sx={{ fontWeight: "bold", color: "black", fontSize: "20px", textAlign: 'center' }}>Select the Amount from Dropdown Box</Typography>
              <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", mt: 2 }}>
                <FormControl sx={{ width: "300px" }}>
                  <InputLabel id="topup-amount-label" >Top-Up Amount</InputLabel>
                  <Select
                    labelId="topup-amount-label"
                    id="topup-amount"
                    value={topUpValue}
                    onChange={handleTopUpChange}
                    label="Top-Up Amount"
                    sx={{ borderRadius: "20px", textAlign: "center", fontWeight: "bold", color: "black", backgroundColor: "#F5F5F5" }}
                  >
                    <MenuItem sx={{fontWeight:'bold'}} value={20}>A$ 20.00</MenuItem>
                    <MenuItem sx={{fontWeight:'bold'}} value={50}>A$ 50.00</MenuItem>
                    <MenuItem sx={{fontWeight:'bold'}} value={100}>A$ 100.00</MenuItem>
                    <MenuItem sx={{fontWeight:'bold'}} value={200}>A$ 200.00</MenuItem>
                  </Select>
                </FormControl>
                {isButtonVisible && topUpValue >= 20 && <Button variant="contained" sx={{ mt: 2, backgroundColor: '#4A59A7' }} onClick={handleButtonClick}>Pay Top-up Amount</Button>}
                {showTopupRecharge && <TopupRecharge topUpValue={topUpValue} disabled={false} />}
              </Box>
            </Box>
          )}
        </Box>
      )}
      {(packId || showOrderSummary) && selectedPack && (
        <Box sx={{ mt: 3, pt: 3 }} ref={orderSummaryRef}>
          <Typography sx={{ fontSize: "24px", fontWeight: "bold", textAlign: "center", paddingTop: 5, color: "#253A7D" }}>Order Summary</Typography>
          <Divider sx={{ my: 4, backgroundColor: "#253A7D", height: 2 }} />
          <Card sx={{ maxWidth: 500, mx: "auto", boxShadow: 3, borderRadius: 2, p: 3 }}>
            <CardContent>
              <DetailRow label="Pack Name" value={selectedPack.pack_name} />
              <DetailRow label="Pack Validity" value={`${selectedPack.validity} Days`} />
              <DetailRow label="Data Balance" value={selectedPack.assigned_data_balance === '931 GB' ? 'Unlimited Data' : selectedPack.assigned_data_balance} />
              <DetailRow label="Neotel to Neotel Call" value={`${selectedPack.onn_call_balance === 1666 ? 'Unlimited' : selectedPack.onn_call_balance} ${selectedPack.onn_call_balance_parameter}`} />
              <DetailRow label="Neotel to Neotel SMS" value={`${selectedPack.onn_sms_balance === 99999 ? 'Unlimited' : selectedPack.onn_sms_balance} SMS`} />
              <DetailRow label="Total" value={`$ ${selectedPack.pack_price}`} />
            </CardContent>
          </Card>
        </Box>
      )}
      {loading && <Box display="flex" justifyContent="center"><CircularProgress /></Box>}
      {error && <Typography color="error" align="center">{error}</Typography>}
    </Box>
  );
};

const DetailRow = ({ label, value }) => (
  <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
    <Typography variant="body1" sx={{ fontWeight: "bold", color: "#253A7D", fontSize: { xs: '10px', sm: '10px', md: '14px', lg: '16px' } }}>{label}</Typography>
    <Typography variant="body1" sx={{ fontWeight: "bold", color: "black", fontSize: { xs: '10px', sm: '10px', md: '14px', lg: '16px' } }}>{value}</Typography>
  </Box>
);

const cardStyles = { width: 270, boxShadow: 3, borderRadius: 2, cursor: "pointer" };
const titleStyle = { fontWeight: "bold", color: "#253A7D", fontSize: '14px' };
const priceStyle = { fontWeight: "bold", color: "brown", fontSize: '16px' };
const circleStyle = { display: "flex", justifyContent: "center", alignItems: "center", width: 200, height: 200, borderRadius: "50%", backgroundColor: "#E0E0E0", margin: "10px auto", flexDirection: "column" };

export default PrepaidPlans;