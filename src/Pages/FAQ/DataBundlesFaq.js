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

// Unified FAQ data source with updated questions
const faqData = [
  {
    question: "What is the meaning of Out of Bundle Charges?",
    answer: "When you run out of your top-up allocation or the validity period, charges will be deducted from your core balance. These charges, known as 'Out of Bundle Charges,' are higher than the regular top-up rates.",
  },
  {
    question: "What is this Mid-Night Plan?",
    answer: "The Mid-Night Plan is a top-up plan that lets you make calls, send SMS, and use data at a lower cost during the specified night-time period.",
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

export default function DataBundlesFaq() {
  return (
    <Box sx={{ paddingTop: 15, paddingBottom: 0 }}>
      <Box
        sx={{
          position: "relative",
          textAlign: "center",
        }}
      >
        {/* Background Image */}
        <img
          src={prepaidFaqBgImage}
          alt="Background"
          style={{ width: "100%", display: "block" }}
        />
      </Box>

      <Box sx={{ padding: 4, maxWidth: "1200px", margin: "0 auto" }}>
        <Grid container spacing={4}>
          {/* Left Content - FAQ Heading */}
          <Grid item xs={12} md={6}>
            <Typography
              
              sx={{
                fontWeight: "bold",
                marginBottom: 2,
                fontSize: { lg: "40px", md: "40px", xs: "30px" },
              }}
            >
             Data Bundles FAQs
            </Typography>
            {/* Left Section */}
            <FaqAccordion data={faqData.slice(0, 5)} />
          </Grid>

          {/* Right Content - FAQ Questions */}
          <Grid item xs={12} md={6}>
            <FaqAccordion data={faqData.slice(5)} />
          </Grid>
        </Grid>
      </Box>

     
    </Box>
  );
}
