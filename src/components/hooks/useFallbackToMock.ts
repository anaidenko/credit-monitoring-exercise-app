import { useState, useEffect } from 'react'

import { useRouter } from 'next/router'

import { API_URL } from '@/providers/api/config'

type HookResult = [boolean, (value: boolean) => void]

const useFallbackToMock = (value?: boolean): HookResult => {
  const { query } = useRouter()
  const [mock, setMock] = useState(value)

  useEffect(() => {
    const update = 'mock' in query || !API_URL
    if (mock !== update) {
      setMock(update)
    }
  }, [query.mock, API_URL])

  return [mock, setMock]
}

export default useFallbackToMock
