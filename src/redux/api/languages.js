import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const languagesApi = createApi({
    reducerPath: 'languagesApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://raw.githubusercontent.com' }),
    endpoints: (builder) => ({
        fetchLanguageInitial: builder.query({
            query: () => ({
                url: `/javialcocer/test-json/main/data.json`,
                method: 'GET'
            }),

        }),
    })
});

export const { useFetchLanguageInitialQuery } = languagesApi;