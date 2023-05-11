import React from 'react'
import { Box } from '@mui/material'
import HeaderDesktop from './headerDesktop'
import HeaderMobile from './headerMobile'

export default function Header() {
  return (
    <>
      <HeaderDesktop />
      <HeaderMobile />
    </>
  )
}
