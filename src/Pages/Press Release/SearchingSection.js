import React from "react";
import { Grid, Box, Typography, InputBase, IconButton, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchingSection() {
  return (
    <Grid container spacing={2} sx={{padding:2}}>
       
      {/* Search Section */}
      <Grid item xs={12}>
        <Typography
          
          sx={{
            fontWeight: "bold",
            marginBottom: 0.5,
            textAlign: "left",
          }}
        >
          Search
        </Typography>
        <Box
          sx={{
            height: "3px",
            backgroundColor: "red",
            width: "50px",
            marginBottom: 2,
          }}
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginBottom: 4,
            border: "1px solid #ccc",
            borderRadius: "4px",
            overflow: "hidden",
          }}
        >
          <InputBase
            placeholder="Search..."
            sx={{
              flex: 1,
              padding: "8px",
              fontSize: "14px",
            }}
          />
          <IconButton
            type="button"
            sx={{
              padding: "8px",
              backgroundColor: "white",
              color: "black",
              "&:hover": {
                backgroundColor: "#303f9f",
              },
            }}
          >
            <SearchIcon />
          </IconButton>
        </Box>
      </Grid>

      {/* Category Section */}
      <Grid item xs={12}>
        <Typography
         
          sx={{
            fontWeight: "bold",
            marginBottom: 0.5,
            textAlign: "left",
          }}
        >
          Category
        </Typography>
        <Box
          sx={{
            height: "3px",
            backgroundColor: "red",
            width: "50px",
            marginBottom: 2,
          }}
        />
        <Box>
          {["Networking", "Technology", "Entertainment", "Business", "Health"].map(
            (category, index) => (
              <Typography
                key={index}
                sx={{
                  padding: "8px 0",
                  textAlign: "left",
                  color: "grey",
                  cursor: "pointer",
                  "&:hover": { color: "#3f51b5" },
                }}
              >
                {category}
              </Typography>
            )
          )}
        </Box>
      </Grid>
    </Grid>
  );
}
