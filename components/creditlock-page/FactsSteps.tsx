import { useState } from 'react'
import cn from 'classnames'

import OpenClose from './OpenClose'

const FactsSteps = (): JSX.Element => {
  const [openQuestion1, toggleQuestion1] = useState(false)

  return (
    <section className="facts-steps">
      <div className="facts-steps-header">
        <h2 className="title">Facts and Steps to Complete a Lock</h2>
        <div className="lock-freeze-box active">Credit Lock</div>
        <div className="lock-freeze-box">Credit Freeze</div>
      </div>
      <ul className="questions">
        <li
          className={cn('collapsible arrow-icon', { expanded: openQuestion1 })}
          onClick={(event) => toggleQuestion1(!openQuestion1)}
        >
          <OpenClose />
          <div>
            <p className="question">
              <span className="number">1.</span>
              What is a Credit Lock?
            </p>
            <div className="answer collapsible__content-block">
              <p className="step-text">
                A credit lock is a security measure that makes it difficult for
                would-be fraudsters to open new financial accounts in your name
                by putting a lock on your credit reports. Different companies
                will use different credit bureaus, so locking your credit report
                at all three major consumer credit bureaus is the best way to
                help keep your credit more secure.
              </p>
              <p className="step-text">
                A credit lock is different from a credit freeze. A credit lock
                provides more flexibility, as it is quicker to place and lift a
                lock.
              </p>
            </div>
          </div>
        </li>
        <li className="collapsible arrow-icon">
          <OpenClose />
          <div>
            <p className="question">
              <span className="number">2.</span>
              Why should I lock my credit?
            </p>
            <p className="answer collapsible__content-block">
              Locking your credit prevents creditors from gaining access to your
              credit report for most applications. If your credit is locked with
              all three major consumer credit bureaus, it would be more
              difficult for someone to open new accounts using your name.
            </p>
          </div>
        </li>
        <li className="collapsible arrow-icon">
          <OpenClose />
          <div>
            <p className="question">
              <span className="number">3.</span>
              What a credit lock does and doesn’t do
            </p>
            <div className="answer collapsible__content-block">
              <p className="sub-step-title">A credit lock will:</p>
              <div className="sub-step-text">
                <div className="dot"></div>
                <p className="step-text">
                  Prevent creditors from gaining access to your credit report
                  for most applications
                </p>
              </div>
              <p className="sub-step-title">A credit lock won’t:</p>
              <div className="sub-step-text">
                <div className="dot"></div>
                <p className="step-text">
                  Affect your ability to use credit monitoring services
                </p>
              </div>
              <div className="sub-step-text">
                <div className="dot"></div>
                <p className="step-text">
                  Directly impact your credit scores, however your scores can
                  still change while your credit is locked
                </p>
              </div>
              <div className="sub-step-text">
                <div className="dot"></div>
                <p className="step-text">
                  Stop you from receiving pre-screened offers of credit
                </p>
              </div>
              <div className="sub-step-text">
                <div className="dot"></div>
                <p className="step-text">
                  Prevent you from using existing credit accounts
                </p>
              </div>
            </div>
          </div>
        </li>
        <li className="collapsible arrow-icon">
          <OpenClose />
          <div>
            <p className="question">
              <span className="number">4.</span>
              How long will it take for my credit report to unlock?
            </p>
            <div className="answer collapsible__content-block">
              <p className="step-text">
                Changing the lock status directly with the credit bureaus can be
                instant if done online, but may take longer if done via phone.
              </p>
              <p className="step-text">
                f you unlock a credit report with one bureau, it won’t
                automatically unlock your credit with the other two credit
                bureaus. You should unlock the reports with all three bureaus
                before proceeding with a loan or credit application, as
                different companies will use different credit bureaus for
                reporting.
              </p>
            </div>
          </div>
        </li>
        <li className="collapsible arrow-icon">
          <OpenClose />
          <div>
            <p className="question">
              <span className="number">5.</span>
              Can I both lock and freeze my credit at the same time?
            </p>
            <p className="answer collapsible__content-block">
              No, each credit report can only be either locked or frozen at any
              given time.
            </p>
          </div>
        </li>
        <li className="collapsible arrow-icon">
          <OpenClose />
          <div>
            <p className="question">
              <span className="number">6.</span>
              Will a credit lock or freeze affect my credit scores?
            </p>
            <p className="answer collapsible__content-block">
              Locking or freezing your credit will not directly impact your
              credit scores. However, your credit scores will still be able to
              change while your credit is locked or frozen.
            </p>
          </div>
        </li>
      </ul>

      <style jsx global>
        {`
          section.facts-steps {
            margin-top: 50px;
          }

          .facts-steps .facts-steps-header {
            display: flex;
            align-items: center;
          }

          .facts-steps .title {
            color: #3e3f42;
            font-size: 20px;
            font-weight: 500;
            margin: 0 24px 0 0;
          }

          .facts-steps .lock-freeze-box {
            height: 44px;
            width: 126px;
            color: #1665d8;
            font-size: 16px;
            margin-right: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .facts-steps .lock-freeze-box:last-child {
            margin-right: 0;
          }

          .facts-steps .lock-freeze-box.active {
            border-radius: 5px;
            background-color: rgba(22, 101, 216, 0.05);
          }

          .facts-steps .questions li {
            position: relative;
            display: flex;
            padding: 16px 0 20px;
            margin-left: 40px;
            border-bottom: 1px solid var(--light-border);
          }

          .facts-steps .questions li:last-child {
            border-bottom: none;
          }

          .facts-steps .collapsible.arrow-icon .collapsible__open-close-icon {
            position: absolute;
            left: -34px;
            top: 18px;
            margin-right: 10px;
            transform: rotate(0deg);
            transition: transform 0.3s;
            cursor: pointer;
          }

          .facts-steps .number {
            color: #1665d8;
            font-size: 18px;
            margin-right: 8px;
          }

          .facts-steps .question {
            color: #3e3f42;
            font-size: 18px;
            font-weight: 500;
            margin-bottom: 8px;
            cursor: pointer;
          }

          .facts-steps .collapsible .question {
            margin-bottom: 0;
          }

          .facts-steps .expanded .question {
            margin-bottom: 8px;
          }

          .facts-steps .answer {
            font-size: 16px;
            color: #6b6c6f;
            padding-left: 26px;
          }

          .facts-steps .answer.no-padding-left {
            padding-left: 0;
          }

          .facts-steps .step {
            color: #3e3f42;
            font-size: 16px;
            font-weight: 500;
          }

          .facts-steps .dot {
            width: 5px;
            height: 5px;
            border: 1px solid #1665d8;
            border-radius: 50%;
            background-color: #1665d8;
            margin-right: 14px;
            position: relative;
            top: 13px;
          }

          .facts-steps .step-text {
            color: #6b6c6f;
            font-size: 16px;
            margin: 4px 0 16px;
          }

          .facts-steps .step-text:last-child {
            margin-bottom: 0;
          }

          .facts-steps .sub-step-title {
            color: #6b6c6f;
            font-size: 16px;
            margin-bottom: 8px;
          }

          .facts-steps .sub-step-text {
            color: #6b6c6f;
            font-size: 16px;
            margin-bottom: 8px;
            display: flex;
          }

          @media screen and (max-width: 768px) {
            .facts-steps .title {
              margin-right: 15px;
              font-size: 20px;
            }

            .facts-steps .lock-freeze-box {
              width: 100px;
              margin-right: 15px;
              font-size: 14px;
            }
          }

          @media screen and (max-width: 576px) {
            .facts-steps .facts-steps-header {
              flex-direction: column;
              align-items: initial;
            }

            .facts-steps .title {
              margin: 0 0 12px;
            }

            .facts-steps .lock-freeze-box {
              flex: 0 0 44px;
              width: 100%;
              font-size: 16px;
              margin: 0 0 10px;
              justify-content: flex-start;
              padding-left: 26px;
            }

            .facts-steps .number {
              margin-right: 14px;
              font-size: 16px;
            }

            .facts-steps .question {
              font-size: 16px;
            }

            .facts-steps .answer {
              font-size: 14px;
            }

            .facts-steps .questions li {
              margin-left: 32px;
            }

            .facts-steps .step,
            .facts-steps .step-text {
              font-size: 14px;
            }
          }

          @media screen and (max-width: 340px) {
            .facts-steps .title {
              font-size: 16px;
            }

            .facts-steps .answer {
              padding-right: 15px;
            }

            .facts-steps .number {
              margin-right: 10px;
            }

            .facts-steps .collapsible.arrow-icon .collapsible__open-close-icon {
              margin-right: 0;
              left: -25px;
            }
          }
        `}
      </style>
    </section>
  )
}

export default FactsSteps
