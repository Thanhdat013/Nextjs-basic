import { LayoutProps } from '@/models/common'
import Link from 'next/link'
import React from 'react'
import { Stack, Box, Container } from '@mui/material'
import { Footer } from '@/common/index'
import Header from '@/common/header'

export function MainLayout({ children }: LayoutProps) {
  return (
    <Stack minHeight="100vh">
      <Header />

      <Box component="main" flexGrow={1}>
        <Container sx={{ bgcolor: 'primary.light' }}>Container</Container>
        <Container maxWidth="sm" sx={{ bgcolor: 'secondary.main' }}>
          Container sm
        </Container>
        <div>{children}</div>
      </Box>

      <Footer />
    </Stack>
  )
}
