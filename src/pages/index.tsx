import { Inter } from 'next/font/google'

import Link from 'next/link'
import { MainLayout } from '@/components/layout'

import { NextPageWithLayout } from '@/models/common'

import { Box } from '@mui/material'

const inter = Inter({ subsets: ['latin'] })

const Home: NextPageWithLayout = () => {
  return <Box>Home Page</Box>
}
Home.Layout = MainLayout

export default Home
