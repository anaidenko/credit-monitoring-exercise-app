import { FunctionComponent } from 'react'

import useToggle from '@/components/hooks/useToggle'

type Props = {
  message: string
}

const InlineError: FunctionComponent<Props> = ({ message }: Props) => {
  const [show, toggle] = useToggle(true)
  return (
    <>
      {show && message && (
        <div className="inline-error">
          <span className="message">Error: {message}</span>{' '}
          <span className="discard" onClick={() => toggle(false)}>
            (close)
          </span>
        </div>
      )}

      <style jsx global>{`
        .inline-error .message {
          color: #ff0000;
        }

        .inline-error .discard {
          cursor: pointer;
          margin-left: 10px;
        }
      `}</style>
    </>
  )
}

export default InlineError
