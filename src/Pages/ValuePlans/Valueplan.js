import React from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  Button,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import tableImage from "../../Images/tableImage.png";
import Services from "../Services/Services";
const NeotelHomepagePlanTable = () => {
  const plans = [
    { plan: "EGOW", price: 4, voiceOnNet: "", voiceOffNet: 15, smsOffNet: 15, dataAnyUse: 10, validityDays: 2, dataSGB: 2, voiceCMOU: 20, smsCSMS: 2 },
    { plan: "ITSIBAB", price: 20, voiceOnNet: "", voiceOffNet: 10, smsOffNet: 10, dataAnyUse: 35, validityDays: 7, dataSGB: 1, voiceCMOU: 10, smsCSMS: 2 },
    { plan: "EAE", price: 35, voiceOnNet: "", voiceOffNet: "NIL", smsOffNet: "NIL", dataAnyUse: "NIL", validityDays: 30, dataSGB: 1, voiceCMOU: 10, smsCSMS: 2 },
    { plan: "EAPWE", price: 45, voiceOnNet: "", voiceOffNet: 20, smsOffNet: 20, dataAnyUse: 80, validityDays: 14, dataSGB: 1, voiceCMOU: 10, smsCSMS: 2 },
    { plan: "IYIBUR", price: 89, voiceOnNet: "", voiceOffNet: 100, smsOffNet: 60, dataAnyUse: 250, validityDays: 30, dataSGB: 1, voiceCMOU: 10, smsCSMS: 2 },
    { plan: "NEO 5G", price: 150, voiceOnNet: "", voiceOffNet: "NIL", smsOffNet: "NIL", dataAnyUse: "UNLIMITED", validityDays: 30, dataSGB: "#", voiceCMOU: "#", smsCSMS: 2 },
  ];

  return (
    <TableContainer component={Paper} sx={{ boxShadow: "none", border: "1px solid #ddd" }}>
      <Table>
        <TableHead>
          <TableRow sx={{ backgroundColor: "#F9B616" }}>
            <TableCell sx={{ fontWeight: "bold", color: "black" }}>PLAN</TableCell>
            <TableCell sx={{ fontWeight: "bold", color: "black" }}>PRICE $</TableCell>
            <TableCell sx={{ fontWeight: "bold", color: "black" }}>VOICE/SMS</TableCell>
            <TableCell sx={{ fontWeight: "bold", color: "black" }}>VOICE</TableCell>
            <TableCell sx={{ fontWeight: "bold", color: "black" }}>SMS</TableCell>
            <TableCell sx={{ fontWeight: "bold", color: "black" }}>DATA ANY USE (GB)</TableCell>
            <TableCell sx={{ fontWeight: "bold", color: "black" }}>VALIDITY DAYS</TableCell>
            <TableCell sx={{ fontWeight: "bold", color: "black" }}>DATA (S/GB)</TableCell>
            <TableCell sx={{ fontWeight: "bold", color: "black" }}>VOICE (c/MOU)</TableCell>
            <TableCell sx={{ fontWeight: "bold", color: "black" }}>SMS (c/SMS)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {plans.map((row, index) => (
            <TableRow
              key={index}
              sx={{
                backgroundColor: index % 2 === 0 ? "#FFFFFF" : "#F5F5F5", // Alternating row colors
                "&:hover": { backgroundColor: "#E0E0E0" }, // Hover effect
              }}
            >
              <TableCell>{row.plan}</TableCell>
              <TableCell>{row.price}</TableCell>
              <TableCell>{row.voiceOnNet}</TableCell>
              <TableCell>{row.voiceOffNet}</TableCell>
              <TableCell>{row.smsOffNet}</TableCell>
              <TableCell>{row.dataAnyUse}</TableCell>
              <TableCell>{row.validityDays}</TableCell>
              <TableCell>{row.dataSGB}</TableCell>
              <TableCell>{row.voiceCMOU}</TableCell>
              <TableCell>{row.smsCSMS}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};



// ValuePlan Component
export default function ValuePlan() {
  // APK file path (inside public folder)
  const apkFilePath = "/Neotel_1.2.59_IMS.apk";

  return (
    <Container
      sx={{
        py: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
        paddingTop: -10,
      }}
    >
      {/* Services Component */}
      <Services />

      {/* Subheading */}
      <Typography
        variant="h5"
        align="center"
        sx={{
          fontWeight: 500,
          mt: -10,
          fontSize: { lg: "40px", md: "40px", xs: "30px" },
          color: "black",
          paddingTop: 5,
        }}
      >
        Download this app to make voice calls on the Neotel network from Android
        devices
      </Typography>

      {/* Download Button */}
      <Button
        variant="contained"
        size="large"
        startIcon={<DownloadIcon />}
        sx={{
          mt: 2,
          px: 4,
          py: 1.5,
          fontSize: "1rem",
          fontWeight: "bold",
          textTransform: "none",
          backgroundColor: "#F9B616",
          color: "black",
          borderRadius: 2,
        }}
        component="a"
        href={apkFilePath} // Set the APK path
        download="Neotel_1.2.59_IMS.apk" // Ensures the file gets downloaded
      >
        Download App
      </Button>

      {/* NeotelHomepagePlanTable Component */}
      {/* <Box sx={{ width: "100%", mt: 4 }}>
        <NeotelHomepagePlanTable />
      </Box> */}
    </Container>
  );
}