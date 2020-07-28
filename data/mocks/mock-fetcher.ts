import monitorEnrollments from '@/data/mocks/monitor-enrollments'

export default {
  instance: async (url: string, params: any) => {
    // eslint-disable-next-line no-console
    console.log('Mocking request...', params.method, url)

    if (url.includes('/api/authenticate/v2') && params.method === 'GET') {
      return success(url, { provider: 'tui', questions: [] })
    }

    if (url.includes('/api/monitoring/v2') && params.method === 'GET') {
      return success(url, monitorEnrollments)
    }

    return success(url)
  },
}

function success(url: string, data = {}) {
  return {
    url,
    ok: true,
    status: 200,
    statusText: 'OK',
    headers: {},
    redirected: false,
    json: async () => data,
    text: async () => JSON.stringify(data),
  }
}
