import { useState, useCallback } from 'react'

import CheckIcon from '../../public/icons/check.svg'
import WarningIcon from '../../public/icons/warning.svg'
import Button from '../Button'
import Title from '../Title'

const Header = (): JSX.Element => {
  const [isProtected, setProtected] = useState(false)
  const toggleProtected = useCallback(() => setProtected(!isProtected), [isProtected])

  return (
    <header className="pack-header">
      <Title>My Identity Manager</Title>

      {isProtected ? (
        <div className="text-wrapper">
          <span className="text">You have world-class Identity Protection</span>
          <div className="flex-vertical">
            <CheckIcon />
            <span className="active">Active</span>
          </div>
        </div>
      ) : (
        <div className="text-wrapper">
          <span className="text">Take back control of your identity for good</span>
          <div className="flex-vertical">
            <WarningIcon className="disabled-icon" />
            <span className="disabled">Currently Disabled</span>
          </div>
        </div>
      )}

      <p className="description">
        Millions fall victim to identity theft every year, losing on avg. $375 to fraud. Protect your identity with your
        membership today.
      </p>
      <Button className={isProtected ? '' : 'primary'} onClick={toggleProtected}>
        Turn {isProtected ? 'off' : 'on'} ID Protection
      </Button>
      <div className="protection">Your world-class protection includes:</div>

      <style jsx global>
        {`
          .pack-header {
            padding-top: 40px;
          }

          .pack-header .title {
            color: #1665d8;
            font-size: 32px;
            font-weight: 500;
            margin-bottom: 32px;
          }

          .pack-header .text-wrapper {
            display: flex;
            align-items: center;
          }

          .pack-header .text {
            color: #1665d8;
            font-size: 20px;
            font-weight: 500;
          }

          .pack-header .active-icon,
          .pack-header .disabled-icon {
            margin: 0 6px 0 16px;
          }

          .pack-header .disabled {
            color: #f53758;
            font-size: 16px;
            font-weight: 500;
          }

          .pack-header .active {
            font-weight: 500;
            color: #00d2a0;
          }

          .pack-header .description {
            color: #3e3f42;
            font-size: 14px;
            margin: 12px 0 24px;
          }

          .pack-header .protection {
            margin: 32px 0 24px;
            color: #3e3f42;
            font-size: 20px;
            font-weight: 500;
          }

          @media screen and (max-width: 768px) {
            .pack-header .title {
              margin-bottom: 16px;
            }

            .pack-header .text-wrapper {
              flex-direction: column-reverse;
              align-items: initial;
            }

            .pack-header .text {
              margin-top: 12px;
            }

            .pack-header .active-icon,
            .pack-header .disabled-icon {
              margin-left: 0;
            }
          }

          @media screen and (max-width: 576px) {
            .pack-header {
              padding-top: 20px;
            }

            .pack-header .title {
              font-size: 22px;
              line-height: 1;
            }

            .pack-header .description {
              margin-bottom: 12px;
            }

            .pack-header .protection {
              margin: 24px 0 16px;
            }
          }
        `}
      </style>
    </header>
  )
}

export default Header
