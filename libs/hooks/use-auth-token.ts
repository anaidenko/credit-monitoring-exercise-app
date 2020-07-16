import useSWR from 'swr'

import authenticate from '../api/auth/authenticate'
import useLocalStorage from './use-local-storage'
import useClientKey from './use-client-key'
import { AuthenticationQuestionProvider } from '@/libs/api/auth/getAuthQuestions'

const AUTH_TOKEN = 'AUTH_TOKEN'

type Response = [string, { error: Error; loading: boolean; mutate: any; revalidate: any }]

export default function useAuthToken(clientKey?: string): Response {
  const [storedClientKey, setClientKey] = useClientKey()
  const [storedToken, setToken] = useLocalStorage(AUTH_TOKEN)

  const usingClientKey = clientKey || storedClientKey

  const cachedAuthenticate = async () => {
    if (storedToken && storedClientKey === usingClientKey) {
      return { userToken: storedToken }
    }

    const providers: AuthenticationQuestionProvider[] = ['tui', 'exp', 'efx']

    return authenticate({
      clientKey: usingClientKey,
      providers,
    }).then((response) => {
      setClientKey(usingClientKey)
      setToken(response.userToken)
      return response
    })
  }

  const { data, error, mutate, revalidate } = useSWR(storedClientKey, cachedAuthenticate, {
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
