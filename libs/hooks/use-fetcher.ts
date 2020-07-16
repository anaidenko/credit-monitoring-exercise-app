import { fetcherFn } from 'swr/dist/types'

const DEFAULT_FETCHER = fetch

let fetcher: fetcherFn<any>

type Response = [fetcherFn<any>, (value: fetcherFn<any>) => void]

const useFetcher = (initialState: fetcherFn<any> = DEFAULT_FETCHER): Response => {
  if (initialState) {
    fetcher = initialState
  }
  return [fetcher, (update) => (fetcher = update || DEFAULT_FETCHER)]
}

export { DEFAULT_FETCHER }
export default useFetcher
