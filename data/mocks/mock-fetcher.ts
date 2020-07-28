import parse from 'url-parse'

import monitorEnrollments from '@/data/mocks/monitor-enrollments'
import { EnrollmentCode, MonitorEnrollment } from '@/libs/api/monitoring/getEnrollments'
import { delay } from '@/utils/promise'

export default {
  instance: async (url: string, params: any) => {
    // eslint-disable-next-line no-console
    console.log('Mocking request...', params.method, url)

    const { pathname } = parse(url)

    if (pathname.endsWith('/api/authenticate/v2') && params.method === 'GET') {
      return success(url, { provider: 'tui', questions: [] })
    }

    if (pathname.endsWith('/api/monitoring/v2') && params.method === 'GET') {
      return success(url, monitorEnrollments)
    }

    if (pathname.endsWith('/api/monitoring/v2') && params.method === 'POST') {
      const newEnrollment: MonitorEnrollment = {
        provider: 'tui',
        enrollmentCode: EnrollmentCode.TUICreditLock,
        active: true,
        cancellationDate: '',
        enrollmentDate: new Date().toISOString(),
      }
      monitorEnrollments.unshift(newEnrollment)
      return success(url)
    }

    if (pathname.endsWith('/api/monitoring/v2') && params.method === 'DELETE') {
      const newEnrollment: MonitorEnrollment = {
        provider: 'tui',
        enrollmentCode: EnrollmentCode.TUICreditLock,
        active: false,
        cancellationDate: new Date().toISOString(),
        enrollmentDate: '',
      }
      monitorEnrollments.unshift(newEnrollment)
      return success(url)
    }

    return success(url)
  },
}

async function success(url: string, data = {}) {
  await delay(100)

  // eslint-disable-next-line no-console
  console.log('Mocking response...', 200, data)

  const response = JSON.parse(JSON.stringify(data))

  return {
    url,
    ok: true,
    status: 200,
    statusText: 'OK',
    headers: {},
    redirected: false,
    json: async () => response,
    text: async () => JSON.stringify(response),
  }
}
