import httpProxy from 'http-proxy'
import Cookies from 'cookies'
import url from 'url'
import { NextApiRequest, NextApiResponse } from 'next'

const API_URL = process.env.API_URL
type Data = {
  message: string
}
const proxy = httpProxy.createProxyServer()

export const config = {
  api: {
    bodyParser: false,
  },
}

const handler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method !== 'POST') {
    return res.status(404).json({ message: 'method not supported' })
  }
  // remove cookie
  const cookies = new Cookies(req, res)
  cookies.set('access_token')

  res.status(200).json({ message: 'you are logout successfully' })
}

export default handler
