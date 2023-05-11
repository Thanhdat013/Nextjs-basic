import { LayoutProps } from '@/models/common'
import Link from 'next/link'
import React from 'react'
import { Stack, Box, Container } from '@mui/material'
import { Footer } from '@/common/index'
import dynamic from 'next/dynamic'

const Header = dynamic(() => import('@/common/header'), { ssr: false })

export function MainLayout({ children }: LayoutProps) {
  return (
    <Stack minHeight="100vh">
      <Header />

      <Box component="main" flexGrow={1}>
        <div>{children}</div>
      </Box>

      <Footer />
    </Stack>
  )
}
