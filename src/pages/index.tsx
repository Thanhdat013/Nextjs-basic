import { Inter } from 'next/font/google'

import { MainLayout } from '@/components/layout/index'

import { NextPageWithLayout } from '@/models/common'

import { Box } from '@mui/material'
import HeroSection from '@/components/home/hero'
import RecentPosts from '@/components/home/recentPosts'
import FeatureWork from '@/components/home/featureWork'
import Seo from '@/components/common/seo'

const inter = Inter({ subsets: ['latin'] })

const Home: NextPageWithLayout = () => {
  return (
    <Box>
      <Seo
        data={{
          title: 'Next.js tutorials to beginner',
          description:
            'Step by step  tutorials to build a full CRUD website using Next.js for beginner',
          url: 'https://nextjs-basic-kappa-eight.vercel.app/',
          thumbnailUrl:
            'https://res.cloudinary.com/dwgwlmu6i/image/upload/v1683616099/Next.Js_basic/image_p9tyze.jpg',
        }}
      />
      <HeroSection />
      <RecentPosts />
      <FeatureWork />
    </Box>
  )
}
Home.Layout = MainLayout

export default Home
