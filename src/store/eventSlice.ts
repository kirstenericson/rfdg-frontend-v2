import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EventItem } from "../features/events/types";

interface EventState {
  events: EventItem[];
}

const initialState: EventState = {
  events: [],
};

const eventSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    setEvents(state, action: PayloadAction<EventItem[]>) {
      state.events = action.payload;
    },
  },
});

export const { setEvents } = eventSlice.actions;
export default eventSlice.reducer;