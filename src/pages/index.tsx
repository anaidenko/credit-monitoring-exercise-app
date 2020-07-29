import Head from 'next/head'
import Link from 'next/link'

export const Home = (): JSX.Element => (
  <div className="container">
    <Head>
      <title>Exercise 1</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <ul>
        <li>
          <Link href="/id-protection">
            <a>ID Protection</a>
          </Link>
        </li>
        <li>
          <Link href="/creditlock">
            <a>Credit Lock</a>
          </Link>
        </li>
      </ul>
    </main>
  </div>
)

export default Home
