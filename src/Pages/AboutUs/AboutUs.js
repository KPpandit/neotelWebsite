import {
    Box,
    Breadcrumbs,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Container,
    CssBaseline,
    Grid,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import React from "react";
import apple from "../../Images/apple.png";
import profilePic from "../../Images/profilePic.png";
import { useNavigate } from "react-router-dom";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import AboutUS1 from "../../Images/AboutUS1.png";
import DeepakImage from "../../Images/DeepakImage.JPG";

export default function AboutUs() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    // const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
    return (
        <Box sx={{ textAlign: "center", paddingBottom: 5, paddingTop: 15 }}>
            <Box>
                <img
                    src={AboutUS1}
                    alt="Brand Banner"
                    style={{ width: "100%", display: "block", height: '100%' }}
                />
            </Box>

            <Grid sx={{ backgroundColor: "#FFFFFF", paddingTop: 3 }}>
                <Container component="main" maxWidth="lg" sx={{ padding: 2 }}>
                    <Breadcrumbs />
                    <CssBaseline />
                    <Grid container></Grid>
                    <Grid container spacing={3} paddingTop={2} paddingBottom={2}>
                        <Grid item xs={12}>
                            <Typography
                                variant="h4"
                                sx={{ fontWeight: "bold", fontSize: { lg: "40px", md: "40px", xs: "30px" }, marginBottom: 2, color: "black" }}
                            >

                                About Us
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography
                                sx={{
                                    maxWidth: 631,
                                    margin: "0 auto 0rem",
                                    color: "black",
                                    fontSize: "15px",
                                    // fontWeight: "440",
                                    textAlign:'justify'
                                }}
                            >
                                <strong>Neotel</strong> is a telecommunications leader based in Nauru, committed to transforming the way the world
                                connects. We leverage cutting-edge technology and global partnerships to deliver innovative, reliable,
                                and secure communication solutions. Our mission is to bring world-class connectivity to every corner of
                                the globe, starting from our roots in Nauru.
                            </Typography>
                        </Grid>

                    </Grid>
                    <Box
                        sx={{
                            marginTop: 2,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Grid container spacing={0} justifyContent={"center"} sx={{ paddingLeft: { lg: 10, md: 5, sm: 0, xs: 0 }, paddingRight: { lg: 10, md: 5, sm: 0, xs: 0 } }}>
                            <Grid item lg={6} xs={12} justifyContent={"center"} alignContent={'center'} sx={{ padding: 4,  }}>
                                <Card
                                    sx={{
                                        maxWidth: "100%",
                                        "&:hover": {
                                            boxShadow: 15,
                                            cursor: "pointer",
                                            "& .title": { color: "#233A7E" },
                                        },
                                        maxHeight: "100%",
                                        paddingTop: 3,
                                        paddingBottom:3
                                    }}
                                >
                                    {/* Display Image */}
                                    <CardMedia
                                        sx={{
                                            height: 400, // Adjust height for a smaller circular image
                                            width: 400, // Ensure width matches height for a perfect circle
                                            backgroundSize: "cover", // Use "cover" to ensure the image fills the circle
                                            borderRadius: "50%", // Make the image circular
                                            margin: "auto", // Center the image
                                        }}
                                        image={DeepakImage} // Use profilePic for each card
                                        title="Profile Picture"
                                    />
                                </Card>
                            </Grid>
                            <Grid item lg={6} xs={12} >
                                <Typography
                                    sx={{
                                        maxWidth: 400,
                                        margin: "0 auto 1rem",
                                        color: "black",
                                        fontSize: { lg: "28px", md: "35px", xs: "30px" },
                                        fontWeight: "500",
                                        textAlign: 'left'
                                    }}
                                >
                                    Vision Statement from our CEO
                                </Typography>
                                <Typography
                                    sx={{
                                        maxWidth: 400,
                                        margin: "0 auto 1rem",
                                        color: "black",
                                        // fontSize: "0.9rem",
                                        // fontWeight: "440",
                                        fontSize: "15px",
                                        textAlign: 'justify'
                                    }}
                                >
                                    In today’s fast-paced world, telecommunication is more than just
                                    a tool for connectivity—it is the backbone of national growth and
                                    progress. It plays a vital role in driving economic development
                                    and uplifting key sectors such as social welfare, education,
                                    commerce, healthcare and employment.
                                </Typography>
                                <Typography
                                    sx={{
                                        maxWidth: 400,
                                        margin: "0 auto 1rem",
                                        color: "black",
                                        fontSize: "15px",
                                        // fontWeight: "440",
                                        textAlign: 'justify'
                                    }}
                                >
                                    At Neotel, we take immense pride in being a catalyst for this
                                    transformation in Nauru. As your trusted 4G+ and 5G+ network
                                    provider, we are committed to delivering reliable, affordable and
                                    high-speed voice and data services across every district. Our
                                    focus on service quality ensures that every citizen of Nauru can
                                    experience seamless connectivity, unlocking opportunities for
                                    growth and innovation.
                                </Typography>
                                <Typography
                                    sx={{
                                        maxWidth: 400,
                                        margin: "0 auto 1rem",
                                        color: "black",
                                        fontSize: "15px",
                                        // fontWeight: "440",
                                        textAlign: 'justify'
                                    }}
                                >
                                    Our vision extends beyond technology; it is about empowering
                                    our community. By bringing high-speed internet directly to your
                                    doorstep through our fiber-to-home service, we are ensuring
                                    access to the world’s possibilities while also creating meaningful
                                    employment opportunities for the people of Nauru. Our
                                    commitment to nurturing local talent and fostering professional
                                    growth reflects our dedication to building a brighter, more
                                    connected future for NAURU.
                                </Typography>
                                <Typography
                                    sx={{
                                        maxWidth: 400,
                                        margin: "0 auto 0rem",
                                        color: "black",
                                        fontSize: "15px",

                                        // fontWeight: "440",
                                        textAlign: 'justify'
                                    }}
                                >
                                    As we continue this journey, I extend my heartfelt gratitude to the
                                    people of Nauru for trusting us to be a part of your lives.
                                    Together, we will shape a future where technology empowers
                                    every individual and contributes to the prosperity of NAURU.
                                </Typography>
                                <Typography
                                    sx={{
                                        maxWidth: 400,
                                        margin: "0 auto 0rem",
                                        paddingTop: 2,
                                        color: "black",
                                        fontSize: "15px",
                                        // fontWeight: "440",
                                        textAlign: 'justify',
                                        whiteSpace: "pre-line", // Allows new lines in text content
                                    }}
                                >
                                    <strong>Seiuli Deepak Khanna</strong>
                                    {"\n"}CEO and Director
                                    {"\n"}Telikom Nauru Corporation (Neotel)
                                </Typography>

                            </Grid>

                        </Grid>

                    </Box>
                </Container>
            </Grid>
            <Box sx={{ position: "relative", paddingTop: 2 }}>
                {/* <img
                    src={managemntBgImage} // Replace with your image path
                    alt="Brand Banner"
                    style={{
                        width: "100vw",
                        display: "block",
                        height: "50%",
                    }}
                /> */}
                {/* 
                 */}
            </Box>

        </Box>
    );
}
