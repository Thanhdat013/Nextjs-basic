import React from 'react'
import { Box, Stack, Typography, Icon } from '@mui/material'
import { Facebook, Instagram, Twitter, LinkedIn } from '@mui/icons-material'

export function Footer() {
  const socialLinks = [
    {
      icon: Facebook,
      url: 'https://www.google.com.vn/',
      color: '#3a559f',
    },
    {
      icon: Instagram,
      url: 'https://www.google.com.vn/',
      color: '#ed6943',
    },
    {
      icon: Twitter,
      url: 'https://www.google.com.vn/',
      color: '#50abf1',
    },
    {
      icon: LinkedIn,
      url: 'https://www.google.com.vn/',
      color: '#0077b7',
    },
  ]
  return (
    <Box component="footer" py={2} textAlign="center">
      <Stack direction="row" justifyContent="center" spacing={4} mb={3}>
        {socialLinks.map((item, index) => (
          <Box key={index} component="a" href={item.url} target="_blank" rel="noopener noreferrer">
            <Icon component={item.icon} fontSize="large" sx={{ color: `${item.color}` }} />
          </Box>
        ))}
      </Stack>
      <Typography>Copyright ©{new Date().getFullYear()} All rights reserved</Typography>
    </Box>
  )
}
