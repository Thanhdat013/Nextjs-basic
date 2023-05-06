import { authApi } from '@/api/authApi'
import * as React from 'react'

export interface LoginPageProps {}

export default function LoginPage(props: LoginPageProps) {
  const handleLoginClick = async () => {
    try {
      await authApi.login({
        username: 'test',
        password: '123456',
      })
    } catch (error) {
      console.log('fail to login', error)
    }
  }
  const handleLogoutClick = async () => {
    try {
      await authApi.logout()
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
        <button onClick={handleLoginClick}>Login</button>
        <button onClick={handleProfileClick}>Get profile</button>
        <button onClick={handleLogoutClick}>Logout</button>
      </div>
    </div>
  )
}
