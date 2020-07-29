import { FunctionComponent } from 'react'

import Title from '@/components/shared/Title'

const Header: FunctionComponent = () => (
  <header className="credit-lock-header">
    <Title>Credit Lock Center</Title>

    <p className="description">
      A Credit Lock is your ultimate protection against identity thieves opening accounts in your name, as it
      effectively shuts down access to your credit profile by any new credits.
    </p>

    <style jsx global>
      {`
        .credit-lock-header {
          margin-top: 30px;
        }

        .credit-lock-header .title {
          color: #1665d8;
          font-size: 32px;
          font-weight: 500;
        }

        .credit-lock-header .description {
          margin: 4px 0 32px;
          color: #6b6c6f;
          font-size: 16px;
        }

        @media screen and (max-width: 576px) {
          .credit-lock-header {
            margin-top: 30px;
          }

          .credit-lock-header .title {
            font-size: 24px;
          }

          .credit-lock-header .description {
            font-size: 16px;
          }
        }
      `}
    </style>

    <style jsx global>
      {`
        .theme-brigit .credit-lock-header {
          margin-top: 40px;
        }

        .theme-brigit .credit-lock-header .title {
          color: #333333;
          font-weight: 700;
        }

        @media screen and (max-width: 576px) {
          .theme-brigit .credit-lock-header .title {
            font-size: 30px;
          }

          .theme-brigit .credit-lock-header .description {
            margin: 15px 0 40px;
          }
        }
      `}
    </style>
  </header>
)

export default Header
