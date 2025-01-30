import { Grid, Radio, TextField, Button } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function NeoTelFiber() {
    const [selectedOption, setSelectedOption] = useState('Option 1');
    const [fiberNumber, setFiberNumber] = useState('');
    const [amount, setAmount] = useState('');
    const navigate = useNavigate();

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleFiberNumberChange = (event) => {
        setFiberNumber(event.target.value);
    };

    const handleAmountChange = (event) => {
        setAmount(event.target.value);
    };

    const handlePayClick = () => {
        if (selectedOption === 'Option 1') {
            navigate(`/broadbandplan`, {
                state: { mobileNumber: fiberNumber},
              });
        } else if (selectedOption === 'Option 2') {
            navigate(`/finalPayment`, {
                state: { mobileNumber: fiberNumber, amount: amount},
              });
        }
    };

    const handleBillSummaryClick = () => {
        // Handle Bill Summary button click
        // For now, just logging the details to the console
        console.log(`Bill Summary clicked with number: ${fiberNumber}`);
    };

    return (
        <Grid container direction="column" spacing={2}>
            <Grid item container spacing={2} alignItems="center">
                <Grid item>
                    <Radio
                        checked={selectedOption === 'Option 1'}
                        onChange={handleOptionChange}
                        value="Option 1"
                        name="paymentOption"
                    />
                </Grid>
                <Grid item>
                    <label>Recharge</label>
                </Grid>
                <Grid item>
                    <Radio
                        checked={selectedOption === 'Option 2'}
                        onChange={handleOptionChange}
                        value="Option 2"
                        name="paymentOption"
                    />
                </Grid>
                <Grid item>
                    <label>Pay Bill</label>
                </Grid>
            </Grid>
            {selectedOption === 'Option 1' && (
                <Grid item container alignItems="center" spacing={2}>
                    <Grid item xs={8}>
                        <TextField
                            fullWidth
                            label="Enter Your Neotel Broadband Number"
                            variant="outlined"
                            value={fiberNumber}
                            onChange={handleFiberNumberChange}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Button
                            variant="contained"
                            sx={{ backgroundColor: '#253A7A', width: '50%', padding: 1.9 }}
                            onClick={handlePayClick}
                        >
                            Pay
                        </Button>
                    </Grid>
                </Grid>
            )}
            {selectedOption === 'Option 2' && (
                <Grid item container direction="column" spacing={1}>
                    <Grid item container alignItems="center" spacing={3}>
                        <Grid item xs={4}>
                            <TextField
                                fullWidth
                                label="Enter Your Neotel Broadband Number"
                                variant="outlined"
                                value={fiberNumber}
                                onChange={handleFiberNumberChange}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                fullWidth
                                label="Enter Amount"
                                variant="outlined"
                                value={amount}
                                onChange={handleAmountChange}
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <Button
                                variant="contained"
                                sx={{ backgroundColor: '#253A7A', width: '100%', padding: 1.9 }}
                                onClick={handlePayClick}
                            >
                                Pay Bill
                            </Button>
                        </Grid>
                        <Grid item xs={2}>
                            <Button
                                variant="contained"
                                sx={{ backgroundColor: '#253A7A', width: '100%', padding: 1.9 }}
                                onClick={handleBillSummaryClick}
                            >
                                Bill Summary
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            )}
        </Grid>
    );
}
