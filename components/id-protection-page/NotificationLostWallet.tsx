import { FunctionComponent } from 'react'
import cn from 'classnames'

import Collapsible from '../Collapsible'
import Notification from './Notification'
import OpenCloseIcon from '../../public/icons/open-close.svg'

const List: FunctionComponent<any> = ({ className, children, ...rest }) => (
  <ul className={cn('lists', className)} {...rest}>
    {children}
  </ul>
)

const ListItem: FunctionComponent<any> = ({ className, children, ...rest }) => (
  <li className={cn('list-item', className)} {...rest}>
    <div className="list-dot"></div>
    <span className="list-text">{children}</span>
  </li>
)

const LeftPanel = () => (
  <div className="left-panel">
    <div className="title-wrapper">
      <h3 className="content-title">Lost Wallet Assistance</h3>
      <Collapsible.Toggle>
        <OpenCloseIcon />
      </Collapsible.Toggle>
    </div>
    <Collapsible.Content>
      <p className="detail-text">
        Losing your wallet can put your identity at risk and take a steep financial and emotional toll. Fortunately, as
        a member you have the protection of our lost wallet service.
      </p>
    </Collapsible.Content>
    <List className="collapsible-content-flex">
      <ListItem>Credit cards</ListItem>
      <ListItem>Insurance cards</ListItem>
      <ListItem>Debit cards</ListItem>
      <ListItem>Passports</ListItem>
      <ListItem>Check books</ListItem>
      <ListItem>Military identification cards</ListItem>
      <ListItem>Driver’s license</ListItem>
      <ListItem>Traveler’s checks</ListItem>
      <ListItem className="list-item-without-margin">Social Security cards</ListItem>
      <ListItem className="list-item-without-margin">Much more</ListItem>
    </List>
  </div>
)

const RightPanel = () => (
  <div className="right-panel">
    <Collapsible.Content>
      <p className="description">
        It’s a headache everyone fears — and most people have to deal with it at some point.
      </p>
    </Collapsible.Content>
    <p className="detail-text">
      Losing your wallet can put your identity at risk and take a steep financial and emotional toll. Fortunately, you
      have the protection of our lost wallet service.
    </p>
    <Collapsible.Content>
      <p className="blue-text">Simply call us at 844-395-7319 for assistance.</p>
    </Collapsible.Content>
  </div>
)

const NotificationLostWallet = (): JSX.Element => (
  <Collapsible>
    <Notification className="lost-wallet">
      <LeftPanel />
      <RightPanel />
    </Notification>
  </Collapsible>
)

export default NotificationLostWallet
