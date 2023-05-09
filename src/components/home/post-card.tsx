import React from 'react'
import { Card, CardContent, Typography, Divider, Stack } from '@mui/material'

import { format } from 'date-fns'
import { Post } from '@/models/posts'
import PostItem from '@/blog/postItem'

export interface PostCardProps {
  post: Post
}

export default function PostCard({ post }: PostCardProps) {
  if (!post) return null
  return (
    <Card>
      <CardContent>
        <PostItem post={post} />
      </CardContent>
    </Card>
  )
}
