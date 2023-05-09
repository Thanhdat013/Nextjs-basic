import { MainLayout } from '@/components/layout'
import { getPostList } from '@/utils/post'
import { GetStaticProps, GetStaticPropsContext } from 'next'
import Link from 'next/link'
import React from 'react'
import { Box, Container, Typography, Divider, Stack } from '@mui/material'
import PostItem from '@/components/blog/postItem'
export interface BlogList {
  posts: any[]
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
