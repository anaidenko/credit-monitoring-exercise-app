import { ReactNode, FunctionComponent } from 'react'
import cn from 'classnames'

type Props = {
  className?: string
  children?: ReactNode
}

const Notification: FunctionComponent<Props> = ({ className, children }) => (
  <div className={cn('notification', className)}>
    <div className="notification-content">{children}</div>
  </div>
)

export default Notification
