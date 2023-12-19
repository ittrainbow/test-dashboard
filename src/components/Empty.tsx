import { useEffect, useRef } from 'react'

import { useAppContext } from '../context/Context'
import { Button } from './Button'

export const Empty = () => {
  const buttonRef = useRef<HTMLButtonElement>()
  const { setSearch } = useAppContext()

  useEffect(() => {
    buttonRef.current?.focus()
  }, [])

  return (
    <div className="empty">
      <div>Your search did not match any results.</div>
      <Button onClick={() => setSearch('')} status="RESET" />
    </div>
  )
}
