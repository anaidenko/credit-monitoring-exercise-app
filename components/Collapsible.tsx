import {
  useState,
  useCallback,
  FunctionComponent,
  cloneElement,
  ReactElement,
  createContext,
  useContext,
  Children,
} from 'react'
import cn from 'classnames'
import OpenCloseIcon from '../public/icons/open-close.svg'
import useToggle from '@/libs/hooks/use-toggle'

type ChildrenProps = {
  open: boolean
  toggle: (open?: boolean) => void
}

type Props = {
  children: ReactElement
  disabled?: boolean
  defaultOpen?: boolean
}

type Statics = {
  Context: typeof CollapsibleContext
  Toggle: typeof CollapsibleToggle
  Content: typeof CollapsibleContent
}

const Collapsible: FunctionComponent<Props> & Statics = ({ children, disabled, defaultOpen = false }: Props) => {
  const [open, toggleOpen] = useToggle(defaultOpen)
  const toggle = useCallback((open) => !disabled && toggleOpen(open), [open, disabled, toggleOpen])

  const context = { open, toggle }

  return (
    <CollapsibleContext.Provider value={context}>
      <CollapsibleContext.Consumer>
        {() =>
          Children.map(children, (child) =>
            cloneElement(child, { className: cn(child.props.className, 'collapsible', { expanded: open }) })
          )
        }
      </CollapsibleContext.Consumer>
    </CollapsibleContext.Provider>
  )
}

const CollapsibleContext = createContext<ChildrenProps>(null)
CollapsibleContext.displayName = 'CollapsibleContext'

const CollapsibleToggle: FunctionComponent = ({ children }) => {
  const { toggle } = useContext(CollapsibleContext)
  return (
    <div className="open-close-icon" onClick={(event) => toggle()}>
      {children || <OpenCloseIcon />}
    </div>
  )
}

const CollapsibleContent: FunctionComponent = ({ children }) => {
  return Children.map(children as any, (child) =>
    cloneElement(child, { className: cn(child.props.className, 'collapsible-content') })
  )
}

Collapsible.Context = CollapsibleContext
Collapsible.Toggle = CollapsibleToggle
Collapsible.Content = CollapsibleContent

export default Collapsible
