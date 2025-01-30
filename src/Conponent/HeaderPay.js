import React from 'react';
import { AppBar, Toolbar, Typography, Badge, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function HeaderPay({ cart }) {
  const planID = localStorage.getItem("planID");
  const rates = localStorage.getItem("rates");
  const number = localStorage.getItem("number");

  const shouldShowCartIcon = planID && rates && number;
  const badgeContent = shouldShowCartIcon ? 1 : 0;

  return (
    <AppBar position="static" sx={{ backgroundColor: '#233A7E' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Recharge
        </Typography>
        {shouldShowCartIcon && (
          <IconButton color="inherit" >
            <Badge badgeContent={badgeContent} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        )}
      </Toolbar>
    </AppBar>
  );
}
