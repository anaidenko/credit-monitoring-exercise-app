import { fetcherFn } from 'swr/dist/types'

const DEFAULT_FETCHER = fetch

let fetcher

function useFetcher(initialState: fetcherFn<any> = DEFAULT_FETCHER) {
  if (initialState) {
    fetcher = initialState
  }
  return [fetcher, (update) => (fetcher = update || DEFAULT_FETCHER)]
}

export { DEFAULT_FETCHER }
export default useFetcher
