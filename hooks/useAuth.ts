import useSWR, { SWRConfiguration } from 'swr'

import { authApi } from '@/api/authApi'

import { LocalStorageKey } from '../constants'
import { LoginPayload, UserProfile } from '../models'

function getUserInfo(): UserProfile | null {
  try {
    return JSON.parse(localStorage.getItem(LocalStorageKey.USER_INFO) || '')
  } catch (error) {
    console.log('failed to get user info from local storage', error)
    return null
  }
}

export function useAuth(options?: Partial<SWRConfiguration>) {
  //profile

  const {
    data: profile,
    error,
    mutate,
  } = useSWR<UserProfile | null>('/profile', {
    dedupingInterval: 3600000,
    revalidateOnFocus: false,
    ...options,
    fallbackData: getUserInfo(),
    onSuccess(data) {
      // save user infor to local storage
      localStorage.setItem(LocalStorageKey.USER_INFO, JSON.stringify(data))
    },
    onError(err) {
      // fail to get profile information
      console.log(err) // send error log to server

      logout()
    },
  })

  const firstLoading = profile === undefined && error === undefined

  async function login(payload: LoginPayload) {
    await authApi.login(payload)
    await mutate()
  }
  async function logout() {
    await authApi.logout()
    mutate(null, false)
    localStorage.removeItem(LocalStorageKey.USER_INFO)
  }

  return {
    profile,
    error,
    login,
    logout,
    firstLoading,
  }
}
