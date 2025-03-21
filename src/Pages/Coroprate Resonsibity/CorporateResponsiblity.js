import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import coporateImage from "../../Images/coporateImage.png";
import corporateTopImage from "../../Images/corporateTopImage.png";
import trasnformation from "../../Images/trasnformation.png";
import CorporateRresponsibilityCard3 from "../../Images/CorporateRresponsibilityCard3.jpg";
import CorporateResponsibilityCard4 from "../../Images/CorporateResponsibilityCard4.jpg";
import CorporateReponsibilityCard5 from "../../Images/CorporateReponsibilityCard5.jpg";
import CorporateReponsibilityCard6 from "../../Images/CorporateReponsibilityCard6.jpg";
export default function CorporateResponsibility() {
  const navigate = useNavigate();
  const handleGetStarted = () => navigate("/about-company/careers/jobForm");

  return (
    <Box sx={{ paddingTop: 15 }}>
      {/* Hero Section */}
      <Grid container spacing={0} alignItems="center" justifyContent="center" sx={{ flexDirection: { xs: "column", md: "row" } }}>
        <Grid item xs={12} sx={{ paddingBottom: 10 }}>
          <Box>
            <img
              src={corporateTopImage}
              alt="Brand Banner"
              style={{ width: "100%", display: "block", height: '50%' }}
            />
          </Box>
          {/* <Box sx={{ width: "100%", height: { xs: "300px", sm: "400px", md: "500px" }, backgroundImage: `url(${corporateTopImage})`, backgroundSize: "cover", backgroundPosition: "center" }} /> */}
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h3" sx={{ fontWeight: "bold", marginBottom: 2, color: "black", textAlign: "center" }}>
            Corporate Responsibility
          </Typography>
          <Typography sx={{ maxWidth: 631, margin: "0 auto 1rem", color: "black", fontSize: "13px", fontWeight: "440", textAlign: "center" }}>
            At Neotel, we believe in making a positive impact beyond our business. Our corporate responsibility initiatives focus on Health, Education, Sports, and Environment. We are dedicated to creating a healthier, more educated, and environmentally sustainable world.

          </Typography>
          <Typography variant="h3" sx={{ margin: "0 auto 4rem", color: "black", fontWeight: "bold", textAlign: "center" }}>
            Core Values Driving <br /> Our Corporate Responsibility
          </Typography>
        </Grid>
      </Grid>

      {/* Content Section 1*/}
      <Grid container spacing={10}>
        <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Box component="img" src={coporateImage} alt="Brand" sx={{ width: { xs: "100%", md: "80%" }, height: "auto", marginBottom: { xs: 2, md: 0 } }} />
        </Grid>
        <Grid item xs={12} md={6} sx={{ padding: 4 }}>
          <Typography variant="h3" sx={{ fontWeight: "bold", color: "black", marginBottom: 2 }}>Respect for<br />
            the Environment</Typography>
          <Typography sx={{ maxWidth: 420, marginBottom: 2, textAlign: "justify", fontSize: "14px" }}>
            Neotel adopts environment-friendly practices across all
            our operations, including reducing energy consumption,
            minimizing waste, and supporting renewable energy
            initiatives
          </Typography>

          <Typography
            sx={{
              textAlign: "justify",
              fontSize: "14px",
              display: "flex",
              gap: "5px",
              maxWidth: 420,
            }}
          >
            <span>•</span>
            <span>
              We actively invest in technologies and processes that
              are comparatively more environment friendly. For
              example, we use renewable energy sources like solar
              panels as the primary source to power up our sites
              supported by battery, grid and generators.
            </span>
          </Typography>

          <Typography
            sx={{
              textAlign: "justify",
              fontSize: "14px",
              display: "flex",
              gap: "5px",
              maxWidth: 420,
              paddingTop: 2
            }}
          >
            <span>•</span>
            <span>
              Our products and services are designed with the
              environment in mind, ensuring that they are
              energy-efficient and built to last.
            </span>
          </Typography>




        </Grid>
      </Grid>
      {/* Content Section 2*/}
      <Grid container spacing={10} sx={{ paddingTop: 10, paddingLeft: { lg: 14, md: 0, xs: 0 }, paddingRight: { lg: 10, md: 0, xs: 0 } }}>

        <Grid
          item
          xs={12}
          md={6}
          sx={{
            padding: 4,
            textAlign: { xs: "center", md: "left" },
            // Center for small screens, right for medium and up

          }}
        >
          <Typography
            variant="h3"
            sx={{ fontWeight: "bold", marginBottom: 2, paddingTop: { lg: 3, md: 0, xs: 0 } }}
          >
            Giving Back to <br />
            the community
          </Typography>
          <Typography sx={{ maxWidth: 420, marginBottom: 2, textAlign: "justify", fontSize: "14px" }}>
            Our community is at the heart of everything we do, and
            we’re dedicated to giving back. By partnering with local
            organizations, non-profits, and charitable causes, we
            strive to make a real difference in the lives of those who
            need it most.
          </Typography>

          <Typography
            sx={{
              textAlign: "justify",
              fontSize: "14px",
              display: "flex",
              gap: "5px",
              maxWidth: 420,
            }}
          >
            <span>•</span>
            <span>
              Community Engagement:
              We sponsor sports
              programs, educational programs and offer
              scholarships to support the local community in Nauru.
            </span>
          </Typography>

          <Typography
            sx={{
              textAlign: "justify",
              fontSize: "14px",
              display: "flex",
              gap: "5px",
              maxWidth: 420,
              paddingTop: 2
            }}
          >
            <span>•</span>
            <span>
              Employee Volunteering:
              Our employees are
              encouraged to take part in volunteer opportunities and
              charitable initiatives that contribute to social
              well-being
            </span>
          </Typography>

        </Grid>

        <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "flex-start" }}>
          <Box component="img" src={trasnformation} alt="Brand" sx={{ width: { xs: "100%", md: "80%" }, height: "auto", marginBottom: { xs: 2, md: 0 } }} />
        </Grid>
      </Grid>
      {/* Content Section 3*/}
      <Grid container spacing={10} sx={{ paddingTop: 10 }}>
        <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Box component="img" src={CorporateRresponsibilityCard3} alt="Brand" sx={{ width: { xs: "100%", md: "80%" }, height: "auto", marginBottom: { xs: 2, md: 0 } }} />
        </Grid>
        <Grid item xs={12} md={6} sx={{ padding: 4 }}>
          <Typography variant="h3" sx={{ fontWeight: "bold", color: "black", marginBottom: 2 }}>Ethical Business <br />
            Practices</Typography>
          <Typography sx={{ maxWidth: 420, marginBottom: 2, textAlign: "justify", fontSize: "14px" }}>
            We operate with the highest standards of integrity,
            ensuring that all our actions and decisions reflect our
            core values of transparency, fairness, and
            accountability.
          </Typography>

          <Typography
            sx={{
              textAlign: "justify",
              fontSize: "14px",
              display: "flex",
              gap: "5px",
              maxWidth: 420,
            }}
          >
            <span>•</span>
            <span>
              Anti-Corruption and Fair Trade:
              Neotel adheres to
              strict anti-corruption policies and works with partners
              and suppliers who uphold ethical practices.
            </span>
          </Typography>

          <Typography
            sx={{
              textAlign: "justify",
              fontSize: "14px",
              display: "flex",
              gap: "5px",
              maxWidth: 420,
              paddingTop: 2
            }}
          >
            <span>•</span>
            <span>
              Diversity and Inclusion:
              We champion diversity and
              foster an inclusive workplace where all employees,
              regardless of background, feel valued and respected.
            </span>
          </Typography>




        </Grid>
      </Grid>
      {/* Content Section 4*/}
      <Grid container spacing={10} sx={{ paddingTop: 10, paddingLeft: { lg: 14, md: 0, xs: 0 }, paddingRight: { lg: 7, md: 0, xs: 0 } }}>

        <Grid
          item
          xs={12}
          md={6}
          sx={{
            padding: 4,
            textAlign: { xs: "center", md: "left" },
            // Center for small screens, right for medium and up

          }}
        >
          <Typography
            variant="h3"
            sx={{ fontWeight: "bold", marginBottom: 2, paddingTop: { lg: 3, md: 0, xs: 0 } }}
          >
            Employee<br />
            Well-being & <br />
            Safety
          </Typography>
          <Typography sx={{ maxWidth: 420, marginBottom: 2, textAlign: "justify", fontSize: "14px" }}>
            We are always working to provide a safe, supportive,
            and inclusive environment for our employees, offering
            competitive benefits, opportunities for professional
            growth, and programs designed to support mental and
            physical health.
          </Typography>
          <Typography sx={{ maxWidth: 420, marginBottom: 2, textAlign: "justify", fontSize: "14px" }}>
            We provide access to wellness programs that encourage
            work-life balance.
          </Typography>



        </Grid>

        <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "flex-start" }}>
          <Box component="img" src={CorporateResponsibilityCard4} alt="Brand" sx={{ width: { xs: "100%", md: "80%" }, height: "auto", marginBottom: { xs: 2, md: 0 } }} />
        </Grid>
      </Grid>
      {/* Content Section 5*/}
      <Grid container spacing={10} sx={{ paddingTop: 10 }}>
        <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Box component="img" src={CorporateRresponsibilityCard3} alt="Brand" sx={{ width: { xs: "100%", md: "80%" }, height: "auto", marginBottom: { xs: 2, md: 0 } }} />
        </Grid>
        <Grid item xs={12} md={6} sx={{ padding: 4 }}>
          <Typography variant="h3" sx={{ fontWeight: "bold", color: "black", marginBottom: 2 }}>Sustainable <br />
            Partnerships</Typography>
          <Typography sx={{ maxWidth: 420, marginBottom: 2, textAlign: "justify", fontSize: "14px" }}>
            We are always collaborating with businesses,
            organizations, and suppliers that share our
            commitment and vision for sustainable practices,
            ethical behaviour, and social impact so that we can
            together create a positive effect on the environment,
            society, and economy.
          </Typography>
        </Grid>
      </Grid>
      {/* Content Section 6*/}
      <Grid container spacing={0} sx={{ paddingTop: 10 }}>

        {/* First Image with Text on Right for Big Screens */}
        <Grid item xs={12} md={12}>
          <Box sx={{ position: 'relative' }}>
            <img
              src={CorporateReponsibilityCard5}
              alt="Brand Banner"
              style={{ width: "100%", display: "block", height: '50%' }}
            />
            <Box
              sx={{
                position: 'absolute',
                top: '45%',
                right: '8%',
                transform: 'translateY(-50%)',
                // backgroundColor: 'rgba(0, 0, 0, 0.6)',
                color: 'white',
                padding: '20px',
                borderRadius: '8px',
                width: '35%',
                display: { xs: 'none', md: 'block' } // Show only on big screens
              }}
            >
              <Typography sx={{ fontWeight: 'bold', fontSize: '38px', lineHeight: 1.2 }}>
                Our Goals for<br />the Future
              </Typography>

              <Typography sx={{ maxWidth: 420, marginBottom: 0, textAlign: "justify", fontSize: "14px" }}>
                We are constantly striving to improve our corporate
                responsibility efforts. Looking ahead, we are committed to:
              </Typography>

              <Typography
                sx={{
                  textAlign: "justify",
                  fontSize: "14px",
                  display: "flex",
                  gap: "5px",
                  maxWidth: 420,
                }}
              >
                <span>•</span>
                <span>
                  Expanding our community outreach programs and
                  supporting sports, health and education sectors
                </span>
              </Typography>
              <Typography
                sx={{
                  textAlign: "justify",
                  fontSize: "14px",
                  display: "flex",
                  gap: "5px",
                  maxWidth: 420,
                  paddingTop: 0
                }}
              >
                <span>•</span>
                <span>
                  Increasing employee volunteer hours.
                </span>
              </Typography>
              <Typography
                sx={{
                  textAlign: "justify",
                  fontSize: "14px",
                  display: "flex",
                  gap: "5px",
                  maxWidth: 420,
                  paddingTop: 0
                }}
              >
                <span>•</span>
                <span>
                  Ensuring that all of our products and services meet the
                  highest environmental and ethical standards.
                </span>
              </Typography>
            </Box>
          </Box>
        </Grid>

        {/* Second Image with Text on Left for Big Screens */}
        <Grid item xs={12} md={12}>
          <Box sx={{ position: 'relative' }}>
            <img
              src={CorporateReponsibilityCard6}
              alt="Brand Banner"
              style={{ width: "100%", display: "block", height: '50%' }}
            />
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '15%',
                transform: 'translateY(-50%)',
                // backgroundColor: 'rgba(0, 0, 0, 0.6)',
                color: 'white',
                padding: '20px',
                borderRadius: '8px',
                width: '35%',
                display: { xs: 'none', md: 'block' } // Show only on big screens
              }}
            >
              <Typography sx={{ fontWeight: 'bold', fontSize: '38px', lineHeight: 1.2, textAlign: 'left' }}>
                Our Goals for<br />the Future
              </Typography>

              <Typography sx={{ maxWidth: 350, marginBottom: 0, textAlign: "justify", fontSize: "14px" }}>
                We encourage our customers, partners, and
                employees to join us in making a difference.
                If you want to learn more about our corporate
                responsibility initiatives or get involved,
                please feel free to reach out to:
              </Typography>

              <Typography
                sx={{
                  textAlign: "justify",
                  fontSize: "14px",
                  display: "flex",
                  gap: "5px",
                  maxWidth: 420,
                  pt:1,
                  fontWeight:'bold'
                }}
              >
                
                Email: csr@neotel.nr
              </Typography>
              <Typography
                sx={{
                  textAlign: "justify",
                  fontSize: "14px",
                  display: "flex",
                  gap: "5px",
                  maxWidth: 420,
                   fontWeight:'bold',
                  pt:1
                }}
              >
                
                Phone: +674 2222123
              </Typography>
              
            </Box>
          </Box>
        </Grid>

      </Grid>



    </Box>
  );
}
