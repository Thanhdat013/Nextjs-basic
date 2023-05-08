import React from 'react'
import { Box, Container, Stack, Typography, Link as MuiLink } from '@mui/material'
import Image from 'next/image'
import avatar from '@/images/Avatar1.png'
import Link from 'next/link'
import PostCard from './post-card'

export default function RecentPosts() {
  return (
    // 1unit = 8px
    <Box component="section" bgcolor="secondary.light" py={4}>
      <Container>
        <Stack
          spacing={4}
          mb={2}
          direction={'row'}
          justifyContent={{ mobile: 'center', tabletMini: 'space-between' }}
          alignItems="center"
        >
          <Typography variant="h5"> Recent Box</Typography>
          <Link legacyBehavior passHref href="/blog">
            <MuiLink display={{ mobile: 'none', tabletMini: 'inline' }}>View all</MuiLink>
          </Link>
        </Stack>
        <Stack
          direction={{ mobile: 'column', tabletMini: 'row' }}
          spacing={3}
          sx={{
            '& > div': {
              width: {
                mobile: '100%',
                tabletMini: '50%',
              },
            },
          }}
        >
          <Box>
            <PostCard />
          </Box>

          <Box>
            <PostCard />
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}
