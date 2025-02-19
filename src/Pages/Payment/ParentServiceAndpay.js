import React, { useState } from "react";
import Services from "./Services";
import Finalpaymnet from "./Finalpaymnet";

const ParentServiceAndpay = () => {
  const [selectedPlan1, setSelectedPlan1] = useState(null);

  return (
    <div>
      <Services onPlanSelect1={setSelectedPlan1} />
      <Finalpaymnet selectedPlan1={selectedPlan1} />
    </div>
  );
};

export default ParentServiceAndpay;