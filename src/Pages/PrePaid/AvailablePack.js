import React, { useState, useEffect, useRef } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Button, Grid, Stack, styled } from "@mui/material";
import PlanDetailsModal from "./PlanDetailsModal";
import LogoMo from "../../Images/LogoMo.jpg";
import { useLocation, useNavigate } from "react-router-dom";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
export default function Availablepack() {
  const location = useLocation();
  const { mobileNumber } = location.state || { mobileNumber: "9898" };
  
  const [tabList, setTabList] = useState([]);
  const [tabData, setTabData] = useState({});
  const [selectedCategory, setSelectedCategory] = useState(null);
  const tabContentsRef = useRef([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://172.5.10.2:9696/api/rating/profile/get/all")
      .then((response) => response.json())
      .then((data) => {
        const uniqueTabList = [
          ...new Set(data.map((item) => item.category_name)),
        ];
        setTabList(uniqueTabList);
        setTabData(
          data.reduce((acc, item) => {
            acc[item.category_name] = acc[item.category_name] || [];
            acc[item.category_name].push(item);
            return acc;
          }, {})
        );
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleDetailsClick = (plan) => {
    setSelectedPlan(plan);
    setOpenModal(true);
  };
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: "#233A81",
    elevation: 20,
  }));
  return (
    <Box sx={{ padding: 1, width: "100%", height: "100%" }}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Box sx={{ width: "100%" }}>
            <Stack spacing={2} sx={{ boxShadow: 20 }}>
              <Item>
                <Grid container alignItems="center">
                  <Grid item xs={4}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <PhoneAndroidIcon sx={{ marginRight: 1 }} />
                      <Typography
                        sx={{
                          fontStyle: "Bold",
                          fontWeight: "1000",
                          fontFamily: "Bold",
                          fontSize: "20px",
                        }}
                      >
                        Recharging For {mobileNumber}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography
                      sx={{
                        textAlign: "center",
                        fontStyle: "Bold",
                        fontWeight: "1000",
                        fontFamily: "Bold",
                        fontSize: "20px",
                      }}
                    >
                      All Avaialble Plans
                    </Typography>
                  </Grid>
                  <Grid item xs={4} sx={{ textAlign: "right" }}>
                    <Button
                      variant="text"
                      sx={{
                        textTransform: "none",
                        fontStyle: "Bold",
                        fontWeight: "1000",
                        fontFamily: "Bold",
                        fontSize: "20px",
                      }}
                    >
                      Change Number
                    </Button>
                  </Grid>
                </Grid>
              </Item>
            </Stack>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Box
              sx={{ flex: 1, borderRight: "1px solid #ddd", paddingRight: 2 }}
            >
              <Paper>
                <Tabs
                  orientation="vertical"
                  value={selectedCategory}
                  onChange={(e, newValue) => handleCategoryClick(newValue)}
                  style={{ height: "100%" }}
                  sx={{
                    "& .MuiTab-root": {
                      "&:hover": {
                        backgroundColor: "#FBB716",
                      },
                    },
                    "& .Mui-selected": {
                      color: "white !important",
                      backgroundColor: "#92a6e1",
                    },
                  }}
                >
                  {tabList.map((category, index) => (
                    <Tab
                      key={index}
                      value={category}
                      label={category}
                      sx={{ height: "100%" }}
                    />
                  ))}
                </Tabs>
              </Paper>
            </Box>
            <Box sx={{ flex: 3, paddingLeft: 2 }}>
              <Box ref={tabContentsRef}>
                {selectedCategory && tabData[selectedCategory] && (
                  <Grid container spacing={2}>
                    {tabData[selectedCategory].map((plan, index) => (
                      <Grid item key={index} xs={12} sm={12} md={12}>
                        <Card
                          elevation={20}
                          sx={{ backgroundColor: "#233A81", color: "white" }}
                        >
                          <CardContent>
                            <Grid container spacing={1}>
                              <Grid item xs={10}>
                                <Grid container spacing={2}>
                                  <Grid item xs={11}>
                                    <Typography>{plan.pack_name}</Typography>
                                  </Grid>
                                  <Grid item xs={6}>
                                    <Typography variant="h6">
                                      Price :{" "}
                                      {parseInt(
                                        plan.rates_offer.match(/\d+/)?.[0] || 0
                                      )}{" "}
                                      A$
                                    </Typography>
                                  </Grid>
                                  <Grid item xs={6}>
                                    <Typography>
                                      Validity :{" "}
                                      {parseInt(
                                        plan.rates_offer
                                          .match(/\d+\s*days/)?.[0]
                                          ?.match(/\d+/)?.[0] || 0
                                      )}
                                    </Typography>
                                  </Grid>
                                  {plan.call_balance !== 0 && (
                                    <Grid item xs={6}>
                                      <Typography>
                                        Voice : {plan.call_balance}
                                      </Typography>
                                    </Grid>
                                  )}
                                  {plan.sms_balance !== 0 && (
                                    <Grid item xs={6}>
                                      <Typography>
                                        SMS : {plan.sms_balance}
                                      </Typography>
                                    </Grid>
                                  )}
                                  {plan.data_balance !== 0 && (
                                    <Grid item xs={6}>
                                      <Typography>
                                        Data : {plan.data_balance}{" "}
                                        {plan.data_balance_parameter}
                                      </Typography>
                                    </Grid>
                                  )}
                                  <Grid item xs={6}>
                                    <Typography
                                      sx={{
                                        color: "#FBB716",
                                        cursor: "pointer",
                                      }}
                                      onClick={() => handleDetailsClick(plan)}
                                    >
                                      View Details
                                    </Typography>
                                  </Grid>
                                </Grid>
                              </Grid>
                              <Grid item xs={2}>
                                <Grid
                                  container
                                  direction="column"
                                  alignItems="center"
                                  spacing={6.5}
                                >
                                  <Grid item>
                                    <img src={LogoMo} alt="_blank" />
                                  </Grid>
                                  <Grid item>
                                    <Button
                                      variant="contained"
                                      sx={{
                                        backgroundColor: "#FBB716",
                                        color: "black",
                                      }}
                                      onClick={()=>{
                                        navigate(`/newPayment`, {
                                          state: { mobileNumber: mobileNumber,amount: plan.rates_offer.match(/\d+/)?.[0] || 0 },
                                        })
                                      }}
                                    >
                                      Pay Now
                                    </Button>
                                  </Grid>
                                </Grid>
                              </Grid>
                            </Grid>
                          </CardContent>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                )}
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>

      <PlanDetailsModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        planDetails={selectedPlan}
      />
    </Box>
  );
}
