import { Children, cloneElement, FunctionComponent, ReactElement } from 'react'

type Props = {
  children?: ReactElement
}

const QuestionsList: FunctionComponent = ({ children }: Props) => (
  <ul className="questions">
    {Children.map(children, (child, index) => cloneElement(child, { ...child.props, number: index + 1, key: index }))}
  </ul>
)

export default QuestionsList
