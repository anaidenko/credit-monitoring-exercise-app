import useSWR from 'swr'
import api from '../api/auth'
import { useLocalStorage } from './use-local-storage'
import { useClientKey } from './use-client-key'

const AUTH_TOKEN = 'AUTH_TOKEN'

export function useAuthToken(): [string, { error: Error; loading: boolean; mutate: any; revalidate: any }] {
  const [clientKey] = useClientKey()
  const [storedToken, setToken] = useLocalStorage(AUTH_TOKEN)

  const authenticate = async () => {
    if (storedToken) {
      return { userToken: storedToken }
    }

    const providers = ['tui', 'exp', 'efx']

    return api
      .authenticate({
        clientKey,
        providers,
      })
      .then((response) => {
        setToken(response.userToken)
        return response
      })
  }

  const { data, error, mutate, revalidate } = useSWR(clientKey, authenticate, {
    errorRetryCount: 1,
    errorRetryInterval: 300,
  })

  // if data is not defined, the query has not completed
  const loading = !data
  const token = data?.userToken

  return [
    token,
    {
      error,
      loading,
      mutate,
      revalidate,
    },
  ]
}
