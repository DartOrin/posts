export interface Post {
  id: number
  title: string
  body: string
  userId: number
}

export interface PostListApiRequest {
  start?: number
  limit?: number
}

export interface GetPostRequest {
  id: string
}

export module GetPostListApi {
  export type Response = Post[]
  export type Request = PostListApiRequest
}

export module GetPostApi {
  export type Response = Post
  export type Request = GetPostRequest
}
