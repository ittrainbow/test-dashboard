import { useEffect, useRef } from 'react'
import { useAppContext } from '../context/Context'

export const Search = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const { filteredTests, search, setSearch } = useAppContext()

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setSearch(value)
  }

  const testsEnding = filteredTests?.length === 1 ? '' : 's'

  return (
    <label tests-amount={filteredTests?.length + ' test' + testsEnding}>
      <input
        ref={inputRef}
        type="search"
        onChange={handleInput}
        placeholder="What tests are you looking for?"
        value={search}
        data-testid="search"
      />
    </label>
  )
}
