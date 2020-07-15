import useToggle from '@/libs/hooks/use-toggle'
import Switch from '../Switch'

import TransUnionLogo from '../../public/icons/transunion-logo.svg'
import CreditlockUnlockedIcon from '../../public/icons/creditlock-unlocked.svg'
import CreditlockLockedIcon from '../../public/icons/creditlock-locked.svg'
import LockIcon from '../../public/icons/lock.svg'
import UnlockIcon from '../../public/icons/unlock.svg'

const UnlockTransUnion = (): JSX.Element => {
  const [locked, toggleLocked] = useToggle(false)
  return (
    <section className="center-block">
      <div className="logo">
        <TransUnionLogo />
      </div>
      <div className="middle-panel">
        <Switch
          isOn={locked}
          variant="primary"
          handleIcon={locked ? <CreditlockLockedIcon /> : <CreditlockUnlockedIcon />}
          onChange={() => toggleLocked()}
          checkedText="Locked"
          uncheckedText="Unlocked"
        ></Switch>

        {locked ? (
          <>
            <p className="transunion-file">Your TransUnion File is Locked</p>
            <p className="lock-text">Unlock your score to open new accounts under your name</p>
          </>
        ) : (
          <>
            <p className="transunion-file">Your TransUnion File is Unlocked</p>
            <p className="lock-text">Lock your score to prevent un-authorzied access to your credit file.</p>
          </>
        )}
      </div>

      <div>
        <p className="history-title">TransUnion lock history</p>
        <ul>
          <li className="history-list">
            <span className="date">2020-15-03 6:00PM GMT +5 </span>
            <div className="lock-wrapper">
              <LockIcon />
              <span className="lock">Lock</span>
            </div>
          </li>
          <li className="history-list">
            <span className="date">2020-15-03 6:00PM GMT +5 </span>
            <div className="lock-wrapper">
              <UnlockIcon />
              <span className="lock">Unlock</span>
            </div>
          </li>
          <li className="history-list">
            <span className="date">2020-15-03 6:00PM GMT +5 </span>
            <div className="lock-wrapper">
              <LockIcon />
              <span className="lock">Lock</span>
            </div>
          </li>
          <li className="history-list">
            <span className="date">2020-15-03 6:00PM GMT +5 </span>
            <div className="lock-wrapper">
              <UnlockIcon />
              <span className="lock">Unlock</span>
            </div>
          </li>
        </ul>
        <p className="show-all">Show All (5)</p>
      </div>

      <style jsx global>{`
        section.credit-freeze-center {
          margin-top: 0;
        }

        .credit-freeze-center .center-block {
          width: 348px;
          padding: 22px 22px 24px;
          border: 1px solid #d7dee4;
          border-radius: 6px;
        }

        .credit-freeze-center .center-block.active {
          border: 1px solid #00d2a0;
          background-color: rgba(0, 210, 160, 0.03);
        }

        .credit-freeze-center .logo {
          display: flex;
          justify-content: center;
          margin: 0 auto 68px;
        }

        .credit-freeze-center .center-block.active {
          border: 1px solid #27d381;
          border-radius: 6px;
          background-color: rgba(39, 211, 129, 0.05);
        }

        .credit-freeze-center .transunion-file {
          color: #3e3f42;
          font-size: 16px;
          text-align: center;
          font-weight: 500;
        }

        .credit-freeze-center .lock-text {
          color: #6b6c6f;
          font-size: 16px;
          text-align: center;
          margin: 4px auto 32px;
        }

        .credit-freeze-center .active .lock-text {
          width: 80%;
        }

        .center-block .history-title {
          color: #3e3f42;
          font-size: 16px;
          margin-bottom: 7px;
        }

        .center-block .history-list {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 9px 0;
          border-bottom: 1px solid var(--light-border);
        }

        .center-block .history-list:last-child {
          border-bottom: none;
        }

        .center-block .date {
          color: #6b6c6f;
          font-size: 14px;
          flex: 1;
        }

        .center-block .lock-wrapper {
          flex: 0 0 75px;
        }

        .center-block .lock {
          color: #6b6c6f;
          font-size: 14px;
          margin-left: 13px;
        }

        .center-block .show-all {
          text-align: center;
          margin: 8px auto 0;
          color: #1665d8;
          font-size: 16px;
          cursor: pointer;
        }

        @media screen and (max-width: 768px) {
          section.credit-freeze-center {
            margin-top: 0;
          }
        }

        @media screen and (max-width: 576px) {
          .credit-freeze-center .center-block {
            width: 100%;
            margin: 0 auto;
            padding: 22px 20px 24px;
          }

          .credit-lock-header .title {
            font-size: 24px;
          }

          .credit-lock-header .description {
            margin: 11px 0 24px;
          }

          .credit-freeze-center .logo {
            margin-bottom: 36px;
          }
        }

        @media screen and (max-width: 380px) {
          .center-block .lock {
            font-size: 12px;
          }

          .center-block .lock-wrapper {
            flex: 0 0 70px;
          }

          .center-block .date {
            font-size: 12px;
          }

          .credit-freeze-center .lock-text {
            width: 90%;
          }
        }
      `}</style>

      <style jsx global>
        {`
          .theme-brigit .credit-freeze-center .center-block {
            box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.1);
            padding: 30px 20px;
          }

          .theme-brigit .credit-freeze-center .center-block.active {
            border: none;
            background-color: white;
          }

          .theme-brigit .credit-freeze-center .logo {
            margin-bottom: 35px;
          }

          .theme-brigit .credit-freeze-center .logo svg {
            height: 57px;
          }

          .theme-brigit .credit-freeze-center .history-title {
            font-size: 16px;
            color: #24956a;
            text-align: center;
            line-height: 22px;
          }

          .theme-brigit .credit-freeze-center .transunion-file {
            color: #333333;
            font-weight: 700;
          }

          .theme-brigit .credit-freeze-center .active .lock-text {
            font-size: 16px;
            color: #696969;
            margin-bottom: 30px;
          }

          .theme-brigit .center-block .history-title {
            font-weight: 600;
            margin-bottom: 15px;
          }

          .theme-brigit .center-block .history-list {
            padding: 21px 20px;
          }

          .theme-brigit .center-block .date {
            color: #696969;
          }

          .theme-brigit .center-block .lock {
            color: #333333;
            font-weight: 500;
          }

          .theme-brigit .center-block .lock-wrapper {
            flex: 0 0 75px;
          }

          .theme-brigit .center-block .history-list:last-child {
            border-bottom: 1px solid var(--light-border);
          }

          .theme-brigit .center-block .history-list:first-child {
            border-top: 1px solid var(--light-border);
          }

          .theme-brigit .center-block .show-all {
            font-size: 16px;
            color: #b3b3b3;
            margin-top: 30px;
            font-weight: 500;
          }

          @media screen and (max-width: 768px) {
          }

          @media screen and (max-width: 576px) {
            .theme-brigit .credit-freeze-center .transunion-file {
              font-size: 16px;
            }
          }

          @media screen and (max-width: 400px) {
            .theme-brigit .credit-freeze-center .active .lock-text {
              width: 100%;
            }

            .theme-brigit .center-block .lock,
            .theme-brigit .center-block .date {
              font-size: 13px;
            }

            .theme-brigit .center-block .lock {
              margin-left: 5px;
            }

            .theme-brigit .center-block .history-list {
              padding: 10px 0;
            }

            .theme-brigit .center-block .lock-wrapper {
              flex: 0 0 65px;
            }
          }
        `}
      </style>
    </section>
  )
}

export default UnlockTransUnion
