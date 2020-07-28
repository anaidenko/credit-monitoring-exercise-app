import Answer from './Answer'
import Question from './Question'
import QuestionsListItem from './QuestionsListItem'

export const WhatIsCreditLock = (props) => (
  <QuestionsListItem
    {...props}
    question={<Question>What is a Credit Lock?</Question>}
    answer={
      <Answer>
        <p className="step-text">
          A credit lock is a security measure that makes it difficult for would-be fraudsters to open new financial
          accounts in your name by putting a lock on your credit reports. Different companies will use different credit
          bureaus, so locking your credit report at all three major consumer credit bureaus is the best way to help keep
          your credit more secure.
        </p>
        <p className="step-text">
          A credit lock is different from a credit freeze. A credit lock provides more flexibility, as it is quicker to
          place and lift a lock.
        </p>
      </Answer>
    }
  ></QuestionsListItem>
)

export const WhyShouldILockMyCredit = (props) => (
  <QuestionsListItem
    {...props}
    question={<Question>Why should I lock my credit?</Question>}
    answer={
      <Answer>
        Locking your credit prevents creditors from gaining access to your credit report for most applications. If your
        credit is locked with all three major consumer credit bureaus, it would be more difficult for someone to open
        new accounts using your name.
      </Answer>
    }
  ></QuestionsListItem>
)

export const WhatACreditLockDoesAndDoesntDo = (props) => (
  <QuestionsListItem
    {...props}
    question={<Question>What a credit lock does and doesn’t do</Question>}
    answer={
      <Answer>
        <p className="sub-step-title">A credit lock will:</p>
        <div className="sub-step-text">
          <div className="dot"></div>
          <p className="step-text">Prevent creditors from gaining access to your credit report for most applications</p>
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
      </Answer>
    }
  ></QuestionsListItem>
)

export const HowLongWillItTakeForMyCreditReportToUnlock = (props) => (
  <QuestionsListItem
    {...props}
    question={<Question>How long will it take for my credit report to unlock?</Question>}
    answer={
      <Answer>
        <p className="step-text">
          Changing the lock status directly with the credit bureaus can be instant if done online, but may take longer
          if done via phone.
        </p>
        <p className="step-text">
          f you unlock a credit report with one bureau, it won’t automatically unlock your credit with the other two
          credit bureaus. You should unlock the reports with all three bureaus before proceeding with a loan or credit
          application, as different companies will use different credit bureaus for reporting.
        </p>
      </Answer>
    }
  ></QuestionsListItem>
)

export const CanIBothLockAndFreezeMyCreditAtTheSameTime = (props) => (
  <QuestionsListItem
    {...props}
    question={<Question>Can I both lock and freeze my credit at the same time?</Question>}
    answer={<Answer>No, each credit report can only be either locked or frozen at any given time.</Answer>}
  ></QuestionsListItem>
)

export const WillACreditLockOrFreezeAffectMyCreditScores = (props) => (
  <QuestionsListItem
    {...props}
    question={<Question>Will a credit lock or freeze affect my credit scores?</Question>}
    answer={
      <Answer>
        Locking or freezing your credit will not directly impact your credit scores. However, your credit scores will
        still be able to change while your credit is locked or frozen.
      </Answer>
    }
  ></QuestionsListItem>
)
