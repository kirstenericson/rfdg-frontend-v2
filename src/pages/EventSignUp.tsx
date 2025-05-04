import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";
import React from "react";
import { useGetEventQuery } from "../services/EventsApi";
import CardSignUp from "../components/CardSignUp";

const EventSignUp = () => {

   const { id } = useParams(); // Get event ID from the URL
    const { data, isLoading } = useGetEventQuery({ id });


  return (
    <header className="App-header">
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
            {isLoading ? <p>Loading...</p> :
            data.map((event: any) => (
                <div key={event.id} style={{ padding: '10px', margin: '10px', border: '1px solid black' }}>
                <h2>{event.name}</h2>
                <p><strong>Date:</strong> {event.date}</p>
                <p><strong>Registration Starts:</strong> {event.registration_starts}</p>
                <p><strong>Registration Ends:</strong> {event.registration_ends}</p>
                <p><strong>Registration Limit:</strong> {event.registration_limit}</p>
                <p><strong>Holes:</strong> {event.holes}</p>
                </div>
            ))}
        </div>
        <h1>Sign Up</h1>
       <CardSignUp />
    </header>
  );
};

export default EventSignUp;
