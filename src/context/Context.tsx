import { createContext, useState, useEffect, SetStateAction } from 'react'
import initialTests from '../data'

type TContext = {
  tests: any[]
  setTests: React.Dispatch<SetStateAction<any[]>>
  updateTests: (newTests: any[]) => void
}

export const Context = createContext({} as TContext)

export const ContextProvider = ({ children }: any) => {
  const [tests, setTests] = useState<any[]>([])
  const [nameSort, setNameSort] = useState('')

  useEffect(() => {
    setTests(initialTests)
  }, [])

  const updateTests = (newTests: any[]) => {
    console.log(100, tests)
    console.log(101, newTests)
    console.log(102, tests === newTests)
    setTests(newTests)
  }

  return <Context.Provider value={{ tests, setTests, updateTests }}>{children}</Context.Provider>
}
