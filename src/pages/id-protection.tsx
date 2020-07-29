import { FunctionComponent } from 'react'

import useAuthToken from '@/components/hooks/useAuthToken'
import useFallbackToMock from '@/components/hooks/useFallbackToMock'
import BaseLayout from '@/components/layouts/BaseLayout'
import Header from '@/components/monitoring/pages/id-protection/Header'
import NotificationInsurance from '@/components/monitoring/pages/id-protection/NotificationInsurance'
import NotificationLostWallet from '@/components/monitoring/pages/id-protection/NotificationLostWallet'
import NotificationRestorationServices from '@/components/monitoring/pages/id-protection/NotificationRestorationServices'
import Loading from '@/components/shared/Loading'

type Props = {
  mock?: boolean
}

export const IdProtection: FunctionComponent<Props> = ({ mock }: Props): JSX.Element => {
  useFallbackToMock(mock)
  const [token, { error }] = useAuthToken()

  if (error) return <div>Error: {error.message}</div>
  if (!token) return <Loading />

  return (
    <BaseLayout>
      <Header />
      <NotificationInsurance />
      <NotificationLostWallet />
      <NotificationRestorationServices />
    </BaseLayout>
  )
}

export default IdProtection
