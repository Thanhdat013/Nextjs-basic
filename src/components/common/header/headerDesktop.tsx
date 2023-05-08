import React from 'react'
import { Container, Stack, Link as MuiLink } from '@mui/material'
import { Box } from '@mui/system'
import { ROUTE_LIST } from './routes'
import Link from 'next/link'
import { useRouter } from 'next/router'
import clsx from 'clsx'

export default function HeaderDesktop() {
  const router = useRouter()

  return (
    <Box display={{ xs: 'none', md: 'block' }} py={2}>
      Header Desktop
      <Container>
        <Stack direction="row" justifyContent="flex-end">
          {ROUTE_LIST.map((route) => (
            <Link legacyBehavior href={route.path} key={route.path} passHref>
              <MuiLink sx={{ ml: 2 }} className={clsx({ active: router.pathname === route.path })}>
                {route.label}
              </MuiLink>
            </Link>
          ))}
        </Stack>
      </Container>
    </Box>
  )
}
