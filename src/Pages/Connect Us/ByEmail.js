import * as React from 'react';
import { Box, Typography, Divider, Grid } from '@mui/material';

export default function ByEmail() {
  return (
    <Box sx={{ marginLeft:-0}}>
      <Grid container spacing={1} alignItems="center">
        <Grid item lg={2} md={1} sm={12} xs={12}>
          <Typography variant="h6" sx={{ textAlign: 'left' }}>
            Note:
          </Typography>
        </Grid>
        <Grid item xs={10} md={11}>
          <Typography variant="body1" gutterBottom sx={{ textAlign: 'left',paddingTop:1 }}>
            If you have any questions or concerns, feel free to reach out to us via email or post.
          </Typography>
        </Grid>
      </Grid>
      <Divider sx={{ marginY: 2 }} />

      <Typography variant="h6" gutterBottom sx={{ textAlign: 'left' }}>
        By Email:
      </Typography>
      <Typography variant="body1" gutterBottom sx={{ textAlign: 'left' }}>
        example@example.com
      </Typography>
      <Divider sx={{ marginY: 2 }} />

      <Typography variant="h6" gutterBottom sx={{ textAlign: 'left' }}>
        By Post:
      </Typography>
      <Typography variant="body1" gutterBottom sx={{ textAlign: 'left' }}>
        Line 1: 1234 Example Street
      </Typography>
      <Typography variant="body1" gutterBottom sx={{ textAlign: 'left' }}>
        Line 2: Suite 567
      </Typography>
      <Typography variant="body1" gutterBottom sx={{ textAlign: 'left' }}>
        City, State, ZIP Code
      </Typography>
      <Typography variant="body1" gutterBottom sx={{ textAlign: 'left' }}>
        Country
      </Typography>
    </Box>
  );
}
