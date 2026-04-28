import React, { useEffect } from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useGetEventQuery } from "../services/EventsApi";
import { mockEvents } from "../services/eventsMockData";
import { setEvents } from "../store/eventSlice";
import { EventsGrid } from "../features/events/components";
import { EventItem } from "../features/events/types";

const USE_PAGE_MOCK_EVENTS =
  process.env.REACT_APP_USE_PAGE_MOCK_EVENTS === "true" ||
  process.env.REACT_APP_USE_MOCK_EVENTS_API === "true";

const Events = () => {
  const { data, error, isLoading } = useGetEventQuery(undefined, {
    skip: USE_PAGE_MOCK_EVENTS,
  });
  const dispatch = useDispatch();
  const eventsData = (USE_PAGE_MOCK_EVENTS ? mockEvents : data) as
    | EventItem[]
    | undefined;
  const eventsLoading = USE_PAGE_MOCK_EVENTS ? false : isLoading;
  const eventsError = USE_PAGE_MOCK_EVENTS ? null : error;

  useEffect(() => {
    if (eventsData) {
      dispatch(setEvents(eventsData));
    }
  }, [eventsData, dispatch]);

  if (eventsError) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "60vh",
          color: "error.main",
        }}
      >
        <Typography variant="h6">Error loading events</Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #f5f7fa 0%, #ffffff 100%)",
        minHeight: "100vh",
        py: { xs: 4, md: 6 },
        mt: "64px",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ mb: 6, textAlign: "center", justidfyContent: "center" }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              mb: 2,
              color: "#262c34",
              fontSize: { xs: "1.8rem", md: "2.5rem" },
            }}
          >
            Upcoming Events
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#717579",
              mb: 4,
              maxWidth: "600px",
              mx: "auto",
              fontSize: "1.05rem",
            }}
          >
            Join us for competitive disc golf tournaments and league play. Sign up for your favorite events and connect with the community.
          </Typography>
          <Button
            component={Link}
            to="/events/new"
            variant="contained"
            sx={{
              textTransform: "capitalize",
              fontWeight: 600,
              px: 4,
              py: 1.5,
            }}
          >
            Create New Event
          </Button>
        </Box>

        <EventsGrid events={eventsData} isLoading={eventsLoading} />
      </Container>
    </Box>
  );
};

export default Events;
