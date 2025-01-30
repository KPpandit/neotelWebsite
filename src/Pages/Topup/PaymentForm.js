import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Card, CardContent, Grid } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function PaymentForm({ orderDetails }) {
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    amount: orderDetails.ratesOffer,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handlePaymentSubmit = async (e) => {
    e.preventDefault();
    try {
      const paymentResponse = await axios.post('http://182.74.113.61/eway/payment_transparent.php', {
        firstName: formValues.firstName,
        lastName: formValues.lastName,
        email: formValues.email,
        address: formValues.address,
        amount: formValues.amount,
      });

      if (paymentResponse.status === 200) {
        const { accessCode, formUrl } = paymentResponse.data;
        navigate('/cardDetails', { state: { accessCode, formUrl, orderDetails } });
      }
    } catch (error) {
      console.error('Error during payment submission:', error);
    }
  };

  return (
    <Box sx={{ marginTop: 4 }}>
      <Card elevation={10} sx={{ padding: 3 }}>
        <CardContent>
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
            Payment Information
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="First Name"
                variant="outlined"
                name="firstName"
                value={formValues.firstName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Last Name"
                variant="outlined"
                name="lastName"
                value={formValues.lastName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                name="email"
                value={formValues.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Address"
                variant="outlined"
                name="address"
                value={formValues.address}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                onClick={handlePaymentSubmit}
                sx={{ backgroundColor: '#FCB813' }}
              >
                Next
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
}
