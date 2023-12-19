import { RowItem, RowHeader, Search, Empty } from '../components'
import { useAppContext } from '../context/Context'
import { useSort } from '../hooks/useSort'

export const Dashboard = () => {
  const { filteredTests } = useAppContext()

  useSort()

  return (
    <div className="container">
      <div className="header" data-testid="dashboard-page">
        Dashboard
      </div>
      <Search />
      <RowHeader />
      {filteredTests?.length ? filteredTests.map((test) => <RowItem key={test.name} el={test} />) : <Empty />}
    </div>
  )
}
