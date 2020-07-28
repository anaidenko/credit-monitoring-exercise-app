import { del } from '@/libs/api/client'
import { USER_TOKEN_HEADER } from '@/libs/constants/api-headers'

import { EnrollmentCode } from './getEnrollments'

export type Request = {
  clientKey: string
  enrollmentCode: EnrollmentCode
}

export type Response = void

export default async function deleteEnrollment(query: {
  clientKey: string
  userToken: string
  enrollmentCode: EnrollmentCode
}) {
  const { clientKey, userToken, enrollmentCode } = query
  const request: Request = { clientKey, enrollmentCode }
  const response: Response = await del('/api/monitoring/v2', request, { [USER_TOKEN_HEADER]: userToken })
  return response
}
