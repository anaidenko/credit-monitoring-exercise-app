import { useState } from 'react'
import cn from 'classnames'

import OpenCloseIcon from '../../public/icons/open-close.svg'

const NotificationLostWallet = (): JSX.Element => {
  const [open, toggle] = useState(false)

  return (
    <div
      className={cn('notification collapsible lost-wallet', { expanded: open })}
    >
      <div className="notification-content">
        <div className="left-panel">
          <div className="title-wrapper">
            <h3 className="content-title">Lost Wallet Assistance</h3>
            <div className="open-close-icon" onClick={(event) => toggle(!open)}>
              <OpenCloseIcon />
            </div>
          </div>
          <p className="detail-text collapsible-content">
            Losing your wallet can put your identity at risk and take a steep
            financial and emotional toll. Fortunately, as a member you have the
            protection of our lost wallet service.
          </p>
          <ul className="lists collapsible-content-flex">
            <li className="list-item">
              <div className="list-dot"></div>
              <span className="list-text">Credit cards</span>
            </li>
            <li className="list-item">
              <div className="list-dot"></div>
              <span className="list-text">Insurance cards</span>
            </li>
            <li className="list-item">
              <div className="list-dot"></div>
              <span className="list-text">Debit cards</span>
            </li>
            <li className="list-item">
              <div className="list-dot"></div>
              <span className="list-text">Passports</span>
            </li>
            <li className="list-item">
              <div className="list-dot"></div>
              <span className="list-text">Check books</span>
            </li>
            <li className="list-item">
              <div className="list-dot"></div>
              <span className="list-text">Military identification cards</span>
            </li>
            <li className="list-item">
              <div className="list-dot"></div>
              <span className="list-text">Driver’s license</span>
            </li>
            <li className="list-item">
              <div className="list-dot"></div>
              <span className="list-text">Traveler’s checks</span>
            </li>
            <li className="list-item list-item-without-margin">
              <div className="list-dot"></div>
              <span className="list-text">Social Security cards</span>
            </li>
            <li className="list-item list-item-without-margin">
              <div className="list-dot"></div>
              <span className="list-text">Much more</span>
            </li>
          </ul>
        </div>
        <div className="right-panel">
          <p className="description collapsible-content">
            It’s a headache everyone fears — and most people have to deal with
            it at some point.
          </p>
          <p className="detail-text">
            Losing your wallet can put your identity at risk and take a steep
            financial and emotional toll. Fortunately, you have the protection
            of our lost wallet service.
          </p>
          <p className="blue-text collapsible-content">
            Simply call us at 844-395-7319 for assistance.
          </p>
        </div>
      </div>
    </div>
  )
}

export default NotificationLostWallet
