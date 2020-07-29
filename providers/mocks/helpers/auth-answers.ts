import { AuthenticateVerifyAnswers } from '@/providers/api/auth/authenticate'
import { AuthenticateQuestion, AuthenticationQuestionProvider } from '@/providers/api/auth/getAuthQuestions'

import { matches, includes } from '@/utils/string'

export const PREDEFINED_TUI_ANSWERS = {
  'Which of the following is a current or previous employer?': 'IEC',
  'What state was your social security number issued (this could be the state in which you were born or had your first job)?':
    'New hampshire',
  'Which of these street names are you associated with?': 'Ashwood',
}

const answersFor = (provider) => {
  switch (provider) {
    case 'tui':
      return PREDEFINED_TUI_ANSWERS
  }
}

const answerAuthQuestions = (
  questions: AuthenticateQuestion[],
  provider: AuthenticationQuestionProvider
): AuthenticateVerifyAnswers => {
  const predefinedAnswers = answersFor(provider)
  if (!predefinedAnswers) {
    return // nothing
  }

  const answersMap = questions.map((question) => {
    let answerId = ''

    const questionFound = Object.keys(predefinedAnswers).find((x) => matches(x, question.text))

    let answerFound
    if (questionFound) {
      const predefinedAnswer = predefinedAnswers[questionFound]
      answerFound = question.answers.find((x) => matches(x.text, predefinedAnswer))
    }

    if (!answerFound) {
      answerFound = question.answers.find((x) => includes(x.text, 'none'))
    }

    if (answerFound) {
      answerId = answerFound.id
    }

    return [question.id, answerId]
  })

  const result: AuthenticateVerifyAnswers = Object.fromEntries(answersMap)
  return result
}

export default answerAuthQuestions
