import { FunctionComponent } from 'react'

import Date from '@/components/shared/Date'

import { MonitorEnrollment } from '@/providers/api/monitoring/getEnrollments'

import LockIcon from '@/public/icons/lock.svg'
import UnlockIcon from '@/public/icons/unlock.svg'

type Props = {
  data: MonitorEnrollment[]
}

const TransUnionLockHistory: FunctionComponent<Props> = ({ data }: Props) => (
  <div className="lock-history">
    <p className="history-title">TransUnion lock history</p>
    <ul>
      {data.length === 0 && <li className="history-list">Empty</li>}
      {data.map((entry, i) => (
        <li className="history-list" key={i}>
          {/* e.g. 2020-03-15 6:00PM GMT +5 */}
          <Date dateString={entry.enrollmentDate || entry.cancellationDate} dateFormat="yyyy-MM-dd h:mma OOO" />{' '}
          <div className="lock-wrapper">
            {entry.active && <LockIcon />}
            {!entry.active && <UnlockIcon />}
            <span className="lock-label">{entry.active ? 'Lock' : 'Unlock'}</span>
          </div>
        </li>
      ))}
    </ul>

    <style jsx global>
      {`
        .lock-history .history-title {
          color: #3e3f42;
          font-size: 16px;
          margin-bottom: 7px;
        }

        .lock-history .history-list {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 9px 0;
          border-bottom: 1px solid var(--light-border);
        }

        .lock-history .history-list:last-child {
          border-bottom: none;
        }

        .lock-history .date {
          color: #6b6c6f;
          font-size: 14px;
          flex: 1;
        }

        .lock-history .lock-wrapper {
          flex: 0 0 75px;
        }

        .lock-history .lock-label {
          color: #6b6c6f;
          font-size: 14px;
          margin-left: 13px;
        }

        @media screen and (max-width: 380px) {
          .lock-history .lock-label {
            font-size: 12px;
          }

          .lock-history .lock-wrapper {
            flex: 0 0 70px;
          }

          .lock-history .date {
            font-size: 12px;
          }
        }
      `}
    </style>

    <style jsx global>
      {`
        .theme-brigit .lock-history .history-title {
          font-size: 16px;
          color: #24956a;
          text-align: center;
          line-height: 22px;
        }

        .theme-brigit .lock-history .history-title {
          font-weight: 600;
          margin-bottom: 15px;
        }

        .theme-brigit .lock-history .history-list {
          padding: 21px 20px;
        }

        .theme-brigit .lock-history .date {
          color: #696969;
        }

        .theme-brigit .lock-history .lock-label {
          color: #333333;
          font-weight: 500;
        }

        .theme-brigit .lock-history .lock-wrapper {
          flex: 0 0 75px;
        }

        .theme-brigit .lock-history .history-list:last-child {
          border-bottom: 1px solid var(--light-border);
        }

        .theme-brigit .lock-history .history-list:first-child {
          border-top: 1px solid var(--light-border);
        }

        @media screen and (max-width: 400px) {
          .theme-brigit .lock-history .lock-label,
          .theme-brigit .lock-history .date {
            font-size: 13px;
          }

          .theme-brigit .lock-history .lock-label {
            margin-left: 5px;
          }

          .theme-brigit .lock-history .history-list {
            padding: 10px 0;
          }

          .theme-brigit .lock-history .lock-wrapper {
            flex: 0 0 65px;
          }
        }
      `}
    </style>
  </div>
)

export default TransUnionLockHistory
