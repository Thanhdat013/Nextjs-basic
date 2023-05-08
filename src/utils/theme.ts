import { Roboto } from 'next/font/google'
import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
})

// Create a theme instance.
export const theme = createTheme({
  typography: {
    fontFamily: 'Heebo, sans-serif',
  },

  palette: {
    primary: {
      main: '#FF6464',
      dark: '#21243D',
      light: '#8695A4',
    },
    secondary: {
      main: '#00A8CC',
      light: '#EDF7FA',
    },

    error: {
      main: red.A400,
    },
  },
  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: 'md',
      },
      styleOverrides: {
        maxWidthMd: {
          maxWidth: '860px',
          '@media (min-width:900px)': { maxWidth: '860px' },
        },
        maxWidthSm: {
          maxWidth: '680px',
          '@media (min-width:600px)': { maxWidth: '680px' },
        },
      },
    },
    MuiLink: {
      defaultProps: {
        underline: 'none',
      },
      styleOverrides: {
        root: {
          color: '#21243D',
          '&:hover, &.active': {
            color: '#FF6464',
          },
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: 'contained', color: 'primary' },
          style: { color: 'white' },
        },
      ],
    },
  },
})
