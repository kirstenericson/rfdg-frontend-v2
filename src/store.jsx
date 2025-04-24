import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { EventsApi } from "./services/EventsApi";

export const store = configureStore({
    reducer: {
       [EventsApi.reducerPath]: EventsApi.reducer,
    },
    // Adding the api middleware enables caching, invalidation, polling, and other features of `createApi`:
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(EventsApi.middleware),
    });

    setupListeners(store.dispatch);