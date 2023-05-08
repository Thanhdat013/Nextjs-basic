import React from 'react'
import { Box } from '@mui/material'
export interface HeaderDesktopProps {}

export default function HeaderDesktop(props: HeaderDesktopProps) {
  return <Box display={{ xs: 'block', md: 'none' }}>Header Mobile</Box>
}
