import React, { useState } from 'react';
import { Typography, Button, Box, CircularProgress, FormControlLabel, Checkbox } from '@mui/material';
import axios from 'axios';

const PaymentGateway = ({ selectedPlan, disabled }) => {
  console.log(disabled, '  --disabled');
  console.log('Selected plan details from PaymentGateway Component:', selectedPlan);
  const [buttonText, setButtonText] = useState(`Click And Pay ${selectedPlan?.pack_price || ''}`);
  const [loading, setLoading] = useState(false); // State for loading indicator
  const [privacyChecked, setPrivacyChecked] = useState(true); // Checkbox state

  const handlePayment = async () => {
    if (disabled || loading) return; // Prevent multiple clicks during loading

    setLoading(true); // Start loading

    
    sessionStorage.setItem('packID', selectedPlan.pack_id);
   
    sessionStorage.setItem('packPrice', selectedPlan.pack_price);
    
    sessionStorage.setItem('packName', selectedPlan.pack_name);

    
    const packName = localStorage.getItem('packName') || sessionStorage.getItem('packName');
    const msisdn = localStorage.getItem('Number') || sessionStorage.getItem('Number');
    const packID = localStorage.getItem('packID') || sessionStorage.getItem('packID');

    const paymentData = {
      amount: selectedPlan.pack_price,
      quantity: 1,
      msisdn: msisdn,
      currency: 'AUD',
      name: 'Bundle Purchase ' + packName+'-'+packID,
      successUrl: 'https://payment.neotel.nr/callbackstatus?status=success&transactionId=_transactionId_',
      failureUrl: 'https://payment.neotel.nr/callbackstatus?status=failure&transactionId=_transactionId_',
    };

    try {
      // Step 1: Initiate payment
      localStorage.removeItem('topUpValue');
      sessionStorage.removeItem('topUpValue');
      const response = await axios.post('https://bssproxy01.neotel.nr/pgw/api/payment', paymentData);
      setButtonText('Login'); // Change button text to "Login"
      window.location.href = response.data.sessionUrl; // Redirect to payment gateway
    } catch (err) {
      console.error('Payment failed:', err);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 3 }}>
      {disabled === false && (
        <Button
          variant="contained"
          onClick={handlePayment}
          disabled={disabled || loading} // Disable button while loading
          sx={{
            backgroundColor: disabled || loading ? '#ccc' : '#F6B625',
            color: '#253A7D',
            fontWeight: 'bold',
            px: 4, // Horizontal padding
            py: 1, // Vertical padding
            '&:hover': {
              backgroundColor: disabled || loading ? '#ccc' : '#e0a720',
            },
            display: 'flex',
            alignItems: 'center',
            gap: 1, // Space between text and loader
          }}
        >
          {loading ? <CircularProgress size={24} sx={{ color: '#253A7D' }} /> : buttonText}
        </Button>
      )}

      {/* Privacy Policy Checkbox */}
      <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', marginTop: 2 }}>
        <FormControlLabel
          control={<Checkbox checked={privacyChecked} sx={{ color: '#253A7D' }} />}
          label={
            <Typography variant="body2" sx={{ textAlign: 'center' }}>
              By continuing, I agree to the Neotel &nbsp;
              <a
                href="/privacy-policy"
                target="_blank"
                style={{ color: '#253A7D', textDecoration: 'none', fontWeight: 'bold' }}
              >
                Terms & Conditions, Privacy Policy & Payment Terms
              </a>
            </Typography>
          }
        />
      </Box>
    </Box>
  );
};

export default PaymentGateway;