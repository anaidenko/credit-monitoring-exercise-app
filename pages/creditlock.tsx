import Layout from '@/components/Layout'
import Header from '@/components/creditlock-page/Header'
import CreditFreezeCenter from '@/components/creditlock-page/CreditFreezeCenter'
import FactsSteps from '@/components/creditlock-page/FactsSteps'

export const CreditLock = (): JSX.Element => (
  <Layout>
    <Header />
    <CreditFreezeCenter />
    <FactsSteps />
  </Layout>
)

export default CreditLock
