import axiosClient from '@/api/axiosClient'
import { EmptyLayout } from '@/components/layout'
import { AppPropsWithLayout } from '@/models/common'
import '@/styles/globals.css'
import '@/styles/prism.css'
import { SWRConfig } from 'swr/_internal'

import { CacheProvider } from '@emotion/react'

import CssBaseline from '@mui/material/CssBaseline'

import { createEmotionCache, theme } from '@/utils'
import { ThemeProvider } from '@mui/material/styles'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const clientSideEmotionCache = createEmotionCache()

export default function App({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: AppPropsWithLayout) {
  // Client-side cache, shared for the whole session of the user in the browser.
  const Layout = Component.Layout ?? EmptyLayout
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ToastContainer />
        <SWRConfig value={{ fetcher: (url) => axiosClient.get(url), shouldRetryOnError: false }}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SWRConfig>
      </ThemeProvider>
    </CacheProvider>
  )
}
