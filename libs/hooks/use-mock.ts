import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

const useMock = () => {
  const { query } = useRouter()
  const [mock, setMock] = useState(false)

  useEffect(() => {
    if ('mock' in query) {
      setMock(true)
    }
  })

  return [mock, setMock]
}

export default useMock
