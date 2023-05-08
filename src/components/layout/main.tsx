import { LayoutProps } from '@/models/common'
import Link from 'next/link'
import React from 'react'
import { Stack, Box } from '@mui/material'
import { Footer, Header } from '@/common/index'

export function MainLayout({ children }: LayoutProps) {
  return (
    <Stack minHeight="100vh">
      <Header />
      <Link href="/">Home</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/work">Works</Link>
      <Box component="main" flexGrow="1">
        <div>{children}</div>
      </Box>

      <Footer />
    </Stack>
  )
}
