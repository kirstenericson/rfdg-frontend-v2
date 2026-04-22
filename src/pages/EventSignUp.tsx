import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { useGetEventQuery } from "../services/EventsApi";
import { setEvents } from "../store/eventSlice";
import { EventDetailsCard } from "../features/events/components";
import { EventItem } from "../features/events/types";
import EventSignUpAutocomplete from "../features/events/components/EventSignUpAutocomplete";
import "./EventSignUp.css"; // Import the CSS file for styling

const EventSignUp = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const events = useSelector((state: RootState) => state.events.events);
  const event = events?.length
    ? events.find((currentEvent) => String(currentEvent.id) === String(id))
    : null;
  const { data, isLoading } = useGetEventQuery(undefined);

  const [players, setPlayers] = useState<string[]>([""]); // Start with one empty player

  useEffect(() => {
    if (data) {
      dispatch(setEvents(data));
    }
  }, [data, dispatch]);

  if (isLoading || !events?.length) return <p>Loading...</p>;
  if (!event) return <p>Event not found.</p>;

  const handlePlayerChange = (index: number, value: string) => {
    const updatedPlayers = [...players];
    updatedPlayers[index] = value;
    setPlayers(updatedPlayers);
  };

  const addPlayerField = () => {
    if (players.length < 5) {
      setPlayers([...players, ""]);
    }
  };

  const removePlayerField = (index: number) => {
    if (players.length > 1) {
      const updatedPlayers = players.filter((_, i) => i !== index);
      setPlayers(updatedPlayers);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Players:", players);
    // Add your form submission logic here
  };

  return (
    <div className="event-signup-container">
      {/* Left half: Event description */}
      <div className="event-description">
        <EventDetailsCard event={event as EventItem} />
      </div>

      {/* Right half: Add Player form */}
      <div className="add-player-form">
        <h2>Create Your Group</h2>
        <form onSubmit={handleSubmit}>
          {players.map((player, index) => (
            <div key={index} className="player-field">
              <EventSignUpAutocomplete
                value={player}
                onChange={(value: string) => handlePlayerChange(index, value)}
              />
              {players.length > 1 && (
                <button
                  type="button"
                  onClick={() => removePlayerField(index)}
                  className="remove-player-button"
                >
                  Remove
                </button>
              )}
            </div>
          ))}
          {players.length < 5 && (
            <button type="button" onClick={addPlayerField} className="add-player-button">
              Add Player
            </button>
          )}
          <button type="submit" className="submit-group-button">
            Submit Group
          </button>
        </form>
      </div>
    </div>
  );
};

export default EventSignUp;