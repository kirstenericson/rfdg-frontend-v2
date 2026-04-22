import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useGetEventQuery } from "../services/EventsApi";
import { mockEvents } from "../services/eventsMockData";
import { setEvents } from "../store/eventSlice";
import { EventsGrid } from "../features/events/components";
import { EventItem } from "../features/events/types";

import "../App.css";

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
      dispatch(setEvents(eventsData)); // Store whichever event source is active
    }
  }, [eventsData, dispatch]);

  if (eventsError) return <div>Error</div>;
  return (
    <header className="App-header">
      <h1>Events</h1>
      <p>This is a placeholder for the events page.</p>
      <EventsGrid events={eventsData} isLoading={eventsLoading} />
    </header>
  );
};

export default Events;