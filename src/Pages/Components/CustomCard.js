// CustomCard.js
import React from "react";
import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";

const CustomCard = ({ image, title, description }) => (
  <Grid item xs={12} sm={6} md={4} lg={3}>
    <Card sx={{ padding: 2 }}>
      <CardMedia component="img" height="140" image={image} alt={title} />
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
    </Card>
  </Grid>
);

export default CustomCard;
