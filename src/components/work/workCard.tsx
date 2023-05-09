import { Work } from '@/models/work'
import React from 'react'
import { Stack, Chip, Box, Typography } from '@mui/material'
import Image from 'next/image'
export interface WorkCardProps {
  work: Work
}

export default function WorkCard({ work }: WorkCardProps) {
  return (
    <Stack direction={{ mobile: 'column', tabletMini: 'row' }} spacing={2}>
      <Box width={{ mobile: '100%', tabletMini: '246px' }} flexShrink={0}>
        <Image
          src={work.thumbnailUrl}
          width={246}
          height={180}
          alt="work image"
          style={{ width: '100%', height: '100%' }}
        />
      </Box>
      <Box>
        <Typography variant="h4" fontWeight="bold">
          {work.title}
        </Typography>
        <Stack direction="row" my={2} alignItems="center" textAlign="center">
          <Chip color="secondary" label={work.createdAt} size="small" />
          <Typography color="GrayText" ml={3}>
            {work.tagList.join(', ')}
          </Typography>
        </Stack>
        <Typography>{work.shortDescription}</Typography>
      </Box>
    </Stack>
  )
}
