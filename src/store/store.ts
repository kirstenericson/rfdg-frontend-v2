import { configureStore } from "@reduxjs/toolkit";
import { EventsApi } from "../services/EventsApi"; // Import your RTK Query API
import eventReducer from "./eventSlice";

const store = configureStore({
  reducer: {
    events: eventReducer,
    [EventsApi.reducerPath]: EventsApi.reducer, // Add the RTK Query reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(EventsApi.middleware), // Add the RTK Query middleware
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;