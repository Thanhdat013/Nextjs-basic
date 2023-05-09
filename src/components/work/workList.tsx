import { Work } from '@/models/work'
import React, { Fragment } from 'react'
import { Box, Divider, Container, Stack } from '@mui/material'
import Image from 'next/image'
import WorkCard from './workCard'

export interface WorkListProps {
  workList: Work[]
}

export default function WorkList({ workList }: WorkListProps) {
  if (workList.length === 0) return null
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
