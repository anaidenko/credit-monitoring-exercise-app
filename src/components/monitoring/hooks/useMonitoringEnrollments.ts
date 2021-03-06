import { useState, useCallback, useEffect } from 'react'

import useSWR, { mutate } from 'swr'

import useUserTokens from '@/components/hooks/useUserTokens'

import { getEnrollments, createEnrollment } from '@/providers/api/monitoring'
import { EnrollmentCode } from '@/providers/api/monitoring/getEnrollments'
import { MonitorEnrollment } from '@/providers/api/monitoring/getEnrollments'

type HookResult = {
  monitoring: boolean
  enrollments?: MonitorEnrollment[]
  error?: any

  reload: () => void
}

const useMonitoringEnrollments = (): HookResult => {
  const tokens = useUserTokens()
  const { clientKey, userToken } = tokens

  const [monitoring, setMonitoring] = useState(false)

  const getEnrollmentsKey = userToken ? ['getEnrollments', ...tokens.toArray()] : null
  const { data: enrollments, error } = useSWR(getEnrollmentsKey, () => getEnrollments({ clientKey, userToken }))

  const startMonitoring = useCallback(async () => {
    await createEnrollment({ clientKey, userToken, enrollmentCode: EnrollmentCode.TUIInstantMonitoring })
    setMonitoring(true)
  }, [clientKey, userToken])

  const ensureMonitoring = useCallback(() => {
    if (enrollments?.length > 0) {
      const isMonitoring = enrollments.some(
        (x) =>
          x.active &&
          (x.enrollmentCode === EnrollmentCode.TUIEnhancedMonitoring ||
            EnrollmentCode.TUIInstantMonitoring ||
            EnrollmentCode.TUIStandardMonitoring)
      )
      if (!isMonitoring) {
        startMonitoring()
      } else {
        setMonitoring(true)
      }
    }
  }, [enrollments])

  useEffect(() => {
    ensureMonitoring()
  }, [enrollments])

  const reload = useCallback(() => {
    mutate(getEnrollmentsKey)
  }, [getEnrollmentsKey])

  const result: HookResult = { monitoring, enrollments, reload, error }
  return result
}

export default useMonitoringEnrollments
