import { useState, useCallback, useEffect, FunctionComponent } from 'react'

import useMonitoringEnrollments from '@/components/monitoring/hooks/useMonitoringEnrollments'
import useMonitoringLock from '@/components/monitoring/hooks/useMonitoringLock'
import InlineError from '@/components/shared/InlineError'
import Switch from '@/components/shared/Switch'

import { MonitorEnrollment } from '@/providers/api/monitoring/getEnrollments'
import { EnrollmentCode } from '@/providers/api/monitoring/getEnrollments'

import CreditlockLockedIcon from '@/public/icons/creditlock-locked.svg'
import CreditlockUnlockedIcon from '@/public/icons/creditlock-unlocked.svg'
import TransUnionLogo from '@/public/icons/transunion-logo.svg'

import TransUnionLockHistory from './TransUnionLockHistory'

type Props = {
  defaultHistorySize?: number
  showAll?: boolean
}

const TransUnionLockCard: FunctionComponent<Props> = ({ defaultHistorySize = 4, showAll }: Props) => {
  const { enrollments, error: monitoringError } = useMonitoringEnrollments()
  const { locked, toggleLocked, error: toggleError } = useMonitoringLock()

  const error = monitoringError || toggleError

  const [history, setHistory] = useState<MonitorEnrollment[]>([])
  const [historyShowSize, setHistorySize] = useState(defaultHistorySize)
  const [historyShown, setHistoryShown] = useState<MonitorEnrollment[]>([])

  useEffect(() => {
    const creditLocks = enrollments?.filter((x) => x.enrollmentCode === EnrollmentCode.TUICreditLock) || []
    setHistory(creditLocks)
  }, [enrollments])

  const showHistory = useCallback(
    (size?: number) => {
      const data = showAll ? history : history?.slice(0, size)
      setHistorySize(size)
      setHistoryShown(data)
    },
    [history, historyShowSize]
  )

  useEffect(() => {
    showHistory()
  }, [history])

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

      {error && <InlineError message={error.message} />}

      {history?.length > 0 && historyShown?.length > 0 && (
        <div>
          <TransUnionLockHistory data={historyShown} />
          {history?.length > historyShowSize && (
            <p className="show-all" onClick={() => showHistory(history.length)}>
              Show All ({history.length})
            </p>
          )}
        </div>
      )}
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

          .theme-brigit .credit-freeze-center .transunion-file {
            color: #333333;
            font-weight: 700;
          }

          .theme-brigit .credit-freeze-center .active .lock-text {
            font-size: 16px;
            color: #696969;
            margin-bottom: 30px;
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
          }
        `}
      </style>
    </section>
  )
}

export default TransUnionLockCard
