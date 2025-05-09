import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { useGetEventQuery } from "../services/EventsApi";
import { setEvents } from "../store/eventSlice";
import CardSignUp from "../components/CardSignUp";

const EventSignUp = () => {
  const { id } = useParams(); // Get event ID from the URL
  const dispatch = useDispatch();
  console.log("EventSignUp component rendered with ID:", id);

  const events = useSelector((state: RootState) => state.events.events);
  console.log("Events from Redux store:", events);
    //const event = events.find((event) => event.id === id); // Find the event by ID
  const event = events?.length ? events.find((event) => String(event.id) === String(id)) : null;

  console.log( "event :", event );
//   const { data } = useGetEventQuery({}); // Fetch all events
const { data, isLoading } = useGetEventQuery({}); // Fetch all events

useEffect(() => {
  if (data) {
    dispatch(setEvents(data)); // Populate Redux store if not already populated
  }
}, [data, dispatch]);

if (isLoading || !events?.length) return <p>Loading...</p>;

  const { name, date, registration_starts, registration_ends, registration_limit, holes } = event || {};

  return (
    <header className="App-header">
      <div style={{ padding: "10px", margin: "10px", border: "1px solid black" }}>
        <h2>{name}</h2>
        <p>
          <strong>Date:</strong> {date}
        </p>
        <p>
          <strong>Registration Starts:</strong> {registration_starts}
        </p>
        <p>
          <strong>Registration Ends:</strong> {registration_ends}
        </p>
        <p>
          <strong>Registration Limit:</strong> {registration_limit}
        </p>
        <p>
          <strong>Holes:</strong> {holes}
        </p>
      </div>
      <h1>Sign Up</h1>
      <CardSignUp />
    </header>
  );
};

export default EventSignUp;
