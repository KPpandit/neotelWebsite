import React, { useState } from "react";
import {
  Grid,
  Paper,
  List,
  ListItem,
  ListItemButton,
  Typography,
  Button,
  Rating,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Fade,
  Box,
} from "@mui/material";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import phone1 from "../../Images/phone1.png";
import phone2 from "../../Images/phone2.png";
import phone3 from "../../Images/phone3.png";
import phone4 from "../../Images/phone4.png";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EditSharpIcon from "@mui/icons-material/EditSharp";
import { useNavigate } from "react-router-dom";

const images = [phone1, phone2, phone3, phone4];

const imageDetails = {
  [phone1]: {
    title: "Neotel",
    description:
      "NeotelPhone Prima 4G Premium Design Phone with Youtube WhatsApp, Neotel TV, NeotelCinema, NeotelSaavn, Neotel Pay (UPI), Powerful 1800 mAh Battery, LED Torch, Digital Camera, Blue, Locked for NeotelNetwork",
    price: "100.00",
    rating: 4.5,
  },
  [phone2]: {
    title: "Phone 2",
    description: "This is the second phone.",
    price: "$200.00",
    rating: 4.0,
  },
  [phone3]: {
    title: "Phone 3",
    description: "This is the third phone.",
    price: "$300.00",
    rating: 3.5,
  },
  [phone4]: {
    title: "Phone 4",
    description: "This is the fourth phone.",
    price: "$400.00",
    rating: 2.0,
  },
};

export default function BuyProduct() {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [visibleStartIndex, setVisibleStartIndex] = useState(0);
  const visibleCount = 3;

  const handleScrollUp = () => {
    setVisibleStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleScrollDown = () => {
    setVisibleStartIndex((prevIndex) =>
      Math.min(prevIndex + 1, images.length - visibleCount)
    );
  };

  const visibleImages = images.slice(
    visibleStartIndex,
    visibleStartIndex + visibleCount
  );
  const [expanded, setExpanded] = React.useState(false);

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <Grid container spacing={2} sx={{ padding: 2 }}>
      {/* Left Side - Image Scroll */}
      <Grid item xs={2}>
        <Paper
          sx={{
            height: "calc(100vh - 16px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <Button onClick={handleScrollUp} disabled={visibleStartIndex === 0}>
            <ArrowDropUpIcon />
          </Button>
          <List
            sx={{ flexGrow: 1, overflowY: "auto", width: "100%", padding: 0 }}
          >
            {visibleImages.map((image) => (
              <ListItem key={image} sx={{ padding: 0 }}>
                <ListItemButton
                  onClick={() => setSelectedImage(image)}
                  sx={{ padding: 2 }}
                >
                  <img
                    src={image}
                    alt={image}
                    style={{ width: "100%", display: "block" }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Button
            onClick={handleScrollDown}
            disabled={visibleStartIndex + visibleCount >= images.length}
          >
            <ArrowDropDownIcon />
          </Button>
        </Paper>
      </Grid>

      {/* Middle - Selected Image */}
      <Grid item xs={4}>
        <Grid container spacing={0.5}>
          <Grid item xs={12}>
            <Paper
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "calc(90vh - 16px)",
              }}
            >
              <img
                src={selectedImage}
                alt={selectedImage}
                style={{ maxHeight: "90%", maxWidth: "90%" }}
              />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "calc(10vh - 16px)",
              }}
            >
              <Button
                variant="contained"
                onClick={() => {
                  navigate(`/finalPayment`, {
                    state: { amount: imageDetails[selectedImage].price },
                  });
                }}
                fullWidth
                sx={{ height: "100%", backgroundColor: "#253A7D" }}
              >
                Buy Now
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Grid>

      {/* Right Side - Image Details */}
      <Grid item xs={6}>
        <Paper
          sx={{ padding: 2, height: "calc(100vh - 16px)", overflow: "auto" }}
        >
          <Typography
            variant="h5"
            sx={{ fontWeight: "1000", color: "#253A7D" }}
          >
            {imageDetails[selectedImage].title}
          </Typography>
          <Typography variant="h6">
            {imageDetails[selectedImage].description}
          </Typography>
          <Typography
            variant="h6"
            sx={{ fontWeight: "1000", color: "#253A7D" }}
          >
            Price : {imageDetails[selectedImage].price}
          </Typography>
          <Rating
            sx={{ paddingTop: 2 }}
            name="read-only"
            value={imageDetails[selectedImage].rating}
            readOnly
          />
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Divider></Divider>
            </Grid>
            <Grid item xs={12}>
              <Typography sx={{ fontWeight: "1000", color: "#253A7D" }}>
                Warranty : 1 year
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Divider></Divider>
            </Grid>
            <Grid item xs={12}>
              <Typography
                sx={{ fontWeight: "1000", fontSize: "22px", color: "#253A7D" }}
              >
                Offers
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <div>
                <Accordion
                  expanded={expanded}
                  onChange={handleExpansion}
                  slots={{ transition: Fade }}
                  slotProps={{ transition: { timeout: 400 } }}
                  sx={{
                    "& .MuiAccordion-region": { height: expanded ? "auto" : 0 },
                    "& .MuiAccordionDetails-root": {
                      display: expanded ? "block" : "none",
                    },
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography>ADDITIONAL OFFERS</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                  >
                    <Typography>BANK OFFERS</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                  >
                    <Typography>COUPONS</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            </Grid>
            <Grid item xs={12}>
              <Divider></Divider>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{ fontWeight: "1000", fontSize: "22px", color: "#253A7D" }}
            >
              Deliver to
            </Grid>
            <Grid item xs={3}>
              400020
            </Grid>
            <Grid item xs={3}>
              Mumbai
            </Grid>
            <Grid item xs={6}>
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <EditSharpIcon />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Divider></Divider>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{ fontWeight: "1000", fontSize: "22px", color: "#253A7D" }}
            >
              Sold By
            </Grid>
            <Grid
              item
              xs={12}
              sx={{ fontWeight: "1000", fontSize: "18px", color: "#253A7D" }}
            >
              Neotel Retail
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
