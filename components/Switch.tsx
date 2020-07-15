import { FunctionComponent, ReactNode, ChangeEventHandler } from 'react'
import cn from 'classnames'

import { Variant } from '@/libs/constants'

type Props = {
  children?: ReactNode
  isOn?: boolean
  variant?: Variant // TODO: themes
  handleIcon?: ReactNode
  checkedText?: string
  uncheckedText?: string
  onChange?: ChangeEventHandler
}

const Switch: FunctionComponent<Props> = ({
  children,
  variant,
  isOn,
  handleIcon,
  checkedText,
  uncheckedText,
  onChange,
}: Props) => {
  return (
    <div className="switch-wrapper">
      <input type="checkbox" checked={isOn} onChange={onChange} id={`switch-input`} />

      <label className={cn('switch', variant, isOn ? 'checked' : 'unchecked')} htmlFor={`switch-input`}>
        {isOn && <span className="label">{checkedText || children}</span>}
        <div className="area">{handleIcon}</div>
        {!isOn && <span className="label">{uncheckedText || children}</span>}
      </label>

      <style jsx global>
        {`
          .switch {
            cursor: pointer;
            user-select: none;
          }

          .switch-wrapper input {
            position: absolute;
            height: 0;
            width: 0;
            visibility: hidden;
          }

          .switch.checked {
            border: 1px solid #25c77a;
            border-radius: 4px;
            background-color: #27d381;
            margin: 0 auto 24px;
            height: 43px;
            width: 133px;
            display: flex;
            justify-content: flex-end;
            align-items: center;
          }

          .switch.checked .area {
            height: 39px;
            width: 38px;
            border: 1px solid #fafafa;
            border-radius: 3px;
            background-color: #ffffff;
            box-shadow: inset 0 2px 0 0 rgba(255, 255, 255, 0.06), 0 1px 1px 0 rgba(22, 29, 37, 0.1);
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            right: 1px;
          }

          .switch.unchecked .area {
            height: 38px;
            width: 38px;
            border: 1px solid #00c798;
            border-radius: 3px;
            background-color: #27d381;
            box-shadow: inset 0 2px 0 0 rgba(255, 255, 255, 0.06), 0 1px 1px 0 rgba(22, 29, 37, 0.1);
            margin-right: 13px;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            left: 1px;
            top: -1px;
          }

          .switch.unchecked {
            margin: 0 auto 24px;
            height: 43px;
            width: 133px;
            border: 1px solid #d7dee4;
            border-radius: 4px;
            display: flex;
            align-items: center;
          }

          .switch.unchecked .label {
            color: #bcc7d1;
            font-weight: 500;
            font-size: 16px;
          }

          .switch.checked .label {
            color: white;
            font-size: 16px;
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        `}
      </style>

      <style jsx global>
        {`
          .theme-brigit .switch.checked {
            background: #24956a;
            border: 2px solid #e5e5e5;
            width: 151px;
            height: 48px;
            margin-bottom: 30px;
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;
          }

          .theme-brigit .switch.unchecked {
            width: 151px;
            height: 48px;
            margin-bottom: 30px;
            border: 2px solid #e5e5e5;
          }

          .theme-brigit .switch.unchecked .area {
            height: 49px;
            width: 49px;
            background: #24956a;
            box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.18), 0 2px 2px 0 rgba(0, 0, 0, 0.22);
            border-radius: 5px;
            left: -2px;
            border: none;
            top: -1px;
          }

          .theme-brigit .switch.unchecked .label {
            color: #333;
          }

          .theme-brigit .switch.checked .area {
            width: 45px;
            height: 45px;
            right: 0;
            position: relative;
            box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.18), 0 2px 2px 0 rgba(0, 0, 0, 0.22);
          }
        `}
      </style>
    </div>
  )
}

export default Switch
