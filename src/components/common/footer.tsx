import React from 'react'
import { Box, Stack, Typography, Icon } from '@mui/material'
import { Facebook, Instagram, Twitter, LinkedIn } from '@mui/icons-material'

export function Footer() {
  const socialLinks = [
    {
      icon: Facebook,
      url: 'https://www.google.com.vn/',
    },
    {
      icon: Instagram,
      url: 'https://www.google.com.vn/',
    },
    {
      icon: Twitter,
      url: 'https://www.google.com.vn/',
    },
    {
      icon: LinkedIn,
      url: 'https://www.google.com.vn/',
    },
  ]
  return (
    <Box component="footer" py={2} textAlign="center">
      <Stack direction="row" justifyContent="center" spacing={4} mb={3}>
        {socialLinks.map((item, index) => (
          <Box key={index} component="a" href={item.url} target="_blank" rel="noopener noreferrer">
            <Icon component={item.icon} fontSize="large" />
          </Box>
        ))}
      </Stack>
      <Typography>Copyright ©{new Date().getFullYear()} All rights reserved</Typography>
    </Box>
  )
}
