import CreditFreezeCenter from '@/components/creditlock-page/CreditFreezeCenter'
import FactsSteps from '@/components/creditlock-page/FactsSteps'
import Header from '@/components/creditlock-page/Header'
import BaseLayout from '@/components/layouts/BaseLayout'
import Loading from '@/components/shared/Loading'
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
    <BaseLayout>
      <Header />
      <CreditFreezeCenter />
      <FactsSteps />
    </BaseLayout>
  )
}

export default CreditLock
