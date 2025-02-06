import React from "react";
import { Typography, Box, Grid, Card, CardContent, Button, useTheme, useMediaQuery, CardMedia, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import HomePage_Neotel4 from "../../Images/HomePage_Neotel4.png";

export default function NetworkSolution() {
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
        <Container
            sx={{
                padding: 0,
                width: "100%",
                maxWidth: "100%",
                marginLeft: { lg: -10, md: 8, sm: -2, xs: -2 },
                position: "relative",
            }}
        >
            {/* Image Section */}
            <Box
                sx={{
                    padding: 0,
                    margin: 0,
                    width: "100vw",
                    maxWidth: "100vw",
                    position: "relative",
                    overflow: "hidden",
                    boxSizing: "border-box",
                }}
            >
                <Card sx={{ maxWidth: "100%", boxShadow: 0, borderRadius: 0 }}>
                    <CardMedia
                        component="img"
                        image={HomePage_Neotel4}
                        alt="Commitment"
                        sx={{
                            width: "100%",
                        }}
                    />
                </Card>
                {/* Text Overlay for Larger Screens */}
                {!isSmallScreen && (
                    <Box
                        sx={{
                            position: "absolute",
                            top: "15%",
                            right: "5%",
                            textAlign: "left",
                            color: "black",
                            maxWidth: "50%",
                        }}
                    >
                        <Typography
                            sx={{
                                fontWeight: "bold",
                                marginBottom: "0px",
                                fontSize: { lg: "40px", md: "40px", xs: "30px" },
                            }}
                        >
                            Get Ready to
                        </Typography>
                        <Typography
                            sx={{
                                fontWeight: "bold",
                                marginBottom: "16px",
                                fontSize: { lg: "40px", md: "40px", xs: "30px" },
                            }}
                        >
                            Connect with Confidence
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                fontSize: "0.9rem",
                                marginBottom: "10px",
                                lineHeight: 1.5,
                                color: "black",
                            }}
                        >
                            Neotel’s 5G Plus network is coming soon to Nauru, and we’re excited to bring you
                            a new era of connectivity. Stay tuned for more updates, and get ready to
                            experience the future with Neotel.
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                fontSize: "0.9rem",
                                marginBottom: "4px",
                                lineHeight: 1.5,
                                color: "black",
                            }}
                        >
                            <strong>Follow Us: </strong>
                            Stay updated with the latest from Neotel by following us on social media.
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                fontSize: "0.9rem",
                                marginBottom: "4px",
                                lineHeight: 1.5,
                                color: "black",
                            }}
                        >
                            <strong> Join Us: </strong>
                            Be part of the Neotel revolution. Explore career opportunities with us today.
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                fontSize: "0.9rem",
                                marginBottom: "32px",
                                lineHeight: 1.5,
                                color: "black",
                            }}
                        >
                            <strong> Learn More: </strong>
                            Discover how Neotel’s 5G Plus technology can transform your digital experience.
                        </Typography>
                        <Box sx={{ marginTop: "35px" }}>
                            <Button
                                variant="contained"
                                sx={{
                                    color: "black",
                                    backgroundColor: "#F8B517",
                                    borderRadius: "50px",
                                    padding: "12px 30px",
                                    fontSize: "1rem",
                                    fontWeight: "600",
                                    textTransform: "none",
                                    "&:hover": { backgroundColor: "#F8B517" },
                                }}
                                onClick={handleGetStartedClick}
                            >
                                Explore More
                            </Button>
                        </Box>
                    </Box>
                )}

                {/* Text Below the Image for Small Screens */}
                {isSmallScreen && (
                    <Box
                        sx={{
                            textAlign: "center",
                            color: "black",
                            marginTop: "20px",
                            padding: "20px",
                        }}
                    >
                        <Typography
                            sx={{
                                fontWeight: "bold",
                                fontSize: "30px",
                                marginBottom: "16px",
                            }}
                        >
                            Get Ready to Connect with Confidence
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                fontSize: "0.9rem",
                                marginBottom: "10px",
                                lineHeight: 1.5,
                                color: "black",
                            }}
                        >
                            Neotel’s 5G Plus network is coming soon to Nauru, and we’re excited to bring you
                            a new era of connectivity. Stay tuned for more updates, and get ready to
                            experience the future with Neotel.
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                fontSize: "0.9rem",
                                marginBottom: "4px",
                                lineHeight: 1.5,
                                color: "black",
                            }}
                        >
                            <strong>Follow Us : </strong>
                            Stay updated with the latest from Neotel by following us on social media.
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                fontSize: "0.9rem",
                                marginBottom: "4px",
                                lineHeight: 1.5,
                                color: "black",
                            }}
                        >
                            <strong> Join Us : </strong>
                            Be part of the Neotel revolution. Explore career opportunities with us today.
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                fontSize: "0.9rem",
                                marginBottom: "32px",
                                lineHeight: 1.5,
                                color: "black",
                            }}
                        >
                            <strong> Learn More : </strong>
                            Discover how Neotel’s 5G Plus technology can transform your digital experience.
                        </Typography>
                        <Box sx={{ marginTop: "35px" }}>
                            <Button
                                variant="contained"
                                sx={{
                                    color: "black",
                                    backgroundColor: "#F8B517",
                                    borderRadius: "50px",
                                    padding: "12px 30px",
                                    fontSize: "1rem",
                                    fontWeight: "600",
                                    textTransform: "none",
                                    "&:hover": { backgroundColor: "#F8B517" },
                                }}
                                onClick={handleGetStartedClick}
                            >
                                Explore More
                            </Button>
                        </Box>
                    </Box>
                )}
            </Box>
        </Container>
    );
}
