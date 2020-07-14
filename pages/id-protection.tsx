import Head from 'next/head'

import Layout from '@/components/Layout'
import Header from '@/components/id-protection-page/Header'
import NotificationInsurance from '@/components/id-protection-page/NotificationInsurance'
import NotificationLostWallet from '@/components/id-protection-page/NotificationLostWallet'
import NotificationRestorationServices from '@/components/id-protection-page/NotificationRestorationServices'

export const IdProtection = (): JSX.Element => (
  <Layout>
    <Head>
      <title>My Identity Manager</title>
    </Head>
    <main>
      <Header />
      <NotificationInsurance />
      <NotificationLostWallet />
      <NotificationRestorationServices />
    </main>
  </Layout>
)

export default IdProtection
