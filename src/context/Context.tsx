import { createContext, useState, useContext } from 'react'

import { TContext, TTest } from '../types/types'

export const Context = createContext({} as TContext)
export const useAppContext = () => useContext(Context)

export const ContextProvider = ({ children }: any) => {
  const [tests, setTests] = useState<TTest[]>([])
  const [sortStyle, setSortStyle] = useState<string>('')
  const [sortColumn, setSortColumn] = useState<keyof TTest>('name')
  const [search, setSearch] = useState<string>('')

  const updateSort = (value: keyof TTest) => {
    if (sortColumn !== value) {
      setSortColumn(value)
      return setSortStyle('ASC')
    }

    sortStyle === '' && setSortStyle('ASC')
    sortStyle === 'ASC' && setSortStyle('DESC')
    sortStyle === 'DESC' && setSortStyle('')
  }

  const filteredTests = tests?.filter((el) => el.name.includes(search))

  return (
    <Context.Provider
      value={{
        tests,
        filteredTests,
        setTests,
        updateSort,
        sortStyle,
        sortColumn,
        search,
        setSearch
      }}
    >
      {children}
    </Context.Provider>
  )
}
