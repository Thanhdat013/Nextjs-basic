import { useAuth } from '@/hooks/useAuth'
import CallToActionOutlinedIcon from '@mui/icons-material/CallToActionOutlined'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import HomeIcon from '@mui/icons-material/Home'
import LoginIcon from '@mui/icons-material/Login'
import LogoutIcon from '@mui/icons-material/Logout'
import MenuIcon from '@mui/icons-material/Menu'
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined'
import { AppBar, Box, Drawer, IconButton, List, Link as MuiLink, Toolbar } from '@mui/material'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { Fragment } from 'react'
import { ROUTE_LIST } from './routes'
export default function HeaderDesktop() {
  const router = useRouter()
  const { profile, logout } = useAuth()
  const isLoggedIn = Boolean(profile?.username)

  const routeList = ROUTE_LIST.filter((r) => !r.requireLogin || isLoggedIn)

  // open menu
  const [open, setOpen] = React.useState(false)
  const handleClickMenu = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Box display={{ mobile: 'block', tabletMini: 'none' }}>
      <AppBar position="fixed" sx={{ alignItems: 'flex-end', bgcolor: '#fff' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleClickMenu}
          >
            <MenuIcon />
          </IconButton>

          <Drawer
            sx={{
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                width: '50vw',
              },
            }}
            variant="persistent"
            anchor="right"
            open={open}
            onClose={handleClose}
          >
            <Box minHeight={55}>
              <IconButton onClick={handleClose}>
                {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
              </IconButton>
            </Box>
            <Divider />
            <List>
              {routeList.map((route, index) => (
                <ListItem key={index} disablePadding>
                  <ListItemButton sx={{ textAlign: 'left' }}>
                    {
                      <ListItemIcon>
                        {route.label === 'Home' && <HomeIcon />}
                        {route.label === 'Blog' && <CallToActionOutlinedIcon />}
                        {route.label === 'Works' && <WorkOutlineOutlinedIcon />}
                      </ListItemIcon>
                    }
                    <ListItemText>
                      <Link legacyBehavior href={route.path} key={route.path} passHref>
                        <MuiLink
                          onClick={handleClose}
                          sx={{ fontWeight: 'medium' }}
                          className={clsx({ active: router.pathname === route.path })}
                        >
                          {route.label}
                        </MuiLink>
                      </Link>
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>

            <Divider />
            <List>
              <ListItemButton>
                {!isLoggedIn ? (
                  <Fragment>
                    <ListItemIcon>
                      <LoginIcon />
                    </ListItemIcon>
                    <Link legacyBehavior href="/login" passHref>
                      <MuiLink sx={{ fontWeight: 'medium' }}>Login</MuiLink>
                    </Link>
                  </Fragment>
                ) : (
                  <>
                    <ListItemIcon>
                      <LogoutIcon />
                    </ListItemIcon>
                    <MuiLink onClick={logout} sx={{ fontWeight: 'medium', cursor: 'pointer' }}>
                      Logout
                    </MuiLink>
                  </>
                )}
              </ListItemButton>
            </List>
          </Drawer>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
