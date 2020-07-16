import { useEffect } from 'react'
import { useRouter } from 'next/router'
import useLocalStorage from './use-local-storage'

const CLIENT_KEY = 'CLIENT_KEY'
const DEFAULT_CLIENT_KEY = process.env.NEXT_PUBLIC_API_CLIENT_KEY

type Response = [string, (v: string) => void]

function useClientKey(): Response {
  const { query } = useRouter()
  const [clientKey, setClientKey] = useLocalStorage(CLIENT_KEY)

  useEffect(() => {
    if (query.clientKey) {
      setClientKey(query.clientKey.toString())
    } else {
      setClientKey(DEFAULT_CLIENT_KEY)
    }
  })

  return [clientKey, setClientKey]
}

export default useClientKey
