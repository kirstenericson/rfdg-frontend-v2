import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { EventCreateForm } from "../features/events/components";

export default function EventCreate() {
  return (
    <header className="App-header">
      <h1>Create Event</h1>
      <p>Fill out the form below. Once the api is back up, I will make this page only available for admin accounts.</p>
      <EventCreateForm />
      <Button component={Link} to="/events" sx={{ mt: 2 }}>
        Back to events
      </Button>
    </header>
  );
}
