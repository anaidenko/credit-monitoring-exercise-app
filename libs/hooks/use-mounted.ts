import { useState, useEffect } from 'react'
// import { useRouter } from 'next/router'

const useMounted = () => {
  // const router = useRouter()
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])
  return mounted
}

export default useMounted
