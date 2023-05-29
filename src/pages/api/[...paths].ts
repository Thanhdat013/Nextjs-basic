import httpProxy from 'http-proxy'
import Cookies from 'cookies'
import url from 'url'
import { NextApiRequest, NextApiResponse } from 'next'

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

const handler = (req: NextApiRequest, res: NextApiResponse<any>) => {
  return new Promise((resolve) => {
    // convert cookie to Header authorization
    const cookies = new Cookies(req, res)
    const accessToken = cookies.get('access_token')
    if (accessToken) {
      req.headers.Authorization = `Bearer ${accessToken}`
    }
    // don't send cookies to APi server
    req.headers.cookie = ''

    proxy.web(req, res, {
      target: API_URL,
      changeOrigin: true,
      selfHandleResponse: false,
    })

    
  })
}

export default handler
