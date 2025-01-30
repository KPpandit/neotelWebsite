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

// Unified FAQ data source
const faqData = [
  {
    question: "What is the tariff on prepaid connection?",
    answer:
      "Prepaid connections offer a variety of tariff plans to suit your needs. When you recharge your Neotel mobile, you’ll receive a main balance (top-up amount) that can be used for calls, SMS, or data services. We offer exciting top-up options that let you save more and enjoy Neotel services at even lower prices. Click here to check out our current promotions and tariff options.",
  },
  {
    question: "What documents are required for a new prepaid connection?",
    answer:
      "You will need to submit any government issued ID proof and our agents will take your photo while buying a new connection.",
  },
  {
    question: "What happens if I run out of balance on my Prepaid connection?",
    answer:
      "If you run out of balance or your top-up limit expires, you won’t be able to make calls, send SMS, or use data services. To resume your services, you’ll need to recharge.",
  },
  {
    question: "How can I check my balance and validity?",
    answer:
      "There are several ways to check these details. You can send an SMS, call our customer service center, or check through the MyNeotel app. For more support options, click here.",
  },
  {
    question: "How can I block my prepaid SIM if it is lost or stolen?",
    answer:
      "If your SIM is lost or stolen, immediately call our customer care helpline or visit a store to block your SIM. You can request a replacement SIM by providing ID proof.",
  },
  {
    question: "Is there an App for managing my prepaid account?",
    answer:
      "Yes, our MyNeotel mobile App lets you recharge your account, check your balance and usage, view available plans, update your personal information, contact customer support and much more. Download the MyNeotel App now.",
  },
  {
    question: "Can I share my Main Balance with another user?",
    answer:
      "Yes, Neotel offers the option to transfer your main balance to other users. You can use your MyNeotel App to do so.",
  },
  {
    question: "What is the validity of my prepaid recharge?",
    answer:
      "Your main balance has no expiration and will stay in your account until it’s used. However, your top-up will expire after the period specified in your plan. To view the tariff details, click here.",
  },
  {
    question: "Will my Voice, SMS and Data Allocation roll over?",
    answer:
      "No, your voice, SMS, and data allocation will not roll over after the validity period. All of these will expire once the validity ends.",
  },
  {
    question: "Is there an option for Auto-Renewal of my Prepaid top up plan?",
    answer:
      "Yes, we offer the option for auto-renewal of your prepaid top-up plan. However, we need your consent to charge you for the renewal. You can select this option on the MyNeotel App.",
  },
  {
    question:
      "Can I change my Top up plan even when I have already taken a top up plan?",
    answer:
      "Yes, you can choose a different top-up plan even while your current one is active. However, to avoid losing your allocated Voice, SMS, and Data limits, we recommend selecting a new plan only after you’ve used or the existing plan has expired.",
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
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: "1.5rem",
                    marginRight: "16px",
                  }}
                >
                  -
                </Typography>
              ) : (
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: "1.5rem",
                    marginRight: "16px",
                  }}
                >
                  +
                </Typography>
              )
            }
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
            sx={{
              flexDirection: "row-reverse",
              alignItems: "center",
            }}
          >
            <Typography sx={{ fontWeight: "500", marginLeft: "8px" }}>
              {faq.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: "#969EAF", marginLeft: "32px" }}>
              {faq.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default function PrepaidFaq() {
  return (
    <Box sx={{ paddingTop: 15, paddingBottom: 0 }}>
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
             Prepaid FAQs
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
