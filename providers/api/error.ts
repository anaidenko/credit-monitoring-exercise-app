export default class ApiError<T = any> extends Error {
  status?: number
  statusText?: string
  data?: T
  inner?: Error

  constructor(message: string, inner?: Error) {
    super(message)

    this.name = 'ApiError'
    if (inner) {
      this.inner = inner
    }
  }

  static async readFrom(response: Response) {
    if (response.ok) {
      return
    }

    let data
    let message = response.statusText || String(response.status)

    try {
      data = await response.json()
      if (data && data.error) {
        if (typeof data.error === 'string') {
          message = data.error
        } else if (data.error.length && data.error[0].msg) {
          message = data.error[0].msg
        }
      }
    } catch (e) {
      // do nothing
    }

    try {
      message = await response.text()
    } catch (e) {
      // do nothing
    }

    const error = new ApiError(message)
    error.status = response.status
    error.statusText = response.statusText
    error.data = data
    return error
  }
}
