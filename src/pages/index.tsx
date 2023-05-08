import { Inter } from 'next/font/google'

import { MainLayout } from '@/components/layout'

import { NextPageWithLayout } from '@/models/common'

import { Box } from '@mui/material'
import HeroSection from '@/components/home/hero'
import RecentPosts from '@/components/home/recentPosts'

const inter = Inter({ subsets: ['latin'] })

const Home: NextPageWithLayout = () => {
  return (
    <Box>
      <HeroSection />
      <RecentPosts />
    </Box>
  )
}
Home.Layout = MainLayout

export default Home
