import CreditFreezeCenter from '@/components/creditlock-page/CreditFreezeCenter'
import FactsSteps from '@/components/creditlock-page/FactsSteps'
import Header from '@/components/creditlock-page/Header'
import Layout from '@/components/Layout'
import Loading from '@/components/Loading'
import useAuthToken from '@/libs/hooks/use-auth-token'
import useFallbackToMock from '@/libs/hooks/use-fallback-to-mock'

type Props = {
  mock?: boolean
}

export const CreditLock = ({ mock }: Props): JSX.Element => {
  useFallbackToMock(mock)
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
