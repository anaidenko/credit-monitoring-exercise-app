import { get } from '@/libs/api/client'
import { API_APP_KEY } from '@/libs/api/config'

export type AuthenticateQuestionsRequest = {
  appKey: string
  clientKey: string
  provider1?: AuthenticationQuestionProvider
  provider2?: AuthenticationQuestionProvider
  provider3?: AuthenticationQuestionProvider
}

export type AuthenticateQuestionsResponse = {
  authToken: string
  provider: AuthenticationQuestionProvider
  questions: AuthenticateQuestion[]
}

export type AuthenticateQuestion = {
  id: string
  text: string
  answers: AuthenticatePossibleAnswer[]
}

export type AuthenticationQuestionProvider = 'tui' | 'exp' | 'efx'

export type AuthenticatePossibleAnswer = {
  id: string
  text: string
}

export default async function getAuthQuestions(data: {
  clientKey: string
  providers: AuthenticationQuestionProvider[]
}) {
  const { clientKey, providers } = data
  const appKey = API_APP_KEY
  const query: AuthenticateQuestionsRequest = { appKey, clientKey, ...mapAuthProviders(providers) }
  const response: AuthenticateQuestionsResponse = await get('/api/authenticate/v2', query)
  return response
}

const mapAuthProviders = (providers?: AuthenticationQuestionProvider[]): Record<string, string> => {
  const map: Record<string, string> = providers?.reduce(
    (memo, provider, i) => ({ ...memo, [`provider${i + 1}`]: provider }),
    {}
  )
  return map
}
