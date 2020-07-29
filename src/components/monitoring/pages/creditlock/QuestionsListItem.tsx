import { FunctionComponent, ReactElement, cloneElement } from 'react'

import Collapsible from '@/components/shared/Collapsible'

import PlusIcon from '@/public/icons/plus.svg'

type Props = {
  number?: number
  question: ReactElement
  answer?: ReactElement
  defaultOpen?: boolean
}

const QuestionsListItem: FunctionComponent<Props> = ({ number, question, answer, defaultOpen, ...rest }) => {
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
              {cloneElement(question, { number })}
              {/* <Question number={number}>{question}</Question> */}
            </Collapsible.Toggle>
            {answer && (
              <Collapsible.Content>
                {cloneElement(answer, { className: 'collapsible__content-block' })}
                {/* <Answer className="collapsible__content-block">{answer}</Answer> */}
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

          .collapsible .question {
            margin-bottom: 0;
          }

          .expanded .question {
            margin-bottom: 8px;
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
            .questions li {
              margin-left: 32px;
            }

            .step,
            .step-text {
              font-size: 14px;
            }
          }
        `}
      </style>
    </div>
  )
}

export default QuestionsListItem
