import Link from 'next/link'
import React, { useEffect, useState } from 'react'
// import HeaderProps from './components/Header';
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'

import { Box, Typography } from '@mui/material'
import { AdminLayout } from '@/layout/index'

export interface AboutPage {}

export default function AboutPage(props: AboutPage) {
  const router = useRouter()
  const [postList, setPostList] = useState([])
  const page = router.query?.page
  useEffect(() => {
    if (!page) return
    ;(async () => {
      const response = await fetch(`https://js-post-api.herokuapp.com/api/posts/?_page=${page}`)
      const data = await response.json()

      setPostList(data.data)
    })()
  }, [page])

  const handleClickNext = () => {
    router.push(
      {
        pathname: 'about/',
        query: {
          page: Number(page || 1) + 1,
        },
      },
      undefined,
      { shallow: true }
    )
  }

  return (
    <Box>
      <div>About page</div>

      <Typography component="h1" variant="h3" color="primary.main">
        About
      </Typography>

      <h3>Go to home</h3>

      <ul>
        {postList.map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <button onClick={handleClickNext}>Next Page</button>
    </Box>
  )
}

AboutPage.Layout = AdminLayout

export async function getStaticProps() {
  console.log('render SSR')

  return {
    props: {},
  }
}
