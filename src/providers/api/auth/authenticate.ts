import { post } from '@/providers/api/client'
import { API_APP_KEY } from '@/providers/api/config'
import ApiError from '@/providers/api/error'
import answerAuthQuestions from '@/providers/mocks/helpers/auth-answers'

import getAuthQuestions, { AuthenticationQuestionProvider } from './getAuthQuestions'

export type Request = {
  appKey: string
  clientKey: string
  authToken: string
  answers: AuthenticateVerifyAnswers
}

export type Response = {
  userToken: string
}

export type AuthenticateVerifyAnswers = {
  [questionId: string]: string
}

export default async function authenticate(data: {
  clientKey: string
  providers: AuthenticationQuestionProvider[]
}): Promise<Response> {
  const { clientKey } = data

  const appKey = API_APP_KEY
  const { questions, provider, authToken } = await getAuthQuestions(data).catch((err: ApiError) => {
    if (err.status === 400 && err.message === 'Unable to Complete Request') {
      throw new ApiError('Client key must be invalid', err)
    } else {
      throw err
    }
  })

  const answers = answerAuthQuestions(questions, provider)
  if (!answers) {
    throw new ApiError('Unable to authenticate')
  }

  const request: Request = { appKey, clientKey, authToken, answers }
  const response: Response = await post('/api/authenticate/v2', request)
  return response
}
