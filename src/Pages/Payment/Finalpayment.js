import React, { useState } from 'react';
import PhoneNumberVerification from './PhoneNumberVerification';
import OtpVerification from './OtpVerification';
import PrepaidPlans from './PrepaidPlans';
import PaymentGateway from './PaymentGateway';
import { Typography } from '@mui/material';

const Finalpaymnet = () => {
  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [no,setNo]=useState('');
  return (
    <div style={{ padding: '20px', paddingTop: 50 }}>
     
      {/* Step 1: Phone Number Verification */}
      {step === 1 && (
        <PhoneNumberVerification
          onVerified={(number) => {
            setPhoneNumber(number);
            setStep(2);
          }}
        />
      )}

      {/* Step 2: OTP Verification */}
      {step === 2 && (
        <OtpVerification
          phoneNumber={phoneNumber}
          onOtpVerified={() => setStep(3)}
        />
      )}

      {/* Step 3 and 4: Always display plans and payment gateway */}
      <PrepaidPlans
      
        onPlanSelect={(plan) => {
          setSelectedPlan(plan);
          setStep(4);
        }}
        no={no}
        disabled={step < 3} // Disable plans until step 3
      />
      <PaymentGateway
        no={no}
        selectedPlan={selectedPlan}
        disabled={step < 4} // Disable payment gateway until step 4
      />
    </div>
  );
};

export default Finalpaymnet;