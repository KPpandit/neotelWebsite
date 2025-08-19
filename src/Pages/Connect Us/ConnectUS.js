import {
  Box,
  Container,
  CssBaseline,
  Grid,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import React from "react";
import crouselBg1 from "../../Images/crouselBg1.jpg"; // Update this with the correct path to your image
import Neotel_Logo from "../../../src/Images/Neotel_Logo.png";
import img11 from "../../Images/img11.jpg";
import img12 from "../../Images/img12.jpg";
import img13 from "../../Images/img13.jpg";
import { useNavigate } from "react-router-dom";
import roamingbg from "../../Images/roamingbg.jpg";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ByEmail from "./ByEmail";
import CustomerServiceCenter from "./CustomerServiceCenter";
import ByPhone from "./ByPhone";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function ConnectUS() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const navigate = useNavigate();
  return (
    <Box sx={{ textAlign: "center", paddingBottom: 5 }}>
      <Box
        sx={{
          width: "100%",
          height: { xs: "300px", sm: "400px", md: "500px" }, // Responsive heights for different screen sizes
          marginBottom: 2,
          backgroundImage: `url(${roamingbg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            color: "white",
            padding: "8px",
          }}
        >
          <Typography variant="h6">
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
          </Typography>
        </Box>
      </Box>

      <Grid sx={{ backgroundColor: "#FFFFFF", paddingTop: 2 }}>
        <Container component="main" maxWidth="lg" sx={{ padding: 2 }}>
          <CssBaseline />

          <Box sx={{ flexGrow: 1, width: { lg: '65%', md: "100%", sm: '100%', xs: '100%' }, boxShadow: 3 }}>
            <Grid container spacing={3} paddingTop={0} paddingLeft={1} >
              <Grid item xs={12}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                  sx={{
                    '& .MuiTabs-indicator': {
                      backgroundColor: '#FAC22E',
                    },
                    '& .MuiTab-root': {
                      color: 'black',
                    },
                    '& .Mui-selected': {
                      color: '#FCB813',
                      fontWeight: 'bold',
                      boxShadow: 5
                    },
                  }}
                >
                  <Tab label="By Phone" {...a11yProps(0)} />
                  <Tab label="Store Locatore" {...a11yProps(1)} />
                  <Tab label="By Email or Post" {...a11yProps(2)} />
                </Tabs>
              </Grid>
              <Grid item xs={12}   >
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <TabPanel value={value} index={0}>
                      <ByPhone />
                    </TabPanel>
                  </Grid>
                  <Grid item xs={12}>
                    <TabPanel value={value} index={1}>
                      <CustomerServiceCenter />
                    </TabPanel>
                  </Grid>
                  <Grid item xs={12}>
                    <TabPanel value={value} index={2}>
                      <ByEmail />
                    </TabPanel>
                  </Grid>

                </Grid>



              </Grid>
            </Grid>
          </Box>
        </Container>
      </Grid>
    </Box>
  );
}
