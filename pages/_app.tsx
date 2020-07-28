import { AppProps } from 'next/app'
import { SWRConfig } from 'swr'

import useFallbackToMock from '@/libs/hooks/use-fallback-to-mock'
import useFetcher from '@/libs/hooks/use-fetcher'

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
