import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { mockAvailUsers, mockEvents } from './eventsMockData';

const rawBaseQuery = fetchBaseQuery({
  baseUrl: 'https://rfdgc.onrender.com/',
  timeout: 8000,
});
const useMockOnly = process.env.REACT_APP_USE_MOCK_EVENTS_API === 'true';

const baseQueryWithMockFallback = async (args, api, extraOptions) => {
  const path = typeof args === 'string' ? args : args?.url;

  if (useMockOnly) {
    if (path === 'event') {
      return { data: mockEvents };
    }
    if (path === 'event/avail') {
      return { data: mockAvailUsers };
    }
  }

  const result = await rawBaseQuery(args, api, extraOptions);
  if (!result.error) {
    return result;
  }

  if (path === 'event') {
    return { data: mockEvents };
  }
  if (path === 'event/avail') {
    return { data: mockAvailUsers };
  }

  return result;
};

export const EventsApi = createApi({
    reducerPath: 'EventApi',
    baseQuery: baseQueryWithMockFallback,
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
        getAvailUsers: builder.query({
         query: () => "event/avail",
        }),
    }),
        
  });
  
  export const { useGetEventQuery, useGetAvailUsersQuery } = EventsApi;