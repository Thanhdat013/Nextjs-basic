import React from 'react'
import { Box, Container, Stack, Typography, Button } from '@mui/material'
import Image from 'next/image'
import avatar from '@/images/Avatar1.png'

export default function HeroSection() {
  return (
    // 1unit = 8px
    <Box
      component="section"
      pt={{ tablet: 13, mobile: 4 }}
      pb={{ tablet: 9, mobile: 7 }}
      mt={{ mobile: 6 }}
    >
      <Container>
        <Stack
          spacing={4}
          direction={{ mobile: 'column-reverse', tablet: 'row' }}
          alignItems={{ mobile: 'center', tablet: 'flex-start' }}
          textAlign={{ mobile: 'center', tablet: 'left' }}
        >
          <Box>
            <Typography component="h1" variant="h3" fontWeight="bold" mb={{ mobile: 3, tablet: 5 }}>
              Hi, I am John,
              <br />
              Creative Technologist
            </Typography>
            <Typography mb={{ mobile: 3, tablet: 5 }}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud
              amet.
            </Typography>
            <Button variant="contained">Download Resume</Button>
          </Box>
          <Box sx={{ minWidth: '240px', bomobilehadow: '-5px 13px #EDF7FA', borderRadius: '50%' }}>
            <Image
              src={avatar}
              alt="avatar"
              priority={false}
              style={{ width: 'auto', height: 'auto' }}
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}
