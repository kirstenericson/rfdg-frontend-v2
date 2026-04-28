import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link as RouterLink } from "react-router-dom";
import { useAuth } from "../../../auth/AuthProvider";
import logo from "../../../pages/logo.svg";

export default function NavBar() {
  const { logout } = useAuth();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Events", path: "/events" },
    { label: "Cards", path: "/cards" },
    { label: "Create Event", path: "/events/new" },
  ];

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleLogout = () => {
    logout();
    setDrawerOpen(false);
  };

  const desktopNav = (
    <Stack
      direction="row"
      spacing={1}
      sx={{
        alignItems: "center",
        "& .MuiButton-root": {
          color: "#ffffff",
          fontSize: "0.95rem",
          fontWeight: 500,
          textTransform: "capitalize",
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.15)",
            transform: "translateY(-2px)",
          },
        },
      }}
    >
      {navItems.map((item) => (
        <Button
          key={item.path}
          color="inherit"
          component={RouterLink}
          to={item.path}
          sx={{
            px: 2,
            py: 1,
            borderRadius: 1,
          }}
        >
          {item.label}
        </Button>
      ))}
      <Divider
        orientation="vertical"
        flexItem
        sx={{ my: 1, backgroundColor: "rgba(255, 255, 255, 0.3)" }}
      />
      <Button
        color="inherit"
        onClick={handleLogout}
        startIcon={<LogoutIcon />}
        sx={{
          px: 2,
          py: 1,
          borderRadius: 1,
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.2)",
          },
        }}
      >
        Logout
      </Button>
    </Stack>
  );

  const mobileNav = (
    <Drawer
      anchor="left"
      open={drawerOpen}
      onClose={handleDrawerToggle}
      sx={{
        "& .MuiDrawer-paper": {
          width: 280,
          backgroundColor: "#ffffff",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 2,
          borderBottom: "1px solid #e9ecef",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 700, color: "#262c34" }}>
          Menu
        </Typography>
        <IconButton
          onClick={handleDrawerToggle}
          sx={{ color: "#262c34" }}
        >
          <CloseIcon />
        </IconButton>
      </Box>

      <List sx={{ pt: 2 }}>
        {navItems.map((item, index) => (
          <React.Fragment key={item.path}>
            <ListItem disablePadding>
              <ListItemButton
                component={RouterLink}
                to={item.path}
                onClick={handleDrawerToggle}
                sx={{
                  py: 1.5,
                  px: 3,
                  color: "#262c34",
                  "&:hover": {
                    backgroundColor: "#f5f7fa",
                    borderLeft: "4px solid #1976d2",
                    paddingLeft: "calc(1.5rem - 4px)",
                  },
                }}
              >
                <ListItemText
                  primary={item.label}
                  sx={{
                    "& .MuiTypography-root": {
                      fontWeight: 500,
                      fontSize: "0.95rem",
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
            {index < navItems.length - 1 && (
              <Divider sx={{ my: 0.5 }} />
            )}
          </React.Fragment>
        ))}
      </List>

      <Divider sx={{ my: 2 }} />

      <Box sx={{ p: 2 }}>
        <Button
          fullWidth
          variant="contained"
          color="error"
          startIcon={<LogoutIcon />}
          onClick={handleLogout}
          sx={{
            textTransform: "capitalize",
            fontWeight: 600,
            py: 1,
          }}
        >
          Logout
        </Button>
      </Box>
    </Drawer>
  );

  return (
    <AppBar
      position="fixed"
      sx={{
        background: "linear-gradient(135deg, #1976d2 0%, #1565c0 100%)",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
        zIndex: 1200,
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: { xs: 2, sm: 3, md: 4 },
          py: 1.5,
        }}
      >
        <Typography
          variant="h5"
          component={RouterLink}
          to="/"
          sx={{
            fontWeight: 700,
            color: "#ffffff",
            textDecoration: "none",
            fontSize: { xs: "1.1rem", md: "1.3rem" },
            letterSpacing: "0.5px",
            transition: "all 0.3s ease-in-out",
            "&:hover": {
              opacity: 0.9,
              transform: "scale(1.02)",
            },
          }}
        >
          Riverfront Disc Golf Club
        </Typography>

        {isMobile ? (
          <>
            <IconButton
              color="inherit"
              onClick={handleDrawerToggle}
              sx={{
                fontSize: "1.5rem",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              <MenuIcon />
            </IconButton>
            {mobileNav}
          </>
        ) : (
          desktopNav
        )}
      </Toolbar>
    </AppBar>
  );
}
