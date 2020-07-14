import { useState } from 'react'
import cn from 'classnames'

import InsuranceGuardIcon from '../../public/icons/insurance-guard.svg';
import PrintIcon from '../../public/icons/print.svg'
import OpenCloseIcon from '../../public/icons/open-close.svg'

const NotificationInsurance = (): JSX.Element => {
  const [open, toggle] = useState(false)

  return (
    <div className={cn('notification collapsible', { expanded: open })}>
      <div className="notification-content">
        <div className="left-panel">
          <div className="title-wrapper">
            <h3 className="content-title">$1M ID Theft Insurance</h3>
            <div className="open-close-icon" onClick={(event) => toggle(!open)}>
              <OpenCloseIcon />
            </div>
          </div>
          <p className="description">
            We’ll reimburse you for out-of-pocket expenses up to $1,000,000
          </p>
          <p className="detail-text collapsible-content">
            Our identity Theft Reimbursement, with zero deductible, reimburses
            you for expenses related to identity theft restoration, including
            replacement of documents, traveling expenses, loss of income,
            child/elderly care (incurred as a result of identity restoration),
            fraudulent withdrawals from a bank account, and legal costs.
          </p>
          <p className="blue-text collapsible-content">
            Summary of Identity Fraud Reimbursement Coverage
          </p>
        </div>
        <div className="right-panel collapsible-content">
          <div className="insurance-card">
            <div>
              <p className="card-title">Identity Theft Insurance Card</p>
              <p className="card-info">Norbert Veres</p>
              <p className="card-info">Member ID: 4485962</p>
              <p className="contact">
                For Customer Support Call{' '}
                <span className="highlight">844-395-7319</span>
              </p>
            </div>
            <div className="flex-vertical">
              <InsuranceGuardIcon />
            </div>
          </div>
          <p className="print">
            Print out your card so you have your insurance information available
          </p>
          <div className="flex">
            <PrintIcon className="print-icon" />
            <span className="blue-text">Print Insurance Card</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotificationInsurance
