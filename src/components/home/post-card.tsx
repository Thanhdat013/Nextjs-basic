import React from 'react'
import { Card, CardContent, Typography, Divider, Stack } from '@mui/material'
import { Post } from '@/models'
import { format } from 'date-fns'

export interface PostCardProps {
  post: Post
}

export default function PostCard({ post }: PostCardProps) {
  if (!post) return null
  return (
    <Card>
      <CardContent>
        <Typography
          variant={'h4'}
          fontSize={{ tabletMini: '26px', mobile: '22px' }}
          fontWeight="bold"
        >
          {post.title}
        </Typography>
        <Stack direction="row" my={2}>
          <Typography variant="body1" fontSize={{ tabletMini: '18px', mobile: '16px' }}>
            {format(Number(post.publishedDate), 'dd mm yyyy')}
          </Typography>
          <Divider orientation="vertical" sx={{ mx: 2 }} flexItem />
          <Typography variant="body1" fontSize={{ tabletMini: '18px', mobile: '16px' }}>
            {post.tagList.join(', ')}
          </Typography>
        </Stack>
        <Typography variant={'body1'}>{post.description}</Typography>
      </CardContent>
    </Card>
  )
}
