import { FunctionComponent } from 'react'

import Header from '@/components/id-protection-page/Header'
import NotificationInsurance from '@/components/id-protection-page/NotificationInsurance'
import NotificationLostWallet from '@/components/id-protection-page/NotificationLostWallet'
import NotificationRestorationServices from '@/components/id-protection-page/NotificationRestorationServices'
import BaseLayout from '@/components/layouts/BaseLayout'
import Loading from '@/components/shared/Loading'
import useAuthToken from '@/libs/hooks/use-auth-token'
import useFallbackToMock from '@/libs/hooks/use-fallback-to-mock'

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
