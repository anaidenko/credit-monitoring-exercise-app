import { AppProps } from 'next/app'
import { SWRConfig } from 'swr'

import useFallbackToMock from '@/components/hooks/useFallbackToMock'
import useFetcher from '@/components/hooks/useFetcher'

import '@/styles/index.css'

export default function App({ Component, pageProps }: AppProps) {
  const [fetcher] = useFetcher()
  useFallbackToMock()

  return (
    <SWRConfig
      value={{
        fetcher,
        errorRetryCount: 1,
        revalidateOnFocus: false,
      }}
    >
      <Component {...pageProps} />
    </SWRConfig>
  )
}
