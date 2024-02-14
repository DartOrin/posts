import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import type { GetPostListApi, GetPostApi } from "./types"

export const postsApiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_APP_API_URL,
  }),
  reducerPath: "quotesApi",
  tagTypes: ["Posts"],
  endpoints: build => ({
    getPostList: build.query<GetPostListApi.Response, GetPostListApi.Request>({
      query: ({ start = 0, limit = 10 }) =>
        `/posts?_start=${start}&_limit=${limit}`,
      providesTags: (result, error, { start = 0 }) => [
        { type: "Posts", start },
      ],
    }),
    getPost: build.query<GetPostApi.Response, GetPostApi.Request>({
      query: ({ id }) => `/posts/${id}`,
    }),
  }),
})

export const { useGetPostListQuery, useGetPostQuery } = postsApiSlice
