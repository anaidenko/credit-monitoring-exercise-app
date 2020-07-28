import { FunctionComponent } from 'react'

import OpenCloseIcon from '../../public/icons/open-close.svg'
import TouchIdIcon from '../../public/icons/touch-id.svg'
import Collapsible from '../Collapsible'
import Notification from './Notification'

const LeftPanel: FunctionComponent = () => (
  <div className="left-panel">
    <div className="title-wrapper">
      <h3 className="content-title">Identity Restoration Services</h3>
      <Collapsible.Toggle>
        <OpenCloseIcon />
      </Collapsible.Toggle>
    </div>
    <Collapsible.Content>
      <p className="detail-text restoration-services-detail-text text-mobile">
        Our full-service Identity Restoration service takes the burden off of you in the event that your identity is
        stolen by going beyond the traditional credit report restoration. We offer a robust case knowledge of non-credit
        restoration including payday loans, IRS, DMV, and court records.
      </p>
    </Collapsible.Content>
    <p className="detail-text">
      Our Identity Restoration service assists with the identity restoration process by providing step-by-step
      instructions you can easily follow to repair and restore your identity.
    </p>
    <Collapsible.Content>
      <p className="blue-text">Please call our U.S. - based call center at 844-395-7319 for assistance</p>
    </Collapsible.Content>
  </div>
)

const RightPanel: FunctionComponent = () => (
  <Collapsible.Content>
    <div className="right-panel">
      <div className="password-wrapper">
        <TouchIdIcon />
      </div>
    </div>
  </Collapsible.Content>
)

const NotificationRestorationServices: FunctionComponent = () => {
  return (
    <div>
      <Collapsible>
        <Notification className="restoration-services pack">
          <LeftPanel />
          <RightPanel />
        </Notification>
      </Collapsible>

      <style jsx global>
        {`
          .restoration-services.notification .notification-content .left-panel {
            flex: 1;
          }

          .restoration-services.notification .notification-content .right-panel {
            flex: 0 0 138px;
          }

          .restoration-services .notification-content .password-wrapper {
            height: 158px;
            width: 138px;
            border-radius: 6px;
            background-color: #227bff;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 14px 0 0 60px;
          }

          .notification-content .restoration-services-detail-text {
            margin-bottom: 25px;
          }

          @media screen and (max-width: 992px) {
            .restoration-services .notification-content {
              flex-direction: initial;
            }

            .restoration-services .notification-content .password-wrapper {
              margin-left: 30px;
            }
          }

          @media screen and (max-width: 768px) {
            .restoration-services .notification-content .password-wrapper {
              height: 140px;
              width: 122px;
            }
          }

          @media screen and (max-width: 576px) {
            .restoration-services .notification-content {
              flex-direction: column;
            }

            .restoration-services .notification-content .password-wrapper {
              margin: 0;
              height: 158px;
              width: 138px;
            }

            .pack.restoration-services .notification-content {
              flex-direction: initial;
              position: relative;
            }

            .pack.restoration-services .notification-content .password-wrapper {
              height: 110px;
              width: 96px;
            }

            .pack.notification.restoration-services.expanded .detail-text.text-mobile {
              margin-right: 80px;
            }

            .pack.restoration-services.notification .notification-content .right-panel {
              position: absolute;
              right: 16px;
              top: 40px;
            }
          }

          @media screen and (max-width: 420px) {
            .restoration-services .notification-content .password-wrapper {
              height: 140px;
              width: 122px;
            }
          }
        `}
      </style>

      <style jsx global>
        {`
          .theme-brigit .notification.restoration-services .right-panel {
            display: none !important;
          }

          .theme-brigit .notification-content .restoration-services-detail-text {
            color: #696969;
            padding-bottom: 20px;
            font-weight: 400;
            border-bottom: 1px solid #ebebeb;
            margin-bottom: 20px;
            font-size: 14px;
          }

          @media screen and (max-width: 576px) {
            .theme-brigit .restoration-services.notification .notification-content .right-panel {
              flex: 0;
            }

            .theme-brigit .restoration-services .notification-content .password-wrapper {
              display: none;
            }

            .theme-brigit .pack.notification.restoration-services.expanded .detail-text.text-mobile {
              margin-right: 0;
            }
          }
        `}
      </style>
    </div>
  )
}

export default NotificationRestorationServices
