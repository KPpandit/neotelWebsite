import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Grid,
  Typography,
  Box,
  Button,
} from "@mui/material";
import axios from "axios";
import prepaid from "../../Images/prepaid.png";
import postpaid from "../../Images/postpaid.png";
import LogoMo from "../../Images/LogoMo.jpg";
import PlanDetailsModal from "../PrePaid/PlanDetailsModal";

export default function Recharge() {
  const [plans, setPlans] = useState([]);
  const [filter, setFilter] = useState("postpaid"); // State for filter, default to 'postpaid'
  const [imageSrc, setImageSrc] = useState(postpaid); // State for image source
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    async function fetchPlans() {
      try {
        const response = await axios.get(
          "http://172.5.10.2:9696/api/rating/profile/get/all"
        );
        setPlans(response.data);
      } catch (error) {
        console.error("Error fetching plans:", error);
      }
    }

    fetchPlans();
  }, []);

  useEffect(() => {
    // Update image source based on filter
    if (filter === "prepaid") {
      setImageSrc(prepaid);
    } else {
      setImageSrc(postpaid);
    }
  }, [filter]);

  const handleDetailsClick = (plan) => {
    setSelectedPlan(plan);
    setOpenModal(true);
  };

  const filteredPlans = plans.filter((plan) => plan.pack_for === filter);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
        paddingTop: 20,
      }}
    >
      {/* Image */}
      <Box sx={{ marginBottom: 3 }}>
        <img
          src={imageSrc}
          alt="Selected Plan"
          style={{ width: "100%", borderRadius: "20px" }}
        />
      </Box>
      {filter === "postpaid" ? (
        <>
          <Grid container spacing={2} padding={2}>
            <Grid item xs={12}>
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: "50px",
                  fontWeight: "1000",
                }}
              >
                Digital life full of delights
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography sx={{ textAlign: "center", fontSize: "35px" }}>
                Top-selling postpaid plans
              </Typography>
            </Grid>
          </Grid>
        </>
      ) : (
        <>
         <Grid container spacing={2} padding={2}>
            <Grid item xs={12}>
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: "50px",
                  fontWeight: "1000",
                }}
              >
               Refuel your digital life
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography sx={{ textAlign: "center", fontSize: "17px" }}>
              Choose a prepaid mobile plan that suits your unique digital aspirations.

              </Typography>
            </Grid>
          </Grid>
        
        </>
      )}

      {/* Buttons for Prepaid and Postpaid */}
      <Box sx={{ display: "flex", justifyContent: "center", marginBottom: 3 }}>
        <Button
          variant={filter === "prepaid" ? "contained" : "outlined"}
          color="primary"
          onClick={() => setFilter("prepaid")}
        
          
          sx={{ marginRight: 2 ,backgroundColor:filter=='prepaid' ?'#FBB716' :'#253A7D',color:filter=='prepaid' ?'black':'white'}}
        >
          Prepaid
        </Button>
        <Button
          variant={filter === "postpaid" ? "contained" : "outlined"}
          color="primary"
          onClick={() => setFilter("postpaid")}
          sx={{ backgroundColor:filter=='postpaid' ?'#FBB716' :'#253A7D',color:filter=='postpaid' ?'black':'white'}}
        >
          Postpaid
        </Button>
      </Box>

      {/* Plans Grid */}
      <Grid container spacing={3} justifyContent="center">
        {filteredPlans.map((plan) => (
          <Grid item key={plan.rating_profile_id} xs={12} sm={6} md={4} lg={3}>
            <Card
              elevation={10}
              sx={{
                margin: "8px",
                border: "4px solid #e0e0e0",
                backgroundColor: "#253A7D",
                width: "210",
                flex: "1 0 auto",
                height: "300px",
                borderRadius: "20px",
                paddingLeft: 2,
                paddingTop: 2,
              }}
            >
              <CardContent
                sx={{
                  backgroundColor: "#253A7D",
                  color: "White",
                  height: "150px",
                }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <Grid container spacing={2}>
                          <Grid item xs={12}>
                            <Typography sx={{fontSize:'28px'}}>
                              AU$ {plan.rates_offer.match(/\d+/)[0]}
                            </Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography
                              sx={{ font: "Bold", color: "yellow" }}
                              style={{ cursor: "pointer" }}
                              onClick={() => handleDetailsClick(plan)}
                            >
                              View Details...
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={6}>
                        <Grid container>
                          <Grid item>
                            <img src={LogoMo} alt="_blank" />
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={6} sx={{ marginTop: 2 }}>
                    <Grid container spacing={1}>
                      <Grid item xs={12}>
                        <Typography>Validity</Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography>
                          {plan.rates_offer.match(/(\d+)\s*days/)[0]}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={6} sx={{ marginTop: 2 }}>
                    <Grid container spacing={1}>
                      <Grid item xs={12}>
                        <Typography>Data</Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography>
                          {plan.data_balance} {plan.data_balance_parameter}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} sx={{ marginTop: 3 }}>
                    <Typography
                      style={{ fontSize: "15px", fontFamily: "Roboto" }}
                    >
                      Additional Benefits(s)
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <PlanDetailsModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        planDetails={selectedPlan}
      />
    </div>
  );
}
