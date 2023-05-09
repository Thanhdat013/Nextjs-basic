import { Inter } from 'next/font/google'

import { MainLayout } from '@/components/layout/index'

import { NextPageWithLayout } from '@/models/common'

import { Box } from '@mui/material'
import HeroSection from '@/components/home/hero'
import RecentPosts from '@/components/home/recentPosts'
import FeatureWork from '@/components/home/featureWork'

const inter = Inter({ subsets: ['latin'] })

const Home: NextPageWithLayout = () => {
  return (
    <Box>
      <HeroSection />
      <RecentPosts />
      <FeatureWork />
    </Box>
  )
}
Home.Layout = MainLayout

export default Home
