import { resolve } from 'url'
import queryString, { ParsedQuery } from 'query-string'

import { getFetcher } from '../hooks/use-fetcher'
import { API_URL, API_APP_KEY } from '@/libs/api/config'
import ApiError from '@/libs/api/error'

const validateConfig = () => {
  if (!API_URL) {
    throw new Error('API not configured')
  }
  if (!API_APP_KEY) {
    throw new Error('API application identifier not configured')
  }
}

export async function get<R, Q extends ParsedQuery>(url: string, query?: Q, headers?: HeadersInit): Promise<R> {
  validateConfig()

  const apiUrl = resolve(API_URL, url)
  const requestUrl = queryString.stringifyUrl({ url: apiUrl, query })

  const params = {
    method: 'GET',
    headers: {
      ...headers,
      'Content-Type': 'application/json; charset=utf-8',
    },
  }

  const fetcher = getFetcher()
  const response = await fetcher(requestUrl, params)

  if (!response.ok) {
    if (response.status >= 400) {
      const error = await ApiError.readFrom(response)
      throw error
    } else {
      return // nothing
    }
  }

  const data = await response.json()
  return data
}

export async function post<R, P = any>(url: string, payload?: P, headers?: HeadersInit): Promise<R> {
  validateConfig()

  const requestUrl = resolve(API_URL, url)
  const params = {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json; charset=utf-8',
      pragma: 'no-cache',
      'cache-control': 'no-cache',
    },
    body: payload ? JSON.stringify(payload) : undefined,
  }

  const fetcher = getFetcher()
  const response = await fetcher(requestUrl, params)

  if (!response.ok) {
    if (response.status >= 400) {
      const error = await ApiError.readFrom(response)
      throw error
    } else {
      return // nothing
    }
  }

  const data = await response.json()
  return data
}

export async function put<R, P = any>(url: string, payload?: P, headers?: HeadersInit): Promise<R> {
  validateConfig()

  const requestUrl = resolve(API_URL, url)
  const params = {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json; charset=utf-8',
      pragma: 'no-cache',
      'cache-control': 'no-cache',
    },
    body: payload ? JSON.stringify(payload) : undefined,
  }

  const fetcher = getFetcher()
  const response = await fetcher(requestUrl, params)

  if (!response.ok) {
    if (response.status >= 400) {
      const error = await ApiError.readFrom(response)
      throw error
    } else {
      return // nothing
    }
  }

  const data = await response.json()
  return data
}

export async function del<R = void, P = any>(url: string, payload?: P, headers?: HeadersInit): Promise<R> {
  validateConfig()

  const requestUrl = resolve(API_URL, url)
  const params = {
    method: 'DELETE',
    headers: {
      ...headers,
      'Content-Type': 'application/json; charset=utf-8',
      pragma: 'no-cache',
      'cache-control': 'no-cache',
    },
    body: payload ? JSON.stringify(payload) : undefined,
  }

  const fetcher = getFetcher()
  const response = await fetcher(requestUrl, params)

  debugger
  try {
    if (!response.ok) {
      if (response.status >= 400) {
        const error = await ApiError.readFrom(response)
        throw error
      } else {
        return // nothing
      }
    }

    const data = await response.json()
    return data
  } catch (err) {
    debugger
    throw err
  }
}
