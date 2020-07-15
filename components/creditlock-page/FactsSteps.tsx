import QuestionList from './QuestionList'

const FactsSteps = (): JSX.Element => {
  return (
    <section className="facts-steps">
      <div className="facts-steps-header">
        <h2 className="title">Facts and Steps to Complete a Lock</h2>
        <div className="lock-freeze-box active">Credit Lock</div>
        <div className="lock-freeze-box">Credit Freeze</div>
      </div>

      <QuestionList />

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

          .facts-steps .collapsible.arrow-icon .collapsible__open-close-icon {
            position: absolute;
            left: -34px;
            top: 18px;
            margin-right: 10px;
            transform: rotate(0deg);
            transition: transform 0.3s;
            cursor: pointer;
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
          }

          @media screen and (max-width: 340px) {
            .facts-steps .title {
              font-size: 16px;
            }

            .facts-steps .collapsible.arrow-icon .collapsible__open-close-icon {
              margin-right: 0;
              left: -25px;
            }
          }
        `}
      </style>

      <style jsx global>
        {`
          .theme-brigit .facts-steps .lock-freeze-box {
            display: none;
          }
        `}
      </style>
    </section>
  )
}

export default FactsSteps
