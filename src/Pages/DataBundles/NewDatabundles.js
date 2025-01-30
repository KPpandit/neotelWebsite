import React from "react";
import { Grid, Box, Typography, Button } from "@mui/material";

import Neotel_Logo from "../../Images/Neotel_Logo.png";
import crouselBg1 from "../../Images/crouselBg1.jpg";
import crouselBg2 from "../../Images/crouselBg2.jpg";
import crouselBg3 from "../../Images/crouselBg3.jpg";
import { useNavigate } from "react-router-dom";
import PrepaidComponent from "../PrePaid/PrepaidComponent";
import PostpaidComponent from "../PrePaid/PostpaidComponent";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function NewDatabundles() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  return (
    <>
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <div
              style={{
                position: "absolute",
                top: 10,
                left: 10,
                zIndex: 10,
              }}
            >
              <img
                src={Neotel_Logo}
                alt="logo"
                style={{
                  width: "12%", // Adjust the size as needed
                  height: "10%",
                  margin: "20px", // Adjust the margin as needed
                  cursor: "pointer",
                }}
                onClick={() => navigate("/")}
              />
            </div>
            <img
              src={crouselBg1}
              className="d-block w-100"
              alt="..."
              style={{ objectFit: "fill" }}
            />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <div
              style={{
                position: "absolute",
                top: 10,
                left: 10,
                zIndex: 10,
              }}
            >
              <img
                src={Neotel_Logo}
                alt="logo"
                style={{
                  width: "12%", // Adjust the size as needed
                  height: "10%",
                  margin: "20px", // Adjust the margin as needed
                  cursor: "pointer",
                }}
                onClick={() => navigate("/")}
              />
            </div>
            <img
              src={crouselBg2}
              className="d-block w-100"
              alt="..."
              style={{ objectFit: "fill" }}
            />
          </div>
          <div className="carousel-item">
            <div
              style={{
                position: "absolute",
                top: 10,
                left: 10,
                zIndex: 10,
              }}
            >
              <img
                src={Neotel_Logo}
                alt="logo"
                style={{
                  width: "12%", // Adjust the size as needed
                  height: "10%",
                  margin: "20px", // Adjust the margin as needed
                  cursor: "pointer",
                }}
                onClick={() => navigate("/")}
              />
            </div>
            <img
              src={crouselBg3}
              className="d-block w-100"
              alt="..."
              style={{ objectFit: "fill" }}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12} sx={{ padding: 2 }}>
          <Typography
            variant="h4"
            sx={{ textAlign: "center", fontWeight: "500" }}
          >
            Get set, connect
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ boxShadow: 20, margin: 2, borderRadius: 5 }}
        >
          <Box display="flex" justifyContent="center"  p={2} sx={{backgroundColor:'#233A7E',borderRadius:5}}>
            <Button
              variant="contained"
              onClick={() => setValue(0)}
              sx={{
                backgroundColor: value === 0 ? "#FCB813" : "#233A7E",
                color: value === 0 ? "black" : "white",
               
                marginRight: 2,
                
              }}
            >
              Prepaid
            </Button>
            <Button
              variant="contained"
              onClick={() => setValue(1)}
              sx={{
                backgroundColor: value === 1 ? "#FCB813" : "#233A7E",
                color: value === 1 ? "black" : "white",
               
              }}
            >
              Postpaid
            </Button>
          </Box>

          <TabPanel value={value} index={0}>
            <PrepaidComponent />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <PostpaidComponent />
          </TabPanel>
        </Grid>
      </Grid>
    </>
  );
}
