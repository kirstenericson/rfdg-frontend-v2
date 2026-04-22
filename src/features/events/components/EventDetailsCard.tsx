import { Card } from "@mui/joy";
import Moment from "moment";
import { EventItem } from "../types";

type EventDetailsCardProps = {
  event: EventItem;
};

export default function EventDetailsCard({ event }: EventDetailsCardProps) {
  return (
    <Card
      variant="outlined"
      sx={{ padding: "20px", margin: "10px", backgroundColor: "#f0f0f0", width: "100%" }}
    >
      <h2>{event.name}</h2>
      <p>
        <strong>Date:</strong> {Moment(new Date(event.date)).format("MM/DD/YYYY")}
      </p>
      <p>
        <strong>Registration Starts:</strong>{" "}
        {Moment(new Date(event.registration_starts)).format("MM/DD/YYYY, h:mm A")}
      </p>
      <p>
        <strong>Registration Ends:</strong>{" "}
        {Moment(new Date(event.registration_ends)).format("MM/DD/YYYY, h:mm A")}
      </p>
      <p>
        <strong>Registration Limit:</strong> {event.registration_limit}
      </p>
      <p>
        <strong>Holes:</strong> {event.holes}
      </p>
    </Card>
  );
}
