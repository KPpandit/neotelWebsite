import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import privacyBg from "../../Images/privacyBg.jpg";
import Neotel_Logo from "../../../src/Images/Neotel_Logo.png";
import { useNavigate } from "react-router-dom";

export default function TermsAndConditions() {
  const navigate = useNavigate();

  return (
    <Box sx={{ paddingTop: 18 }}>
      {/* Background Section */}


      {/* Privacy Policy Heading */}
      <Typography
        variant="h3"
        sx={{
          marginBottom: 2,
          paddingLeft: 4,
          textAlign: "left",
          fontWeight: "bold",
          color: "#233A7E",
        }}
      >
        Terms and Conditions

      </Typography>

      {/* Content Section */}
      <Paper sx={{ padding: 3, margin: 2 }}>
        <Typography variant="h6" sx={{ marginBottom: 1, fontWeight: "bold" }}>
          Effective Date: January 25, 2025

        </Typography>
        <Typography sx={{ marginBottom: 2 }}>
          Welcome to Neotel. These Terms and Conditions ("Agreement") govern your use of our website, services, and products. By accessing or using our website (the "Site") and any services, features, or products offered by Neotel ("Services"), you agree to comply with and be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our Site or Services.

        </Typography>


        {/* Section 1 */}
        <Typography variant="h6" sx={{ marginBottom: 1, fontWeight: "bold" }}>
          1. Acceptance of Terms

        </Typography>
        <Typography sx={{ marginBottom: 2 }}>
          By using the Site and/or Services, you agree to be bound by these Terms and Conditions and any additional terms and conditions applicable to specific services or features that may be offered. If you are using the Site and Services on behalf of an organization, you represent and warrant that you have the authority to bind that organization to these terms.


        </Typography>




        {/* Section 2 */}
        <Typography variant="h6" sx={{ marginBottom: 1, fontWeight: "bold" }}>
          2. Modifications to the Terms

        </Typography>
        <Typography sx={{ marginBottom: 2 }}>
          Neotel reserves the right to modify or update these Terms at any time, with or without notice. All changes will be posted on this page with an updated "Effective Date". By continuing to use the Site and Services after such changes, you agree to be bound by the revised terms.
        </Typography>


        {/* Section 3 */}
        <Typography variant="h6" sx={{ marginBottom: 1, fontWeight: "bold" }}>
          3. Use of the Website
        </Typography>
        <Typography sx={{ marginBottom: 2 }}>
          You agree to use the Site and Services only for lawful purposes and in accordance with these Terms. You shall not:

        </Typography>
        <Typography component="ol"
          sx={{
            marginBottom: 2,
            paddingLeft: 2, // Adjust left padding
            listStylePosition: "inside", // Ensures numbers align properly
            "& li": {
              marginBottom: 1.5, // Add spacing between list items
              textIndent: "0px", // Prevent text indentation
            },
          }}>
          <li>1 . Violate any applicable laws, regulations, or third-party rights.
          </li>
          <li>2 . Use the Site to transmit viruses, malware, or any other harmful code.</li>
          <li>3 . Attempt to gain unauthorized access to any part of the Site, or any system or network connected to it.
          </li>
          <li>4 . Use automated systems or software to extract or scrape data from the Site without Neotel’s express consent.
          </li>
          <li>5 . Post or transmit offensive, harmful, or illegal content.
          </li>

        </Typography>
        <Typography sx={{ marginBottom: 2 }}>
          Neotel reserves the right to suspend or terminate your access to the Site and Services if we believe you have violated these terms.

        </Typography>

        {/* Section 4 */}
        <Typography variant="h6" sx={{ marginBottom: 1, fontWeight: "bold" }}>
          4. User Account Registration

        </Typography>
        <Typography sx={{ marginBottom: 2 }}>
          To access certain Services on the Site, you may be required to create an account. By creating an account, you agree to provide accurate, current, and complete information. You are responsible for maintaining the confidentiality of your account and password and for all activities that occur under your account. You agree to notify Neotel immediately of any unauthorized use of your account.

        </Typography>


        {/* Section 5 */}
        <Typography variant="h6" sx={{ marginBottom: 1, fontWeight: "bold" }}>
          5. Privacy

        </Typography>
        <Typography sx={{ marginBottom: 2 }}>
          Your use of the Site and Services is also governed by our www.neotel.nr  which outlines how we collect, use, and protect your personal information.

        </Typography>

        {/* Section 5 */}
        <Typography variant="h6" sx={{ marginBottom: 1, fontWeight: "bold" }}>
          6. Intellectual Property Rights


        </Typography>
        <Typography sx={{ marginBottom: 2 }}>
          The content, design, layout, and functionality of the Site and Services, including all text, graphics, logos, images, videos, and software, are owned by or licensed to Neotel and are protected by copyright, trademark, and other intellectual property laws.


        </Typography>
        <Typography sx={{ marginBottom: 2 }}>
          You may not reproduce, distribute, modify, or otherwise exploit the Site’s content without prior written consent from Neotel, except for personal, non-commercial use.
        </Typography>


        {/* Section 5 */}
        <Typography variant="h6" sx={{ marginBottom: 1, fontWeight: "bold" }}>
          7. Product and Service Descriptions



        </Typography>
        <Typography sx={{ marginBottom: 2 }}>
          Neotel strives to ensure that all product and service descriptions on the Site are accurate. However, we do not warrant that descriptions, prices, or availability are error-free, and we reserve the right to correct any errors or omissions.



        </Typography>
        <Typography sx={{ marginBottom: 2 }}>
          If you are not satisfied with a product or service, you may be entitled to a refund or exchange, subject to our return or refund policy (if applicable).

        </Typography>

        {/* Section 5 */}
        <Typography variant="h6" sx={{ marginBottom: 1, fontWeight: "bold" }}>
          8. Limitation of Liability



        </Typography>
        <Typography sx={{ marginBottom: 2 }}>
          To the fullest extent permitted by law, Neotel shall not be liable for any indirect, incidental, special, or consequential damages, or loss of data, profits, or business opportunities, arising from your use of the Site or Services, even if Neotel has been advised of the possibility of such damages.
        </Typography>
        <Typography sx={{ marginBottom: 2 }}>
          Neotel’s total liability to you, for any reason and under any cause of action, shall not exceed the amount paid by you for the specific Service or product giving rise to the claim.
        </Typography>

        {/* Section 5 */}
        <Typography variant="h6" sx={{ marginBottom: 1, fontWeight: "bold" }}>
          9. Dispute Resolution




        </Typography>
        <Typography sx={{ marginBottom: 2 }}>
          Any disputes related to these Terms and Conditions or your use of the Site and Services shall be resolved through binding arbitration, rather than in court, except that you may seek injunctive relief in a court of competent jurisdiction for any breach of intellectual property rights.

        </Typography>
        <Typography sx={{ marginBottom: 2 }}>
          The arbitration shall be conducted in accordance with the rules of the [Arbitration Organization] in the jurisdiction where Neotel operates. Any decision or award rendered by the arbitrator(s) shall be final and binding.
        </Typography>


        {/* Section 5 */}
        <Typography variant="h6" sx={{ marginBottom: 1, fontWeight: "bold" }}>
          10. Governing Law





        </Typography>
        <Typography sx={{ marginBottom: 2 }}>
          These Terms and Conditions shall be governed by and construed in accordance with the laws of The Republic of Nauru, without regard to its conflict of law principles.

        </Typography>

        {/* Section 5 */}
        <Typography variant="h6" sx={{ marginBottom: 1, fontWeight: "bold" }}>
          11. Termination
        </Typography>
        <Typography sx={{ marginBottom: 2 }}>
          Neotel reserves the right to suspend or terminate your access to the Site or Services at any time, without notice, for conduct that Neotel believes violates these Terms or is harmful to the interests of Neotel or others.

        </Typography>

        {/* Section 5 */}
        <Typography variant="h6" sx={{ marginBottom: 1, fontWeight: "bold" }}>
          12. Third-Party Links

        </Typography>
        <Typography sx={{ marginBottom: 2 }}>
          The Site may contain links to third-party websites or services that are not owned or controlled by Neotel. We are not responsible for the content, privacy policies, or practices of third-party websites. You acknowledge and agree that Neotel is not liable for any loss or damage caused by your use of any third-party website or service.
        </Typography>


        {/* Section 5 */}
        <Typography variant="h6" sx={{ marginBottom: 1, fontWeight: "bold" }}>
          13. Force Majeure


        </Typography>
        <Typography sx={{ marginBottom: 2 }}>
          Neotel shall not be held responsible for any failure or delay in performing its obligations under these Terms if such failure is caused by circumstances beyond its reasonable control, including but not limited to natural disasters, acts of war, terrorism, or government restrictions.
        </Typography>

        {/* Section 5 */}
        <Typography variant="h6" sx={{ marginBottom: 1, fontWeight: "bold" }}>
          14. Severability
        </Typography>
        <Typography sx={{ marginBottom: 2 }}>
          If any provision of these Terms is found to be invalid, illegal, or unenforceable, the remaining provisions will remain in full force and effect.
        </Typography>

        {/* Section 5 */}
        <Typography variant="h6" sx={{ marginBottom: 1, fontWeight: "bold" }}>
          15. Entire Agreement

        </Typography>
        <Typography sx={{ marginBottom: 2 }}>
          These Terms and Conditions, together with any other policies referenced herein, constitute the entire agreement between you and Neotel regarding your use of the Site and Services.
        </Typography>

        {/* Section 5 */}
        <Typography variant="h6" sx={{ marginBottom: 1, fontWeight: "bold" }}>
          16. Contact Information


        </Typography>
        <Typography sx={{ marginBottom: 2 }}>
          If you have any questions regarding these Terms and Conditions, please contact us:

        </Typography>
        <Typography component="ul" sx={{ marginBottom: 2, paddingLeft: 2 }}>
          <li>Phone (local): 123</li>
          <li>Phone (international): +674 2222123</li>
          <li>Email: support@neotel.nr</li>
        </Typography>


      </Paper>
    </Box>
  );
}
