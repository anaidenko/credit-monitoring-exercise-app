import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

type Hook = [boolean, (value: boolean) => void]

const useMock = (value?: boolean): Hook => {
  const { query } = useRouter()
  const [mock, setMock] = useState(value)

  useEffect(() => {
    const update = 'mock' in query
    if (mock !== update) {
      setMock(update)
    }
  }, [query.mock])

  return [mock, setMock]
}

export default useMock
