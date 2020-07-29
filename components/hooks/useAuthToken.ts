import useSWR from 'swr'

import authenticate from '@/providers/api/auth/authenticate'
import { AuthenticationQuestionProvider } from '@/providers/api/auth/getAuthQuestions'
import { AUTH_TOKEN, AUTH_CLIENT_KEY } from '@/providers/constants/local-storage'

import useClientKey from './useClientKey'
import useLocalStorage from './useLocalStorage'
import useMounted from './useMounted'

type Response = [string, { error: Error; loading: boolean; mutate: any; revalidate: any }]

export default function useAuthToken(): Response {
  const mounted = useMounted()
  const [clientKey, setClientKey] = useClientKey()
  const [storedToken, setToken] = useLocalStorage(AUTH_TOKEN)
  const [authClientKey, setAuthClientKey] = useLocalStorage(AUTH_CLIENT_KEY)

  const authenticateUsingCache = async () => {
    const usingClientKey = clientKey || authClientKey

    // provide cached token if client key has not changed since last authentication request
    if (storedToken && usingClientKey === authClientKey) {
      return { userToken: storedToken }
    }

    const providers: AuthenticationQuestionProvider[] = ['tui', 'exp', 'efx']

    return authenticate({
      clientKey,
      providers,
    }).then((response) => {
      setClientKey(usingClientKey)
      setAuthClientKey(usingClientKey)
      setToken(response.userToken)
      return response
    })
  }

  const authenticateKey = mounted && ['authenticate', clientKey]
  const { data, error, mutate, revalidate } = useSWR(authenticateKey, authenticateUsingCache, {
    errorRetryCount: 1,
    errorRetryInterval: 300,
  })

  // if data is not defined, the query has not completed
  const loading = !data && !error
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
