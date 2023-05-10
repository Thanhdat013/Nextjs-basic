import httpProxy, { ProxyResCallback } from 'http-proxy'
import Cookies from 'cookies'

import { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  message: string
}

const API_URL = process.env.API_URL

const proxy = httpProxy.createProxyServer()

// You can export a config variable from any API route in Next.js.
// We'll use this to disable the bodyParser, otherwise Next.js
// would read and parse the entire request body before we
// can forward the request to the API. By skipping the bodyParser,
// we can just stream all requests through to the actual API.
export const config = {
  api: {
    bodyParser: false,
  },
}

const handler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method !== 'POST') {
    return res.status(404).json({ message: 'method not supported' })
  }
  return new Promise((resolve) => {
    // don't send cookies to APi server
    req.headers.cookie = ''

    const handleLoginResponse: ProxyResCallback = (proxyRes, req, res) => {
      let body = ''
      proxyRes.on('data', function (chunk) {
        body += chunk
      })
      //.on() apply cho tất cả request của proxy server
      //once() apply cho 1 request
      proxyRes.on('end', function () {
        try {
          // check login failed
          const isSuccess =
            proxyRes.statusCode && proxyRes.statusCode >= 200 && proxyRes.statusCode < 300
          if (!isSuccess) {
            ;(res as NextApiResponse).status(proxyRes.statusCode || 500).json(body)
            resolve(true)
          }
          // set values when login success
          const { accessToken, expiredAt } = JSON.parse(body)
          console.log(JSON.parse(body))

          // convert token to cookie
          const cookies = new Cookies(req, res, { secure: process.env.NODE_ENV !== 'development' })
          cookies.set('access_token', accessToken, {
            httpOnly: true,
            sameSite: 'lax',
            expires: new Date(expiredAt),
          })
          ;(res as NextApiResponse).status(200).json({ message: 'login successfully' })
        } catch (error) {
          ;(res as NextApiResponse).status(500).json({ message: 'something went wrong' })
        }

        resolve(true)
      })
    }

    proxy.once('proxyRes', handleLoginResponse)

    proxy.web(req, res, {
      target: API_URL,
      changeOrigin: true,
      selfHandleResponse: true,
    })
  })
}

export default handler
