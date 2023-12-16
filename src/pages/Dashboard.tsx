import { RowItem } from '../components/Row/RowItem'
import { RowHeader } from '../components/Row/RowHeader'
import { useContext, useEffect } from 'react'
import { Context } from '../context/Context'

type Props = {}

export const Dashboard = ({}: Props) => {
  const { tests } = useContext(Context)

  useEffect(() => console.log(200, tests), [tests])

  return (
    <div className="dashboard">
      <RowHeader />
      {tests.map((test) => (
        <RowItem key={test.name} el={test} />
      ))}
    </div>
  )
}
