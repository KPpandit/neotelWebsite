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
import React, { useState } from "react";
import contactUsBGImage from "../Images/contactUsBGImage.png";
import ContactInfo from "./ContactInfo";
import contactUSLower from "../Images/contactUSLower.png";

export default function Contact() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const [formData, setFormData] = useState({
        firstName: '',
        phone: '674',
        email: '',
        inquiryType: ''
    });
    const [errors, setErrors] = useState({
        phone: false,
        email: false
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        
        // Special handling for phone number
        if (name === 'phone') {
            // Ensure phone starts with 674 and has exactly 10 digits total
            if (value.startsWith('674') && value.length <= 10 && /^\d+$/.test(value)) {
                setFormData({...formData, [name]: value});
            }
            return;
        }
        
        setFormData({...formData, [name]: value});
    };

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Validate phone number
        const phoneValid = formData.phone.length === 10;
        
        // Validate email
        const emailValid = validateEmail(formData.email);
        
        setErrors({
            phone: !phoneValid,
            email: !emailValid
        });
        
        if (phoneValid && emailValid) {
            // Submit form
            console.log('Form submitted:', formData);
            // Add your form submission logic here
        }
    };

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
                <Container component="main" maxWidth="lg">
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
                                        name="firstName"
                                        label="First Name"
                                        variant="outlined"
                                        required
                                        value={formData.firstName}
                                        onChange={handleChange}
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

                                {/* Your Number */}
                                <Grid item xs={12} lg={6}>
                                    <TextField
                                        fullWidth
                                        name="phone"
                                        label="Your Phone"
                                        variant="outlined"
                                        type="tel"
                                        required
                                        value={formData.phone}
                                        onChange={handleChange}
                                        error={errors.phone}
                                        helperText={errors.phone ? "Phone must be 674 followed by 7 digits" : ""}
                                        InputProps={{
                                            sx: {
                                                paddingY: 0.5,
                                                fontSize: "12px",
                                            },
                                           
                                        }}
                                        InputLabelProps={{
                                            sx: { fontSize: "12px" },
                                            shrink: true
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
                                        name="email"
                                        label="Your Email"
                                        variant="outlined"
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        error={errors.email}
                                        helperText={errors.email ? "Please enter a valid email address" : ""}
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
                                        name="inquiryType"
                                        label="Select Default"
                                        variant="outlined"
                                        select
                                        required
                                        value={formData.inquiryType}
                                        onChange={handleChange}
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
                            <Box sx={{ marginTop: 10, textAlign: "left" }}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    size="large"
                                    onClick={handleSubmit}
                                    sx={{
                                        backgroundColor: '#3B4A92',
                                        paddingX: 6,
                                        paddingY: 2,
                                        borderRadius: 0,
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
                    </Grid>
                </Container>
            </Grid>
        </Box>
    );
}