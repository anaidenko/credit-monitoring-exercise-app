import { FunctionComponent } from 'react'

import Layout from '@/components/Layout'
import Header from '@/components/id-protection-page/Header'
import NotificationInsurance from '@/components/id-protection-page/NotificationInsurance'
import NotificationLostWallet from '@/components/id-protection-page/NotificationLostWallet'
import NotificationRestorationServices from '@/components/id-protection-page/NotificationRestorationServices'
import useAuthToken from '@/libs/hooks/use-auth-token'

export const IdProtection: FunctionComponent = (): JSX.Element => {
  const [token, { error }] = useAuthToken()

  if (error) return <div>{error.message}</div>
  if (!token) return <div>Loading...</div>

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
