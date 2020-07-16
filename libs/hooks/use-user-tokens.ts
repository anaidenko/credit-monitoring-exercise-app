import { useState, useEffect } from 'react'
import useClientKey from './use-client-key'
import useAuthToken from './use-auth-token'
import useMounted from './use-mounted'

type Tokens = {
  clientKey?: string
  userToken?: string

  toArray(): string[]
}

const empty = () => []

const useUserTokens = () => {
  const mounted = useMounted()
  const [tokens, setTokens] = useState<Tokens>({ toArray: empty })

  const [clientKey] = useClientKey()
  const [userToken] = useAuthToken()

  useEffect(() => {
    if (mounted) {
      const mountedTokens = { clientKey, userToken }
      setTokens({ ...mountedTokens, toArray: () => Object.values(mountedTokens) })
    }
  }, [mounted])

  return tokens
}

export default useUserTokens
