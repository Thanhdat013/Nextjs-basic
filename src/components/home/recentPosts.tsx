import React from 'react'
import { Box, Container, Stack, Typography, Link as MuiLink } from '@mui/material'

import Link from 'next/link'
import PostCard from './post-card'
import { Post } from '@/models/posts'

export default function RecentPosts() {
  // call Api to get recent posts
  const postList: Post[] = [
    {
      id: '1',
      title: 'Making a design system from scratch',
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      tagList: ['Design', 'Pattern'],
      publishedDate: '1683564640973',
    },
    {
      id: '2',
      title: 'Creating pixel perfect icons in Figma',
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      tagList: ['Figma', 'Icon Design'],
      publishedDate: '1683564640973',
    },
  ]

  return (
    // 1unit = 8px
    <Box component="section" bgcolor="secondary.light" py={4}>
      <Container>
        <Stack
          spacing={4}
          mb={2}
          direction={'row'}
          justifyContent={{ mobile: 'center', tabletMini: 'space-between' }}
          alignItems="center"
        >
          <Typography variant="h5"> Recent Box</Typography>
          <Link legacyBehavior passHref href="/blog">
            <MuiLink display={{ mobile: 'none', tabletMini: 'inline' }}>View all</MuiLink>
          </Link>
        </Stack>
        <Stack
          direction={{ mobile: 'column', tabletMini: 'row' }}
          spacing={3}
          sx={{
            '& > div': {
              width: {
                mobile: '100%',
                tabletMini: '50%',
              },
            },
          }}
        >
          {postList.map((post) => (
            <Box key={post.id}>
              <PostCard post={post} />
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  )
}
