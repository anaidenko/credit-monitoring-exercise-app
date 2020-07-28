import { useState, useEffect } from 'react'

import useSWR from 'swr'

import useUserTokens from '@/libs/hooks/use-user-tokens'

import { getUser } from '../api/auth'
import { User } from '../api/models/User'
import useMounted from './use-mounted'

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
