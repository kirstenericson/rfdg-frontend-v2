import React from "react";
import { Grid, Box, Card, CardContent, Typography, Container, Stack, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import logo from "./logo.svg";

const Home = () => {
    return (
        <Box
            sx={{
                background: "linear-gradient(135deg, #ffffff 0%, #f5f7fa 100%)",
                minHeight: "100vh",
                py: { xs: 4, md: 8 },
                mt: "64px",
            }}
        >
            <Container maxWidth="lg">
                {/* Hero Section */}
                <Box sx={{ mb: 8, textAlign: "center" }}>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            mb: 4,
                            fontSize: "4rem",
                        }}
                    >
                        <Box
                            component="img"
                            src={logo}
                            alt="rfdg logo"
                            sx={{
                                width: "20%",
                                height: "auto",
                            }}
                        />          </Box>
                    <Typography
                        variant="h2"
                        sx={{
                            fontWeight: 700,
                            mb: 3,
                            color: "#262c34",
                            fontSize: { xs: "2rem", md: "3rem" },
                        }}
                    >
                        Riverfront Disc Golf League
                    </Typography>
                    <Typography
                        variant="h5"
                        sx={{
                            color: "#717579",
                            mb: 4,
                            maxWidth: "700px",
                            mx: "auto",
                        }}
                    >
                        Join Minnesota&apos;s premier disc golf community. Competitive tournaments, weekly league play, and a thriving player community.
                    </Typography>
                    <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ justifyContent: "center" }}>
                        <Button
                            component={RouterLink}
                            to="/events"
                            variant="contained"
                            size="large"
                            sx={{
                                textTransform: "capitalize",
                                fontWeight: 600,
                                px: 4,
                            }}
                        >
                            View Events
                        </Button>
                        <Button
                            component={RouterLink}
                            to="/cards"
                            variant="outlined"
                            size="large"
                            sx={{
                                textTransform: "capitalize",
                                fontWeight: 600,
                                px: 4,
                            }}
                        >
                            View Cards
                        </Button>
                    </Stack>
                </Box>

                {/* Main Content Card */}
                <Grid container spacing={3} sx={{ mb: 6 }}>
                    <Grid size={{ xs: 12, md: 8 }}>
                        <Card
                            sx={{
                                p: { xs: 3, md: 4 },
                                borderRadius: 2,
                                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
                                border: "1px solid rgba(0, 0, 0, 0.08)",
                            }}
                        >
                            <CardContent sx={{ p: 0 }}>
                                <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>
                                    About League
                                </Typography>

                                <Box sx={{ mb: 3 }}>
                                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1.5, color: "#1976d2" }}>
                                        ⏰ Time & Format
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: "#717579", mb: 1 }}>
                                        <strong>Mondays:</strong> 4:45pm–5:30pm sign-ups | 5:30pm–6:00pm shotgun start
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: "#717579" }}>
                                        <strong>Format:</strong> Singles by division (Intermediate, Advanced, Open, Women&apos;s Amateur, Women&apos;s Open)
                                    </Typography>
                                </Box>

                                <Box sx={{ mb: 3 }}>
                                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1.5, color: "#1976d2" }}>
                                        💰 Cost & Breakdown
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: "#717579", mb: 1 }}>
                                        <strong>Intermediate, Advanced, Open:</strong> $10
                                    </Typography>
                                    <Typography variant="caption" sx={{ color: "#919eab", display: "block", mb: 1.5 }}>
                                        ($5 payouts, $1 Women&apos;s Division payouts, $1 Ace Pool, $2 raffle entry, $1 park improvement)
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: "#717579", mb: 1 }}>
                                        <strong>Women&apos;s Amateur, Women&apos;s Open:</strong> $5
                                    </Typography>
                                    <Typography variant="caption" sx={{ color: "#919eab", display: "block" }}>
                                        ($1 Ace Pool, $2 raffle entry, $1 park improvement, $1 Women&apos;s CTP)
                                    </Typography>
                                </Box>

                                <Box sx={{ mb: 3 }}>
                                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1.5, color: "#1976d2" }}>
                                        📋 Sign-up
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: "#717579", lineHeight: 1.8 }}>
                                        Pre-register online via our Events page! Pre-registration opens at 9:30am on league days and can fill quickly. Pre-registering guarantees your spot and makes league organization much easier.
                                    </Typography>
                                </Box>

                                <Box sx={{ mb: 3 }}>
                                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1.5, color: "#1976d2" }}>
                                        🎫 Riverfront Bag Tag
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: "#717579", lineHeight: 1.8 }}>
                                        Bag tags available for $15 to the first 125 interested individuals. Purchase includes early registration access for The Forgotten Star Open (Labor Day). Check our Facebook Group for presale details.
                                    </Typography>
                                </Box>

                                <Box sx={{ mb: 3 }}>
                                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1.5, color: "#1976d2" }}>
                                        🎁 Donations
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: "#717579", mb: 1.5 }}>
                                        Riverfront DG accepts donations for weekly raffles:
                                    </Typography>
                                    <List>
                                        <ListItem>Discs (new or good condition field-tested)</ListItem>
                                        <ListItem>Disc Golf Accessories & Apparel</ListItem>
                                        <ListItem>Small items: pins, patches, stickers, disc dots, minis</ListItem>
                                        <ListItem>Outdoorsy items: flashlights, bug spray, multitools, sunscreen</ListItem>
                                        <ListItem>LEDs, batteries, beverages, gift cards</ListItem>
                                    </List>
                                </Box>

                                <Box>
                                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1.5, color: "#1976d2" }}>
                                        🙋 Volunteers Needed
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: "#717579", mb: 1.5 }}>
                                        Interested in helping? We need volunteers for:
                                    </Typography>
                                    <List>
                                        <ListItem>Course Cleanup Events</ListItem>
                                        <ListItem>New fairway construction</ListItem>
                                        <ListItem>Assistant TDs for tournaments</ListItem>
                                        <ListItem>Course layout & setup volunteers</ListItem>
                                        <ListItem>Registration volunteers (Mondays)</ListItem>
                                    </List>
                                </Box>

                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: "#717579",
                                        mt: 3,
                                        pt: 3,
                                        borderTop: "1px solid #e9ecef",
                                    }}
                                >
                                    <strong>Sponsors:</strong> Forgotten Star Brewing | Twin Town Events | Kaposia Pro Shop | Minnesota Frisbee Association
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid size={{ xs: 12, md: 4 }}>
                        <Stack spacing={3}>
                            <Card
                                sx={{
                                    p: 3,
                                    borderRadius: 2,
                                    background: "linear-gradient(135deg, #1976d2 0%, #1565c0 100%)",
                                    color: "#ffffff",
                                    boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
                                }}
                            >
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                                    ⛳ Next League Day
                                </Typography>
                                <Typography variant="h3" sx={{ fontWeight: 700, mb: 2, fontSize: "1.5rem" }}>
                                    Monday
                                </Typography>
                                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                                    4:45 PM Sign-ups
                                </Typography>
                                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                                    5:30 PM Start
                                </Typography>
                            </Card>

                            <Card
                                sx={{
                                    p: 3,
                                    borderRadius: 2,
                                    boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
                                    border: "1px solid rgba(0, 0, 0, 0.08)",
                                }}
                            >
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    📍 Location
                                </Typography>
                                <Typography variant="body2" sx={{ color: "#717579" }}>
                                    Riverfront Regional Park
                                </Typography>
                                <Typography variant="body2" sx={{ color: "#717579" }}>
                                    5100 East River Road Fridley, MN 55432
                                </Typography>
                                <Typography variant="body2" sx={{ color: "#717579" }}>
                                    Minnesota
                                </Typography>
                            </Card>

                            <Button
                                component={RouterLink}
                                to="/events"
                                variant="contained"
                                fullWidth
                                sx={{
                                    textTransform: "capitalize",
                                    fontWeight: 600,
                                    py: 2,
                                }}
                            >
                                Sign Up Today
                            </Button>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Home;

