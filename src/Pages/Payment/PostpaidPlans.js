import React, { useState } from 'react';
import { Typography, Card, CardContent, Button, Grid, TextField } from '@mui/material';
import TopupRecharge from './TopupRecharge';

const PostpaidPlans = ({ no, onPlanSelect, disabled }) => {
    console.log(disabled, ' disabled value in PostpaidPlans');

     const [topUpValue, setTopUpValue] = useState(sessionStorage.getItem("topUpValue") || "");
      const [inputError, setInputError] = useState("");
      const [isButtonVisible, setIsButtonVisible] = useState(false);
      const [showTopupRecharge, setShowTopupRecharge] = useState(false);
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
    // If disabled is true, return nothing
    if (disabled) {
        return null;
    }

    return (
        <div style={{ paddingTop: 20, maxWidth: 400, margin: 'auto' ,paddingTop:5}}>
            

            <Grid container spacing={5} paddingTop={10}>
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
        </div>
    );
};

export default PostpaidPlans;
