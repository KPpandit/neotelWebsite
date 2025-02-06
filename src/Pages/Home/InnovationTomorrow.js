import React from "react";
import { Card, CardMedia, Box, Typography, Button, useTheme, useMediaQuery, Grid, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import RevolutionImage from "../../Images/NeotelHomePageCard.png";
import { CheckCircle } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export default function InnovationTomorrow() {
    const theme = useTheme();
    const navigate = useNavigate();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const handleGetStartedClick = () => {
        // Navigate to the Home page and scroll to the ValuePlan section
        navigate("/#value-plan");
        const valuePlanSection = document.getElementById("value-plan");
        if (valuePlanSection) {
            valuePlanSection.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <Box
            sx={{
                paddingTop: 0,
                margin: 0,
                width: "100vw", // Full viewport width
                maxWidth: "100vw", // Ensure no extra space
                position: "relative", // To position overlay text
                overflow: "hidden", // Prevent content overflow
                boxSizing: "border-box", // Include padding/border in dimensions
            }}
        >
            {/* Background Image */}
            {/* <Card sx={{ maxWidth: "100%", boxShadow: 0, borderRadius: 0 }}>
                <CardMedia
                    component="img"
                    image={HomeDrowerIMage}
                    alt="Commitment"
                    sx={{
                        width: "100%", // Full viewport width
                        
                    }}
                />
            </Card> */}

            {/* Content overlay */}

            {/* Another Document Section */}
            <Grid container spacing={1} sx={{ padding: { lg: 10, md: 5, sm: 2, xs: 2 } }}>
                <Grid item xs={12} md={6}>
                    <Box sx={{ padding: "20px" }}>
                        <Typography

                            sx={{
                                fontWeight: "bold",
                                color: "#4052A6",
                                marginBottom: "16px",
                                fontSize: { lg: "40px", md: "40px", xs: "30px" },

                            }}
                        >
                            Join the Revolution:
                            Neotel 5G Plus
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{ fontSize: "15px", textAlign: 'justify', lineHeight: 1.6, color: "black" }}
                        >
                            Neotel’s 5G Plus isn’t just a network; it’s a revolution. From
                            real-time gaming with zero lag to crystal-clear video calls with
                            loved ones halfway around the world, Neotel’s 5G Plus is designed
                            to meet the demands of the modern digital lifestyle.
                        </Typography>

                        {/* Points with Ticks */}
                        <Box sx={{ textAlign: "left", padding: { xs: 2, sm: 3, md: 4 } }}>
                            <Typography
                                sx={{
                                    fontSize: "15px",
                                    color: "black",
                                    // fontWeight: "600",
                                    lineHeight: 1.6,
                                    marginBottom: 2, // Adds space between sections
                                }}
                            >
                                <strong>For Everyone:</strong> Neotel’s 5G Plus is designed for everyone. Whether you’re a student, a professional, or just someone who loves to stay connected, our network offers something for you. With Neotel, you can explore, create, and connect with confidence.
                            </Typography>

                            <Typography
                                sx={{
                                    fontSize: "15px",
                                    color: "black",
                                    // fontWeight: "600",
                                    lineHeight: 1.6,
                                    marginBottom: 2, // Adds space between sections
                                }}
                            >
                                <strong>For Businesses:</strong> In today’s fast-paced world, connectivity is key to success. Neotel’s 5G Plus network offers businesses the tools they need to thrive in the digital economy, from cloud-based solutions to seamless video conferencing and beyond.
                            </Typography>

                            <Typography
                                sx={{
                                    fontSize: "15px",
                                    color: "black",
                                    // fontWeight: "600",
                                    lineHeight: 1.6,
                                }}
                            >
                                <strong>For Gamers:</strong> Experience gaming like never before with lightning-fast speeds and ultra-low latency. Neotel’s 5G Plus lets you compete in real-time, whether you’re battling it out in your favorite game or streaming your gameplay to a global audience.
                            </Typography>
                        </Box>

                        {/* <Box sx={{ marginTop: "5px" }}>
                            <Button
                                variant="contained"
                                sx={{
                                    color: "white", // Text color
                                    backgroundColor: "#4A5AA6", // Background color
                                    borderRadius: "50px", // Circular corners
                                    padding: "12px 30px", // Adjust size
                                    fontSize: "1rem", // Font size
                                    fontWeight: "600", // Bold text
                                    textTransform: "none", // Prevent uppercase
                                    "&:hover": {
                                        backgroundColor: "#4A5AA6", // Hover effect
                                    },
                                }}
                            >
                                Learn More
                            </Button>
                        </Box> */}

                    </Box>

                </Grid>

                {/* Right Grid for Image */}
                <Grid item xs={12} md={6} sx={{ marginLeft: { lg: 0, md: 0, sm: 2, xs: 3 } }}>
                    <CardMedia
                        component="img"
                        image={RevolutionImage} // You can change this to any image you want to display here
                        alt="Innovation"
                        sx={{
                            width: "100%", // Full width
                            height: "100%", // Full height of the grid
                            objectFit: "scale-down", // Ensure image scales proportionally
                        }}
                    />
                </Grid>
            </Grid>
        </Box>
    );
}
