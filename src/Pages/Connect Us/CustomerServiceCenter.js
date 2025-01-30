import * as React from "react";
import { Box, Typography, Divider, Grid, List, ListItem, ListItemText } from "@mui/material";

export default function CustomerServiceCenter() {
  return (
    <Box sx={{ marginLeft: -0 }}>
      <Grid container spacing={1} alignItems="center">
        <Grid item lg={12} md={12} sm={12} xs={12} >
          <Typography variant="body1" sx={{ textAlign: "left" }}>
            Visit one of our customer service centres from 8:15am to 4:30pm,
            Monday to Friday.
          </Typography>
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Typography variant="body1" gutterBottom sx={{ textAlign: "left" }}>
            Cash payments are not accepted at our service centres.
          </Typography>
        </Grid>
        <Grid item lg={12} md={12}>
          <Typography variant="body1" gutterBottom sx={{ textAlign: "left" }}>
            Cash payments for rates and water notices can be made at any
            Commonwealth Bank branch (with no surcharge) and Australia Post
            locations (transaction fee applies) across Australia.
          </Typography>
        </Grid>
      </Grid>
      <Divider sx={{ marginY: 2 }} />

      <Box sx={{ padding: 3 }}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom sx={{ textAlign: "left" }}>
            Locations
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <List sx={{ paddingLeft: 2 }}>
            <ListItem sx={{ padding: 0 }}>
              <ListItemText
                primary="Line 1: 1234 Example Street"
                primaryTypographyProps={{ variant: "body1", sx: { textAlign: "left" } }}
              />
            </ListItem>
            <ListItem sx={{ padding: 0 }}>
              <ListItemText
                primary="Line 2: Suite 567"
                primaryTypographyProps={{ variant: "body1", sx: { textAlign: "left" } }}
              />
            </ListItem>
            <ListItem sx={{ padding: 0 }}>
              <ListItemText
                primary="City, State, ZIP Code"
                primaryTypographyProps={{ variant: "body1", sx: { textAlign: "left" } }}
              />
            </ListItem>
            <ListItem sx={{ padding: 0 }}>
              <ListItemText
                primary="Country"
                primaryTypographyProps={{ variant: "body1", sx: { textAlign: "left" } }}
              />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Box>
    </Box>
  );
}
