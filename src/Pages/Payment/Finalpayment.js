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
  const [subscriberType, setSubscriberType] = useState('');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div style={{ padding: '20px', paddingTop: 50 }}>
      {step === 1 && (
        <PhoneNumberVerification
          onVerified={(number, type) => {
            setPhoneNumber(number);
            setNo(number);
            setSubscriberType(type);
            setStep(2);
          }}
        />
      )}

      <PrepaidPlans
        onPlanSelect={(plan) => {
          setSelectedPlan(plan);
          setStep(3);
        }}
        no={no}
        disabled={step < 2}
        subscriberType={subscriberType}
      />

      <PaymentGateway
        no={no}
        selectedPlan={selectedPlan}
        disabled={step < 3}
      />
    </div>
  );
};

export default Finalpaymnet;