import React, { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import {
  AppBar,
  Toolbar,
  Box,
  CssBaseline,
  Button,
  IconButton,
  Typography,
  Divider,
  Menu,
  MenuItem,
  Tooltip,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Collapse,
} from "@mui/material";
import {
  Menu as MenuIcon,
  LocationOn as LocationOnIcon,
  Email as EmailIcon,
  AccessTime as AccessTimeIcon,
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon,
  LinkedIn as LinkedInIcon,
  YouTube as YouTubeIcon,
  PersonAdd as PersonAddIcon,
  ShoppingBasket as ShoppingBasketIcon,
  ExpandLess,
  ExpandMore,
  ArrowBack as ArrowBackIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import menuIcon from "../Images/menuIcon.png";
import XIcon from '@mui/icons-material/X';
const Header = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenuLabel, setOpenMenuLabel] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerSubmenus, setDrawerSubmenus] = useState({});
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const navigationLinks = [
    { label: "Home", route: "/" },
    {
      label: "Services",
      route: "/services",
    },
    {
      label: "Payment",
      route: "/123",
    },
    {
      label: "About",
      route: "/about",
      submenu: [
        { label: "About us", route: "/about-company/aboutus" },
        { label: "Partners", route: "/about-company/partners" },
        { label: "Who We Are", route: "/about-company/who-we-are" },
      ],
    },
    {
      label: "News",
      route: "/news",
      submenu: [
        { label: "Press Release", route: "/about-company/press-release" },
      ],
    },
    {
      label: "Contact",
      route: "/contact",
      submenu: [
        { label: "Contact Us", route: "/help-at-hand/contact-us" },
      ],
    },
  ];

  const infoItems = [
    {
      icon: <LocationOnIcon sx={{ fontSize: "18px", color: "#A7AED5" }} />,
      text: "Civic Centre Complex",
      link: "https://maps.app.goo.gl/3UNzEXszFVtNQHBZA",
    },
    { icon: <EmailIcon sx={{ fontSize: "18px", color: "#A7AED5" }} />, text: "support@neotel.nr" },
    { icon: <AccessTimeIcon sx={{ fontSize: "18px", color: "#A7AED5" }} />, text: "8:00 AM - 12:00 AM" },
  ];

  const socialMediaLinks = [
    { icon: <FacebookIcon />, link: "https://tinyurl.com/FBNeotel" },
    { icon: <XIcon />, link: "https://x.com/NeotelNauru" },
    { icon: <InstagramIcon />, link: "https://www.instagram.com/neotelnauru" },
    { icon: <LinkedInIcon />, link: "https://tinyurl.com/Linkedneotel" },
    { icon: <YouTubeIcon />, link: "https://tinyurl.com/YTneotel" },
  ];

  const handleMenuOpen = (event, link) => {
    if (anchorEl === event.currentTarget && openMenuLabel === link.label) {
      handleMenuClose();
    } else {
      setAnchorEl(event.currentTarget);
      setOpenMenuLabel(link.label);
    }
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setOpenMenuLabel(null);
  };

  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  const toggleDrawerSubmenu = (label) => {
    setDrawerSubmenus((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

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
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#FFFFFF",
          boxShadow: "none",
          transform: visible ? "translateY(0)" : "translateY(-100%)",
          transition: "transform 0.3s ease-in-out",
        }}
      >
        {!isSmallScreen && (
          // Second Toolbar
          <Toolbar
            sx={{
              justifyContent: "space-between",
              p: "0 30px",
              backgroundColor: "white",
              color: "grey",
              marginBottom: -1,
              marginTop: -1,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 6 }}>
              {infoItems.map((item, index) => (
                <Box key={index} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  {item.link ? (
                    <IconButton
                      color="inherit"
                      component="a"
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ fontSize: "18px", display: "flex", alignItems: "center" }}
                    >
                      {item.icon}
                      <Typography sx={{ fontSize: "12px", color: "#A7AED5", marginLeft: "5px" }}>
                        {item.text}
                      </Typography>
                    </IconButton>
                  ) : (
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      {item.icon}
                      <Typography sx={{ fontSize: "12px", color: "#A7AED5" }}>
                        {item.text}
                      </Typography>
                    </Box>
                  )}
                </Box>
              ))}
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Button
                startIcon={<PersonAddIcon sx={{ fontSize: "18px", color: "#A7AED5" }} />}
                sx={{ textTransform: "none", fontSize: "12px", color: "grey" }}
              >
                Register/Login
              </Button>
              {socialMediaLinks.map((social, index) => (
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
              ))}
            </Box>
          </Toolbar>
        )}
        <Divider sx={{ width: "100%", borderBottomWidth: 1, borderColor: "black" }} />
        <Toolbar sx={{ justifyContent: "space-between", minHeight: "48px", p: "0 30px" }}>
          <Box
            onClick={() => navigate("/")}
            sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
          >
            <img src={menuIcon} alt="Neotel Logo" style={{ height: "80px", marginRight: "10px" }} />
          </Box>
          {!isSmallScreen ? (
            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              {navigationLinks.map((link) => (
                <Button
                  key={link.label}
                  onClick={(event) =>
                    link.submenu
                      ? handleMenuOpen(event, link)
                      : navigate(link.route)
                  }
                  sx={{ textTransform: "none", fontSize: "16px", color: "#000" }}
                  endIcon={
                    link.submenu
                      ? openMenuLabel === link.label
                        ? <ExpandLess />
                        : <ExpandMore />
                      : null
                  }
                >
                  {link.label}
                </Button>
              ))}
            </Box>
          ) : (
            <IconButton onClick={() => toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        MenuListProps={{ onMouseLeave: handleMenuClose }}
      >
        {navigationLinks
          .find((link) => link.label === openMenuLabel)
          ?.submenu?.map((item, index) => (
            <MenuItem key={index}>
              <a
                href={item.route}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                {item.label}
              </a>
            </MenuItem>
          ))}
      </Menu>
      <Drawer anchor="right" open={drawerOpen} onClose={() => toggleDrawer(false)}>
        <Box sx={{ width: 250, p: 2 }}>
          <IconButton onClick={() => toggleDrawer(false)} sx={{ mb: 2 }}>
            <CloseIcon />
          </IconButton>
          <List>
            {navigationLinks.map((link) => (
              <React.Fragment key={link.label}>
                <ListItem disablePadding>
                  <ListItemButton
                    onClick={() => {
                      if (link.submenu) {
                        toggleDrawerSubmenu(link.label);
                      } else {
                        navigate(link.route);
                        toggleDrawer(false); // Close the drawer after navigation
                      }
                    }}
                  >
                    <ListItemText primary={link.label} />
                    {link.submenu && (drawerSubmenus[link.label] ? <ExpandLess /> : <ExpandMore />)}
                  </ListItemButton>
                </ListItem>
                {link.submenu && (
                  <Collapse in={drawerSubmenus[link.label]} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {link.submenu.map((subitem, subindex) => (
                        <ListItemButton
                          key={subindex}
                          sx={{ pl: 4 }}
                          onClick={() => {
                            navigate(subitem.route);
                            toggleDrawer(false); // Close the drawer after navigation
                          }}
                        >
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