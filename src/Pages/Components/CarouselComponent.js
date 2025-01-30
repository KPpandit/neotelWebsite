import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Neotel_Homepage from "../../Images/HomePage_Neotel.jpg";
import HomeDrowerIMage from "../../Images/HomePage_Neotel3.png";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function CarouselComponent() {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    // Navigate to the Home page and scroll to the ValuePlan section
    navigate("/#value-plan");
    const valuePlanSection = document.getElementById("value-plan");
    if (valuePlanSection) {
      valuePlanSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Grid container spacing={0} sx={{ paddingTop: 5 }}>
      <Grid item xs={12}>
        <div
          id="carouselExampleInterval"
          className="carousel slide"
          data-bs-ride="carousel" // Enables automatic scrolling
        >
          <div className="carousel-inner">
            {/* First Slide */}
            <div className="carousel-item active" data-bs-interval="5000"> {/* Auto-scrolls after 5 seconds */}
              <img
                src={Neotel_Homepage}
                className="d-block w-100"
                alt="Carousel Background"
                style={{
                  height: "auto",
                  width: "100%",
                  maxHeight: "500px", // Keeps height consistent for large screens
                  objectFit: "cover", // Makes sure the image fills the container without distortion
                  minHeight: "300px", // Ensures that the image has a minimum height on smaller screens
                }}
              />
              <div
                className="carousel-caption d-flex flex-column align-items-start"
                style={{
                  position: "absolute",
                  top: "20%",
                  left: "10%",
                  textAlign: "left",
                  color: "#4A59A7",
                  maxWidth: "100%",
                  overflow: "hidden", // Prevent text overflow
                }}
              >
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <Typography
                      variant="h4"
                      component="h1"
                      sx={{
                        fontWeight: "bold",
                        color: "black",
                        mb: 0,
                        fontSize: { xs: "1rem", sm: "2rem", lg: "2.5rem" },
                      }}
                    >
                      Welcome to Neotel
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={10} md={8}>
                    <Typography
                      variant="h3"
                      component="p"
                      sx={{
                        fontWeight: "bold",
                        mb: { xs: 0, md: 2, lg: 2 },
                        lineHeight: 1.0,
                        fontSize: { xs: "1.2rem", sm: "2.5rem", lg: "3.5rem" },
                      }}
                    >
                      Connect with Confidence
                    </Typography>
                  </Grid>
                </Grid>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#DBA818",
                    color: "black",
                    fontWeight: "bold",
                    py: { xs: 1, sm: 1.5, lg: 2 },
                    px: { xs: 2, sm: 3, lg: 4 },
                    fontSize: { xs: "0.8rem", sm: "1rem", lg: "1.2rem" },
                    mt: 2,
                    borderRadius: { xs: "15px", sm: "30px", lg: "50px" },
                    "&:hover": {
                      backgroundColor: "#C9961A",
                    },
                    width: { xs: "auto", sm: "fit-content", lg: "fit-content" },
                  }}
                  onClick={handleGetStartedClick}
                >
                  Get Started
                </Button>
              </div>
            </div>

            {/* Second Slide */}
            <div className="carousel-item" data-bs-interval="5000"> {/* Auto-scrolls after 5 seconds */}
              <img
                src={HomeDrowerIMage}
                className="d-block w-100"
                alt="Carousel Background"
                style={{
                  height: "auto",
                  width: "100%",
                  maxHeight: "500px", // Keeps height consistent for large screens
                  objectFit: "cover", // Makes sure the image fills the container without distortion
                  minHeight: "300px", // Ensures that the image has a minimum height on smaller screens
                }}
              />
              <div
                className="carousel-caption d-flex flex-column align-items-start"
                style={{
                  position: "absolute",
                  top: "20%",
                  textAlign: "left",
                  color: "#4A59A7",
                  maxWidth: "100%",
                  overflow: "hidden", // Prevent text overflow
                }}
              >
                <Grid container spacing={0}>
                  <Grid item xs={12}>
                    <Typography
                      variant="h4"
                      component="h1"
                      sx={{
                        fontWeight: "bold",
                        color: "white",
                        width: 350,
                        mb: 0,
                        fontSize: { xs: "1.3rem", sm: "2.5rem", lg: "3.5rem" },
                      }}
                    >
                      Innovating  for Tomorrow
                    </Typography>
                  </Grid>

                  <Grid item xs={12} sm={10} md={8}>
                    <Typography
                      variant="body1"
                      sx={{
                        paddingTop: 1,
                        fontSize: { xs: "0.6rem", sm: "0.9rem", lg: "0.9rem" },
                        marginBottom: { lg: "32px", md: "30px", sm: "0px", xs: "0px" },
                        lineHeight: 1.5,
                        color: "white",
                      }}
                    >
                      At Neotel, we are constantly pushing the boundaries of technology.
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={10} md={8}>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#DBA818",
                        color: "black",
                        fontWeight: "bold",
                        py: { xs: 1, sm: 1.5, lg: 2 },
                        px: { xs: 2, sm: 3, lg: 4 },
                        fontSize: { xs: "0.8rem", sm: "1rem", lg: "1.2rem" },
                        mt: 2,
                        borderRadius: { xs: "15px", sm: "30px", lg: "50px" },
                        "&:hover": {
                          backgroundColor: "#C9961A",
                        },
                        width: { xs: "auto", sm: "fit-content", lg: "fit-content" },
                      }}
                      onClick={handleGetStartedClick}
                    >
                      View Our Plans
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </div>
          </div>

          {/* Carousel Controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </Grid>
    </Grid>
  );
}
