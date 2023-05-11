import { useAuth } from '@/hooks/useAuth'
import { Container, Link as MuiLink, Stack } from '@mui/material'
import { Box } from '@mui/system'
import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ROUTE_LIST } from './routes'

export default function HeaderDesktop() {
  const router = useRouter()
  const { profile, logout } = useAuth()
  const isLoggedIn = Boolean(profile?.username)

  const routeList = ROUTE_LIST.filter((r) => !r.requireLogin || isLoggedIn)

  return (
    <Box display={{ mobile: 'none', tabletMini: 'block' }} py={2}>
      <Container>
        <Stack direction="row" justifyContent="flex-end">
          {routeList.map((route) => (
            <Link legacyBehavior href={route.path} key={route.path} passHref>
              <MuiLink
                sx={{ ml: 4, fontWeight: 'medium' }}
                className={clsx({ active: router.pathname === route.path })}
              >
                {route.label}
              </MuiLink>
            </Link>
          ))}

          {!isLoggedIn ? (
            <Link legacyBehavior href="/login" passHref>
              <MuiLink sx={{ ml: 4, fontWeight: 'medium' }}>Login</MuiLink>
            </Link>
          ) : (
            <MuiLink onClick={logout} sx={{ ml: 4, fontWeight: 'medium', cursor: 'pointer' }}>
              Logout
            </MuiLink>
          )}
        </Stack>
      </Container>
    </Box>
  )
}
