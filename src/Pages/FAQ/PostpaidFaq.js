import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  Button,
} from "@mui/material";
import prepaidFaqBgImage from "../../Images/prepaidFaqBgImage.png";

// Updated FAQ data source
const faqData = [
  {
    question: "What is a postpaid SIM card?",
    answer:
      "A postpaid SIM card is a mobile service plan where you pay for your usage (calls, texts, and data) at the end of the billing cycle, rather than in advance. You are billed for the services you’ve used during the month, typically with a fixed monthly fee plus any extra usage.",
  },
  {
    question: "How does a postpaid plan work?",
    answer:
      "With a postpaid plan, you will sign a contract or agreement with Neotel. At the end of each billing cycle (usually monthly), you receive a bill based on the usage (data, voice calls, SMS) during that period. You pay the bill at the end of the month, which can include additional charges for exceeding data limits, international calls, or premium services.",
  },
  {
    question: "What are the benefits of a postpaid plan?",
    answer:
      "Higher data limits: Postpaid plans typically offer more data than prepaid plans.\nConvenience: You don’t have to worry about running out of credit or recharging every month.\nRoaming: Postpaid plans often include better international roaming options.\nDevice financing: Some postpaid plans allow you to finance a phone or device as part of your plan, making it more affordable upfront.",
  },
  {
    question: "Can I switch from a prepaid to a postpaid plan?",
    answer:
      "Yes, you can switch from a prepaid to a postpaid plan anytime. Please contact our customer care for assistance.\n\nPhone (Local): 123\nPhone (International): +674 2222123\nEmail: support@neotel.nr\n\nMailing Address:\nTelikom Nauru Corporation t/a Neotel,\nGround Floor Civic Centre, Aiwo District\nRepublic of Nauru",
  },
  {
    question: "What happens if I exceed my plan’s limits?",
    answer:
      "If you exceed the data, minutes, or text limits of your postpaid plan, you may incur extra charges or overage fees. Neotel offers options to purchase extra data or services. Be sure to check the terms of your plan to understand how overages are handled.",
  },
  {
    question: "How is my postpaid bill calculated?",
    answer:
      "Your monthly bill is typically based on:\n- The fixed monthly fee for your plan.\n- Additional charges for excess data, extra minutes, or premium services (like international calling or subscriptions).\n- Taxes – 10% Telecom Service Tax.\n- Device payments, if applicable, for financing a phone or other equipment through the plan.",
  },
  {
    question: "When is my postpaid bill due?",
    answer:
      "The bill is usually due at the end of each billing cycle, typically one month after your services are used. Your billing cycle may start on the day you activate your service, and the due date will be set based on that cycle. You can set up automatic payments, pay via Bank transfer, FPOS, cash at the Neotel Retail counter at Ground floor Civic Centre in Aiwo, International Airport, and in Meneng (Opp Hotel Memen).",
  },
  {
    question: "Can I use my postpaid plan abroad?",
    answer:
      "Yes, our postpaid plans offer international roaming options. You can use your phone in other countries, but roaming charges may apply unless you have a special international plan or roaming add-on. Check with your account manager about roaming rates and availability in the countries you plan to visit.",
  },
  {
    question: "What happens if I fail to pay my postpaid bill?",
    answer:
      "If you don’t pay your bill on time, your carrier may suspend or restrict your service until the payment is made.",
  },
  {
    question: "What should I do if I move to a new address with a postpaid plan?",
    answer:
      "If you move to a new address, it’s a good idea to notify your account manager or customer care so they can update your billing address and any location-based services.",
  },
  {
    question: "How can I manage my postpaid plan?",
    answer:
      "Neotel allows you to manage your postpaid account online or through the MyNeotel mobile app. You can check your usage, view bills, make payments, and even set up alerts for data limits or payment due dates.",
  },
];

// Reusable FAQ component
const FaqAccordion = ({ data }) => {
  const [expanded, setExpanded] = useState(null);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

  return (
    <Box sx={{ paddingBottom: 5 }}>
      {data.map((faq, index) => (
        <Accordion
          key={index}
          expanded={expanded === index}
          onChange={handleChange(index)}
          sx={{
            boxShadow: "none",
            backgroundColor: "transparent",
            borderBottom: "1px solid #E0E0E0",
            marginBottom: 2,
          }}
        >
          <AccordionSummary
            expandIcon={
              expanded === index ? (
                <Typography sx={{ fontWeight: "bold", fontSize: "1.5rem", marginRight: "16px" }}>-</Typography>
              ) : (
                <Typography sx={{ fontWeight: "bold", fontSize: "1.5rem", marginRight: "16px" }}>+</Typography>
              )
            }
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
            sx={{
              flexDirection: "row-reverse",
              alignItems: "center",
            }}
          >
            <Typography sx={{ fontWeight: "500", marginLeft: "8px" }}>{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: "#969EAF", marginLeft: "32px", whiteSpace: "pre-wrap" }}>
              {faq.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default function PostpaidFaq() {
  return (
    <Box sx={{ paddingTop: 15, paddingBottom: 10 }}>
      <Box
        sx={{
          position: "relative",
          textAlign: "center",
        }}
      >
        <img
          src={prepaidFaqBgImage}
          alt="Background"
          style={{ width: "100%", display: "block" }}
        />
      </Box>
      <Box sx={{ padding: 4, maxWidth: "1200px", margin: "0 auto" }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography
             
              sx={{
                fontWeight: "bold",
                marginBottom: 2,
                fontSize: { lg: "40px", md: "40px", xs: "30px" },
              }}
            >
              Postpaid FAQs
            </Typography>
            <FaqAccordion data={faqData.slice(0, 6)} />
          </Grid>
          <Grid item xs={12} md={6}>
            <FaqAccordion data={faqData.slice(6)} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
