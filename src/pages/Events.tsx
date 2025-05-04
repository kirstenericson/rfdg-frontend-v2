import React from "react";

import "../App.css";
import { EventsCard } from "../components/EventsCard";
import { useGetEventQuery } from "../services/EventsApi";
import CircularProgress from '@mui/material/CircularProgress';

const Events = () => {
    const { data, error, isLoading } = useGetEventQuery({});

    if (error) return <div>Error</div>;
    return (
        <header className="App-header">
            <>
                <h1>Events</h1>
                <p> This is a placeholder for the events page. </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                    {isLoading ? <CircularProgress /> :
                        data.map((event: any) => (
                            <EventsCard
                                id={event.id}
                                name={event.name}
                                date={event.date}
                                registration_starts={event.registration_starts}
                                registration_ends={event.registration_ends}
                                registration_limit={event.registration_limit}
                                holes={event.holes}
                            />
                        ))}
                </div>

            </>
        </header>
    );
}
export default Events;