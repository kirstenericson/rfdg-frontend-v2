import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { useGetEventQuery } from "../services/EventsApi";
import { setEvents } from "../store/eventSlice";
import {
  EventDetailsCard,
  EventSignUpAutocomplete,
} from "../features/events/components";
import { EventItem } from "../features/events/types";

const EventSignUp = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const events = useSelector((state: RootState) => state.events.events);
  const event = events?.length
    ? events.find((currentEvent) => String(currentEvent.id) === String(id))
    : null;
  const { data, isLoading } = useGetEventQuery(undefined);

  useEffect(() => {
    if (data) {
      dispatch(setEvents(data));
    }
  }, [data, dispatch]);

  if (isLoading || !events?.length) return <p>Loading...</p>;
  if (!event) return <p>Event not found.</p>;

  return (
    <header className="App-header">
      <EventDetailsCard event={event as EventItem} />
      <h1>Sign Up</h1>
      <EventSignUpAutocomplete />
    </header>
  );
};

export default EventSignUp;
