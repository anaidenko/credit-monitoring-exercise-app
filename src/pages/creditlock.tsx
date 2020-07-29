import useAuthToken from '@/components/hooks/useAuthToken'
import useFallbackToMock from '@/components/hooks/useFallbackToMock'
import BaseLayout from '@/components/layouts/BaseLayout'
import CreditFreezeCenter from '@/components/monitoring/pages/creditlock/CreditFreezeCenter'
import FactsSteps from '@/components/monitoring/pages/creditlock/FactsSteps'
import Header from '@/components/monitoring/pages/creditlock/Header'
import Loading from '@/components/shared/Loading'

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
