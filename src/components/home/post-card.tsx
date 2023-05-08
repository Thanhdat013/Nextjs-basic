import React from 'react'
import { Card, CardContent, Typography, Divider } from '@mui/material'
import { Post } from '@/models/posts'
import { format } from 'date-fns'

export interface PostCardProps {
  post: Post
}

export default function PostCard({ post }: PostCardProps) {
  if (!post) return null
  return (
    <Card>
      <CardContent>
        <Typography variant={'h4'} fontSize={{ table: '26px', mobile: '22px' }} fontWeight="bold">
          {post.title}
        </Typography>
        <Typography variant="subtitle1" my={2} sx={{ display: 'flex' }}>
          {format(Number(post.publishedDate), 'dd mm yyyy')}
          <Divider orientation="vertical" sx={{ mx: 2 }} flexItem />
          {post.tagList.join(', ')}
        </Typography>
        <Typography variant={'body1'}>{post.description}</Typography>
      </CardContent>
    </Card>
  )
}
