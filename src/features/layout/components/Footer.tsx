import React from "react";
import {
  Box,
  Container,
  Link,
  Stack,
  Typography,
  Divider,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function Footer() {
  const footerLinks = [
    { label: "Home", path: "/" },
    { label: "Events", path: "/events" },
    { label: "Cards", path: "/cards" },
  ];

  const socialLinks = [
    { label: "Facebook", url: "#" },
    { label: "Twitter", url: "#" },
    { label: "Instagram", url: "#" },
    { label: "Email", url: "mailto:info@riverfront.com" },
  ];

  return (
    <Box
      component="footer"
      sx={{
        background: "linear-gradient(135deg, #262c34 0%, #1a1f36 100%)",
        color: "#ffffff",
        py: { xs: 4, md: 6 },
        mt: "auto",
        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" },
            gap: { xs: 3, md: 4 },
            mb: 4,
          }}
        >
          {/* About Section */}
          <Stack spacing={2}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                fontSize: "1.1rem",
                mb: 1,
              }}
            >
              🥏 Riverfront DG League
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "rgba(255, 255, 255, 0.7)",
                lineHeight: 1.8,
              }}
            >
              Join us for competitive disc golf events every week. Community-driven,
              player-focused league with opportunities for all skill levels.
            </Typography>
            <Stack direction="row" spacing={1.5} sx={{ mt: 2 }}>
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "rgba(255, 255, 255, 0.7)",
                    transition: "all 0.3s ease-in-out",
                    fontWeight: 500,
                    fontSize: "0.85rem",
                    "&:hover": {
                      color: "#1976d2",
                      transform: "translateY(-3px)",
                    },
                  }}
                >
                  {social.label}
                </Link>
              ))}
            </Stack>
          </Stack>

          {/* Navigation Links */}
          <Stack spacing={2}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                fontSize: "1rem",
                mb: 1,
              }}
            >
              Navigation
            </Typography>
            <Stack spacing={1.5}>
              {footerLinks.map((link) => (
                <Link
                  key={link.path}
                  component={RouterLink}
                  to={link.path}
                  sx={{
                    color: "rgba(255, 255, 255, 0.7)",
                    textDecoration: "none",
                    fontWeight: 500,
                    fontSize: "0.9rem",
                    transition: "all 0.3s ease-in-out",
                    "&:hover": {
                      color: "#1976d2",
                      transform: "translateX(4px)",
                    },
                  }}
                >
                  → {link.label}
                </Link>
              ))}
            </Stack>
          </Stack>

          {/* Contact Info */}
          <Stack spacing={2}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                fontSize: "1rem",
                mb: 1,
              }}
            >
              Get In Touch
            </Typography>
            <Stack spacing={1.5}>
              <Typography
                variant="body2"
                sx={{
                  color: "rgba(255, 255, 255, 0.7)",
                  fontSize: "0.9rem",
                }}
              >
                <strong>Email:</strong>{" "}
                <Link
                  href="mailto:info@riverfront.com"
                  sx={{
                    color: "#1976d2",
                    textDecoration: "none",
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  info@riverfront.com
                </Link>
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "rgba(255, 255, 255, 0.7)",
                  fontSize: "0.9rem",
                }}
              >
                <strong>Phone:</strong> (555) 123-4567
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "rgba(255, 255, 255, 0.7)",
                  fontSize: "0.9rem",
                }}
              >
                <strong>Location:</strong> Riverfront Park, Minnesota
              </Typography>
            </Stack>
          </Stack>
        </Box>

        {/* Divider */}
        <Divider sx={{ my: 3, borderColor: "rgba(255, 255, 255, 0.1)" }} />

        {/* Bottom Section */}
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={2}
          sx={{
            alignItems: { xs: "flex-start", md: "center" },
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="caption"
            sx={{
              color: "rgba(255, 255, 255, 0.6)",
              fontSize: "0.85rem",
            }}
          >
            © 2026 Riverfront Disc Golf League. All rights reserved.
          </Typography>

          <Stack
            direction="row"
            spacing={2}
            sx={{
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/privacy-policy"
              sx={{
                color: "rgba(255, 255, 255, 0.6)",
                textDecoration: "none",
                fontSize: "0.85rem",
                transition: "color 0.3s ease-in-out",
                "&:hover": {
                  color: "#1976d2",
                },
              }}
            >
              Privacy Policy
            </Link>
            <Typography
              sx={{
                color: "rgba(255, 255, 255, 0.3)",
                fontSize: "0.85rem",
              }}
            >
              •
            </Typography>
            <Link
              href="/terms"
              sx={{
                color: "rgba(255, 255, 255, 0.6)",
                textDecoration: "none",
                fontSize: "0.85rem",
                transition: "color 0.3s ease-in-out",
                "&:hover": {
                  color: "#1976d2",
                },
              }}
            >
              Terms & Conditions
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
