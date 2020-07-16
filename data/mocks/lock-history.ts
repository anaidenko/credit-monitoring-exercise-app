import { MonitorEnrollment, EnrollmentCode } from '@/libs/api/monitoring/getEnrollments'

const data: MonitorEnrollment[] = [
  {
    provider: 'tui',
    enrollmentCode: EnrollmentCode.TUICreditLock,
    active: true,
    cancellationDate: '',
    enrollmentDate: '2020-07-16T23:09:37.458Z',
  },
  {
    provider: 'tui',
    enrollmentCode: EnrollmentCode.TUIInstantMonitoring,
    active: true,
    cancellationDate: '',
    enrollmentDate: '2020-07-16T22:38:16.122Z',
  },
]

export default data
