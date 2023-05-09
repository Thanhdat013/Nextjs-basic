import React from 'react'
import { Box, Container, Stack, Typography, Link as MuiLink } from '@mui/material'

import Link from 'next/link'
import PostCard from './post-card'
import { Work } from '@/models/work'
import { Post } from '@/models/posts'
import WorkList from '../work/workList'

export default function FeatureWork() {
  // call Api to get recent posts
  const workList: Work[] = [
    {
      id: '1',
      title: 'Designing Dashboards',
      shortDescription:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      fullDescription: '',
      tagList: ['Dashboard'],
      createdAt: '2020',
      updatedAt: '2020',
      thumbnailUrl:
        'https://res.cloudinary.com/dwgwlmu6i/image/upload/v1683603807/Next.Js_basic/feature_1_qom9g8.jpg',
    },
    {
      id: '2',
      title: 'Vibrant Portraits of 2020',
      shortDescription:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      fullDescription: '',
      tagList: ['Illustration'],
      createdAt: '2021',
      updatedAt: '1683564640973',
      thumbnailUrl:
        'https://res.cloudinary.com/dwgwlmu6i/image/upload/v1683603807/Next.Js_basic/feature_2_a0wbwc.jpg',
    },
    {
      id: '3',
      title: '36 Days of Malayalam type',
      shortDescription:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      fullDescription: '',
      tagList: ['Typography'],
      createdAt: '2020',
      updatedAt: '1683564640973',
      thumbnailUrl:
        'https://res.cloudinary.com/dwgwlmu6i/image/upload/v1683603807/Next.Js_basic/feature_3_kgwzqo.jpg',
    },
  ]

  return (
    // 1unit = 8px
    <Box component="section" py={4}>
      <Container>
        <Typography variant="h4">Feature work</Typography>

        <WorkList workList={workList} />
      </Container>
    </Box>
  )
}
