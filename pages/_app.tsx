import { AppProps } from 'next/app'
import useFetcher from '@/libs/hooks/use-fetcher'

import '@/styles/index.css'

export default function App({ Component, pageProps }: AppProps) {
  useFetcher()
  return <Component {...pageProps} />
}
