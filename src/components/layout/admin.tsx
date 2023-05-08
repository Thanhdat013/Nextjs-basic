import { LayoutProps } from '@/models/common'
import Link from 'next/link'
import React from 'react'
import { Auth } from '../common'
import { useAuth } from '@/hooks/useAuth'
import { useRouter } from 'next/router'

export function AdminLayout({ children }: LayoutProps) {
  const router = useRouter()
  const { logout, profile } = useAuth()
  const handleLogoutClick = async () => {
    try {
      await logout()
      console.log('redirect to login page')
      router.push('/login')
    } catch (error) {
      console.log('fail to logout', error)
    }
  }
  return (
    <Auth>
      <div>
        <h1>Admin layout</h1>
        <p>Profile: {JSON.stringify(profile)}</p>
        <button onClick={handleLogoutClick}>Logout</button>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>

        <div>{children}</div>
      </div>
    </Auth>
  )
}
