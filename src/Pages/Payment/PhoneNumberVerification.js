import React, { useState, useEffect } from 'react';
import { TextField, Typography, CircularProgress, Box } from '@mui/material';
import axios from 'axios';

const PhoneNumberVerification = ({ onVerified }) => {
  const [phoneNumber, setPhoneNumber] = useState(''); // Only store the part after 674
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const value = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters

    if (value.length <= 7) { // Limit to 7 digits (674 + 7 = 10 total)
      setPhoneNumber(value);
      setError(''); // Clear error when valid input is entered
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
      sessionStorage.setItem('CRM_TOKEN', jwtToken);
      console.log('CRM Token stored successfully:', jwtToken);
    } catch (err) {
      console.error('Login failed:', err);
      setError('Failed to login and obtain CRM token.');
    }
  };

  useEffect(() => {
    // Automatically call API when the number reaches 7 digits (total 10 with 674)
    if (phoneNumber.length === 7) {
      handleVerify();
    }
  }, [phoneNumber]);

  const handleVerify = async () => {
    const fullNumber = `674${phoneNumber}`;

    setLoading(true);
    try {
      await loginAndGetToken();

      const crmToken = sessionStorage.getItem('CRM_TOKEN');
      if (!crmToken) {
        throw new Error('CRM token not found.');
      }

      const response = await axios.get(
        `https://bssproxy01.neotel.nr/abmf-prepaid/api/get/customer/detail?imsi=&msisdn=${fullNumber}`,
        {
          headers: {
            Authorization: `Bearer ${crmToken}`,
          },
        }
      );

      const subscriberType = response.data.subscriber_type.toLowerCase();
      if (subscriberType === 'prepaid') {
        onVerified(fullNumber, 'prepaid');
        sessionStorage.setItem('Number', fullNumber);
        localStorage.setItem('Number', fullNumber);
      } else {
        onVerified(fullNumber, 'postpaid');
        setError('Only prepaid customers can purchase bundles.');
      }
    } catch (err) {
      console.log(err.response?.data?.message || 'An error occurred', '---');
      setError(err.response?.data?.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ paddingTop: 70, maxWidth: 550, margin: 'auto' }}>
      <Typography
        sx={{
          fontSize: '18px',
          fontWeight: 'bold',
          textAlign: 'center',
          paddingBottom: 0,
          paddingTop: 1,
        }}
      >
        Enter Your Number to Select Your Bundles and Topup options
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: 2
        }}
      >
        <TextField
          label="Enter Phone Number"
          value={phoneNumber}
          onChange={handleChange}
          error={!!error}
          helperText={error}
          inputProps={{ maxLength: 7 }} // Limit to 7 digits after 674
          sx={{
            width: "250px", // Reduced width
            '& .MuiOutlinedInput-root': {
              borderRadius: '20px', // Slightly smaller border-radius
              height: "40px", // Reduced height
              paddingLeft: '15px',
              '&:before': {
                content: '""',
                position: 'absolute',
                left: '45px', // Adjusted position for separator line
                top: '50%',
                transform: 'translateY(-50%)',
                height: '40%', // Reduced height of separator line
                width: '1px',
                backgroundColor: '#ccc',
              },
            },
          }}
          InputProps={{
            startAdornment: (
              <Typography
                sx={{
                  color: 'text.secondary',
                  fontWeight: 'bold',
                  marginRight: '10px', // Adjusted spacing after 674
                  fontSize: "14px", // Reduced font size
                  userSelect: 'none',
                  // backgroundColor:'blue'
                }}
              >
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