import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Grid,
  Typography,
  Box,
  CardMedia,
  CardActions,
  Button,
} from "@mui/material";
import axios from "axios";
import Deviceimg from "../../Images/Deviceimg.png";
import img12 from "../../Images/img12.jpg";
import device1 from "../../Images/device1.jpg";
import device2 from "../../Images/device2.jpg";
import device3 from "../../Images/device3.jpg";
import { useNavigate } from "react-router-dom";
export default function Device() {
  const [plans, setPlans] = useState([]);
  const navigate=useNavigate();

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

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Grid container spacing={3} style={{ width: "80%", margin: "0 auto" }}>
        <Grid item xs={12}>
          <Box style={{ padding: "0 50px", borderRadius: "20px" }}>
            <img
              src={Deviceimg}
              alt="Image"
              style={{ width: "100%", height: "auto", borderRadius: "20px" }}
            />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Typography
            sx={{ fontSize: "50px", fontWeight: "1000", textAlign: "center" }}
          >
           Launched and it’s here!
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            sx={{ fontSize: "18px", color: "#595959", textAlign: "center" }}
          >
           One-stop for all things latest.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2} padding={2}>
          <Grid item xs={4}>
          <Card sx={{ maxWidth: 345, boxShadow: 20,borderRadius:'15px' }}>
            <CardMedia
              sx={{ height: 250 }}
              image={device1}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              Neotel Prima
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Enjoy buffer-free 1 Gbps internet speed at every corner of your
                home. With Free HD Voice, you can make crystal-clear voice calls
                to anyone across India.
              </Typography>
            </CardContent>
            <CardActions sx={{padding:2}}>
              <Button
                size="small"
                sx={{
                  backgroundColor: "#253A7D",
                  color: "white",
                  fontSize: "12px",
                  padding: 1.2,
                  "&:hover": {
                    backgroundColor: "#FBB716",
                    color: "black",
                  },
                }}
                onClick={()=>navigate('/buyProduct')}
              >
                Buy Now
              </Button>
              <Button
                size="small"
                sx={{
                  backgroundColor: "#253A7D",
                  color: "white",
                  fontSize: "12px",
                  padding: 1.2,
                  "&:hover": {
                    backgroundColor: "#FBB716",
                    color: "black",
                  },
                }}
              >
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ maxWidth: 345, boxShadow: 20 ,borderRadius:'15px'}}>
            <CardMedia
              sx={{ height: 250 }}
              image={device2}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              Neotel New
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Enjoy buffer-free 1 Gbps internet speed at every corner of your
                home. With Free HD Voice, you can make crystal-clear voice calls
                to anyone across India.
              </Typography>
            </CardContent>
            <CardActions sx={{padding:2}}>
              <Button
                size="small"
                sx={{
                  backgroundColor: "#253A7D",
                  color: "white",
                  fontSize: "12px",
                  padding: 1.2,
                  "&:hover": {
                    backgroundColor: "#FBB716",
                    color: "black",
                  },
                }}
              >
                Buy Now
              </Button>
              <Button
                size="small"
                sx={{
                  backgroundColor: "#253A7D",
                  color: "white",
                  fontSize: "12px",
                  padding: 1.2,
                  "&:hover": {
                    backgroundColor: "#FBB716",
                    color: "black",
                  },
                }}
              >
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ maxWidth: 345, boxShadow: 20 ,borderRadius:'15px'}}>
            <CardMedia
              sx={{ height: 250 }}
              image={device3}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              Neotel Motive
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Enjoy buffer-free 1 Gbps internet speed at every corner of your
                home. With Free HD Voice, you can make crystal-clear voice calls
                to anyone across India.
              </Typography>
            </CardContent>
            <CardActions sx={{padding:2}}>

              <Button
                size="small"
                sx={{
                  backgroundColor: "#253A7D",
                  color: "white",
                  fontSize: "12px",
                  padding: 1.2,
                  "&:hover": {
                    backgroundColor: "#FBB716",
                    color: "black",
                  },
                }}
              >
                Buy Now
              </Button>
              <Button
                size="small"
                sx={{
                  backgroundColor: "#253A7D",
                  color: "white",
                  fontSize: "12px",
                  padding: 1.2,
                  "&:hover": {
                    backgroundColor: "#FBB716",
                    color: "black",
                  },
                }}
              >
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>


          </Grid>
        </Grid>

       

        {/* {plans.map((plan) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={plan.rating_profile_id}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image={img12}
                title="green iguana"
              />
              <CardContent>
                <Typography variant="h6" component="h2">
                  {plan.pack_name}
                </Typography>
                <Typography variant="body1">
                  Pack Type: {plan.pack_type}
                </Typography>
                <Typography variant="body1">
                  Pack For: {plan.pack_for}
                </Typography>
                <Typography variant="body1">
                  Call Balance: {plan.call_balance}{" "}
                  {plan.call_balance_parameter}
                </Typography>
                <Typography variant="body1">
                  SMS Balance: {plan.sms_balance}
                </Typography>
                <Typography variant="body1">
                  Data Balance: {plan.data_balance}{" "}
                  {plan.data_balance_parameter}
                </Typography>
                <Typography variant="body1">
                  Rates & Offer: {plan.rates_offer}
                </Typography>
                <Typography variant="body1">
                  Pack Validity: {plan.pack_validity}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  sx={{
                    backgroundColor: "#253A7D",
                    color: "white",
                    fontSize: "12px",
                    padding: 1.2,
                    "&:hover": {
                      backgroundColor: "#FBB716",
                      color: "black",
                    },
                  }}
                >
                  Buy Now
                </Button>
                <Button
                  size="small"
                  sx={{
                    backgroundColor: "#253A7D",
                    color: "white",
                    fontSize: "12px",
                    padding: 1.2,
                    "&:hover": {
                      backgroundColor: "#FBB716",
                      color: "black",
                    },
                  }}
                >
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))} */}
      </Grid>
    </div>
  );
}
