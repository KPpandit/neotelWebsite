import { Grid, Radio, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import { useNavigate } from "react-router-dom";

export default function Payprepaid() {
  const [selectedOption, setSelectedOption] = useState("Option 1");
  const navigate = useNavigate();

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (values) => {
    if (selectedOption === "Option 1") {
      navigate(`/availablePack`, {
        state: { mobileNumber: values.mobileNumber },
      });
    } else {
      navigate(`/finalPayment`, {
        state: { mobileNumber: values.postpaidNumber, amount: values.amount },
      });
    }
  };

  return (
    <Formik
      initialValues={{
        mobileNumber: "",
        postpaidNumber: "",
        amount: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form>
        <Grid container direction="column" spacing={2}>
          <Grid item container spacing={2} alignItems="center">
            <Grid item>
              <Radio
                checked={selectedOption === "Option 1"}
                onChange={handleOptionChange}
                value="Option 1"
                name="paymentOption"
              />
            </Grid>
            <Grid item>
              <label>Recharge</label>
            </Grid>
            <Grid item>
              <Radio
                checked={selectedOption === "Option 2"}
                onChange={handleOptionChange}
                value="Option 2"
                name="paymentOption"
              />
            </Grid>
            <Grid item>
              <label>Pay Bill</label>
            </Grid>
          </Grid>
          {selectedOption === "Option 1" && (
            <Grid item container alignItems="center" spacing={2}>
              <Grid item xs={6}>
                <Field
                  as={TextField}
                  fullWidth
                  label="Enter Your Neotel Mobile Number"
                  variant="outlined"
                  name="mobileNumber"
                />
              </Grid>
              <Grid item xs={4}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    backgroundColor: "#253A7A",
                    width: "50%",
                    padding: 1.9,
                  }}
                >
                  Pay
                </Button>
              </Grid>
            </Grid>
          )}
          {selectedOption === "Option 2" && (
            <Grid item container direction="column" spacing={1}>
              <Grid item container alignItems="center" spacing={3}>
                <Grid item xs={4}>
                  <Field
                    as={TextField}
                    fullWidth
                    label="Enter Your Neotel Postpaid Number"
                    variant="outlined"
                    name="postpaidNumber"
                  />
                </Grid>
                <Grid item xs={4}>
                  <Field
                    as={TextField}
                    fullWidth
                    label="Enter Amount"
                    variant="outlined"
                    name="amount"
                  />
                </Grid>
                <Grid item xs={2}>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      backgroundColor: "#253A7A",
                      width: "100%",
                      padding: 1.9,
                    }}
                    // onClick={e=>{ navigate(`/finalPayment`, { state: { mobileNumber: values.mobileNumber } })}}
                  >
                    Pay Bill
                  </Button>
                </Grid>
                <Grid item xs={2}>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#253A7A",
                      width: "100%",
                      padding: 1.9,
                    }}
                    onClick={e=>{navigate('/billSummary')}}
                  >
                    Bill Summary
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          )}
        </Grid>
      </Form>
    </Formik>
  );
}
