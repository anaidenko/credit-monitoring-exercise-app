import TransUnionLockCard from '@/components/creditlock-page/TransUnionLockCard'

const CreditFreezeCenter = (): JSX.Element => {
  return (
    <section className="credit-freeze-center">
      <ul>
        <TransUnionLockCard />
      </ul>
    </section>
  )
}

export default CreditFreezeCenter
