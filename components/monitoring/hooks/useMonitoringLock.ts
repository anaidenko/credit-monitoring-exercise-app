import { useState, useCallback, useEffect } from 'react'

import useSWR, { cache } from 'swr'

import useToggle from '@/components/hooks/useToggle'
import useUserTokens from '@/components/hooks/useUserTokens'
import useMonitoringEnrollments from '@/components/monitoring/hooks/useMonitoringEnrollments'

import { createEnrollment, deleteEnrollment } from '@/providers/api/monitoring'
import { EnrollmentCode } from '@/providers/api/monitoring/getEnrollments'

type HookResult = {
  locked: boolean
  error?: any

  toggleLocked: (value?: boolean) => void
}

const useMonitoringLock = (): HookResult => {
  const tokens = useUserTokens()
  const { clientKey, userToken } = tokens

  const { monitoring, enrollments, error: monitoringError, reload } = useMonitoringEnrollments()

  const [showLocked, toggleShowLocked] = useToggle(null)
  const [savingLocked, setSavingLocked] = useState(false)
  const [savedLocked, setSavedLocked] = useState(false)

  const toggleLocked = useCallback(
    (value?: boolean) => {
      value = typeof value === 'boolean' ? value : !showLocked
      setSavingLocked(value)
      toggleShowLocked(value)
    },
    [showLocked]
  )

  const saveEnrollmentKey =
    monitoring && savingLocked !== savedLocked ? ['saveEnrollment', savingLocked, ...tokens.toArray()] : null

  const { error: saveMonitoringError } = useSWR(
    saveEnrollmentKey,
    async () => {
      cache.delete(saveEnrollmentKey, false)

      const value = savingLocked

      if (value) {
        await createEnrollment({ clientKey, userToken, enrollmentCode: EnrollmentCode.TUICreditLock })
        setSavedLocked(value)
        reload()
      } else {
        await deleteEnrollment({ clientKey, userToken, enrollmentCode: EnrollmentCode.TUICreditLock })
        setSavedLocked(value)
        reload()
      }
    },
    { dedupingInterval: 0 }
  )

  useEffect(() => {
    const creditLocks = enrollments?.filter((x) => x.enrollmentCode === EnrollmentCode.TUICreditLock) || []
    const locked = creditLocks[0]?.active
    if (typeof locked === 'boolean') {
      toggleShowLocked(locked)
      setSavingLocked(locked)
      setSavedLocked(locked)
    }
  }, [enrollments])

  const error = monitoringError || saveMonitoringError
  const result: HookResult = { locked: showLocked, toggleLocked, error }
  return result
}

export default useMonitoringLock
