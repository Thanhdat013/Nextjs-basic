import { Roboto } from 'next/font/google'
import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import { red } from '@mui/material/colors'

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
})

// custom breakpoints
declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: false // removes the `xs` breakpoint
    sm: false
    md: false
    lg: false
    xl: false
    mobile: true // adds the `mobile` breakpoint
    tabletMini: true
    tablet: true
    laptop: true
    desktop: true
  }
}

// Create a theme instance.
export let theme = createTheme({
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
    text: {
      primary: '#21243D',
    },
  },
  breakpoints: {
    values: {
      mobile: 0,
      tabletMini: 760,
      tablet: 860,
      laptop: 1024,
      desktop: 1200,
    },
  },
  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: 'tablet',
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
    MuiChip: {
      variants: [
        {
          props: { color: 'secondary' },
          style: {
            backgroundColor: '#142850',
            color: 'white',
            fontWeight: 'bold',
            padding: '4px 8px',
            fontSize: 18,
          },
        },
      ],
    },
  },
})

theme = responsiveFontSizes(theme)
