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

export async function get<R, Q extends ParsedQuery>(url: string, query?: Q): Promise<R> {
  validateConfig()

  const apiUrl = resolve(API_URL, url)
  const requestUrl = queryString.stringifyUrl({ url: apiUrl, query })

  const params = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  }

  const fetcher = getFetcher()
  const response = await fetcher(requestUrl, params)

  if (!response.ok) {
    const error = await ApiError.readFrom(response)
    throw error
  }

  const data = await response.json()
  return data
}

export async function post<R, P = any>(url: string, payload?: P): Promise<R> {
  validateConfig()

  const requestUrl = resolve(API_URL, url)
  const params = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify(payload),
  }

  const fetcher = getFetcher()
  const response = await fetcher(requestUrl, params)

  if (!response.ok) {
    const error = await ApiError.readFrom(response)
    throw error
  }

  const data = await response.json()
  return data
}

export async function put<R, P = any>(url: string, payload?: P): Promise<R> {
  validateConfig()

  const requestUrl = resolve(API_URL, url)
  const params = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify(payload),
  }

  const fetcher = getFetcher()
  const response = await fetcher(requestUrl, params)

  if (!response.ok) {
    const error = await ApiError.readFrom(response)
    throw error
  }

  const data = await response.json()
  return data
}

export async function del<R = void>(url: string): Promise<R> {
  validateConfig()

  const requestUrl = resolve(API_URL, url)
  const params = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  }

  const fetcher = getFetcher()
  const response = await fetcher(requestUrl, params)

  if (!response.ok) {
    const error = await ApiError.readFrom(response)
    throw error
  }

  const data = await response.json()
  return data
}
