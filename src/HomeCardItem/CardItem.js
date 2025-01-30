import { Grid, Typography } from '@mui/material'
import React from 'react'
import Chip from "@mui/material/Chip";
import AssignmentIcon from "@mui/icons-material/Assignment";
import SimCardOutlinedIcon from "@mui/icons-material/SimCardOutlined";

export default function CardItem ({ icon: Icon, title, description })  
   {
    return <Grid
    item
    xs={4}
    sx={{
      marginBottom: 2,
      padding: 2,
      "&:hover": {
        boxShadow: 3,
        cursor: "pointer",
        "& .icon": {
          color: "yellow",
        },
        "& .title": {
          color: "blue",
        },
      },
    }}
  >
    <Grid container alignItems="center">
      <Grid item xs={2}>
        <Icon className="icon" sx={{ fontSize: "50px", color: "#253A7A" }} />
      </Grid>
      <Grid item xs={10}>
        <Grid container>
          <Grid item xs={12}>
            <Typography className="title" sx={{ fontSize: "22px" }}>
              {title}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2">{description}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Grid>

   }
  