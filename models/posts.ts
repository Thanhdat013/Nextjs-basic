export interface Post {
  id: string | number
  title: string
  description: string
  publishedDate: string
  tagList: string[]

  slug: string
  author?: Author

  mdContent?: string
  htmlContent?: string
}

export interface Author {
  name: string
  title: string
  profileUrl: string
  avatarUrl: string
}
