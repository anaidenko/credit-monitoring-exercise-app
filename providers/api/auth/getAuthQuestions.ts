import { get } from '@/providers/api/client'
import { API_APP_KEY } from '@/providers/api/config'

export type Request = {
  appKey: string
  clientKey: string
  provider1?: AuthenticationQuestionProvider
  provider2?: AuthenticationQuestionProvider
  provider3?: AuthenticationQuestionProvider
}

export type Response = {
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

export default async function getAuthQuestions(query: {
  clientKey: string
  providers: AuthenticationQuestionProvider[]
}) {
  const { clientKey, providers } = query
  const appKey = API_APP_KEY
  const request: Request = { appKey, clientKey, ...mapAuthProviders(providers) }
  const response: Response = await get('/api/authenticate/v2', request)
  return response
}

const mapAuthProviders = (providers?: AuthenticationQuestionProvider[]): Record<string, string> => {
  const map: Record<string, string> = providers?.reduce(
    (memo, provider, i) => ({ ...memo, [`provider${i + 1}`]: provider }),
    {}
  )
  return map
}
