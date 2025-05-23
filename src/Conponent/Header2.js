import React, { useState, useEffect } from "react";
import { useTheme, AppBar, Toolbar, Box, CssBaseline, Button, IconButton, Typography, Divider, Menu, MenuItem, Tooltip, useMediaQuery, Drawer, List, ListItem, ListItemButton, ListItemText, Collapse } from "@mui/material";
import { Menu as MenuIcon, LocationOn, Email, AccessTime, Facebook, Twitter, Instagram, LinkedIn, YouTube, PersonAdd, ExpandLess, ExpandMore, Close as CloseIcon, X as XIcon } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import menuIcon from "../Images/menuIcon.png";

const Header = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md")); // Check for medium/tablet screens
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenuLabel, setOpenMenuLabel] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerSubmenus, setDrawerSubmenus] = useState({});
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const navigationLinks = [
    { label: "Home", route: "/" },
    { label: "Services", route: "/services" },
    { label: "Payment", route: "/buy" },
    {
      label: "About", route: "/about", submenu: [
        { label: "About us", route: "/about-company/aboutus" },
        { label: "Partners", route: "/about-company/partners" },
        { label: "Who We Are", route: "/about-company/who-we-are" },
      ]
    },
    {
      label: "News", route: "/news", submenu: [
        { label: "Press Release", route: "/about-company/press-release" },
      ]
    },
    {
      label: "Contact", route: "/contact", submenu: [
        { label: "Contact Us", route: "/help-at-hand/contact-us" },
      ]
    },
  ];

  const infoItems = [
    { text2: "Visit our Store", icon: <LocationOn sx={{ fontSize: "18px", color: "#A7AED5" }} />, text: "Civic Centre Complex", link: "https://maps.app.goo.gl/3UNzEXszFVtNQHBZA" },
    { text2: "Write to Us", icon: <Email sx={{ fontSize: "18px", color: "#A7AED5" }} />, text: "support@neotel.nr", link: "mailto:support@neotel.nr" },
    { text2: "Talk to Us", icon: <AccessTime sx={{ fontSize: "18px", color: "#A7AED5" }} />, text: "8:00 AM - 12:00 AM" },
  ];

  const socialMediaLinks = [
    { icon: <Facebook />, link: "https://tinyurl.com/FBNeotel" },
    { icon: <XIcon />, link: "https://x.com/NeotelNauru" },
    { icon: <Instagram />, link: "https://www.instagram.com/neotelnauru" },
    { icon: <LinkedIn />, link: "https://tinyurl.com/Linkedneotel" },
    { icon: <YouTube />, link: "https://tinyurl.com/YTneotel" },
  ];

  const handleMenuOpen = (event, link) => {
    if (anchorEl === event.currentTarget && openMenuLabel === link.label) handleMenuClose();
    else { setAnchorEl(event.currentTarget); setOpenMenuLabel(link.label); }
  };

  const handleMenuClose = () => { setAnchorEl(null); setOpenMenuLabel(null); };

  const toggleDrawer = (open) => setDrawerOpen(open);

  const toggleDrawerSubmenu = (label) => setDrawerSubmenus((prev) => ({ ...prev, [label]: !prev[label] }));

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible]);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ backgroundColor: "#FFFFFF", boxShadow: "none", transform: visible ? "translateY(0)" : "translateY(-100%)", transition: "transform 0.3s ease-in-out" }}>
        {!isSmallScreen && (
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              p: { xs: "0 10px", sm: "0 20px", md: "0 15px" },
              backgroundColor: "white",
              color: "grey",
              gap: 1.5,
              marginBottom: -1,
              marginTop: -1,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: { xs: 2, sm: 3, md: 2 },
                flexWrap: "nowrap",
                overflow: "hidden",
              }}
            >
              {infoItems.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    minWidth: "auto",
                  }}
                >
                  {isMediumScreen ? (
                    // Only display text for medium/tablet screens

                    <Typography
                    component="a"
                    href={item.link || "#"}  // Fallback to "#" if item.link is undefined
                    target={item.link && item.link.startsWith("mailto:") ? "_self" : "_blank"}
                    rel="noopener noreferrer"
                    sx={{
                      fontSize: { xs: "10px", sm: "12px", md: "14px" },
                      color: "#A7AED5",
                      textAlign: "center",
                      textDecoration: "none",
                      cursor: item.link ? "pointer" : "default", // Show pointer cursor only if it's clickable
                      '&:hover': {
                        textDecoration: item.link ? "underline" : "none" // Hover effect only for clickable items
                      }
                    }}
                  >
                    {item.text2}
                  </Typography>
                  
                  
                  ) : (
                    // Display icon and text for larger screens
                    <>
                      {item.link ? (
                        <IconButton
                          color="inherit"
                          component="a"
                          href={item.link}
                          target={item.link.startsWith("mailto:") ? "_self" : "_blank"}
                          rel="noopener noreferrer"
                          sx={{ fontSize: "14px", display: "flex", alignItems: "center" }}
                        >
                          <Box sx={{ display: "flex", flexDirection: "column" }}>
                            <Typography
                              sx={{
                                fontSize: { xs: "10px", sm: "12px", md: "12px" },
                                color: "#A7AED5",
                                textAlign: "center",
                              }}
                            >
                              {item.text2}
                            </Typography>
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                              {item.icon}
                              <Typography
                                sx={{
                                  fontSize: { xs: "10px", sm: "12px", md: "12px" },
                                  color: "#A7AED5",
                                  marginLeft: "5px",
                                  textAlign: "left",
                                }}
                              >
                                {item.text}
                              </Typography>
                            </Box>
                          </Box>
                        </IconButton>
                      ) : (
                        <Box sx={{ display: "flex", flexDirection: "column" }}>
                          <Typography
                            sx={{
                              fontSize: { xs: "10px", sm: "12px", md: "12px" },
                              color: "#A7AED5",
                              textAlign: "center",
                            }}
                          >
                            {item.text2}
                          </Typography>
                          <Box sx={{ display: "flex", alignItems: "center" }}>
                            {item.icon}
                            <Typography
                              sx={{
                                fontSize: { xs: "10px", sm: "12px", md: "12px" },
                                color: "#A7AED5",
                                marginLeft: "5px",
                                textAlign: "right",
                              }}
                            >
                              {item.text}
                            </Typography>
                          </Box>
                        </Box>
                      )}
                    </>
                  )}
                </Box>
              ))}
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                flexWrap: "nowrap",
              }}
            >
              <Button
                startIcon={
                  <PersonAdd sx={{ fontSize: { xs: "14px", sm: "16px", md: "14px" }, color: "#A7AED5" }} />
                }
                sx={{
                  textTransform: "none",
                  fontSize: { xs: "10px", sm: "11px", md: "10px" },
                  color: "grey",
                  minWidth: "90px",
                }}
                onClick={() => window.location.href = "https://selfcare.neotel.nr"}
              >
                Register/Login
              </Button>

              {socialMediaLinks.map((social, index) => {
                // Show only Facebook and X (Twitter) icons on medium screens
                if (isMediumScreen && (social.icon.type !== Facebook && social.icon.type !== XIcon && social.icon.type !== Instagram && social.icon.type !== LinkedIn && social.icon.type !== YouTube)) {
                  return null;
                }
                return (
                  <Tooltip key={index} title={`Go to ${social.link}`}>
                    <IconButton
                      color="inherit"
                      component="a"
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {social.icon}
                    </IconButton>
                  </Tooltip>
                );
              })}
            </Box>
          </Toolbar>
        )}
        <Divider sx={{ width: "100%", borderBottomWidth: 1, borderColor: "black" }} />
        <Toolbar sx={{ justifyContent: "space-between", minHeight: "48px", p: "0 30px" }}>
          <Box onClick={() => navigate("/")} sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
            <img src={menuIcon} alt="Neotel Logo" style={{ height: "80px", marginRight: "10px" }} />
          </Box>
          {!isSmallScreen ? (
            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              {navigationLinks.map((link) => (
                <Button key={link.label} onClick={(event) => link.submenu ? handleMenuOpen(event, link) : navigate(link.route)} sx={{ textTransform: "none", fontSize: "16px", color: "#000" }} endIcon={link.submenu ? (openMenuLabel === link.label ? <ExpandLess /> : <ExpandMore />) : null}>
                  {link.label}
                </Button>
              ))}
            </Box>
          ) : (
            <IconButton onClick={() => toggleDrawer(true)}><MenuIcon /></IconButton>
          )}
        </Toolbar>
      </AppBar>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose} MenuListProps={{ onMouseLeave: handleMenuClose }}>
        {navigationLinks.find((link) => link.label === openMenuLabel)?.submenu?.map((item, index) => (
          <MenuItem key={index}><a href={item.route} style={{ textDecoration: "none", color: "inherit" }}>{item.label}</a></MenuItem>
        ))}
      </Menu>
      <Drawer anchor="right" open={drawerOpen} onClose={() => toggleDrawer(false)}>
        <Box sx={{ width: 250, p: 2 }}>
          <IconButton onClick={() => toggleDrawer(false)} sx={{ mb: 2 }}><CloseIcon /></IconButton>
          <List>
            {navigationLinks.map((link) => (
              <React.Fragment key={link.label}>
                <ListItem disablePadding>
                  <ListItemButton onClick={() => link.submenu ? toggleDrawerSubmenu(link.label) : (navigate(link.route), toggleDrawer(false))}>
                    <ListItemText primary={link.label} />
                    {link.submenu && (drawerSubmenus[link.label] ? <ExpandLess /> : <ExpandMore />)}
                  </ListItemButton>
                </ListItem>
                {link.submenu && (
                  <Collapse in={drawerSubmenus[link.label]} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {link.submenu.map((subitem, subindex) => (
                        <ListItemButton key={subindex} sx={{ pl: 4 }} onClick={() => { navigate(subitem.route); toggleDrawer(false); }}>
                          <ListItemText primary={subitem.label} />
                        </ListItemButton>
                      ))}
                    </List>
                  </Collapse>
                )}
              </React.Fragment>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Header;