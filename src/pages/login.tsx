import { authApi } from '@/api/authApi'
import { useAuth } from '@/hooks/useAuth'
import { useRouter } from 'next/router'
import * as React from 'react'

export interface LoginPageProps {}

export default function LoginPage(props: LoginPageProps) {
  const router = useRouter()
  const { profile, login, logout } = useAuth({ revalidateOnMount: false })
  const handleLoginClick = async () => {
    try {
      await login()
      console.log('redirect to dashboard')
      router.push('/about')
    } catch (error) {
      console.log('fail to login', error)
    }
  }
  const handleLogoutClick = async () => {
    try {
      await logout()
      console.log('redirect to login page')
    } catch (error) {
      console.log('fail to logout', error)
    }
  }
  const handleProfileClick = async () => {
    try {
      const res = await authApi.getProfile()
      console.log(res)
    } catch (error) {
      console.log('fail to get profile', error)
    }
  }

  return (
    <div>
      <h1>Login Page</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <p>Profile: {JSON.stringify(profile || {}, null, 4)}</p>

        <button onClick={handleLoginClick}>Login</button>
        <button onClick={handleProfileClick}>Get profile</button>
        <button onClick={handleLogoutClick}>Logout</button>
        <button onClick={() => router.push('/about')}>Go to about</button>
      </div>
    </div>
  )
}
