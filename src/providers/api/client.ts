import { resolve } from 'url'

import queryString, { ParsedQuery } from 'query-string'

import { getFetcher } from '@/components/hooks/useFetcher'

import { API_URL, API_APP_KEY } from '@/providers/api/config'
import ApiError from '@/providers/api/error'

const validateConfig = () => {
  if (API_URL && !API_APP_KEY) {
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

  const data = await handle(response)
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

  const data = await handle(response)
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

  const data = await handle(response)
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
  const data = await handle(response)
  return data
}

async function handle(response) {
  if (!response.ok) {
    if (response.status >= 400) {
      const error = await ApiError.readFrom(response)
      throw error
    } else {
      return // nothing
    }
  }

  const data = await response.json().catch((err) => {
    // eslint-disable-next-line no-console
    console.log('Failed to parse response', err)
    return {}
  })

  return data
}
