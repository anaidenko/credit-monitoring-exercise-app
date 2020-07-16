import { useState, useEffect } from 'react'
import useSWR from 'swr'

import useMounted from './use-mounted'
import { getUser } from '../api/auth'
import useUserTokens from '@/libs/hooks/use-user-tokens'
import { User } from '../api/models/User'

const useUser = () => {
  const mounted = useMounted()
  const tokens = useUserTokens()
  const { clientKey, userToken } = tokens

  const [user, setUser] = useState<User>()
  const key = mounted && ['user', tokens.toArray()]
  const { data, error } = useSWR(key, () => getUser({ clientKey, userToken }))

  useEffect(() => {
    setUser(data)
  }, [data])

  return user
}

export default useUser
