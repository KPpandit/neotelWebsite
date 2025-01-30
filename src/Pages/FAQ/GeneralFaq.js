import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import prepaidFaqBgImage from "../../Images/prepaidFaqBgImage.png";

// Updated FAQ data source
const faqData = [
  {
    question: "What is new about the Neotel network?",
    answer:
      "Neotel is launching mobile and home broadband services in Nauru. Neotel will provide services in 4G Plus and 5G Plus spectrum.",
  },
  {
    question: "Can I use my existing mobile handset on Neotel?",
    answer:
      "Yes, you can use your existing Mobile handset with Neotel. For best results on data services we recommend using a 5G Plus enabled handset.",
  },
  {
    question: "How do I get a Neotel connection?",
    answer:
      "For buying a Neotel SIM card, please visit a Neotel retailer near you. Refer to the map to find the nearest retailer. Click here.",
  },
  {
    question: "How much does a new Neotel SIM Card cost?",
    answer:
      "As a launch offer, Neotel SIM cards will be available free of cost for a limited period. The cost of buying SIM cards will be communicated on a later date when the price is fixed.",
  },
  {
    question: "Can I select my mobile number?",
    answer:
      "Yes, you will have the option to select and choose your mobile number from the pool which is active.",
  },
  {
    question: "How do I get started with my Neotel SIM card?",
    answer:
      "Your Neotel SIM Card will be preactivated. Just recharge with your preferred denomination and you are good to go.",
  },
  {
    question: "What are the types of Mobile connections I can buy?",
    answer:
      "You have the option to choose between a Prepaid SIM Card or a Postpaid SIM Card. Prepaid is a flexible choice, giving you control over your spending - recharge whenever it suits you. Postpaid is perfect for those who prefer the convenience of avoiding frequent recharges. Simply use your connection and pay your bill once it’s generated.",
  },
  {
    question: "How can I update my personal information?",
    answer:
      "To update your personal information, visit our nearest store with the required supporting documents. Our staff will assist you in updating the details.",
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
            <Typography sx={{ color: "#969EAF", marginLeft: "32px" }}>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default function GeneralFaq() {
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
            General FAQs
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
