import React from "react";
import { Box, Typography, Divider } from "@mui/material";

export default function SitemapTree() {
  const sections = [
    {
      title: "About",
      links: [
        { name: "Partners", url: "http://122.185.196.10:8082/about-company/partners" },
        { name: "Our Team", url: "http://122.185.196.10:8082/about-company/management-team" },
        { name: "Who We Are", url: "http://122.185.196.10:8082/about-company/who-we-are" },
        { name: "Neotel Business", url: "http://122.185.196.10:8082/quick-access/my-neotel" },
        { name: "Management Team", url: "http://122.185.196.10:8082/about-company/management-team" },
        { name: "Corporate Responsibility", url: "http://122.185.196.10:8082/about-company/corporate-responsibility" },
      ],
    },
    {
      title: "Service",
      links: [
        { name: "Prepaid", url: "http://122.185.196.10:8082/quick-access/prepaid" },
        { name: "Postpaid", url: "http://122.185.196.10:8082/quick-access/postpaid" },
        { name: "Broadband", url: "http://122.185.196.10:8082/broadband" },
        { name: "Roaming", url: "http://122.185.196.10:8082/quick-access/roaming" },
        { name: "Special Offer", url: "http://122.185.196.10:8082/quick-access/special-offers" },
        { name: "Data Bundles", url: "http://122.185.196.10:8082/quick-access/special-offers" },
      ],
    },
   
    {
      title: "Contact",
      links: [
        { name: "Contact Us", url: "http://122.185.196.10:8082/help-at-hand/contact-us" },
        { name: "Locations", url: "http://122.185.196.10:8082/help-at-hand/store-locator" },
      ],
    },
    {
      title: "FAQ",
      links: [
        { name: "Prepaid FAQ's", url: "http://122.185.196.10:8082/help-at-hand/prepaid-faq's" },
        { name: "Postpaid FAQ's", url: "http://122.185.196.10:8082/help-at-hand/post-paid-faq's" },
        { name: "Data Bundles FAQ's", url: "http://122.185.196.10:8082/help-at-hand/data-bundles-faq's" },
        { name: "Roaming FAQ's", url: "http://122.185.196.10:8082/help-at-hand/roaming-faq's" },
      ],
    },
    {
      title: "Login",
      links: [
        { name: "Manage Account", url: "http://122.185.196.10:8082/help-at-hand/manage-your-account" },
        { name: "Register/Login", url: "http://122.185.196.10:8082/register" },
      ],
    },
    {
      title: "Career",
      links: [
        { name: "Career", url: "http://122.185.196.10:8082/about-company/careers" },
      ],
    },
    {
      title: "Brand",
      links: [
        { name: "Brand", url: "http://122.185.196.10:8082/about-company/brand" },
      ],
    },
    {
      title: "News",
      links: [
        { name: "Press Release", url: "http://122.185.196.10:8082/about-company/press-release" },
      ],
    },
    {
      title: "E-SIM",
      links: [
        { name: "Press Release", url: "http://122.185.196.10:8082/Esim" },
      ],
    },
    {
      title: "Tourist SIM",
      links: [
        { name: "Press Release", url: "http://122.185.196.10:8082/touristSim" },
      ],
    },
    
  ];

  return (
    <Box sx={{ padding: 4, backgroundColor: "#f9f9f9", borderRadius: 2, paddingTop: 20 }}>
      <Typography
        variant="subtitle1"
        gutterBottom
        sx={{ textAlign: "left", fontWeight: "bold" }}
      >
        <a
          href="http://122.185.196.10:8082/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "black" }}
        >
          Home
        </a>
      </Typography>
      <Divider sx={{ marginBottom: 2 }} />

      {/* Tree structure with sections displayed in separate lines */}
      <div className="tree-container" style={{ display: "flex", flexDirection: "column" }}>
        {sections.map((section, sectionIndex) => (
          <div key={sectionIndex} style={{ marginBottom: "20px" }}>
            {section.links.length === 1 ? (
              <a
                href={section.links[0].url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontWeight: "bold",
                  textDecorationLine: "underline",
                }}
              >
                {section.title}
              </a>
            ) : (
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: "bold",
                  marginBottom: "10px",
                  textDecoration: "underline",
                }}
              >
                {section.title}
              </Typography>
            )}
            <div className="child-nodes" style={{ display: "flex", flexDirection: "column" }}>
              {section.links.length > 1 &&
                section.links.map((link, linkIndex) => (
                  <div key={linkIndex} style={{ marginBottom: "5px" }}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none", color: "#0000EE" }}
                    >
                      {link.name}
                    </a>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </Box>
  );
}
