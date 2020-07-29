import { useState, useEffect } from 'react'

import useAuthToken from './useAuthToken'
import useClientKey from './useClientKey'
import useMounted from './useMounted'

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
      const array = Object.values(mountedTokens)
      setTokens({ ...mountedTokens, toArray: () => array })
    }
  }, [mounted, clientKey, userToken])

  return tokens
}

export default useUserTokens
