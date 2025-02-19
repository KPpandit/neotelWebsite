import React from 'react';
import { Typography, Button, Box } from '@mui/material';
import axios from 'axios';

const PaymentGateway = ({ selectedPlan, disabled }) => {
  const handlePayment = async () => {
    if (disabled) return; // Do nothing if disabled

    // Store pack ID and price in localStorage
    localStorage.setItem('packID', selectedPlan.pack_id);
    localStorage.setItem('packPrice', selectedPlan.pack_price);

    const paymentData = {
      amount: selectedPlan.pack_price,
      quantity: 1,
      currency: 'AUD',
      name: 'Bundle Purchase',
      // Custom success and failure URLs with transactionId placeholder
      successUrl: 'http://localhost:3000/callbackstatus?status=success&transactionId=_transactionId_', // Success callback URL
      failureUrl: 'http://localhost:3000/callbackstatus?status=failure&transactionId=_transactionId_', // Failure callback URL
    };

    try {
      // Step 1: Initiate payment
      const response = await axios.post('https://bssproxy01.neotel.nr/pgw/api/payment', paymentData);
      window.location.href = response.data.sessionUrl; // Redirect to payment gateway
    } catch (err) {
      console.error('Payment failed:', err);
    }
  };

  return (
    <div>
      {/* <Typography variant="h6" style={{ color: '#253A7D',textAlign:'center' }}>Complete Payment</Typography> */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          // alignItems: 'center',
          // minHeight: '100vh', // Ensures full viewport height
          paddingTop: 3
        }}
      >
        {selectedPlan?.pack_price ? ( // Conditionally render button if pack_price exists
          <Button
            variant="contained"
            onClick={handlePayment}
            disabled={disabled}
            sx={{
              backgroundColor: disabled ? '#ccc' : '#F6B625',
              color: '#253A7D',
              fontWeight: 'bold',
              px: 4, // Horizontal padding
              py: 1, // Vertical padding
              '&:hover': {
                backgroundColor: disabled ? '#ccc' : '#e0a720',
              },
            }}
          >
            Click And Pay ${selectedPlan.pack_price}
          </Button>
        ) : <Button
          variant="contained"
          onClick={handlePayment}
          disabled={disabled}
          sx={{
            backgroundColor: disabled ? '#ccc' : '#F6B625',
            color: '#253A7D',
            fontWeight: 'bold',
            px: 4, // Horizontal padding
            py: 1, // Vertical padding
            '&:hover': {
              backgroundColor: disabled ? '#ccc' : '#e0a720',
            },
          }}
        >
          Click And Pay 
        </Button>
        } {/* Render nothing if pack_price is null */}
      </Box>
    </div>
  );
};

export default PaymentGateway;