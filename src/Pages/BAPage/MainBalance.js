import React from "react";
import MainBalanceBg from "../../Images/MainBalanceBg.png";
import {
    Box,
    Breadcrumbs,
    Button,
    Container,
    CssBaseline,
    Grid,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ThankYouImage from "../../Images/MainBalanceSide.png";
import { useLocation } from "react-router-dom";
export default function MainBalance() {
    const theme = useTheme();
    const location = useLocation();
    const type = location.state?.type || 'balance';

    const isBundle = type === 'bundle';

    const headingText = isBundle
        ? 'Your Bundle has Expired'
        : 'Your Main Balance is 0 AUD';

    const subText = isBundle
        ? 'Dear Customer, Your active bundle is 100% utilised. To continue using please Top up or activate bundle. Visit Neotel store at Civic Centre for more help .'
        : 'Dear Customer,\nYour account balance is currently 0 AUD. To continue using Neotel services such as calls, SMS, and mobile data, please Top Up your account or activate a new bundle.';
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const actions = [
        "Buy a Top-Up",
        "Activate a New Bundle",
        "Visit our store for assistance",
    ];
    return (
        <Box sx={{ textAlign: "center", paddingBottom: 5, paddingTop: 15 }}>
            <Box>
                <img
                    src={MainBalanceBg}
                    alt="Brand Banner"
                    style={{ width: "100%", display: "block", height: "100%" }}
                />
            </Box>

            <Grid sx={{ backgroundColor: "#FFFFFF", paddingTop: 3 }}>
                <Container component="main" maxWidth="lg" sx={{ padding: 2 }}>
                    <Breadcrumbs />
                    <CssBaseline />

                    <Grid container spacing={3} paddingTop={2} paddingBottom={2} paddingLeft={1.5}>
                        <Grid item xs={12}>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    width: "100%",
                                }}
                            >
                                <Typography
                                    variant="h4"
                                    sx={{
                                        fontWeight: "bold",
                                        fontSize: { lg: "40px", md: "36px", xs: "30px" },
                                        color: "black",
                                        textAlign: "center",
                                    }}
                                >
                                    {headingText}
                                </Typography>
                            </Box>
                        </Grid>



                        <Typography
                            sx={{
                                maxWidth: 800,
                                margin: "0 auto 1rem",
                                color: "black",
                                fontSize: "15px",
                                textAlign: "center",
                                lineHeight: "1.8",
                                
                                whiteSpace: "pre-line",
                            }}
                        >
                            {subText}
                        </Typography>

                        <Grid item xs={12}>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    width: "100%",
                                    mt: 0,
                                }}
                            >
                                <Button
                                    variant="contained"
                                    sx={{
                                        backgroundColor: "#4B5DBB",
                                        color: "white",
                                        borderRadius: "50px",
                                        fontWeight: "bold",
                                        textTransform: "none",
                                        paddingX: 4,
                                        paddingY: 1.5,
                                        fontSize: "14px",
                                        "&:hover": {
                                            backgroundColor: "#3f4ca0",
                                        },
                                    }}
                                >
                                    Visit Neotel store at Civic Centre for more help
                                </Button>
                            </Box>
                        </Grid>

                        <Grid item xs={12}>
                            <Typography
                                sx={{
                                    maxWidth: 800,
                                    margin: "0 auto 1rem",
                                    color: "black",
                                    fontSize: "15px",
                                    textAlign: "center",
                                    lineHeight: "1.7",
                                }}
                            >
                                <strong>In-Store Support:</strong> Come visit us at the Neotel Store, Civic Centre. Our team will help you get reconnected in minutes.
                            </Typography>
                        </Grid>

                        <Box sx={{ padding: 4 }}>
                            <Grid container spacing={4} alignItems="center" sx={{ paddingLeft: { lg: 10, md: 0 }, paddingRight: { lg: 10, md: 0 } }}>

                                <Grid item xs={12} md={12}>
                                    <Box
                                        component="img"
                                        src={ThankYouImage}
                                        alt="Payment Success"
                                        sx={{
                                            width: "100%",
                                            height: "auto",
                                            borderRadius: 4,
                                            objectFit: "cover",
                                        }}
                                    />
                                </Grid>


                            </Grid>
                        </Box>
                    </Grid>
                </Container>
            </Grid>
        </Box>
    );
}
