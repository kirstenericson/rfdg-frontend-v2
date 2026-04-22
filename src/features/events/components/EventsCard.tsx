import { Card } from "@mui/joy";
import Moment from "moment";
import { Link } from "react-router-dom";
import { EventItem } from "../types";

export default function EventsCard({
  name,
  date,
  registration_starts,
  registration_ends,
  registration_limit,
  holes,
  id,
}: EventItem) {
  const registrationStartDate = new Date(registration_starts);
  const registrationEndDate = new Date(registration_ends);
  const eventDate = new Date(date);

  return (
    <Link to={`/events/${id}`} style={{ textDecoration: "none", color: "inherit" }}>
      <Card
        className="event-card"
        variant="outlined"
        style={{
          padding: "20px",
          margin: "10px",
          backgroundColor: "#f0f0f0",
          height: "20em",
          width: "50em",
        }}
      >
        <h2>{name}</h2>
        <p>
          <strong>Date:</strong> {Moment(eventDate).format("MM/DD/YYYY")}
        </p>
        <p>
          <strong>Registration Starts:</strong>{" "}
          {Moment(registrationStartDate).format("MM/DD/YYYY, h:mm A")}
        </p>
        <p>
          <strong>Registration Ends:</strong>{" "}
          {Moment(registrationEndDate).format("MM/DD/YYYY, h:mm A")}
        </p>
        <p>
          <strong>Registration Limit:</strong> {registration_limit}
        </p>
        <p>
          <strong>Holes:</strong> {holes}
        </p>
      </Card>
    </Link>
  );
}
