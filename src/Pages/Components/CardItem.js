// CardItem.js
import React from "react";
import { Grid, Card, CardContent, Typography, Icon } from "@mui/material";

const CardItem = ({ icon, title, description, onClick }) => (
  <Grid item xs={12} sm={6} md={4} lg={3}>
    <Card onClick={onClick} sx={{ cursor: "pointer", padding: 2 }}>
      <CardContent>
        <Icon>{icon}</Icon>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
    </Card>
  </Grid>
);

export default CardItem;
