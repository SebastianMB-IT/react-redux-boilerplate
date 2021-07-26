import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'api' }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => {
        return {
          url: '/login',
          method: 'POST',
          body
        }
      }
    })
  })
})

export const { useLoginMutation } = userApi
