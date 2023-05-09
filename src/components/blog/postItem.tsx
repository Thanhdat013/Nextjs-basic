import React from 'react'
import { Box, CardContent, Typography, Divider, Stack } from '@mui/material'

import { format } from 'date-fns'
import { Post } from '@/models/posts'
export interface PostItemProps {
  post: Post
}

export default function PostItem({ post }: PostItemProps) {
  const htmlString = post.mdContent
  return (
    <Box>
      <Typography
        variant={'h4'}
        fontSize={{ tabletMini: '26px', mobile: '22px' }}
        fontWeight="bold"
      >
        {post.title}
      </Typography>
      <Stack direction="row" my={2}>
        <Typography variant="body1" fontSize={{ tabletMini: '18px', mobile: '16px' }}>
          {format(new Date(post.publishedDate), 'dd MMM yyyy')}
        </Typography>
        <Divider orientation="vertical" sx={{ mx: 2 }} flexItem />
        <Typography variant="body1" fontSize={{ tabletMini: '18px', mobile: '16px' }}>
          {post.tagList.join(', ')}
        </Typography>
      </Stack>
      <Typography variant={'body1'}>{post.description}</Typography>
    </Box>
  )
}
