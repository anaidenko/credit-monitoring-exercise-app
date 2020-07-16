import useSWR from 'swr'
import { useRouter } from 'next/router'
import { authenticate } from '../api/auth'

const CLIENT_KEY = process.env.NEXT_PUBLIC_API_CLIENT_KEY
const AUTH_TOKEN = 'AUTH_TOKEN'

export function useAuthToken(): [string, { error: Error; loading: boolean; mutate: any; revalidate: any }] {
  const { query } = useRouter()

  const clientKey = query.clientKey ? query.clientKey.toString() : CLIENT_KEY
  const providers = ['tui', 'exp', 'efx']
  const { data, error, mutate, revalidate } = useSWR(
    clientKey,
    async () => {
      if (typeof window !== 'undefined') {
        const cachedToken = window.localStorage.getItem(AUTH_TOKEN)
        if (cachedToken) {
          return { userToken: cachedToken }
        }
      }

      return authenticate({
        clientKey,
        providers,
      }).then((response) => {
        window.localStorage.setItem(AUTH_TOKEN, response.userToken)
        return response
      })
    },
    {
      errorRetryCount: 1,
      errorRetryInterval: 300,
    }
  )

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
