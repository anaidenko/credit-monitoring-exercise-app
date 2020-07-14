import Head from 'next/head'

const Layout = ({ children }): JSX.Element => (
  <div>
    <Head>
      <title>Exercise 1</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#fafafa" />
    </Head>
    <div className="theme-brigit container">
      {children}
    </div>
  </div>
)

export default Layout
