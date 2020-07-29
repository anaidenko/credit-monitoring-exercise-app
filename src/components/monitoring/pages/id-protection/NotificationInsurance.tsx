import Collapsible from '@/components/shared/Collapsible'

import InsuranceGuardIcon from '@/public/icons/insurance-guard.svg'
import OpenCloseIcon from '@/public/icons/open-close.svg'
import PrintIcon from '@/public/icons/print.svg'

import Notification from './Notification'

const LeftPanel = () => (
  <div className="left-panel">
    <div className="title-wrapper">
      <h3 className="content-title">$1M ID Theft Insurance</h3>
      <Collapsible.Toggle>
        <OpenCloseIcon />
      </Collapsible.Toggle>
    </div>
    <p className="description">We’ll reimburse you for out-of-pocket expenses up to $1,000,000</p>
    <Collapsible.Content>
      <p className="detail-text">
        Our identity Theft Reimbursement, with zero deductible, reimburses you for expenses related to identity theft
        restoration, including replacement of documents, traveling expenses, loss of income, child/elderly care
        (incurred as a result of identity restoration), fraudulent withdrawals from a bank account, and legal costs.
      </p>
      <p className="blue-text">Summary of Identity Fraud Reimbursement Coverage</p>
    </Collapsible.Content>
  </div>
)

const RightPanel = () => (
  <Collapsible.Content>
    <div className="right-panel">
      <div className="insurance-card">
        <div>
          <p className="card-title">Identity Theft Insurance Card</p>
          <p className="card-info">Norbert Veres</p>
          <p className="card-info">Member ID: 4485962</p>
          <p className="contact">
            For Customer Support Call <span className="highlight">844-395-7319</span>
          </p>
        </div>
        <div className="flex-vertical">
          <InsuranceGuardIcon />
        </div>
      </div>
      <p className="print">Print out your card so you have your insurance information available</p>
      <div className="flex">
        <PrintIcon className="print-icon" />
        <span className="blue-text">Print Insurance Card</span>
      </div>
    </div>
  </Collapsible.Content>
)

const NotificationInsurance = (): JSX.Element => (
  <Collapsible>
    <Notification>
      <LeftPanel />
      <RightPanel />
    </Notification>
  </Collapsible>
)

export default NotificationInsurance
