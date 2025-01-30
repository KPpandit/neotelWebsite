import React from "react";
import { Grid, TextField, Button } from "@mui/material";

export default function PostpaidComponent() {
  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid item xs={12} md={4}>
        <TextField   InputProps={{
            sx: { height: '56px' }, // Ensure the height matches the button
          }} fullWidth label="Enter Account Number" variant="outlined" />
      </Grid>
      <Grid item xs={12} md={4}>
        <TextField   InputProps={{
            sx: { height: '56px' }, // Ensure the height matches the button
          }} fullWidth label="Enter Amount" variant="outlined" />
      </Grid>
      <Grid item xs={12} md={4}>
        <Button  sx={{
            height: '56px', // Ensure the height matches the text field
            borderRadius: '28px', // Rounded button
            backgroundColor:'#233A7E'
          }}
           variant="contained" color="primary" fullWidth>
          Pay Bill
        </Button>
      </Grid>
    </Grid>
  );
}
