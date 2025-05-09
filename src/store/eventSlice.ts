import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Event {
  id: string;
  name: string;
  date: string;
  registration_starts: string;
  registration_ends: string;
  registration_limit: string;
  holes: string;
}

interface EventState {
  events: Event[];
}

const initialState: EventState = {
  events: [],
};

const eventSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    setEvents(state, action: PayloadAction<Event[]>) {
      state.events = action.payload;
    },
  },
});

export const { setEvents } = eventSlice.actions;
export default eventSlice.reducer;