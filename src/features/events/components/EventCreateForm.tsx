import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { FormEvent, useState } from "react";

type EventDraft = {
  name: string;
  date: string;
  registration_starts: string;
  registration_ends: string;
  registration_limit: string;
  holes: string;
};

const initialDraft: EventDraft = {
  name: "",
  date: "",
  registration_starts: "",
  registration_ends: "",
  registration_limit: "",
  holes: "",
};

export default function EventCreateForm() {
  const [draft, setDraft] = useState<EventDraft>(initialDraft);
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const payload = {
      ...draft,
      registration_limit: String(draft.registration_limit),
      holes: String(draft.holes),
    };

    // TODO: Replace this with create-event API call when backend endpoint is ready.
    console.log("Create event payload:", payload);
    setMessage("Event draft submitted locally. API integration pending.");
    setDraft(initialDraft);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ width: "100%", maxWidth: 700 }}>
      <Stack spacing={2}>
        {message ? <Alert severity="success">{message}</Alert> : null}
        <TextField
          required
          label="Event name"
          value={draft.name}
          onChange={(e) => setDraft((prev) => ({ ...prev, name: e.target.value }))}
        />
        <TextField
          required
          label="Event date"
          type="date"
          InputLabelProps={{ shrink: true }}
          value={draft.date}
          onChange={(e) => setDraft((prev) => ({ ...prev, date: e.target.value }))}
        />
        <TextField
          required
          label="Registration starts"
          type="datetime-local"
          InputLabelProps={{ shrink: true }}
          value={draft.registration_starts}
          onChange={(e) =>
            setDraft((prev) => ({ ...prev, registration_starts: e.target.value }))
          }
        />
        <TextField
          required
          label="Registration ends"
          type="datetime-local"
          InputLabelProps={{ shrink: true }}
          value={draft.registration_ends}
          onChange={(e) =>
            setDraft((prev) => ({ ...prev, registration_ends: e.target.value }))
          }
        />
        <TextField
          required
          label="Registration limit"
          type="number"
          value={draft.registration_limit}
          onChange={(e) =>
            setDraft((prev) => ({ ...prev, registration_limit: e.target.value }))
          }
        />
        <TextField
          required
          label="Number of holes"
          type="number"
          value={draft.holes}
          onChange={(e) => setDraft((prev) => ({ ...prev, holes: e.target.value }))}
        />
        <Button type="submit" variant="contained">
          Create Event
        </Button>
      </Stack>
    </Box>
  );
}
