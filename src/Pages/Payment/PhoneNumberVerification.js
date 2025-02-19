import React, { useState, useEffect } from 'react';
import { TextField, Typography, CircularProgress } from '@mui/material';
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
      const response = await axios.get(
        `https://bssproxy01.neotel.nr/abmf-prepaid/api/get/customer/detail?imsi=&msisdn=${fullNumber}`
      );

      if (response.data.subscriber_type.toLowerCase() === 'prepaid') {
        onVerified(fullNumber);
        localStorage.setItem('Number', fullNumber);
      } else {
        setError('Only prepaid customers are allowed.');
      }
    } catch (err) {
      console.log(err.response.data.message,'---')
      setError(err.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ paddingTop: 70, maxWidth: 400, margin: 'auto' }}>
      <Typography
        sx={{
          fontSize: '28px',
          fontWeight: 'bold',
          textAlign: 'center',
          paddingBottom: 5,
          paddingTop: 5,
        }}
      >
        Neotel Topup And Bundles
      </Typography>

      <TextField
        label="Phone Number"
        value={phoneNumber}
        onChange={handleChange}
        fullWidth
        margin="normal"
        error={!!error}
        helperText={error}
        inputProps={{ maxLength: 7 }} // Limit to 7 digits after 674
        sx={{
          '& .MuiOutlinedInput-root': {
            borderRadius: '25px', 
            paddingLeft: '20px', // Extra space for 674
            '&:before': {
              content: '""',
              position: 'absolute',
              left: '50px', // Position the separator line
              top: '50%',
              transform: 'translateY(-50%)',
              height: '60%',
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
                marginRight: '12px', // Adds spacing after 674
                userSelect: 'none', // Prevents user selection
              }}
            >
              674
            </Typography>
          ),
        }}
      />

      {loading && (
        <div style={{ textAlign: 'center', marginTop: 16 }}>
          <CircularProgress size={24} />
        </div>
      )}
    </div>
  );
};

export default PhoneNumberVerification;
