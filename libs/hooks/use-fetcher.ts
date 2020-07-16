import { fetcherFn } from 'swr/dist/types'
import { useState, useEffect } from 'react'
import mockFetcher from '@/data/mocks/mock-fetcher'
import useMock from './use-mock'

const DEFAULT_FETCHER = fetch

let currentFetcher: fetcherFn<any> = DEFAULT_FETCHER

type Hook = [fetcherFn<any>, (value: fetcherFn<any>) => void]

const getFetcher = () => currentFetcher

const useFetcher = (customFetcher?: fetcherFn<any>): Hook => {
  const [mock] = useMock()
  const [fetcher, setFetcher] = useState(() => customFetcher || currentFetcher || DEFAULT_FETCHER)

  useEffect(() => {
    if (mock) {
      if (currentFetcher !== mockFetcher.instance) {
        currentFetcher = mockFetcher.instance
        setFetcher(() => currentFetcher)
      }
    } else {
      if (currentFetcher === mockFetcher.instance) {
        currentFetcher = DEFAULT_FETCHER
        setFetcher(() => currentFetcher)
      } else {
        currentFetcher = fetcher || DEFAULT_FETCHER
        setFetcher(() => currentFetcher)
      }
    }
  }, [mock, fetcher])

  return [fetcher, setFetcher]
}

export { getFetcher, DEFAULT_FETCHER }
export default useFetcher
