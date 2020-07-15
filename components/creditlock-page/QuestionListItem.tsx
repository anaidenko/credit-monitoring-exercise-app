import { FunctionComponent, ReactNode } from 'react'

import Collapsible from '../Collapsible'
import PlusIcon from '../../public/icons/plus.svg'

type Props = {
  number?: number
  question: ReactNode
  answer?: ReactNode
  defaultOpen?: boolean
}

const QuestionListItem: FunctionComponent<Props> = ({ number, question, answer, defaultOpen, ...rest }) => {
  return (
    <div>
      <Collapsible disabled={!answer} defaultOpen={defaultOpen}>
        <li className="arrow-icon" {...rest}>
          {answer && (
            <Collapsible.Toggle>
              <div className="collapsible__open-close-icon">
                <PlusIcon className="plus-minus" />
              </div>
            </Collapsible.Toggle>
          )}

          <div>
            <Collapsible.Toggle>
              <p className="question">
                {number && <span className="number">{number}.</span>}
                {question}
              </p>
            </Collapsible.Toggle>
            {answer && (
              <Collapsible.Content>
                <div className="answer collapsible__content-block">{answer}</div>
              </Collapsible.Content>
            )}
          </div>
        </li>
      </Collapsible>

      <style jsx global>
        {`
          .questions li {
            position: relative;
            display: flex;
            padding: 16px 0 20px;
            margin-left: 40px;
            border-bottom: 1px solid var(--light-border);
          }

          .questions li:last-child {
            border-bottom: none;
          }

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

          .collapsible .question {
            margin-bottom: 0;
          }

          .expanded .question {
            margin-bottom: 8px;
          }

          .answer {
            font-size: 16px;
            color: #6b6c6f;
            padding-left: 26px;
          }

          .answer.no-padding-left {
            padding-left: 0;
          }

          .step {
            color: #3e3f42;
            font-size: 16px;
            font-weight: 500;
          }

          .dot {
            width: 5px;
            height: 5px;
            border: 1px solid #1665d8;
            border-radius: 50%;
            background-color: #1665d8;
            margin-right: 14px;
            position: relative;
            top: 13px;
          }

          .step-text {
            color: #6b6c6f;
            font-size: 16px;
            margin: 4px 0 16px;
          }

          .step-text:last-child {
            margin-bottom: 0;
          }

          .sub-step-title {
            color: #6b6c6f;
            font-size: 16px;
            margin-bottom: 8px;
          }

          .sub-step-text {
            color: #6b6c6f;
            font-size: 16px;
            margin-bottom: 8px;
            display: flex;
          }

          @media screen and (max-width: 576px) {
            .number {
              margin-right: 14px;
              font-size: 16px;
            }

            .question {
              font-size: 16px;
            }

            .answer {
              font-size: 14px;
            }

            .questions li {
              margin-left: 32px;
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

            .number {
              margin-right: 10px;
            }
          }
        `}
      </style>
    </div>
  )
}

export default QuestionListItem
