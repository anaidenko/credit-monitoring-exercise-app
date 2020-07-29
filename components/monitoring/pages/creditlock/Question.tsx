import { ReactNode } from 'react'

type Props = {
  number?: number
  children?: ReactNode
}

const Question = ({ number, children }: Props) => (
  <>
    <p className="question">
      {number && <span className="number">{number}.</span>}
      {children}
    </p>

    <style jsx global>
      {`
        .number {
          color: #1665d8;
          font-size: 18px;
          margin-right: 8px;
        }

        .question {
          color: #3e3f42;
          font-size: 18px;
          font-weight: 500;
          margin-bottom: 8px;
          cursor: pointer;
        }

        @media screen and (max-width: 576px) {
          .number {
            margin-right: 14px;
            font-size: 16px;
          }

          .question {
            font-size: 16px;
          }
        }

        @media screen and (max-width: 340px) {
          .number {
            margin-right: 10px;
          }
        }
      `}
    </style>
  </>
)

export default Question
