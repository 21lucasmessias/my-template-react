import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { RootState } from '../../app/store'

const baseUrl = 'http://localhost:5050/api'

export const apiSlice = createApi({
    reducerPath: 'api',
    tagTypes: ['Post'],
    endpoints: () => ({}),
    baseQuery: fetchBaseQuery({
        baseUrl,
        mode: 'cors',
        prepareHeaders: (headers) => {
            headers.set('Content-Type', 'application/json')
            return headers
        },
    }),
})

export const selectApi = (state: RootState) => state.api
