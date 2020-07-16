import { FunctionComponent, MouseEventHandler } from 'react'
import cn from 'classnames'

import { Variant } from '@/libs/types'

type Props = {
  className?: string
  type?: ButtonType
  variant?: ButtonVariant
  disabled?: boolean
  onClick?: MouseEventHandler
}

type ButtonType = 'button' | 'reset' | 'submit'

type ButtonVariant =
  | Variant
  // | 'link'
  | 'outline-primary'
  | 'outline-secondary'
  | 'outline-success'
  | 'outline-danger'
  | 'outline-warning'
  | 'outline-info'
  | 'outline-dark'
  | 'outline-light'

const Button: FunctionComponent<Props> = ({ children, className, type, variant, disabled, onClick }) => (
  <>
    <button type={type} className={cn(className, 'btn', variant)} disabled={disabled} onClick={onClick}>
      {children}
    </button>

    <style jsx>
      {`
        .btn {
          height: 43px;
          width: 235px;
          border-radius: 4px;
          font-size: 16px;
          font-weight: 400;
          letter-spacing: -0.33px;
          text-align: center;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          border: 1px solid #d8dce6;
          background-color: #ffffff;
          color: #3e3f42;
          outline: none;
        }

        .btn.primary {
          border: 1px solid #25c77a;
          background-color: #27d381;
          color: white;
        }
      `}
    </style>
  </>
)

export default Button
