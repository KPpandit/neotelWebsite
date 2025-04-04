import React, { useState, useEffect } from 'react';
import PhoneNumberVerification from './PhoneNumberVerification';
import OtpVerification from './OtpVerification';
import PrepaidPlans from './PrepaidPlans';
import PostpaidPlans from './PostpaidPlans'; // New component for postpaid
import PaymentGateway from './PaymentGateway';
import { Typography } from '@mui/material';

const Finalpaymnet = () => {
  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [no, setNo] = useState('');
  const [customerType, setCustomerType] = useState(''); // 'prepaid' or 'postpaid'

  // Scroll to the top whenever the component mounts or updates
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div style={{ padding: '20px', paddingTop: 50 }}>
      {/* Step 1: Phone Number Verification */}
      {step === 1 && (
        <PhoneNumberVerification
          onVerified={(number, type) => {
            setPhoneNumber(number);
            setNo(number);
            setCustomerType(type);
            setStep(2); 
          }}
        />
      )}

     
      {customerType === 'prepaid' ? (
        <PrepaidPlans
          onPlanSelect={(plan) => {
            setSelectedPlan(plan);
            setStep(3); 
          }}
          no={no}
          disabled={step < 2}
        />
      ) : (
        <PostpaidPlans
          onPlanSelect={(plan) => {
            setSelectedPlan(plan);
            setStep(3); 
          }}
          no={no}
          disabled={step < 2}
        />
      )}

      {/* Step 3: Payment Gateway (common for both types) */}
      <PaymentGateway
        no={no}
        selectedPlan={selectedPlan}
        disabled={step < 3}
      />
    </div>
  );
};

export default Finalpaymnet;