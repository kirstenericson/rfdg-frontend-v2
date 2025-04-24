import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const EventsApi = createApi({
    reducerPath: 'EventApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://rfdgc.onrender.com/' }),
    endpoints: (builder) => ({
      getEvent: builder.query({
        query: () => "event",
      }),
    //   createPost: builder.mutation({
    //     query: (newEvent) => ({
    //       url: 'event',
    //       method: 'POST',
    //       body: newPost,
    //     }),
    //   }),
    }),
  });
  
  export const { useGetEventQuery } = EventsApi;