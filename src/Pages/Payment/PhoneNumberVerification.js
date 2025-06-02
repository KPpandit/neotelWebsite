import React, { useState, useEffect } from 'react';
import { TextField, Typography, CircularProgress, Box } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PhoneNumberVerification = ({ onVerified }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    if (value.length <= 7) {
      setPhoneNumber(value);
      setError('');
    }
  };

  const loginAndGetToken = async () => {
    try {
      const response = await axios.post(
        'https://bssproxy01.neotel.nr/crm/api/login',
        { email: "pawan@gmail.com", password: "pawan123" }
      );
      const { jwtToken } = response.data;
      sessionStorage.setItem('CRM_TOKEN', jwtToken);
      return jwtToken;
    } catch (err) {
      console.error('Login failed:', err);
      throw new Error('Failed to login and obtain CRM token.');
    }
  };

  useEffect(() => {
    if (phoneNumber.length === 7) {
      handleVerify();
    }
  }, [phoneNumber]);

  const checkPrepaidConditions = async (fullNumber, crmToken, customerDetail) => {
    try {
      // Call the prepaid customer details API
      const prepaidResponse = await axios.get(
        `https://bssproxy01.neotel.nr/abmf-prepaid/api/prepaid/customer/get/details?msisdn=${fullNumber}&imsi`,
        { headers: { Authorization: `Bearer ${crmToken}` } }
      );
      
      const { active_pack } = prepaidResponse.data;
      const { customer_balance_credits } = customerDetail;
      
      // Get the values we need to check
      const customerBalance = customer_balance_credits.customer_balance;
      const availableData = customer_balance_credits.available_data;
      
      // First condition: active_pack is null and customer balance is 0
      const condition1 = active_pack === null && customerBalance === 0;
      
      // Second condition: active_pack is not null, customer balance is 0 and available data is 0
      const condition2 = active_pack !== null && customerBalance === 0 && availableData === 0;
      
      if (condition1 || condition2) {
        navigate('/mainBalance', { state: { type: 'balance' } });
        return false; // Don't proceed with normal verification
      }
      
      return true; // Proceed with normal verification
    } catch (err) {
      console.error('Error checking prepaid conditions:', err);
      return true; // If there's an error, proceed with normal flow
    }
  };

  const handleVerify = async () => {
    const fullNumber = `674${phoneNumber}`;
    setLoading(true);
    
    try {
      const crmToken = await loginAndGetToken();
      
     
      const response = await axios.get(
        `https://bssproxy01.neotel.nr/abmf-prepaid/api/get/customer/detail?imsi=&msisdn=${fullNumber}`,
        { headers: { Authorization: `Bearer ${crmToken}` } }
      );

      const customerDetail = response.data;
      const subscriberType = customerDetail.subscriber_type.toLowerCase();
      
      if (subscriberType === 'prepaid') {
        
        const shouldProceed = await checkPrepaidConditions(fullNumber, crmToken, customerDetail);
        if (!shouldProceed) {
          setLoading(false);
          return;
        }
      }
      
      if (subscriberType === 'prepaid' || subscriberType === 'postpaid') {
        onVerified(fullNumber, subscriberType); // Pass customer type to parent
        sessionStorage.setItem('Number', fullNumber);
      } else {
        setError('Only prepaid/postpaid customers are allowed.');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ paddingTop: 70, maxWidth: 400, margin: 'auto' }}>
      <Typography sx={{ fontSize: '18px', fontWeight: 'bold', textAlign: 'center', paddingBottom: 0, paddingTop: 1 }}>
        Neotel Topup And Bundles
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center", padding: 2 }}>
        <TextField
          label="Enter Phone Number"
          value={phoneNumber}
          onChange={handleChange}
          error={!!error}
          helperText={error}
          inputProps={{ maxLength: 7 }}
          sx={{
            width: "250px",
            '& .MuiOutlinedInput-root': {
              borderRadius: '20px',
              height: "40px",
              paddingLeft: '15px',
              '&:before': {
                content: '""',
                position: 'absolute',
                left: '45px',
                top: '50%',
                transform: 'translateY(-50%)',
                height: '40%',
                width: '1px',
                backgroundColor: '#ccc',
              },
            },
          }}
          InputProps={{
            startAdornment: (
              <Typography sx={{
                color: 'text.secondary',
                fontWeight: 'bold',
                marginRight: '10px',
                fontSize: "14px",
                userSelect: 'none',
              }}>
                674
              </Typography>
            ),
          }}
        />
      </Box>

      {loading && (
        <div style={{ textAlign: 'center', marginTop: 16 }}>
          <CircularProgress size={24} />
        </div>
      )}
    </div>
  );
};

export default PhoneNumberVerification;