import PostItem from '@/components/blog/postItem'
import { MainLayout } from '@/components/layout'
import { Post } from '@/models/posts'
import { getPostList } from '@/utils/post'
import { Box, Container, Divider, Typography } from '@mui/material'
import { GetStaticProps, GetStaticPropsContext } from 'next'
import Link from 'next/link'
export interface BlogList {
  posts: Post[]
}

export default function BlogPage({ posts }: BlogList) {
  return (
    <Box component="section" my={4}>
      <Container maxWidth="tabletMini">
        <Typography variant="h2" fontWeight="bold" mb={4}>
          Blog
        </Typography>
        <Box component="ul">
          {posts.map((post) => (
            <Box key={post.id}>
              <Link href={`/blog/${post.slug}`}>
                <PostItem post={post} />
              </Link>
              <Divider sx={{ my: 3 }} />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  )
}

export const getStaticProps: GetStaticProps<BlogList> = async (context: GetStaticPropsContext) => {
  // convert markdown files into javascript object
  const postList = await getPostList()
  return {
    props: {
      posts: postList,
    },
  }
}

BlogPage.Layout = MainLayout
