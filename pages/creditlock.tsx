import Head from 'next/head'

import Layout from '@/components/Layout'
import Header from '@/components/creditlock-page/Header'
import CreditFreezeCenter from '@/components/creditlock-page/CreditFreezeCenter'
import FactsSteps from '@/components/creditlock-page/FactsSteps'

export const CreditLock = (): JSX.Element => (
  <Layout>
    <Head>
      <title>Credit Lock Center</title>
    </Head>
    <main>
      <Header />
      <CreditFreezeCenter />
      <FactsSteps />
    </main>
  </Layout>
)

export default CreditLock
