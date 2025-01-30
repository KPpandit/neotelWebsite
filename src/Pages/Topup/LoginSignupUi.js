import React, { useState } from 'react';
import {
  Box,
  Tabs,
  Tab,
  Button,
  Card,
  CardContent,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography
} from '@mui/material';
import { Facebook, Google } from '@mui/icons-material';

function LoginSignupUI() {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newIndex) => {
    setTabIndex(newIndex);
  };

  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', display: 'flex', justifyContent: 'flex-end' }}>
        <Tabs
          value={tabIndex}
          onChange={handleTabChange}
          aria-label="login signup tabs"
          TabIndicatorProps={{ sx: { backgroundColor: '#FCB813' } }}
        >
          <Tab
            label="Login"
            sx={{
              '&.Mui-selected': { color: '#FCB813' },
              color: '#233A7E',
            }}
          />
          <Tab
            label="Sign Up"
            sx={{
              '&.Mui-selected': { color: '#FCB813' },
              color: '#233A7E',
            }}
          />
        </Tabs>
      </Box>
      <TabPanel value={tabIndex} index={0}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Button
                variant="contained"
                color="primary"
                startIcon={<Facebook />}
                sx={{ marginBottom: 2, backgroundColor: '#3b5998' }}
              >
                Login with Facebook
              </Button>
              <Button
                variant="contained"
                color="secondary"
                startIcon={<Google />}
                sx={{ backgroundColor: '#db4437' }}
              >
                Login with Google
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Box
                  component="form"
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    '& .MuiTextField-root': { m: 1, width: '100%' },
                  }}
                >
                  <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                  />
                  <TextField
                    label="Password"
                    variant="outlined"
                    type="password"
                    fullWidth
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Remember my details"
                    sx={{ alignSelf: 'flex-start' }}
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ width: '100%', marginTop: 2 }}
                  >
                    Login
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={tabIndex} index={1}>
        <Typography>Sign Up content goes here...</Typography>
      </TabPanel>
    </Box>
  );
}

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
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

export default LoginSignupUI;
