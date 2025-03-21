import React, { useState, useEffect, useCallback } from "react";
import {
  Box,
  Divider,
  Grid,
  Typography,
  Fab,
  IconButton,
  Link as MuiLink,
} from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import { MDBFooter } from "mdb-react-ui-kit";
import XIcon from '@mui/icons-material/X';
export default function Footer1() {
  const [showScroll, setShowScroll] = useState(false);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const checkScrollTop = () => {
      setShowScroll(window.pageYOffset > 400);
    };

    const debouncedCheckScroll = () => {
      clearTimeout(window.scrollTimeout);
      window.scrollTimeout = setTimeout(checkScrollTop, 100);
    };

    window.addEventListener("scroll", debouncedCheckScroll);
    return () => window.removeEventListener("scroll", debouncedCheckScroll);
  }, []);

  const quickAccessItems = [
    { name: "Prepaid", disabled:true },
    { name: "Postpaid", disabled: true },
    { name: "Roaming", disabled: true },
    { name: "Data Bundles", disabled: true },
    { name: "Special Offers", disabled: true },
    { name: "Neotel Business", disabled: false },
    { name: "My Neotel", disabled: true },
  ];

  const aboutCompanyItems = [
    { name: "Brand", disabled: false },
    { name: "Careers", disabled: true },
    { name: "Partners", disabled: false },
    { name: "Who We Are", disabled: false },
    { name: "Management Team", disabled: true },
    { name: "Press Release", disabled: false },
    { name: "Corporate Responsibility", disabled: false },
    { name: "Terms and Conditions", disabled: false },
    { name: "Privacy Policy", disabled: false},
  ];

  const helpAtHandItems = [
    { name: "Contact Us", disabled: false },
    { name: "Manage Your Account", disabled: true },
    { name: "Store Locator", disabled: true },
    { name: "General FAQ's", disabled: false },
    { name: "Prepaid FAQ's", disabled: false },
    { name: "Post-paid FAQ's", disabled: false },
    { name: "Data Bundles FAQ's", disabled: false },
    { name: "Roaming FAQ's", disabled: false },
  ];

  const createLinkPath = (category, item) => {
    return `/${category}/${item.toLowerCase().replace(/\s+/g, "-")}`;
  };

  return (
    <Box sx={{ width: "100%" }}>
      <MDBFooter
        className="text-center text-lg-start text-muted"
        style={{
          borderTop: "2px solid #E8E8EB",
          backgroundColor: "white",
          color: "black",
        }}
      >
        <Grid container spacing={3} sx={{ padding: 5 }}>
          <Grid item xs={12} md={3}>
            <Grid container alignItems="center">
              <Grid item xs={12} md="auto">
                <HeadsetMicIcon
                  style={{
                    fontSize: "50px",
                    marginBottom: "1px",
                    color: "#4A59A7",
                  }}
                />
              </Grid>
              <Grid item xs={12} md>
                <Typography sx={{ fontSize: "16px", fontWeight: "500", color: "grey" }}>
                  Call us  8:00 AM - 12:00 AM
                </Typography>
                <Typography sx={{ fontSize: "18px", fontWeight: "1000", color: "black" }}>
                  (+674) 2222 123
                </Typography>
              </Grid>
            </Grid>

            <Box sx={{ mt: 4 }}>
              <Typography sx={{ fontWeight: "bold", fontSize: 18, color: "black" }}>
                Contact Info
              </Typography>
              <Typography sx={{ fontSize: 15, color: "grey", whiteSpace: "pre-line" }}>
                Telikom Nauru Corporation t/a Neotel,{"\n"}
                Ground Floor Civic Center,{"\n"}
                Aiwo District,{"\n"}
                Republic of Nauru
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                gap: 1,
                mt: 2,
                justifyContent: { xs: "center", md: "flex-start" },
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <IconButton component={MuiLink} href="https://tinyurl.com/FBNeotel" target="_blank">
                <FacebookIcon />
              </IconButton>
              <IconButton component={MuiLink} href="https://www.instagram.com/neotelnauru" target="_blank">
                <InstagramIcon />
              </IconButton>
              <IconButton component={MuiLink} href="https://x.com/NeotelNauru" target="_blank">
                <XIcon />
              </IconButton>
              <IconButton component={MuiLink} href="https://tinyurl.com/Linkedneotel" target="_blank">
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Grid>

          <Grid item xs={12} md={9}>
            <Grid container spacing={3}>
              {[quickAccessItems, aboutCompanyItems, helpAtHandItems].map((items, idx) => (
                <Grid item xs={12} sm={4} key={idx}>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "Bold", fontSize: 17, color: "black" }}
                  >
                    {idx === 0
                      ? "Quick Access"
                      : idx === 1
                      ? "About Company"
                      : "Help at Hand"}
                  </Typography>
                  {items.map((item, i) => (
                    <Typography key={i} sx={{ fontSize: 16, fontWeight: 500, color: "grey", mt: 1 }}>
                      {item.disabled ? (
                        <span>{item.name}</span> // Non-clickable
                      ) : (
                        <MuiLink
                          href={createLinkPath(
                            idx === 0 ? "quick-access" : idx === 1 ? "about-company" : "help-at-hand",
                            item.name
                          )}
                          sx={{
                            color: "grey",
                            textDecoration: "none",
                            "&:hover": { color: "#4A59A7" },
                          }}
                        >
                          {item.name}
                        </MuiLink>
                      )}
                    </Typography>
                  ))}
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

        <Divider sx={{ borderBottomWidth: 1, borderColor: "black" }} />
        <Box
          sx={{
            bgcolor: "#4A59A7",
            color: "white",
            textAlign: "center",
            py: 1,
          }}
        >
          <Typography sx={{ fontSize: 16 }}>
            &copy; {new Date().getFullYear()} by Telikom Nauru Corporation
          </Typography>
        </Box>
        {showScroll && (
          <Fab
            color="primary"
            sx={{ position: "fixed", bottom: 20, right: 20 }}
            onClick={scrollToTop}
          >
            <ArrowUpwardIcon />
          </Fab>
        )}
      </MDBFooter>
    </Box>
  );
}
