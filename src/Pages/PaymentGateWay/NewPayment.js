import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Grid, TextField, Paper, Typography, Button } from '@mui/material';

export default function NewPayment() {
  const location = useLocation();
  const { mobileNumber, amount } = location.state || {};

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    msisdn: mobileNumber || '',
    email: '',
    postalcode: '',
    address: '',
    locality: '',
    amount:  amount || '',
    invoicenumbe: '',
    invoicedescription: '',
    invoicereference: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://182.74.113.61/eway/payment_transparent.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <Grid
      container
      spacing={2}
      direction="column"
      alignItems="center"
      padding={2}
      style={{ minHeight: '100vh' }}
    >
      <Grid item xs={12} sm={8} md={6}>
        <Paper elevation={3} sx={{ padding: 4, width: '100%' }}>
          <Typography variant="h5" align="center" gutterBottom>
            Payment
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              {[
                { label: 'First Name', name: 'first_name' },
                { label: 'Last Name', name: 'last_name' },
                { label: 'Mobile Number', name: 'msisdn' },
                { label: 'Email', name: 'email' },
                { label: 'Postal Code', name: 'postalcode' },
                { label: 'Address', name: 'address' },
                { label: 'Locality', name: 'locality' },
                { label: 'Amount', name: 'amount' },
                { label: 'Invoice Number', name: 'invoicenumbe' },
                { label: 'Invoice Description', name: 'invoicedescription' },
                { label: 'Invoice Reference', name: 'invoicereference' },
              ].map((field, index) => (
                <Grid item xs={6} key={index}>
                  <TextField
                    fullWidth
                    label={field.label}
                    name={field.name}
                    variant="outlined"
                    value={formData[field.name]}
                    onChange={handleChange}
                  />
                </Grid>
              ))}
              <Grid item xs={12}>
                <Button type="submit" variant="contained" sx={{ backgroundColor: '#253A7D', width: '100%' }}>
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
}
