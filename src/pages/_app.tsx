import '@/styles/globals.css'
import { EmptyLayout } from '@/components/layout'
import { AppPropsWithLayout } from '@/models/common'
import { SWRConfig } from 'swr/_internal'
import axiosClient from '@/api/axiosClient'

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout ?? EmptyLayout
  return (
    <SWRConfig value={{ fetcher: (url) => axiosClient.get(url), shouldRetryOnError: false }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SWRConfig>
  )
}
