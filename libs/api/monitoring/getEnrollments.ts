import { get } from '@/libs/api/client'
import { USER_TOKEN_HEADER } from '@/libs/constants/api-headers'

export type Request = {
  clientKey: string
}

export type Response = MonitorEnrollment[]

export enum EnrollmentCode {
  TUIInstantMonitoring = 'tui1bInstantMonitoring',
  TUIStandardMonitoring = 'tui1bStandardMonitoring',
  TUIEnhancedMonitoring = 'tui1bEnhancedMonitoring',
  TUICreditLock = 'tui1bCreditLock',
}

export type MonitorEnrollment = {
  active: boolean
  cancellationDate: string
  enrollmentCode: EnrollmentCode
  enrollmentDate: string
  provider: 'tui'
}

export default async function getEnrollments(query: { clientKey: string; userToken: string }) {
  const { clientKey, userToken } = query
  const request: Request = { clientKey }
  const response: Response = await get('/api/monitoring/v2', request, { [USER_TOKEN_HEADER]: userToken })
  return response
}
