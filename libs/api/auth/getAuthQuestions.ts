import { get } from '@/libs/api/client'
import { API_APP_KEY } from '@/libs/api/config'

export type AuthenticateQuestionsRequest = {
  appKey: string
  clientKey: string
  provider1?: string
  provider2?: string
  provider3?: string
}

export type AuthenticateQuestionsResponse = {
  authToken: string
  provider: string
  questions: AuthenticateQuestion[]
}

export type AuthenticateQuestion = {
  id: string
  text: string
  answers: AuthenticatePossibleAnswer[]
}

export type AuthenticatePossibleAnswer = {
  id: string
  text: string
}

export async function getAuthQuestions(data: { clientKey: string; providers: string[] }) {
  const { clientKey, providers } = data
  const appKey = API_APP_KEY
  const query: AuthenticateQuestionsRequest = { appKey, clientKey, ...mapAuthProviders(providers) }
  const response: AuthenticateQuestionsResponse = await get('/api/authenticate/v2', query)
  return response
}

const mapAuthProviders = (providers?: string[]): Record<string, string> => {
  const map: Record<string, string> = providers?.reduce(
    (memo, provider, i) => ({ ...memo, [`provider${i + 1}`]: provider }),
    {}
  )
  return map
}
