import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const infoApi = createApi({
  reducerPath: 'infoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'api' }),
  endpoints: (builder) => ({
    getInfo: builder.query({
      query: () => '/info'
    })
  })
})

export const { useGetInfoQuery } = infoApi
