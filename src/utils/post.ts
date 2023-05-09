import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import { Post } from '@/models/posts'

// lấy đường dẫn file
const BLOG_FOLDER = path.join(process.cwd(), 'blog')

export async function getPostList(): Promise<Post[]> {
  // read all markdown files
  const fileNameList = fs.readdirSync(BLOG_FOLDER)

  const postList: Post[] = []

  for (const fileName of fileNameList) {
    const filePath = path.join(BLOG_FOLDER, fileName)
    const fileContent = fs.readFileSync(filePath, 'utf8')

    //  Use gray-matter to parse the post metadata section
    const { data, excerpt, content } = matter(fileContent, {
      excerpt_separator: '<!-- truncate-->',
    })

    postList.push({
      id: fileName,
      slug: data.slug,
      title: data.title,
      tagList: data.tags,
      publishedDate: data.date,
      description: excerpt || '',
      author: {
        name: data.author,
        title: data.author_title,
        profileUrl: data.author_url,
        avatarUrl: data.author_image_url,
      },
      mdContent: content,
    })
  }
  return postList
}
