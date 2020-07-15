import QuestionListItem from './QuestionListItem'

const QuestionList = (): JSX.Element => (
  <div>
    <ul className="questions">
      <QuestionListItem
        number={1}
        question="What is a Credit Lock?"
        answer={
          <>
            <p className="step-text">
              A credit lock is a security measure that makes it difficult for would-be fraudsters to open new financial
              accounts in your name by putting a lock on your credit reports. Different companies will use different
              credit bureaus, so locking your credit report at all three major consumer credit bureaus is the best way
              to help keep your credit more secure.
            </p>
            <p className="step-text">
              A credit lock is different from a credit freeze. A credit lock provides more flexibility, as it is quicker
              to place and lift a lock.
            </p>
          </>
        }
      ></QuestionListItem>

      <QuestionListItem
        number={2}
        question="Why should I lock my credit?"
        answer={`Locking your credit prevents creditors from gaining access to your credit report for most applications. If
              your credit is locked with all three major consumer credit bureaus, it would be more difficult for someone
              to open new accounts using your name.`}
      ></QuestionListItem>

      <QuestionListItem
        number={3}
        question="What a credit lock does and doesn’t do"
        answer={
          <>
            <p className="sub-step-title">A credit lock will:</p>
            <div className="sub-step-text">
              <div className="dot"></div>
              <p className="step-text">
                Prevent creditors from gaining access to your credit report for most applications
              </p>
            </div>
            <p className="sub-step-title">A credit lock won’t:</p>
            <div className="sub-step-text">
              <div className="dot"></div>
              <p className="step-text">Affect your ability to use credit monitoring services</p>
            </div>
            <div className="sub-step-text">
              <div className="dot"></div>
              <p className="step-text">
                Directly impact your credit scores, however your scores can still change while your credit is locked
              </p>
            </div>
            <div className="sub-step-text">
              <div className="dot"></div>
              <p className="step-text">Stop you from receiving pre-screened offers of credit</p>
            </div>
            <div className="sub-step-text">
              <div className="dot"></div>
              <p className="step-text">Prevent you from using existing credit accounts</p>
            </div>
          </>
        }
      ></QuestionListItem>

      <QuestionListItem
        number={4}
        question="How long will it take for my credit report to unlock?"
        answer={
          <>
            <p className="step-text">
              Changing the lock status directly with the credit bureaus can be instant if done online, but may take
              longer if done via phone.
            </p>
            <p className="step-text">
              f you unlock a credit report with one bureau, it won’t automatically unlock your credit with the other two
              credit bureaus. You should unlock the reports with all three bureaus before proceeding with a loan or
              credit application, as different companies will use different credit bureaus for reporting.
            </p>
          </>
        }
      ></QuestionListItem>

      <QuestionListItem
        number={5}
        question="Can I both lock and freeze my credit at the same time?"
        answer="No, each credit report can only be either locked or frozen at any given time."
      ></QuestionListItem>

      <QuestionListItem
        number={6}
        question="Will a credit lock or freeze affect my credit scores?"
        answer={`Locking or freezing your credit will not directly impact your credit scores. However, your credit scores
              will still be able to change while your credit is locked or frozen.`}
      ></QuestionListItem>
    </ul>
  </div>
)

export default QuestionList
