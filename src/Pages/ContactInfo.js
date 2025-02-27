import React from "react";
import { Box, Typography, Checkbox, Grid, Divider } from "@mui/material";
import ForumIcon from "@mui/icons-material/Forum";

export default function ContactInfo() {
    return (
        <Box sx={{ padding: 2 }}>
            {/* Contact Info Section */}
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography
                        sx={{
                            fontSize: "18px",
                            color: "black",
                            textAlign: "left",
                            fontWeight: "bold",
                            paddingBottom: 1,
                        }}
                    >
                        Direct Contact
                    </Typography>
                    <Typography
                        sx={{
                            marginBottom: 2,
                            textAlign: "left",
                            color: "grey",
                            fontSize: "13px",
                        }}
                    >
                        We’re here to help! Whether you have a question, need assistance, or want to share feedback, feel free to reach out using the contact options below. Our team is ready to assist you.

                    </Typography>
                    <Typography
                        sx={{
                            color: "black",
                            fontSize: "17px",
                            textAlign: "left",
                            fontWeight: "bold",
                            paddingBottom: 1,
                        }}
                    >

                        Customer Service & Inquiries


                    </Typography>
                    <Box>
                        {/* {["Phone (local): 123",
                            "Phone (International): +674 2222123 ",
                            "Email: support@neotel.nr",
                            "Mailing Address: Telikom Nauru Corporation t/a Neotel,Ground Floor Civic Centre, Aiwo District Republic of Nauru",
                        ].map((text, index) => (
                           
                        ))} */}
                         <Box
                                // key={index}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    marginBottom: 0,  // Adjusted margin for proper spacing
                                }}
                            >
                                <Checkbox
                                    sx={{ color: "blue", transform: "scale(0.6)" }}
                                    disabled // Keep the checkbox unselectable
                                />
                                <Typography
                                    sx={{
                                        marginLeft: 1, // Added margin-left to give some space between checkbox and text
                                        color: "black",
                                        fontSize: "13px",
                                        // fontWeight: "450",
                                        textAlign: 'left'
                                    }}
                                >
                                    <strong>Phone (local):</strong> 123
                                </Typography>
                            </Box>
                            <Box
                                // key={index}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    marginBottom: 0,  // Adjusted margin for proper spacing
                                }}
                            >
                                <Checkbox
                                    sx={{ color: "blue", transform: "scale(0.6)" }}
                                    disabled // Keep the checkbox unselectable
                                />
                                <Typography
                                    sx={{
                                        marginLeft: 1, // Added margin-left to give some space between checkbox and text
                                        color: "black",
                                        fontSize: "13px",
                                        // fontWeight: "450",
                                        textAlign: 'left'
                                    }}
                                >
                                    <strong>Phone (International): </strong> +674 2222123
                                </Typography>
                            </Box>
                            <Box
                                // key={index}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    marginBottom: 0,  // Adjusted margin for proper spacing
                                }}
                            >
                                <Checkbox
                                    sx={{ color: "blue", transform: "scale(0.6)" }}
                                    disabled // Keep the checkbox unselectable
                                />
                                <Typography
                                    sx={{
                                        marginLeft: 1, // Added margin-left to give some space between checkbox and text
                                        color: "black",
                                        fontSize: "13px",
                                        // fontWeight: "450",
                                        textAlign: 'left'
                                    }}
                                >
                                    <strong>Email: </strong>support@neotel.nr
                                </Typography>
                            </Box>
                            <Box
                                // key={index}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    marginBottom: 0,  // Adjusted margin for proper spacing
                                }}
                            >
                                <Checkbox
                                    sx={{ color: "blue", transform: "scale(0.6)" }}
                                    disabled // Keep the checkbox unselectable
                                />
                                <Typography
                                    sx={{
                                        marginLeft: 1, // Added margin-left to give some space between checkbox and text
                                        color: "black",
                                        fontSize: "13px",
                                        // fontWeight: "450",
                                        textAlign: 'left'
                                    }}
                                >
                                    <strong>Mailing Address: </strong>Telikom Nauru Corporation t/a Neotel,Ground Floor Civic Centre, Aiwo District Republic of Nauru
                                </Typography>
                            </Box>
                            

                            

                    </Box>

                </Grid>
            </Grid>

            {/* Divider */}
            <Divider sx={{ marginY: 2, borderColor: "black", borderWidth: "1px" }} />

            {/* Live Chat Section */}
            <Box>
                <Typography
                    sx={{
                        color: "black",
                        fontSize: "17px",
                        textAlign: "left",
                        fontWeight: "bold",
                        paddingBottom: 1,
                    }}
                >
                    Business Hours:

                </Typography>
                <Typography
                    sx={{
                        marginBottom: 2,
                        textAlign: "left",
                        color: "black",
                        fontSize: "13px",
                    }}
                >
                    <ul style={{ paddingLeft: "20px" }}>
                        <li><strong>Monday to Friday:</strong> 9:00 AM - 5:00 PM</li>
                        <li><strong>Saturday:</strong> 9:00 AM - 12:00 PM</li>
                        <li><strong>Sunday:</strong> Holiday</li>
                    </ul>
                </Typography>


            </Box>

            {/* Divider */}
            <Divider sx={{ marginY: 2, borderColor: "black", borderWidth: "1px" }} />

            {/* Not Interested Section */}
            <Box sx={{ paddingTop: 0 }}>
                <Typography
                    sx={{
                        color: "black",
                        fontSize: "17px",
                        textAlign: "left",
                        fontWeight: "bold",
                        paddingBottom: 1,
                    }}
                >
                    Not interested to talk ?
                </Typography>
                <Typography
                    sx={{
                        marginBottom: 2,
                        textAlign: "left",
                        color: "grey",
                        fontSize: "13px",
                    }}
                >
                    Please check out the best suggested
                    <Typography
                        component="a"
                        href="http://122.185.196.10:8082/help-at-hand/general-faq's"
                        sx={{
                            color: "red",
                            textDecoration: "none",
                            fontSize: "13px",
                            fontWeight: "bold",
                            marginLeft: 0.5,
                        }}
                    >
                        Help Center & FAQ
                    </Typography>
                </Typography>
            </Box>
        </Box>
    );
}
