import React from "react";
import { Box, Typography, Grid, Button, List, ListItem, ListItemText, useTheme, useMediaQuery, Card, CardMedia, CardContent } from "@mui/material";
import { useNavigate } from "react-router-dom";
import whoweareImage from "../../Images/whoweareImage.png";
import NeotellBussinessBG from "../../Images/NeotellBussinessBG.png";
import NeotelBussinesBG2 from "../../Images/NeotelBussinesBG2.png";
import NeotelBussinessBG3 from "../../Images/NeotelBussinessBG3.png";
import NeotelBussinessBG4 from "../../Images/NeotelBussinessBG4.png";
import whoweareImage2 from "../../Images/whoweareImage2.png";
import whoweareCard1 from "../../Images/whoweareCard1.png";
import whowearecard2 from "../../Images/whowearecard2.png";
import profilePic from "../../Images/profilePic.png";
import NeotelBussinessCard1 from "../../Images/NeotelBussinessCard1.png";
import NeotelBussinessCard2 from "../../Images/NeotelBussinessCard2.png";
import NeotelBussinessCard3 from "../../Images/NeotelBussinessCard3.png";
import NeotelBussinessCard4 from "../../Images/ImagesNeotelBussinessCard4.png.png";
import NeotelBussinessCard5 from "../../Images/NeotelBussinessCard5.png";
import NeotelBussinessCard6 from "../../Images/NeotelBussinessCard6.png";
import NeotelBussinessCard7 from "../../Images/NeotelBussinessCard7.png";
import NeotelBussinessCard9 from "../../Images/ImagesNeotelBussinessCard9.png.png";
import DeepakImage from "../../Images/DeepakImage.JPG";
export default function NeotelBussiness() {
  const navigate = useNavigate();
  const handleGetStarted = () => navigate("/about-company/careers/jobForm");
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box sx={{ paddingTop: 15, paddingX: 0, paddingBottom: 3 }}>
      {/* Hero Section */}
      <Grid container spacing={0} alignItems="center" justifyContent="center" sx={{ flexDirection: { xs: "column", md: "row" } }}>
        <Grid item xs={12} sx={{ paddingBottom: 10 }}>
        <Box>
                <img
                    src={NeotellBussinessBG}
                    alt="Brand Banner"
                    style={{ width: "100%", display: "block", height: '50%' }}
                />
            </Box>
          {/* <Box sx={{ width: "100%", height: { xs: "300px", sm: "400px", md: "400px" }, backgroundImage: `url(${NeotellBussinessBG})`, backgroundSize: "cover", backgroundPosition: "center" }} /> */}
        </Grid>
        <Grid item xs={12}>
          <Typography sx={{ fontWeight: "bold", fontSize: { lg: "40px", md: "40px", xs: "30px" }, marginBottom: 2, color: "black", textAlign: "center" }}>
            Neotel Business Products
          </Typography>
          <Typography sx={{
            maxWidth: 700, margin: "0 auto 1rem", color: "black",
            fontSize: "15px",
            fontWeight: "440",
            textAlign: "center"
          }}>
            We are Neotel - a multicultural team of forward-thinking innovators pushing the boundaries of what’s possible in telecommunications. Rooted in Nauru with a global reach, we are committed to delivering cutting-edge solutions that meet the evolving needs of our customers and communities worldwide.

          </Typography>

        </Grid>
      </Grid>

      {/* Content Section 2*/}
      <Grid container spacing={10} sx={{ paddingTop: 10, padding: 4 }}>
        <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Box component="img" src={NeotelBussinessCard1} alt="Brand" sx={{ width: { xs: "100%", md: "80%" }, height: "auto", marginBottom: { xs: 2, md: 0 } }} />
        </Grid>
        <Grid item xs={12} md={6} sx={{ padding: 4 }}>
          <Typography sx={{ fontWeight: "bold", fontSize: { lg: "40px", md: "40px", xs: "30px" }, marginBottom: 0, maxWidth: 350 }}> Business
            Communication
            Solutions
          </Typography>

          <List
            sx={{
              listStyleType: "disc", // Adds bullet points
              paddingLeft: 2,        // Indentation for the bullets
              "& .MuiListItem-root": {
                display: "list-item", // Ensures list item format
                paddingLeft: 0,       // No extra padding for items
                marginBottom: "8px",  // Spacing between items
              },
            }}
          >
            <ListItem>
              <Typography
                sx={{
                  textAlign: "left",
                  fontSize: "15px",
                  // fontWeight: "450",
                  maxWidth: 350,
                }}
              >
                <strong>VoIP (Voice over Internet Protocol): </strong>
                High-quality voice services that
                allow businesses to make calls over the internet, reducing costs and
                increasing scalability.
              </Typography>
            </ListItem>
            <ListItem>
              <Typography
                sx={{
                  textAlign: "left",
                  fontSize: "15px",
                  // fontWeight: "500",
                  maxWidth: 370,
                }}
              >
                <strong>Unified Communications: </strong>
                Combine voice, video, messaging, and
                collaboration tools in one platform, improving team productivity and
                customer engagement.
              </Typography>
            </ListItem>
            <ListItem>
              <Typography
                sx={{
                  textAlign: "left",
                  fontSize: "15px",
                 
                  maxWidth: 370,
                }}
              >
                <strong>Business Phone Systems: </strong>

                Customized phone systems designed for
                small, medium, and large enterprises, offering features like call
                forwarding, voicemail-to-email, and auto attendants.
              </Typography>
            </ListItem>
            <ListItem>
              <Typography
                sx={{
                  textAlign: "left",
                  fontSize: "15px",
                 
                  maxWidth: 370,
                }}
              >
                <strong>Cloud PBX: </strong>

                A cloud-based phone system that provides flexibility and
                features like remote working support, multi-device compatibility, and
                cost-efficiency.
              </Typography>
            </ListItem>
          </List>

          {/* <Box sx={{ marginTop: 3 }}>
            <Button variant="contained" sx={{ borderRadius: "50px", paddingX: 4, paddingY: 1.5, fontSize: "14px", fontWeight: "bold", backgroundColor: "#F8B413", color: "black" }}>
              Get Started
            </Button>
          </Box> */}
        </Grid>
      </Grid>
      {/* Content Section */}
      <Grid container spacing={10} sx={{ paddingTop: 10, paddingLeft: { lg: 17, md: 0, xs: 0 }, paddingRight: { lg: 13.5, md: 0, xs: 0 }, padding: 4 }}>

        <Grid
          item
          xs={12}
          md={6}
          sx={{
            padding: { lg: 4, md: 4, sm: 0, xs: 10 },
            textAlign: { xs: "left", md: "left" },
            margin: { lg: 0, md: 0, sm: 4, xs: 4 }

          }}
        >
          <Typography
            sx={{ fontWeight: "bold", fontSize: { lg: "40px", md: "40px", xs: "30px" }, marginBottom: 2, paddingTop: { lg: 3, md: 0, xs: 0 } }}
          >
            Internet & Data
            Solutions
          </Typography>
          <List
            sx={{
              listStyleType: "disc", // Adds bullet points
              paddingLeft: 2,        // Indentation for the bullets
              "& .MuiListItem-root": {
                display: "list-item", // Ensures list item format
                paddingLeft: 0,       // No extra padding for items
                marginBottom: "8px",  // Spacing between items
              },
            }}
          >
            <ListItem>
              <Typography
                sx={{
                  textAlign: "left",
                  fontSize: "15px",
                  // fontWeight: "450",
                  maxWidth: 350,
                }}
              >
                <strong>Business Internet Packages: </strong>

                High-speed, reliable internet connections
                designed to meet the needs of modern businesses, including fiber-optic
                and dedicated broadband solutions
              </Typography>
            </ListItem>
            <ListItem>
              <Typography
                sx={{
                  textAlign: "left",
                  fontSize: "15px",
                  
                  maxWidth: 370,
                }}
              >
                <strong> Private Networks (VPN): </strong>

                Secure and private connections for businesses,
                ensuring data protection and safe communication across remote
                locations
              </Typography>
            </ListItem>
            <ListItem>
              <Typography
                sx={{
                  textAlign: "left",
                  fontSize: "15px",
                
                  maxWidth: 370,
                }}
              >
                <strong>  MPLS (Multiprotocol Label Switching): </strong>


                Enterprise-level network solution
                that prioritizes and routes data efficiently to optimize network
                performance.
              </Typography>
            </ListItem>
            <ListItem>
              <Typography
                sx={{
                  textAlign: "left",
                  fontSize: "15px",
                 
                  maxWidth: 370,
                }}
              >
                <strong> Managed Wi-Fi: </strong>


                Scalable, high-performance Wi-Fi networks tailored for
                businesses, providing secure connections across large premises
              </Typography>
            </ListItem>
          </List>
          {/* <Box sx={{ marginTop: 3 }}>
            <Button
              variant="contained"
              sx={{
                borderRadius: "50px",
                paddingX: 4,
                paddingY: 1.5,
                fontSize: "14px",
                fontWeight: "bold",
                backgroundColor: "#F8B413",
                color: "black",
              }}

            >
              Get Started
            </Button>
          </Box> */}
        </Grid>

        <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "flex-start", margin: { lg: 0, md: 0, sm: 4, xs: 4 } }}>
          <Box component="img" src={NeotelBussinessCard2} alt="Brand" sx={{ width: { xs: "100%", md: "80%" }, height: "auto", marginBottom: { xs: 2, md: 0 } }} />
        </Grid>
      </Grid>
      <Grid container spacing={10} sx={{ paddingTop: 10, paddingLeft: { lg: 5, md: 0, xs: 0 }, paddingRight: { lg: 0, md: 0, xs: 0 }, padding: 4 }}>
        <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "flex-end", margin: { lg: 0, md: 0, sm: 4, xs: 4 } }}>
          <Box component="img" src={NeotelBussinessCard3} alt="Brand" sx={{ width: { xs: "100%", md: "80%" }, height: "auto", marginBottom: { xs: 2, md: 0 } }} />
        </Grid>
        <Grid item xs={12} md={6} sx={{ padding: 0, margin: { lg: 0, md: 0, sm: 4, xs: 4 } }}>
          <Typography variant="h3" sx={{ fontWeight: "bold", marginBottom: 2, fontSize: { lg: "40px", md: "40px", xs: "30px" } }}>
            Cloud And</Typography>
          <Typography variant="h3" sx={{ fontWeight: "bold", marginBottom: 2, fontSize: { lg: "40px", md: "40px", xs: "30px" } }}>
            IT Services</Typography>
          <List
            sx={{
              listStyleType: "disc", // Adds bullet points
              paddingLeft: 2,        // Indentation for the bullets
              "& .MuiListItem-root": {
                display: "list-item", // Ensures list item format
                paddingLeft: 0,       // No extra padding for items
                marginBottom: "8px",  // Spacing between items
              },
            }}
          >
            <ListItem>
              <Typography
                sx={{
                  textAlign: "left",
                  fontSize: "15px",
                 
                  maxWidth: 350,
                }}
              >
                <strong> Cloud Hosting: </strong>

                Scalable cloud infrastructure to host websites, apps, and
                databases, with top-tier security and uptime.
              </Typography>
            </ListItem>
            <ListItem>
              <Typography
                sx={{
                  textAlign: "left",
                  fontSize: "15px",
                  
                  maxWidth: 370,
                }}
              >
                <strong> Data Backup and Recovery: </strong>

                Secure data backup solutions that ensure
                business continuity and prevent data loss during unexpected incidents.
              </Typography>
            </ListItem>
            <ListItem>
              <Typography
                sx={{
                  textAlign: "left",
                  fontSize: "15px",
                  
                  maxWidth: 370,
                }}
              >
                <strong> Cloud Storage: </strong>


                Reliable and secure cloud-based storage services, ideal
                for businesses that require flexible, cost-effective data management.
              </Typography>
            </ListItem>
            <ListItem>
              <Typography
                sx={{
                  textAlign: "left",
                  fontSize: "15px",
                  
                  maxWidth: 370,
                }}
              >
                <strong> Managed IT Services: </strong>


                Comprehensive IT support and maintenance to
                ensure your systems and devices run smoothly, including remote
                troubleshooting and on-site support.
              </Typography>
            </ListItem>
          </List>
          {/* <Box sx={{ marginTop: 3 }}>
            <Button
              variant="contained"
              sx={{
                borderRadius: "50px",
                paddingX: 4,
                paddingY: 1.5,
                fontSize: "14px",
                fontWeight: "bold",
                backgroundColor: "#F8B413",
                color: "black",
              }}

            >
              Get Started
            </Button>
          </Box> */}

        </Grid>
      </Grid>
      <Grid container spacing={10} sx={{ paddingTop: 10, paddingLeft: { lg: 19, md: 0, xs: 0 }, paddingRight: { lg: 14, md: 0, xs: 0 }, padding: 4 }}>

        <Grid
          item
          xs={12}
          md={6}
          sx={{
            padding: 4,
            textAlign: { xs: "left", md: "left" },
            margin: { lg: 0, md: 0, sm: 4, xs: 4 }

          }}
        >
          <Typography

            sx={{ fontWeight: "bold", textAlign: 'left', marginBottom: 2, fontSize: { lg: "40px", md: "40px", xs: "30px" }, paddingTop: { lg: 3, md: 0, xs: 0 }, maxWidth: { lg: 300 } }}
          >
            Mobile
            Solutions

          </Typography>
          <List
            sx={{
              listStyleType: "disc", // Adds bullet points
              paddingLeft: 2,        // Indentation for the bullets
              "& .MuiListItem-root": {
                display: "list-item", // Ensures list item format
                paddingLeft: 0,       // No extra padding for items
                marginBottom: "8px",  // Spacing between items
              },
            }}
          >
            <ListItem>
              <Typography
                sx={{
                  textAlign: "left",
                  fontSize: "15px",
                 
                  maxWidth: 350,
                }}
              >
                <strong>Mobile Plans for Businesses: </strong>


                Tailored mobile service packages for
                businesses, with options for bulk data, unlimited calling, and flexible
                international roaming.
              </Typography>
            </ListItem>
            <ListItem>
              <Typography
                sx={{
                  textAlign: "left",
                  fontSize: "15px",
                 
                  maxWidth: 350,
                }}
              >
                <strong>  Business Mobile Applications: </strong>


                Customized mobile apps designed to
                streamline business operations, such as booking systems, customer
                management, and internal communication apps.
              </Typography>
            </ListItem>

          </List>

          {/* <Box sx={{ marginTop: 3 }}>
            <Button
              variant="contained"
              sx={{
                borderRadius: "50px",
                paddingX: 4,
                paddingY: 1.5,
                fontSize: "14px",
                fontWeight: "bold",
                backgroundColor: "#F8B413",
                color: "black",
              }}

            >
              Get Started
            </Button>
          </Box> */}
        </Grid>

        <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "flex-start", margin: { lg: 0, md: 0, sm: 4, xs: 4 } }}>
          <Box component="img" src={NeotelBussinessCard4} alt="Brand" sx={{ width: { xs: "100%", md: "80%" }, height: "auto", marginBottom: { xs: 2, md: 0 } }} />
        </Grid>
      </Grid>
      {/* between Section */}
      <Grid
        container
        spacing={0}
        alignItems="center"
        justifyContent="center"
        sx={{ flexDirection: { xs: "column", md: "row" }, paddingBottom: 0 }}
      >
        <Grid item xs={12} sx={{ paddingBottom: 0, position: "relative" }}>
          {/* Make the Grid container position relative */}
          <Card sx={{ maxWidth: "100%", boxShadow: 0, borderRadius: 0 }}>
            <CardMedia
              component="img"
              image={NeotelBussinesBG2}
              alt="Commitment"
              sx={{
                width: "100%",
              }}
            />
          </Card>

          {!isSmallScreen && (
            <Box
              sx={{
                position: "absolute",
                top: "15%", // Adjust vertical positioning
                left: "5%", // Move the text to the left side
                textAlign: "left",
                color: "white", // Ensure text is visible on the image
                maxWidth: "45%",
                zIndex: 1, // Higher z-index ensures text is above the image
              }}
            >
              <Typography
                sx={{
                  fontSize: { lg: "40px", md: "40px", xs: "30px" },
                  fontWeight: "bold",
                  marginBottom: "8px",
                  color: "white",
                  maxWidth: 400
                }}
              >
                Enterprise Security
                Solutions
              </Typography>



              <List
                sx={{
                  padding: 0,
                  listStyleType: "disc",
                  pl: 2, // Indentation for the list
                  "& .MuiListItem-root": {
                    display: "list-item",
                    paddingLeft: 0, // Remove default padding
                    marginBottom: "-15px", // Reduce space between list items
                  },
                  "& .MuiTypography-root": {
                    fontSize: "15px", // Set the font size for list text
                    lineHeight: "1.4", // Adjust line height for better readability
                  },
                }}
              >
                <ListItem>
                  <ListItemText
                    primary="Cybersecurity Services:
                    Comprehensive security solutions to protect
                    business networks, data, and devices from cyber threats, including
                    firewalls, encryption, and malware protection."
                  />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Endpoint Protection:
                  Protection for all devices used by employees
                  (laptops, smartphones, etc.) to prevent data breaches and unauthorized
                  access." />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Security Monitoring:
                    Real-time monitoring of business networks to
                    detect and mitigate threats proactively."
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Compliance Services:
                    Help businesses comply with industry regulations
                    and standards, such as GDPR, HIPAA, and others, through secure and
                    certified solutions."
                  />
                </ListItem>
              </List>
            </Box>
          )}
        </Grid>

      </Grid>
      {/* Content Section 2*/}
      <Grid container spacing={10} sx={{ paddingTop: 10, padding: 4 }}>
        <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Box component="img" src={NeotelBussinessCard5} alt="Brand" sx={{ width: { xs: "100%", md: "80%" }, height: "auto", marginBottom: { xs: 2, md: 0 } }} />
        </Grid>
        <Grid item xs={12} md={6} sx={{ padding: 4 }}>
          <Typography sx={{ fontWeight: "bold", fontSize: { lg: "40px", md: "40px", xs: "30px" }, marginBottom: 0, maxWidth: 350 }}> Business
            Business
            Collaboration
            Tools
          </Typography>

          <List
            sx={{
              listStyleType: "disc", // Adds bullet points
              paddingLeft: 2,        // Indentation for the bullets
              "& .MuiListItem-root": {
                display: "list-item", // Ensures list item format
                paddingLeft: 0,       // No extra padding for items
                marginBottom: "8px",  // Spacing between items
              },
            }}
          >
            <ListItem>
              <Typography
                sx={{
                  textAlign: "left",
                  fontSize: "15px",
                 
                  maxWidth: 350,
                }}
              >
                <strong>Video Conferencing: </strong>
                High-definition video call solutions for remote
                meetings, with features like screen sharing, recording, and chat
                functionality.
              </Typography>
            </ListItem>
            <ListItem>
              <Typography
                sx={{
                  textAlign: "left",
                  fontSize: "15px",
                 
                  maxWidth: 350,
                }}
              >
                <strong>Team Collaboration Software: </strong>

                Integrated tools for messaging, task
                management, file sharing, and document collaboration to increase team
                productivity.
              </Typography>
            </ListItem>
            <ListItem>
              <Typography
                sx={{
                  textAlign: "left",
                  fontSize: "15px",
                 
                  maxWidth: 350,
                }}
              >
                <strong> Project Management Software: </strong>


                Cloud-based project management tools
                that help businesses manage workflows, deadlines, and team
                collaboration effectively.
              </Typography>
            </ListItem>

          </List>

          {/* <Box sx={{ marginTop: 3 }}>
            <Button variant="contained" sx={{ borderRadius: "50px", paddingX: 4, paddingY: 1.5, fontSize: "14px", fontWeight: "bold", backgroundColor: "#F8B413", color: "black" }}>
              Get Started
            </Button>
          </Box> */}
        </Grid>
      </Grid>
      {/* Content Section 2*/}
      <Grid container spacing={10} sx={{ paddingTop: 10, paddingLeft: { lg: 18, md: 0, xs: 0 }, paddingRight: { lg: 13.5, md: 0, xs: 0 }, padding: 4 }}>

        <Grid
          item
          xs={12}
          md={6}
          sx={{
            padding: { lg: 4, md: 4, sm: 0, xs: 10 },
            textAlign: { xs: "left", md: "left" },
            margin: { lg: 0, md: 0, sm: 4, xs: 4 }

          }}
        >
          <Typography
            sx={{ fontWeight: "bold", fontSize: { lg: "40px", md: "40px", xs: "30px" }, marginBottom: 2, paddingTop: { lg: 3, md: 0, xs: 0 } }}
          >
            Customer Support
            Solutions
          </Typography>
          <List
            sx={{
              listStyleType: "disc", // Adds bullet points
              paddingLeft: 2,        // Indentation for the bullets
              "& .MuiListItem-root": {
                display: "list-item", // Ensures list item format
                paddingLeft: 0,       // No extra padding for items
                marginBottom: "8px",  // Spacing between items
              },
            }}
          >
            <ListItem>
              <Typography
                sx={{
                  textAlign: "left",
                  fontSize: "15px",
                  
                  maxWidth: 350,
                }}
              >
                <strong>Call Centre Services : </strong>


                Scalable, cloud-based solutions to manage
                customer support teams, including call routing, ticketing systems, and
                automated responses.
              </Typography>
            </ListItem>
            <ListItem>
              <Typography
                sx={{
                  textAlign: "left",
                  fontSize: "15px",
               
                  maxWidth: 370,
                }}
              >
                <strong>Help Desk Solutions: </strong>


                Ticketing systems and customer service platforms
                that help businesses deliver outstanding support experiences.
              </Typography>
            </ListItem>
            <ListItem>
              <Typography
                sx={{
                  textAlign: "left",
                  fontSize: "15px",
               
                  maxWidth: 370,
                }}
              >
                <strong>Customer Relationship Management (CRM): </strong>

                Software solutions that
                help businesses manage and analyse customer interactions and data,
                improving relationships and business growth.
              </Typography>
            </ListItem>

          </List>
          {/* <Box sx={{ marginTop: 3 }}>
            <Button
              variant="contained"
              sx={{
                borderRadius: "50px",
                paddingX: 4,
                paddingY: 1.5,
                fontSize: "14px",
                fontWeight: "bold",
                backgroundColor: "#F8B413",
                color: "black",
              }}

            >
              Get Started
            </Button>
          </Box> */}
        </Grid>

        <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "flex-start", margin: { lg: 0, md: 0, sm: 4, xs: 4 } }}>
          <Box component="img" src={NeotelBussinessCard7} alt="Brand" sx={{ width: { xs: "100%", md: "80%" }, height: "auto", marginBottom: { xs: 2, md: 0 } }} />
        </Grid>
      </Grid>
      {/* between Section */}
      <Grid
        container
        spacing={0}
        alignItems="center"
        justifyContent="center"
        sx={{ flexDirection: { xs: "column", md: "row" }, paddingBottom: 0 }}
      >
        <Grid item xs={12} sx={{ paddingBottom: 0, position: "relative" }}>
          {/* Make the Grid container position relative */}
          <Card sx={{ maxWidth: "100%", boxShadow: 0, borderRadius: 0 }}>
            <CardMedia
              component="img"
              image={NeotelBussinessBG3}
              alt="Commitment"
              sx={{
                width: "100%",
              }}
            />
          </Card>

          {!isSmallScreen && (
            <Box
              sx={{
                position: "absolute",
                top: "15%", // Adjust vertical positioning
                right: "5%", // Move the text to the right side
                textAlign: "left",
                color: "white", // Ensure text is visible on the image
                maxWidth: "45%",
                zIndex: 1, // Higher z-index ensures text is above the image
              }}
            >
              <Typography
                sx={{
                  fontSize: { lg: "40px", md: "40px", xs: "30px" },
                  fontWeight: "bold",
                  marginBottom: "8px",
                  color: "white",
                  maxWidth: 400,
                }}
              >
                Internet of Things
                (IoT) Solutions
              </Typography>

              <List
                sx={{
                  padding: 0,
                  listStyleType: "disc",
                  pl: 2, // Indentation for the list
                  "& .MuiListItem-root": {
                    display: "list-item",
                    paddingLeft: 0, // Remove default padding
                    marginBottom: "-15px", // Reduce space between list items
                  },
                  "& .MuiTypography-root": {
                    fontSize: "15px", // Set the font size for list text
                    lineHeight: "1.4", // Adjust line height for better readability
                  },
                }}
              >
                <ListItem>
                  <ListItemText
                    primary="IoT Device Management:
                    Solutions for businesses to manage, monitor,
                    and secure their IoT devices, from smart meters to connected sensors
                    and wearables."
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="IoT Data Analytics:
                    Advanced analytics platforms to gather, analyse, and
                    interpret data from IoT devices to optimize business operations and
                    decision-making."
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Connected Business Solutions:
                    Use of IoT to automate processes,
                    improve efficiency, and reduce costs (e.g., smart building solutions,
                    supply chain monitoring, asset management)."
                  />
                </ListItem>

              </List>
            </Box>
          )}
        </Grid>
      </Grid>
      <Grid container spacing={10} sx={{ paddingTop: 10, padding: 4 }}>
        <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Box component="img" src={NeotelBussinessCard6} alt="Brand" sx={{ width: { xs: "100%", md: "80%" }, height: "auto", marginBottom: { xs: 2, md: 0 } }} />
        </Grid>
        <Grid item xs={12} md={6} sx={{ padding: 4 }}>
          <Typography sx={{ fontWeight: "bold", fontSize: { lg: "40px", md: "40px", xs: "30px" }, marginBottom: 0, maxWidth: 350 }}>
            Business Analytics &
            Reporting Tools
          </Typography>

          <List
            sx={{
              listStyleType: "disc", // Adds bullet points
              paddingLeft: 2,        // Indentation for the bullets
              "& .MuiListItem-root": {
                display: "list-item", // Ensures list item format
                paddingLeft: 0,       // No extra padding for items
                marginBottom: "8px",  // Spacing between items
              },
            }}
          >
            <ListItem>
              <Typography
                sx={{
                  textAlign: "left",
                  fontSize: "15px",
                
                  maxWidth: 350,
                }}
              >
                <strong>  Data Analytics Platforms: </strong>

                Business intelligence tools that help
                organizations track performance, generate insights, and make
                data-driven decisions.
              </Typography>
            </ListItem>
            <ListItem>
              <Typography
                sx={{
                  textAlign: "left",
                  fontSize: "15px",
                  
                  maxWidth: 370,
                }}
              >
                <strong>  Reporting Tools: </strong>


                Customizable reports on sales, operations, customer
                behaviour, and more, helping businesses track key performance
                indicators (KPIs).
              </Typography>
            </ListItem>
            <ListItem>
              <Typography
                sx={{
                  textAlign: "left",
                  fontSize: "15px",
                  
                  maxWidth: 370,
                }}
              >
                <strong> Predictive Analytics : </strong>



                Leverage historical data and advanced algorithms
                to forecast trends and optimize business strategies.
              </Typography>
            </ListItem>

          </List>

          {/* <Box sx={{ marginTop: 3 }}>
            <Button variant="contained" sx={{ borderRadius: "50px", paddingX: 4, paddingY: 1.5, fontSize: "14px", fontWeight: "bold", backgroundColor: "#F8B413", color: "black" }}>
              Get Started
            </Button>
          </Box> */}
        </Grid>
      </Grid>
      {/* Content Section 2*/}
      <Grid container spacing={10} sx={{ paddingTop: 10, paddingLeft: { lg: 18, md: 0, xs: 0 }, paddingRight: { lg: 13.5, md: 0, xs: 0 }, padding: 4 }}>

        <Grid
          item
          xs={12}
          md={6}
          sx={{
            padding: { lg: 4, md: 4, sm: 0, xs: 10 },
            textAlign: { xs: "left", md: "left" },
            margin: { lg: 0, md: 0, sm: 4, xs: 4 }

          }}
        >
          <Typography
            sx={{ fontWeight: "bold", fontSize: { lg: "40px", md: "40px", xs: "30px" }, marginBottom: 2, paddingTop: { lg: 3, md: 0, xs: 0 } }}
          >
            Professional
            Services &
            Consultancy
          </Typography>
          <List
            sx={{
              listStyleType: "disc", // Adds bullet points
              paddingLeft: 2,        // Indentation for the bullets
              "& .MuiListItem-root": {
                display: "list-item", // Ensures list item format
                paddingLeft: 0,       // No extra padding for items
                marginBottom: "8px",  // Spacing between items
              },
            }}
          >
            <ListItem>
              <Typography
                sx={{
                  textAlign: "left",
                  fontSize: "15px",
                  
                  maxWidth: 350,
                }}
              >
                <strong>IT Consulting: </strong>



                Expert advice to help businesses optimize their
                technology infrastructure, from digital transformation strategies to
                system integration.
              </Typography>
            </ListItem>
            <ListItem>
              <Typography
                sx={{
                  textAlign: "left",
                  fontSize: "15px",
                  
                  maxWidth: 350,
                }}
              >
                <strong> Project Management: </strong>



                Professional services to ensure that IT projects are
                delivered on time and within budget, from planning to execution.
              </Typography>
            </ListItem>
            <ListItem>
              <Typography
                sx={{
                  textAlign: "left",
                  fontSize: "15px",
                  
                  maxWidth: 350,
                }}
              >
                <strong> Business Process Optimization: </strong>


                Consulting to streamline and improve
                business operations, increase productivity, and reduce costs.
              </Typography>
            </ListItem>

          </List>
          {/* <Box sx={{ marginTop: 3 }}>
            <Button
              variant="contained"
              sx={{
                borderRadius: "50px",
                paddingX: 4,
                paddingY: 1.5,
                fontSize: "14px",
                fontWeight: "bold",
                backgroundColor: "#F8B413",
                color: "black",
              }}

            >
              Get Started
            </Button>
          </Box> */}
        </Grid>

        <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "flex-start", margin: { lg: 0, md: 0, sm: 4, xs: 4 } }}>
          <Box component="img" src={NeotelBussinessCard9} alt="Brand" sx={{ width: { xs: "100%", md: "80%" }, height: "auto", marginBottom: { xs: 2, md: 0 } }} />
        </Grid>
      </Grid>
      {/* /btween Secction */}
      <Grid
        container
        spacing={0}
        alignItems="center"
        justifyContent="center"
        sx={{ flexDirection: { xs: "column", md: "row" }, paddingBottom: 0 }}
      >
        <Grid item xs={12} sx={{ paddingBottom: 0, position: "relative" }}>
          {/* Make the Grid container position relative */}
          <Card sx={{ maxWidth: "100%", boxShadow: 0, borderRadius: 0 }}>
            <CardMedia
              component="img"
              image={NeotelBussinessBG4}
              alt="Commitment"
              sx={{
                width: "100%",
              }}
            />
          </Card>

          {!isSmallScreen && (
            <Box
              sx={{
                position: "absolute",
                top: "15%", // Adjust vertical positioning
                left: "5%", // Move the text to the left side
                textAlign: "left",
                color: "white", // Ensure text is visible on the image
                maxWidth: "45%",
                zIndex: 1, // Higher z-index ensures text is above the image
              }}
            >
              <Typography
                sx={{
                  fontSize: { lg: "40px", md: "40px", xs: "30px" },
                  fontWeight: "bold",
                  marginBottom: "8px",
                  color: "white",
                  maxWidth: 350
                }}
              >
                Why Choose
                Neotel’s Business
                Products?
              </Typography>



              <List
                sx={{
                  padding: 0,
                  listStyleType: "disc",
                  pl: 2, // Indentation for the list
                  "& .MuiListItem-root": {
                    display: "list-item",
                    paddingLeft: 0, // Remove default padding
                    marginBottom: "-15px", // Reduce space between list items
                  },
                  "& .MuiTypography-root": {
                    fontSize: "15px", // Set the font size for list text
                    lineHeight: "1.4", // Adjust line height for better readability
                  },
                }}
              >
                <ListItem>
                  <ListItemText
                    primary="Tailored Solutions:
                    Our products are designed to meet the unique needs
                    of each business, whether you are a small startup or a large enterprise."
                  />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Reliable & Secure:
                  With Neotel’s advanced technologies, you can rely on
                  high uptime, data security, and scalability." />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Customer-Centric:
                    We offer dedicated support to help you choose the
                    right products and ensure smooth implementation."
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Innovation:
                    We constantly evolve and innovate our product offerings to
                    ensure your business stays ahead of the curve in an ever-changing
                    digital landscape."
                  />
                </ListItem>
              </List>
            </Box>
          )}
        </Grid>

      </Grid>
      <Grid
        container
        spacing={0}
        justifyContent="center"
        alignItems="center" // Centers content vertically for small screens
        sx={{
          paddingTop: 10,
          paddingLeft: { lg: 10, md: 5, sm: 0, xs: 0 },
          paddingRight: { lg: 10, md: 5, sm: 0, xs: 0 },
          flexDirection: { xs: "column", lg: "row" }, // Stack items for small screens, row for large screens
        }}
      >
        <Grid
          item
          lg={6}
          xs={12}
          sx={{
            padding: { xs: 0 },
            textAlign: { xs: "center", lg: "left" }, // Center align text for small screens
          }}
        >
          <Typography
            sx={{
              // maxWidth: 500,
              margin: { xs: "0 auto 1rem", lg: "0 0 1rem" }, // Center text for small screens
              color: "black",
              fontSize: "15px",
              textAlign: { xs: "center", lg: "justify" },
              padding:{xs:1,sm:1,md:0,lg:0}
            }}
          >
            For more information on our business products or to get started, please contact us.
          </Typography>
          <Typography
            sx={{
              maxWidth: 400,
              margin: { xs: "0 auto 1rem", lg: "0 0 1rem" }, // Center text for small screens
              color: "black",
              fontSize: "16px",
              fontWeight: "440",
              textAlign: { xs: "center", lg: "justify" }, // Center for small screens, justify for large
              lineHeight: 1.6,
            }}
          >
            <div>Seiuli Deepak Khanna</div>
            <div>CEO & Director</div>
            <div>Telikom Nauri Corporation t/a Neotel</div>
            <div>Phone: +674 9990000</div>
            <div>Email: business@neotel.nr</div>
          </Typography>
        </Grid>

        <Grid
          item
          lg={6}
          xs={12}
          sx={{
            padding: 0,
            display: "flex",
            justifyContent: "center", // Center image for small screens
            alignItems: "center", // Center image vertically for small screens
          }}
        >
          <Card
            sx={{
              maxWidth: "100%",
              marginTop: { xs: 0, lg: -5 }, // Remove negative margin for small screens
              maxHeight: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
              boxShadow: "none",
            }}
          >
            <CardMedia
              component="img"
              sx={{
                height: "320px",
                width: { lg: "auto", xs: "100%" },
                objectFit: "contain",
              }}
              image={DeepakImage}
              title="Profile Picture"
            />
          </Card>
        </Grid>
      </Grid>


    </Box>
  );
}
