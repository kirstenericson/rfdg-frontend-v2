import { Box, CircularProgress } from "@mui/material";
import EventsCard from "./EventsCard";
import { EventItem } from "../types";

type EventsGridProps = {
  events?: EventItem[];
  isLoading: boolean;
};

export default function EventsGrid({ events, isLoading }: EventsGridProps) {
  if (isLoading && !events?.length) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "400px",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
   <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(1, 1fr)",
        gap: 3,
        p: 2,
        justifyContent: "center",
      }}
    >
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
    </Box>
  );
}

