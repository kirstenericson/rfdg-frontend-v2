import CircularProgress from "@mui/material/CircularProgress";
import EventsCard from "./EventsCard";
import { EventItem } from "../types";

type EventsGridProps = {
  events?: EventItem[];
  isLoading: boolean;
};

export default function EventsGrid({ events, isLoading }: EventsGridProps) {
  if (isLoading && !events?.length) {
    return <CircularProgress />;
  }

  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {events?.map((event) => (
        <EventsCard
          key={event.id}
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
  );
}
