import Layout from '@/components/Layout'
import Header from '@/components/id-protection-page/Header'
import NotificationInsurance from '@/components/id-protection-page/NotificationInsurance'
import NotificationLostWallet from '@/components/id-protection-page/NotificationLostWallet'
import NotificationRestorationServices from '@/components/id-protection-page/NotificationRestorationServices'

export const IdProtection = (): JSX.Element => (
  <Layout>
    <Header />
    <NotificationInsurance />
    <NotificationLostWallet />
    <NotificationRestorationServices />
  </Layout>
)

export default IdProtection
