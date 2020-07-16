import { post } from '@/libs/api/client'
import { API_APP_KEY } from '@/libs/api/config'
import { answerAuthQuestions } from '@/data/mocks/auth-answers'
import ApiError from '@/libs/api/error'
import { getAuthQuestions } from './getAuthQuestions'

export type AuthenticateRequest = {
  appKey: string
  clientKey: string
  authToken: string
  answers: AuthenticateVerifyAnswers
}

export type AuthenticateVerifyAnswers = {
  [questionId: string]: string
}

export type AuthenticateResponse = {
  userToken: string
}

export async function authenticate(data: { clientKey: string; providers: string[] }): Promise<AuthenticateResponse> {
  const { clientKey } = data

  const appKey = API_APP_KEY
  const questions = await getAuthQuestions(data)
  const answers = answerAuthQuestions(questions)
  if (!answers) {
    throw new ApiError('Unable to authenticate')
  }

  const authToken = questions.authToken

  const payload: AuthenticateRequest = { appKey, clientKey, authToken, answers }
  const response: AuthenticateResponse = await post('/api/authenticate/v2', payload)
  return response
}
