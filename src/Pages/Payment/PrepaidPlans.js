import React, { useState, useEffect, useRef } from "react";
import { Typography, Card, CardContent, CircularProgress, Box, Divider, Grid, TextField, Button } from "@mui/material";
import axios from "axios";
import { useLocation } from "react-router-dom";
import TopupRecharge from "./TopupRecharge";

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
    if (value && value < 20) setInputError("Top-Up amount must be greater than 20.");
    else setInputError("");
    setTopUpValue(value);
    sessionStorage.setItem("topUpValue", value);
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
    setTimeout(() => orderSummaryRef.current?.scrollIntoView({ behavior: "smooth" }), 0);
  };

  const renderPlanDetails = (plan) => (
    <Box sx={circleStyle}>
      <Typography variant="subtitle2" sx={priceStyle}>${plan.pack_price}</Typography>
      {plan.description.toLowerCase().includes("data") && (
        <Typography variant="body2" sx={{ color: "black", fontSize: "12px", fontWeight: 'bold' }}>
          {plan.data_balance} GB
        </Typography>
      )}
      <Typography variant="body2" sx={{ color: "black", fontSize: '12px', fontWeight: 'bold' }}>For {plan.validity} Days</Typography>
      {plan.description.toLowerCase().includes("router") && (
        <Typography variant="body2" sx={{ color: "black", textAlign: 'center', fontSize: '12px' }}>Unlimited Data</Typography>
      )}
      {(plan.description.toLowerCase().includes("call") || plan.description.toLowerCase().includes("data")) && (
        <Typography variant="body2" sx={{ color: "black", textAlign: 'center', fontSize: '12px' }}>Neotel to Neotel Call & SMS Free</Typography>
      )}
    </Box>
  );

  const renderPlans = (title, plans) => (
    <Box sx={{ mt: 2 }}>
      <Box sx={{ display: "flex", gap: 1, overflowX: "auto", justifyContent: 'center', flexWrap: { xs: "wrap", sm: "nowrap" } }}>
        {plans.map(plan => (
          <Card
            key={plan.pack_id}
            sx={{ ...cardStyles, backgroundColor: selectedPack?.pack_id === plan.pack_id ? "#F7B416" : "#A1B5BD", minWidth: 150 }}
            onClick={() => handleCardClick(plan)}
          >
            <CardContent>
              <Typography variant="subtitle2" align="center" sx={titleStyle}>{plan.pack_name}</Typography>
              {renderPlanDetails(plan)}
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );

  return (
    <Box sx={{ padding: 0, position: "relative", paddingTop: 10 }}>
      {!location.search.includes("pack_id") && (
        <>
          <Typography align="center" sx={{ color: "black", fontWeight: "bold", mb: 1, fontSize: "20px" }}>Discover Our Best Bundles</Typography>
          <Grid container spacing={0}>
            <Grid item xs={12}>{renderPlans("Data Plans", plans)}</Grid>
          </Grid>
          <Grid container spacing={5} paddingTop={8}>
            <Grid item xs={12}>
              <Typography variant="body1" sx={{ fontWeight: "bold", color: "black", fontSize: "20px", textAlign: 'center' }}>Want to buy a Top-Up of your choice</Typography>
            </Grid>
            <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
              <TextField
                variant="outlined"
                fullWidth
                disabled={disabled}
                value={topUpValue}
                onChange={handleTopUpChange}
                type="number"
                error={Boolean(inputError)}
                helperText={inputError}
                InputProps={{ sx: { borderRadius: "20px", textAlign: "center", fontWeight: "bold", color: "black", backgroundColor: "#F5F5F5" } }}
                sx={{ width: "300px" }}
                inputProps={{ min: 20 }}
              />
              {isButtonVisible && topUpValue >= 20 && <Button variant="contained" sx={{ mt: 2, backgroundColor: '#4A59A7' }} onClick={handleButtonClick}>Pay Top-up Amount</Button>}
              {showTopupRecharge && <TopupRecharge topUpValue={topUpValue} disabled={false} />}
            </Grid>
          </Grid>
        </>
      )}
      {selectedPack && (
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
    <Typography variant="body1" sx={{ fontWeight: "bold", color: "#253A7D" ,fontSize:{xs:'10px',sm:'10px',md:'14px',lg:'16px'}}}>{label}</Typography>
    <Typography variant="body1" sx={{ fontWeight: "bold", color: "black" ,fontSize:{xs:'10px',sm:'10px',md:'14px',lg:'16px'}}}>{value}</Typography>
  </Box>
);

const cardStyles = { width: 250, boxShadow: 3, borderRadius: 2, cursor: "pointer" };
const titleStyle = { fontWeight: "bold", color: "#253A7D", fontSize: '12px' };
const priceStyle = { fontWeight: "bold", color: "brown", fontSize: '12px' };
const circleStyle = { display: "flex", justifyContent: "center", alignItems: "center", width: 200, height: 200, borderRadius: "50%", backgroundColor: "#E0E0E0", margin: "10px auto", flexDirection: "column" };

export default PrepaidPlans;