import React, { useState, useEffect } from 'react';
import PhoneNumberVerification from './PhoneNumberVerification';
import OtpVerification from './OtpVerification';
import PrepaidPlans from './PrepaidPlans';
import PaymentGateway from './PaymentGateway';
import { Typography } from '@mui/material';

const Finalpaymnet = () => {
  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [no, setNo] = useState('');

  // Scroll to the top whenever the component mounts or updates
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to the top
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div style={{ padding: '20px', paddingTop: 50 }}>
      {/* Step 1: Phone Number Verification */}
      {step === 1 && (
        <PhoneNumberVerification
          onVerified={(number) => {
            setPhoneNumber(number);
            setNo(number); // Update the `no` state with the verified number
            setStep(2); // Move to the next step
          }}
        />
      )}

      {/* Step 2: Prepaid Plans */}
      <PrepaidPlans
        onPlanSelect={(plan) => {
          setSelectedPlan(plan);
          setStep(3); // Move to the next step after selecting a plan
        }}
        no={no}
        disabled={step < 2} // Disable if step is less than 2
      />

      {/* Step 3: Payment Gateway */}
      <PaymentGateway
        no={no}
        selectedPlan={selectedPlan}
        disabled={step < 3} // Disable if step is less than 3
      />
    </div>
  );
};

export default Finalpaymnet;