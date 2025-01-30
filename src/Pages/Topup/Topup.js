import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Step,
  StepLabel,
  Stepper,
  Typography,
  ThemeProvider,
  createTheme
} from '@mui/material';
import EnterOrderDetail from './EnterOrderDetail';
import PaymentDetails from './PaymentDetails';
import PayAndCheckOut from './PayAndCheckOut';
import PaymentForm from './PaymentForm';

const steps = [
  'Enter Order Details',
  'Payment Details',
  'Pay and Check Out',
  'Payment Form'
];

const StepContent = ({ step, orderDetails, handleOrderDetailsChange, selectedPaymentMethod, setSelectedPaymentMethod, addToCart, data }) => {
  switch (step) {
    case 0:
      return (
        <Box>
          <EnterOrderDetail orderDetails={orderDetails} handleOrderDetailsChange={handleOrderDetailsChange} data={data} />
        </Box>
      );
    case 1:
      return (
        <Box>
          <PaymentDetails orderDetails={orderDetails} />
        </Box>
      );
    case 2:
      return (
        <Box>
          <PayAndCheckOut
            orderDetails={orderDetails}
            selectedPaymentMethod={selectedPaymentMethod}
            setSelectedPaymentMethod={setSelectedPaymentMethod}
            addToCart={addToCart}
          />
        </Box>
      );
    case 3:
      return (
        <Box>
          <PaymentForm selectedPaymentMethod={selectedPaymentMethod} orderDetails={orderDetails} />
        </Box>
      );
    default:
      return null;
  }
};

const theme = createTheme({
  components: {
    MuiStepIcon: {
      styleOverrides: {
        root: {
          '&.Mui-completed': {
            color: '#233A7E', // Change this to your desired color
          },
          '&.Mui-active': {
            color: '#FCB813', // Change this to your desired color
          },
        },
      },
    },
  },
});

export default function Topup() {
  const [activeStep, setActiveStep] = useState(0);
  const [orderDetails, setOrderDetails] = useState({
    selectedPlan: null,
    phoneNumber: '',
    ratesOffer: '',
    data: ''
  });
  const [data, setData] = useState('');
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [cart, setCart] = useState([]);

  const handleOrderDetailsChange = (details) => {
    setOrderDetails(details);
  };

  const handleNext = () => {
    if (orderDetails.phoneNumber && orderDetails.selectedPlan) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const isNextDisabled = activeStep === 0 && (!orderDetails.phoneNumber || !orderDetails.selectedPlan);

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="lg">
        <Box sx={{ marginTop: 4, textAlign: 'center', paddingBottom: 2 }}>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <Box sx={{ marginTop: 2 }}>
            <StepContent
              step={activeStep}
              orderDetails={orderDetails}
              handleOrderDetailsChange={handleOrderDetailsChange}
              selectedPaymentMethod={selectedPaymentMethod}
              setSelectedPaymentMethod={setSelectedPaymentMethod}
              addToCart={addToCart}
              data={data}
            />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ color: '#233A7E' }}
              >
                Back
              </Button>
              {activeStep !== steps.length - 1 && ( // Conditionally render the Next button
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                  sx={{ backgroundColor: '#233A7E', width: '150px' }}
                  disabled={isNextDisabled}
                >
                  {activeStep === steps.length - 1 ? 'Pay' : 'Next'}
                </Button>
              )}
            </Box>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
