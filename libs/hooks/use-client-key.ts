import { useEffect } from 'react'

import { useRouter } from 'next/router'

import { CLIENT_KEY } from '../constants/local-storage'
import useLocalStorage from './use-local-storage'

const DEFAULT_CLIENT_KEY = process.env.NEXT_PUBLIC_API_CLIENT_KEY

type Response = [string, (v: string) => void]

function useClientKey(initialValue?: string): Response {
  const { query } = useRouter()
  const [storedClientKey, setClientKey] = useLocalStorage(CLIENT_KEY, DEFAULT_CLIENT_KEY)

  useEffect(() => {
    const routedClientKey = query.clientKey?.toString()
    const newClientKey = initialValue || routedClientKey || DEFAULT_CLIENT_KEY
    if (storedClientKey !== newClientKey) {
      setClientKey(newClientKey)
    }
  }, [query.clientKey, initialValue, storedClientKey])

  return [storedClientKey, setClientKey]
}

export default useClientKey
