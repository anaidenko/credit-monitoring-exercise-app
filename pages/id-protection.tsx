import { FunctionComponent } from 'react'

import Layout from '@/components/Layout'
import Header from '@/components/id-protection-page/Header'
import NotificationInsurance from '@/components/id-protection-page/NotificationInsurance'
import NotificationLostWallet from '@/components/id-protection-page/NotificationLostWallet'
import NotificationRestorationServices from '@/components/id-protection-page/NotificationRestorationServices'
import useAuthToken from '@/libs/hooks/use-auth-token'
import Loading from '@/components/Loading'
import useMock from '@/libs/hooks/use-mock'

type Props = {
  mock?: boolean
}

export const IdProtection: FunctionComponent<Props> = ({ mock }: Props): JSX.Element => {
  useMock(mock)
  const [token, { error }] = useAuthToken()

  if (error) return <div>Error: {error.message}</div>
  if (!token) return <Loading />

  return (
    <Layout>
      <Header />
      <NotificationInsurance />
      <NotificationLostWallet />
      <NotificationRestorationServices />
    </Layout>
  )
}

export default IdProtection
