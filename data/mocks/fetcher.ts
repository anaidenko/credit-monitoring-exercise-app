export default {
  instance: async (url: string, params: any) => {
    if (url.includes('/api/authenticate/v2') && params.method === 'GET') {
      return success(url, { provider: 'tui', questions: [] })
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
