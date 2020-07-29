import { useState, useEffect } from 'react'

import useSWR from 'swr'

import { getUser } from '@/providers/api/auth'
import { User } from '@/providers/api/models/User'

import useMounted from './useMounted'
import useUserTokens from './useUserTokens'

const useUser = () => {
  const mounted = useMounted()
  const tokens = useUserTokens()
  const { clientKey, userToken } = tokens

  const [user, setUser] = useState<User>()
  const key = mounted ? ['user', tokens.toArray()] : null
  const { data } = useSWR(key, () => getUser({ clientKey, userToken }))

  useEffect(() => {
    setUser(data)
  }, [data])

  return user
}

export default useUser
