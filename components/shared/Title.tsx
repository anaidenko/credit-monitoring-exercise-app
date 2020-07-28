import { FunctionComponent, ReactText } from 'react'

import Head from 'next/head'

type Props = {
  children: ReactText
}

const Title: FunctionComponent<Props> = ({ children }) => (
  <>
    <Head>
      <title key="title">{children}</title>
    </Head>

    <h2 className="title">{children}</h2>
  </>
)

export default Title
