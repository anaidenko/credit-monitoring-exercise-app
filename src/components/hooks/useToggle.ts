import { useCallback, useState } from 'react'

type Callback = (value?: boolean) => void
type Response = [boolean, Callback]

function useToggle(initialState = false): Response {
  const [state, setState] = useState(initialState)
  const toggle = useCallback(
    (value?: boolean): void => {
      typeof value === 'boolean' ? setState(value) : setState(!state)
    },
    [state, setState]
  )
  return [state, toggle]
}

export default useToggle
