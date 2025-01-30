import { Box, Button, Container, Grid, TextField, Typography } from "@mui/material";
import React from "react";
export default function CreditOrDebitCard() {
  return (
    <Grid container spacing={3} padding={2} >
      <Grid item xs={12}>
        <Typography sx={{ fontWeight: "1000" }}>credit/debit cards</Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField label=" Enter Card Number" fullWidth />
      </Grid>
      <Grid item xs={12}>
        <TextField label="Card Holder Name" fullWidth />
      </Grid>
      <Grid item xs={6}>
        <TextField label="YY" fullWidth />
      </Grid>
      <Grid item xs={6}>
        <TextField label="MM" fullWidth />
      </Grid>
      <Grid item xs={6}>
        <TextField label="cvv" fullWidth />
      </Grid>
      <Grid
      item
      xs={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          marginTop: 4,
        }}
      >
        <Button
          variant="contained"
          fullWidth
          sx={{
            p: 2,
            borderRadius: "20px",
            backgroundColor: "#253A7D",
          }}
        >
           Pay
        </Button>
      </Grid>
    </Grid>
  );
}
