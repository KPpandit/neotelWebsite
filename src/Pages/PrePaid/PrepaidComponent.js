import React, { useState } from "react";
import { Grid, TextField, Button } from "@mui/material";

export default function PrepaidComponent() {
  const [number, setNumber] = useState("+678");

  const handleChange = (event) => {
    const inputValue = event.target.value;
    // Ensure the value starts with +678
    if (inputValue.startsWith("+678")) {
      setNumber(inputValue);
    }
  };

  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid item xs={8} md={8}>
        <TextField
          fullWidth
          label="Number"
          variant="outlined"
          value={number}
          onChange={handleChange}
          InputProps={{
            sx: { height: '56px' }, // Ensure the height matches the button
          }}
        />
      </Grid>
      <Grid item xs={4} md={4}>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{
            height: '56px', // Ensure the height matches the text field
            borderRadius: '28px', // Rounded button
            backgroundColor:'#233A7E'
          }}
        >
          Proceed
        </Button>
      </Grid>
    </Grid>
  );
}
