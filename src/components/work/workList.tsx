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
  if (workList.length === 0 || !workList)
    return (
      <Box alignItems="center" justifyContent="center">
        <Container>
          <Image
            src="https://res.cloudinary.com/dwgwlmu6i/image/upload/v1685271656/Next.Js_basic/not-data_zcxqtj.png"
            height={600}
            width={800}
            alt="data not found"
            priority={false}
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
