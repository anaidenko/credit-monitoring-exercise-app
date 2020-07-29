import { ReactElement, FunctionComponent } from 'react'

import cn from 'classnames'

type Props = {
  children?: ReactElement
  className?: string
}

const Answer: FunctionComponent = ({ children, className }: Props) => (
  <>
    <div className={cn('answer', className)}>{children}</div>

    <style jsx global>
      {`
        .answer {
          font-size: 16px;
          color: #6b6c6f;
          padding-left: 26px;
        }

        .answer.no-padding-left {
          padding-left: 0;
        }

        @media screen and (max-width: 576px) {
          .answer {
            font-size: 14px;
          }

          .step,
          .step-text {
            font-size: 14px;
          }
        }

        @media screen and (max-width: 340px) {
          .answer {
            padding-right: 15px;
          }
        }
      `}
    </style>
  </>
)

export default Answer
