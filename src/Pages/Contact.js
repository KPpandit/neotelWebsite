import {
    Box,
    Breadcrumbs,
    Container,
    CssBaseline,
    Grid,
    Typography,
    TextField,
    MenuItem,
    Button,
    useTheme,
    useMediaQuery,
} from "@mui/material";
import React from "react";
import contactUsBGImage from "../Images/contactUsBGImage.png";
import ContactInfo from "./ContactInfo";
import contactUSLower from "../Images/contactUSLower.png";

export default function Contact() {
    const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <Box sx={{ textAlign: "center", paddingBottom: 5, paddingTop: 15 }}>
            {/* Banner Image */}
            <Box>
                <img
                    src={contactUsBGImage}
                    alt="Brand Banner"
                    style={{ width: "100%", display: "block" }}
                />
            </Box>

            {/* Form Section */}
            <Grid sx={{ backgroundColor: "#FFFFFF", paddingTop: 3 }}>
                <Container
                    component="main"
                    maxWidth="lg"
                >
                    <Breadcrumbs />
                    <CssBaseline />
                    <Grid container spacing={1} sx={{ paddingTop: 6 }}>
                        <Grid item lg={8} xs={12}>
                            {/* Heading */}
                            <Typography
                                sx={{
                                    fontWeight: "bold",
                                    marginBottom: 6,
                                    color: "#333",
                                    textAlign: "left",
                                    fontSize: "22px",
                                }}
                            >
                                Get in Touch
                            </Typography>

                            {/* Form Fields */}
                            <Grid container spacing={3} sx={{ justifyContent: "center" }}>
                                {/* Your Name */}
                                <Grid item xs={12} lg={6}>
                                    <TextField
                                        fullWidth
                                        label="First Name"
                                        variant="outlined"
                                        required
                                        InputProps={{
                                            sx: {
                                                paddingY: 0.5, // Reduce input height
                                                fontSize: "12px", // Smaller input text
                                            },
                                        }}
                                        InputLabelProps={{
                                            sx: { fontSize: "12px" }, // Smaller label text
                                        }}
                                        sx={{
                                            "& .MuiOutlinedInput-root": {
                                                borderRadius: 1, // Smaller border radius
                                                fontSize: "12px", // TextField border font size
                                            },
                                        }}
                                    />
                                </Grid>

                                {/* Your Number */}
                                <Grid item xs={12} lg={6}>
                                    <TextField
                                        fullWidth
                                        label="Your Phone"
                                        variant="outlined"
                                        type="tel"
                                        required
                                        InputProps={{
                                            sx: {
                                                paddingY: 0.5,
                                                fontSize: "12px",
                                            },
                                        }}
                                        InputLabelProps={{
                                            sx: { fontSize: "12px" },
                                        }}
                                        sx={{
                                            "& .MuiOutlinedInput-root": {
                                                borderRadius: 1,
                                                fontSize: "12px",
                                            },
                                        }}
                                    />
                                </Grid>

                                {/* Your Email */}
                                <Grid item xs={12} lg={6}>
                                    <TextField
                                        fullWidth
                                        label="Your Email"
                                        variant="outlined"
                                        type="email"
                                        required
                                        InputProps={{
                                            sx: {
                                                paddingY: 0.5,
                                                fontSize: "12px",
                                            },
                                        }}
                                        InputLabelProps={{
                                            sx: { fontSize: "12px" },
                                        }}
                                        sx={{
                                            "& .MuiOutlinedInput-root": {
                                                borderRadius: 1,
                                                fontSize: "12px",
                                            },
                                        }}
                                    />
                                </Grid>

                                {/* Select Default */}
                                <Grid item xs={12} lg={6}>
                                    <TextField
                                        fullWidth
                                        label="Select Default"
                                        variant="outlined"
                                        select
                                        required
                                        InputProps={{
                                            sx: {
                                                paddingY: 0.5,
                                                fontSize: "12px",
                                            },
                                        }}
                                        InputLabelProps={{
                                            sx: { fontSize: "12px" },
                                        }}
                                        sx={{
                                            "& .MuiOutlinedInput-root": {
                                                borderRadius: 1,
                                                fontSize: "12px",
                                            },
                                        }}
                                    >
                                        <MenuItem value="Product Inquiry">Product Inquiry</MenuItem>
                                        <MenuItem value="Support Request">Support Request</MenuItem>
                                        <MenuItem value="Feedback">Feedback</MenuItem>
                                        <MenuItem value="General Inquiry">General Inquiry</MenuItem>
                                        <MenuItem value="Others">Others</MenuItem>
                                    </TextField>
                                </Grid>
                            </Grid>

                            {/* Submit Button */}
                            <Box sx={{ marginTop: 10, textAlign: "left" }}> {/* Align to left */}
                                <Button
                                    variant="contained"
                                    color="primary"
                                    size="large"
                                    sx={{
                                        backgroundColor: '#3B4A92',
                                        paddingX: 6, // Horizontal padding for rectangle shape
                                        paddingY: 2, // Vertical padding
                                        borderRadius: 0, // Make it a rectangle
                                        fontSize: '11px'
                                    }}
                                >
                                    Submit Message
                                </Button>
                            </Box>
                        </Grid>

                        {/* Contact Info Section */}
                        <Grid item lg={4} xs={12}>
                            <ContactInfo />
                        </Grid>

                        {/* Map Section */}
                        <Grid item xs={12}>
                            <Typography sx={{ textAlign: 'left', fontWeight: 'bold', fontSize: '22px' }}>Store Location</Typography>
                            <Box sx={{ textAlign: "center", marginTop: 2 }}>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.6419021904326!2d166.90933607349623!3d-0.5388083352628963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6f7d1fedbea43065%3A0xba075653ec090463!2sCivic%20Centre%20Complex!5e0!3m2!1sen!2sin!4v1733903500518!5m2!1sen!2sin"
                                    width="100%"
                                    height="450"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Google Map"
                                ></iframe>
                            </Box>
                        </Grid>
                        {/* */}


                    </Grid>
                </Container>
            </Grid>
        </Box>
    );
}
