import { Grid, Typography, Box, Radio, RadioGroup, FormControlLabel, Button, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import React, { useState } from 'react';

import icici from '../../Images/icici.png';
import sbi from '../../Images/sbi.webp';
import canara from '../../Images/canara.png';
import kotak from '../../Images/kotak.png';
import hdfc from '../../Images/hdfc.png';

export default function NetBanking() {
  const [selectedBank, setSelectedBank] = useState('');
  const [selectedOtherBank, setSelectedOtherBank] = useState('');

  const handleChange = (event) => {
    setSelectedBank(event.target.value);
  };

  const handleOtherBankChange = (event) => {
    setSelectedOtherBank(event.target.value);
    setSelectedBank(''); // Clear selected bank if choosing from dropdown
  };

  const bankIcons = [
    { name: 'ICICI', src: icici },
    { name: 'SBI', src: sbi },
    { name: 'Canara', src: canara },
    { name: 'Kotak', src: kotak },
    { name: 'HDFC', src: hdfc },
  ];

  const otherBanks = [
    'Bank of Baroda', 'Axis Bank', 'Punjab National Bank', 'Union Bank', 'Yes Bank'
  ];

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography sx={{ fontWeight: '1000', fontSize: '19px' }}>Net Banking</Typography>
      </Grid>
      <Grid item xs={12}>
        <RadioGroup value={selectedBank} onChange={handleChange}>
          <Grid container spacing={2}>
            {bankIcons.map((bank, index) => (
              <Grid item xs={6} key={index}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: 1,
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    marginBottom: 1,
                  }}
                >
                  <img src={bank.src} alt={bank.name} style={{ width: '40px', height: '40px', marginRight: '16px' }} />
                  <Typography sx={{ flexGrow: 1 }}>{bank.name}</Typography>
                  <FormControlLabel
                    value={bank.name}
                    control={<Radio />}
                    label=""
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </RadioGroup>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: 4,
        }}
      >
        <FormControl sx={{width:'70%'}}>
          <InputLabel id="select-other-bank-label">Select Other Bank</InputLabel>
          <Select
            labelId="select-other-bank-label"
            value={selectedOtherBank}
            label="Select Other Bank"
            onChange={handleOtherBankChange}
          >
            {otherBanks.map((bank, index) => (
              <MenuItem value={bank} key={index}>{bank}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: 4,
        }}
      >
        <Button
          variant="contained"
          fullWidth
          sx={{
            p: 2,
            borderRadius: "5px",
            backgroundColor: "#253A7D",
          }}
        >
          Pay
        </Button>
      </Grid>
    </Grid>
  );
}
