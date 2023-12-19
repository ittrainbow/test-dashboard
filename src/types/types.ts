import { SetStateAction } from 'react'

export type TTest = {
  id: number
  name: string
  type: string
  status: string
  siteId: number
  url: string
}

export type TTestUrl = TTest & { url: string }

export type TSite = {
  id: number
  url: string
}

export type TContext = {
  tests: TTest[]
  filteredTests: TTest[]
  sortStyle: string
  sortColumn: keyof TTest
  setTests: React.Dispatch<SetStateAction<TTest[]>>
  updateSort: (value: keyof TTest) => void
  // sites: TSite[]
  search: string
  setSearch: React.Dispatch<SetStateAction<string>>
}
