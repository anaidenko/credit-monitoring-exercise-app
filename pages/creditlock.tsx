import Layout from '@/components/Layout'
import Header from '@/components/creditlock-page/Header'
import CreditFreezeCenter from '@/components/creditlock-page/CreditFreezeCenter'
import FactsSteps from '@/components/creditlock-page/FactsSteps'
import useAuthToken from '@/libs/hooks/use-auth-token'
import Loading from '@/components/Loading'

export const CreditLock = (): JSX.Element => {
  const [token, { error }] = useAuthToken()

  if (error) return <div>Error: {error.message}</div>
  if (!token) return <Loading />

  return (
    <Layout>
      <Header />
      <CreditFreezeCenter />
      <FactsSteps />
    </Layout>
  )
}

export default CreditLock
