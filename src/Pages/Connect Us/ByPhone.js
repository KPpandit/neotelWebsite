import * as React from "react";
import { Box, Typography, Divider, Grid } from "@mui/material";

export default function ByPhone() {
  return (
    <Box sx={{ marginLeft: -0 }}>
      <Grid container spacing={1} alignItems="center">
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Typography  sx={{ textAlign: "left",fontWeight:'500',fontSize:'18px' }}>
          1300 neotel (78 XXXXXXXXX) or 78 XXXXXXXXX
          </Typography>
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Typography variant="body1" gutterBottom sx={{ textAlign: "left" }}>
          From outside Nauru, phone +678 XXXXXXXXX.
          </Typography>
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Typography variant="body1" gutterBottom sx={{ textAlign: "left" }}>
          From 8am to 5pm, Monday to Friday (excluding Gold Coast public holidays), we are available to direct your call to the relevant area.
          </Typography>
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Typography  sx={{ textAlign: "left",fontWeight:'500',fontSize:'16px' }}>
          For your convenience, we have extended availability from _ to _ Monday to Friday for:
          </Typography>
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Typography  sx={{ textAlign: "left",fontSize:'22px' }}>
          Rates and bill enquiries
          </Typography>
        </Grid>
        <Grid item xs={10} md={12}>
          <Typography variant="body1" gutterBottom sx={{ textAlign: "left" }}>
          Phone: 07 XXXXXXXX or 1300 XXX XXX
          </Typography>
        </Grid>
        <Grid itemlg={12} md={12} sm={12} xs={12} sx={{paddingLeft:1}}>
          <Typography  sx={{ textAlign: "left",fontSize:'20px' }}>
          Urgent enquiries and emergencies
          </Typography>
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Typography variant="body1" gutterBottom sx={{ textAlign: "left" }}>
          At all times (including after hours), call us on 1300 GOLDCOAST (1300 465 326) and choose option '1' to be diverted to our Emergency Service number.
          </Typography>
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Typography  sx={{ textAlign: "left",fontSize:'20px' }}>
          Specific phone numbers
          </Typography>
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Typography variant="body1" gutterBottom sx={{ textAlign: "left" }}>
          For a detailed list of phone numbers for specific branches, facilities and services, as well as location maps, visit our online White Pages listing.
          </Typography>
        </Grid>
      </Grid>
      <Divider sx={{ marginY: 2 }} />

    
    </Box>
  );
}
