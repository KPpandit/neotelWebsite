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
    question: "Are there any roaming charges for prepaid users?",
    answer:
      "Yes. For international roaming, you will be charged as per the plans defined in the International Roaming link. Click here for details.",
  },
  {
    question: "What are the charges for making voice calls beyond Nauru?",
    answer:
      "Click here to learn about tariffs for international calls. We’ve organized countries into zones to make the rates easier to understand.",
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

export default function RoamingFaq() {
  return (
    <Box sx={{ paddingTop: 15, paddingBottom: 10 }}>
      <Box
        sx={{
          position: "relative",
          textAlign: "center",
        }}
      >
        {/* Background Image */}
        <img src={prepaidFaqBgImage} alt="Background" style={{ width: "100%", display: "block" }} />
      </Box>
      <Box sx={{ padding: 4, maxWidth: "1200px", margin: "0 auto" }}>
        <Grid container spacing={4}>
          {/* FAQ Heading */}
          <Grid item xs={12}>
            <Typography
              variant="h3"
              component="h2"
              sx={{
                fontWeight: "bold",
                marginBottom: 2,
                textAlign: "center",
              }}
            >
              Roaming FAQs
            </Typography>
            {/* FAQ Section */}
            <FaqAccordion data={faqData} />
          </Grid>
        </Grid>
      </Box>

     
    </Box>
  );
}
