import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import privacyBg from "../../Images/privacyBg.jpg";
import Neotel_Logo from "../../../src/Images/Neotel_Logo.png";
import { useNavigate } from "react-router-dom";

export default function PrivacyPolicy() {
  const navigate = useNavigate();

  return (
    <Box sx={{paddingTop:18}}> 
      {/* Background Section */}
     

      {/* Privacy Policy Heading */}
      <Typography
        variant="h6"
        sx={{
          marginBottom: 2,
          paddingLeft: 4,
          textAlign: "left",
          fontWeight: "bold",
          color: "#233A7E",
        }}
      >
        Privacy Policy
      </Typography>

      {/* Content Section */}
      <Paper sx={{ padding: 3, margin: 2 ,fontSize:'12px'}}>
        <Typography variant="h6" sx={{ marginBottom: 1, fontWeight: "bold" }}>
          Effective Date: January 25, 2025
        </Typography>
        <Typography sx={{ marginBottom: 2 ,fontSize:'12px'}}>
          Neotel is committed to protecting your privacy and complying with
          applicable data protection laws. This Privacy Policy explains how we
          collect, use, store, and protect your personal information. By using
          our services or interacting with our websites, apps, or products, you
          consent to the practices described in this policy.
        </Typography>
        <Typography sx={{ marginBottom: 2 ,fontSize:'12px'}}>
          This Privacy Policy applies to all Neotel businesses and entities
          globally.
        </Typography>

        {/* Section 1 */}
        <Typography variant="h6" sx={{ marginBottom: 1, fontWeight: "bold" ,fontSize:'12px'}}>
          1. Personal Information Collection
        </Typography>
        <Typography sx={{ marginBottom: 2 ,fontSize:'12px'}}>
          Neotel collects personal information that you provide to us knowingly
          and voluntarily. We collect information when you:
        </Typography>
        <Typography component="ol" sx={{ marginBottom: 2 ,fontSize:'12px'}}>
          <li>1 . Use our products, services, or apps, or opt into additional features.</li>
          <li>2 . Register or make customer inquiries.</li>
          <li>3 . Respond to communications, such as surveys, emails, or SMS messages.</li>
          <li>4 .
            Interact with our websites or services (e.g., submitting forms, completing surveys, using online features).
          </li>
          <li>5 . Participate in our social media pages, contests, or promotional events.</li>
          <li>6 . Provide information via our customer service centers, dealers, or sales channels.</li>
        </Typography>


        {/* Section 2 */}
        <Typography variant="h6" sx={{ marginBottom: 1, fontWeight: "bold" ,fontSize:'12px'}}>
          2. Types of Information We Collect
        </Typography>
        <Typography sx={{ marginBottom: 2 ,fontSize:'12px'}}>
          The personal information we collect includes, but is not limited to:
        </Typography>
        <Typography component="ul" sx={{ marginBottom: 2 ,fontSize:'12px'}}>
          <li>1 . <strong>Contact Information : </strong> Name, address, email address, phone number.</li>
          <li>2 . <strong>Identification Information : </strong>
            Passport ID, tax number, social
            security number, driver’s license, date of birth.
          </li>
          <li>3 . <strong>Demographic Information : </strong> Age, marital status, gender.</li>
          <li>4 . <strong> Media : </strong>
            Photographs, such as those submitted for contests or
            promotional events.
          </li>
          <li>5 .  <strong> Service Preferences :  </strong>
            Service preferences, friends and family
            details for service plans, credit limits.
          </li>
          <li>6 . <strong> Financial Information :  </strong>  Banking details, payment transactions, billing information.</li>
          <li>7 . <strong> Usage Data : </strong>  Account balances, transaction history, call usage, loyalty points.</li>
        </Typography>

        {/* Section 3 */}
        <Typography variant="h6" sx={{ marginBottom: 1, fontWeight: "bold" ,fontSize:'12px'}}>
          3. How We Use Your Information
        </Typography>
        <Typography component="ul" sx={{ marginBottom: 2 ,fontSize:'12px'}}>
          <li>1 . Provide and support the products and services you have requested.</li>
          <li>2 . Personalize your experience and offer tailored services.</li>
          <li>3 . Respond to inquiries, customer service requests, and support issues.</li>
          <li>4 . Process transactions, manage billing, and comply with legal obligations.</li>
          <li>5 . Improve our services, conduct marketing activities, and analyze usage patterns.</li>
          <li>6 . Protect our services from fraud and comply with legal and regulatory requirements.</li>
        </Typography>

        {/* Section 4 */}
        <Typography variant="h6" sx={{ marginBottom: 1, fontWeight: "bold" ,fontSize:'12px'}}>
          4. Mobile Applications and Third-Party Services
        </Typography>
        <Typography sx={{ marginBottom: 2 ,fontSize:'12px'}}>
          Neotel may offer mobile applications that collect information about
          your device or you. If you register for an app, we collect data in
          accordance with this Privacy Policy. You can stop the data collection
          at any time by uninstalling the app or contacting us to opt out.
        </Typography>
        <Typography sx={{ marginBottom: 2 ,fontSize:'12px'}}>
          When using third-party apps or services, please note that their
          privacy practices are not governed by this policy. We encourage you
          to review their privacy policies before using such services.
        </Typography>

        {/* Section 5 */}
        <Typography variant="h6" sx={{ marginBottom: 1, fontWeight: "bold",fontSize:'12px' }}>
          5. Links to Third-Party Sites
        </Typography>
        <Typography sx={{ marginBottom: 2 ,fontSize:'12px'}}>
          Our website may contain links to third-party websites not controlled
          by Neotel. These third-party sites have their own privacy policies.
          We recommend reviewing the privacy policies of those sites before
          providing personal information.
        </Typography>

        {/* Section 6 */}
        <Typography variant="h6" sx={{ marginBottom: 1, fontWeight: "bold" ,fontSize:'12px'}}>
          6. Sharing of Personal Information
        </Typography>
        <Typography sx={{ marginBottom: 2 ,fontSize:'12px'}}>
          Neotel does not sell, trade, or share your personal information except
          in the following cases:
        </Typography>
        <Typography component="ul" sx={{ marginBottom: 2 ,fontSize:'12px'}}>
          <li>1 . <strong>Legal Requirements : </strong>
            If required by law, such as a subpoena,
            government request, or legal process.
          </li>
          <li>2 . <strong>Service Providers : </strong>
            With trusted third-party service providers who
            assist in operations, customer service, and marketing. These parties
            are contractually bound to use your data solely for the specified
            purpose.
          </li>
          <li>3 . <strong> Business Partners : </strong>
            For marketing purposes, we may share
            non-personally identifiable information in aggregated form.
          </li>
          <li>4 . <strong>Affiliates and Subsidiaries : </strong>
            To support our business operations and
            for marketing and customer service purposes.
          </li>
        </Typography>

        {/* Section 7 */}
        <Typography variant="h6" sx={{ marginBottom: 1, fontWeight: "bold" ,fontSize:'12px'}}>
          7. Data Transfers
        </Typography>
        <Typography sx={{ marginBottom: 2 ,fontSize:'12px'}}>
          Neotel ensures that personal data is handled securely and in
          compliance with applicable laws. We may transfer data to countries
          that do not have the same level of data protection. We take necessary
          steps to ensure that all data transfers comply with relevant data
          protection laws.
        </Typography>

        {/* Section 8 */}
        <Typography variant="h6" sx={{ marginBottom: 1, fontWeight: "bold" ,fontSize:'12px'}}>
          8. Data Retention
        </Typography>
        <Typography sx={{ marginBottom: 2 ,fontSize:'12px'}}>
          We retain personal data only as long as necessary to fulfill the
          purposes for which it was collected or as required by applicable laws.
        </Typography>
        <Typography variant="h6" sx={{ marginBottom: 1, fontWeight: "bold" ,fontSize:'12px'}}>
          9. Data Security

        </Typography>
        <Typography sx={{ marginBottom: 2 ,fontSize:'12px'}}>
          Neotel employs physical, electronic, and administrative measures to protect your data. This includes encryption, firewalls, intrusion detection systems, and access controls to safeguard your information. However, no security system is perfect, and we cannot guarantee the absolute security of your data.
        </Typography>
        <Typography variant="h6" sx={{ marginBottom: 1, fontWeight: "bold",fontSize:'12px' }}>
          10. Cookies and Tracking Technologies
        </Typography>
        <Typography sx={{ marginBottom: 2 ,fontSize:'12px'}}>
          Our websites use cookies and similar technologies to improve your experience. Cookies help us remember your preferences and enhance the performance of our services. You can manage or disable cookies through your browser settings. Please note that some website functionalities may be limited if cookies are disabled.
        </Typography>
        <Typography variant="h6" sx={{ marginBottom: 1, fontWeight: "bold",fontSize:'12px' }}>
          11. Your Rights

        </Typography>
        <Typography sx={{ marginBottom: 2 ,fontSize:'12px'}}>
          Depending on your location, you may have the following rights regarding your personal information:

        </Typography>
        <Typography component="ul" sx={{ marginBottom: 2 ,fontSize:'12px'}}>
          <li>1 . <strong> Access : </strong>
            Request a copy of the personal information we hold about you.
          </li>
          <li>2 . <strong>Correction : </strong>
            Request corrections to inaccurate or incomplete data.
          </li>
          <li>3 . <strong>Deletion : </strong>
            Request the deletion of your personal information, subject to certain legal restrictions.

          </li>
          <li>4 . <strong>Affiliates and Subsidiaries : </strong>
            To support our business operations and
            for marketing and customer service purposes.
          </li>
        </Typography>
      </Paper>
    </Box>
  );
}
