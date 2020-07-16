import lockHistoryMock from '@/data/mocks/lock-history'

export default {
  instance: async (url: string, params: any) => {
    console.log('Mocking request...', params.method, url)

    if (url.includes('/api/authenticate/v2') && params.method === 'GET') {
      return success(url, { provider: 'tui', questions: [] })
    }

    if (url.includes('/api/monitoring/v2') && params.method === 'GET') {
      return success(url, lockHistoryMock)
    }

    return success(url)
  },
}

function success(url: string, data = {}) {
  return {
    url,
    ok: true,
    status: 200,
    statusTest: 'OK',
    headers: {},
    redirected: false,
    json: async () => data,
    text: async () => JSON.stringify(data),
  }
}
