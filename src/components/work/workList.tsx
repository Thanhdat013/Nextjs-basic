import { Work } from '@/models/work'
import React, { Fragment } from 'react'
import { Box, Divider, Container, Stack } from '@mui/material'
import Image from 'next/image'
import WorkCard from './workCard'
import WorkSkeleton from './workSkeleton'

export interface WorkListProps {
  workList: Work[]
  loading?: boolean
}

export default function WorkList({ workList, loading }: WorkListProps) {
  if (loading)
    return (
      <Box>
        {Array.from({ length: 3 }).map((_, index) => (
          <Fragment key={index}>
            <WorkSkeleton />
            <Divider sx={{ my: 3 }} />
          </Fragment>
        ))}
      </Box>
    )
  if (workList.length === 0)
    return (
      <Box alignItems="center" justifyContent="center">
        <Container>
          <Image
            src="https://res.cloudinary.com/dwgwlmu6i/image/upload/v1683884482/Next.Js_basic/49e58d5922019b8ec4642a2e2b9291c2_j8llml.png"
            height={600}
            width={800}
            alt="data not found"
          />
        </Container>
      </Box>
    )
  return (
    <Box>
      {workList.map((work) => (
        <Fragment key={work.id}>
          <WorkCard work={work} />
          <Divider sx={{ my: 3 }} />
        </Fragment>
      ))}
    </Box>
  )
}
