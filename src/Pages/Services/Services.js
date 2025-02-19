import {
  Button,
  Card,
  Container,
  Typography,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DownloadIcon from "@mui/icons-material/Download";

export default function Services() {
  const [plans, setPlans] = useState([]);
  const navigate = useNavigate();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    fetch("https://bssproxy01.neotel.nr/abmf-prepaid/api/prepaid/packs?pack_status=APPROVED")
      .then((response) => response.json())
      .then((data) => {
        // Filter out plans where price is $4
        const filteredPlans = data.filter((plan) => plan.pack_price !== 4);
        setPlans(filteredPlans);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleRowClick = (pack_id) => {
    navigate(`/123?pack_id=${pack_id}`);
  };

  return (
    <Container
      sx={{
        minHeight: "100vh",
        py: 20,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
      }}
    >
      {/* Title */}
      <Typography
        variant="h4"
        align="center"
        sx={{
          fontWeight: "bold",
          mb: 2,
          textTransform: "uppercase",
          color: "black",
          fontSize: { lg: "40px", md: "40px", xs: "30px" },
        }}
      >
        Discover Your Best Value Plan
      </Typography>

      {/* Responsive Table */}
      <Card
        sx={{
          width: "100%", // Full width for responsiveness
          borderRadius: 2,
          boxShadow: 3,
          overflow: "auto", // Allow scrolling on small screens
        }}
      >
        {isSmallScreen ? (
          // Mobile View: Stacked Layout
          <Grid container spacing={2} sx={{ p: 2 }}>
            {plans.map((plan) => (
              <Grid item xs={12} key={plan.pack_id}>
                <Card
                  sx={{
                    p: 2,
                    backgroundColor: "#4A5AA6",
                    color: "white",
                    cursor: "pointer",
                  }}
                  onClick={() => handleRowClick(plan.pack_id)}
                >
                  <Typography variant="h6" sx={{ color: "#ECAF20", fontWeight: "bold" }}>
                    {plan.pack_name}
                  </Typography>
                  <Typography>Price: ${plan.pack_price}</Typography>
                  <Typography>
                    Validity: {plan.validity} {plan.validity_type}
                  </Typography>
                  <Typography>
                    Data: {plan.assigned_data_balance === "931 GB" ? "Unlimited" : plan.assigned_data_balance}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        ) : (
          // Desktop View: Table Layout
          <Table sx={{ backgroundColor: "#4A5AA6" }}>
            <TableBody>
              {/* Plan Names */}
              <TableRow>
                <TableCell sx={{ fontWeight: "bold", color: "#ECAF20", fontSize: "18px" }}>Plan Name</TableCell>
                {plans.map((plan) => (
                  <TableCell key={plan.pack_id} sx={{ color: "white", fontSize: "16px" }} onClick={() => handleRowClick(plan.pack_id)}>
                    {plan.pack_name}
                  </TableCell>
                ))}
              </TableRow>

              {/* Prices */}
              <TableRow>
                <TableCell sx={{ fontWeight: "bold", color: "#ECAF20", fontSize: "18px" }}>Price</TableCell>
                {plans.map((plan) => (
                  <TableCell key={plan.pack_id} sx={{ color: "white", fontSize: "16px" }} onClick={() => handleRowClick(plan.pack_id)}>
                    ${plan.pack_price}
                  </TableCell>
                ))}
              </TableRow>

              {/* Validity */}
              <TableRow>
                <TableCell sx={{ fontWeight: "bold", color: "#ECAF20", fontSize: "18px" }}>Validity</TableCell>
                {plans.map((plan) => (
                  <TableCell key={plan.pack_id} sx={{ color: "white", fontSize: "16px" }} onClick={() => handleRowClick(plan.pack_id)}>
                    {plan.validity} {plan.validity_type}
                  </TableCell>
                ))}
              </TableRow>

              {/* Data */}
              <TableRow>
                <TableCell sx={{ fontWeight: "bold", color: "#ECAF20", fontSize: "18px" }}>Data</TableCell>
                {plans.map((plan) => (
                  <TableCell key={plan.pack_id} sx={{ color: "white", fontSize: "16px" }} onClick={() => handleRowClick(plan.pack_id)}>
                    {plan.assigned_data_balance === "931 GB" ? "Unlimited" : plan.assigned_data_balance}
                  </TableCell>
                ))}
              </TableRow>
            </TableBody>
          </Table>
        )}
      </Card>
    </Container>
  );
}