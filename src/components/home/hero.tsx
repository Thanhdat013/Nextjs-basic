import React from 'react'
import { Box, Container, Stack, Typography, Button } from '@mui/material'
import Image from 'next/image'
import avatar from '@/images/Avatar1.png'

export default function HeroSection() {
  return (
    // 1unit = 8px
    <Box component="section" pt={{ md: 16, xs: 4 }} pb={{ md: 9, xs: 7 }}>
      <Container>
        <Stack
          spacing={4}
          direction={{ xs: 'column-reverse', md: 'row' }}
          alignItems={{ xs: 'center', md: 'flex-start' }}
          textAlign={{ xs: 'center', md: 'left' }}
        >
          <Box>
            <Typography component="h1" variant="h3" fontWeight="bold" mb={{ xs: 3, md: 5 }}>
              Hi, I am John,
              <br />
              Creative Technologist
            </Typography>
            <Typography mb={{ xs: 3, md: 5 }}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud
              amet.
            </Typography>
            <Button variant="contained">Download Resume</Button>
          </Box>
          <Box sx={{ minWidth: '240px', boxShadow: '-5px 13px #EDF7FA', borderRadius: '50%' }}>
            <Image src={avatar} alt="avatar" />
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}
