import { useContext } from 'react'
import { Context } from '../../context/Context'

type Props = {}

export const RowHeader = ({}: Props) => {
  const { tests, updateTests } = useContext(Context)

  const nameSortHandler = () => {
    const newTests: any[] = structuredClone(tests)

    newTests.sort((a, b) => {
      if (a.name > b.name) return 1
      if (a.name < b.name) return -1
      return 0
    })

    updateTests(newTests)
  }

  const typeSortHandler = () => {
    console.log(2)
  }

  const statusSortHandler = () => {
    console.log(3)
  }

  const siteSortHandler = () => {
    console.log(4)
  }

  return (
    <div className="row-header">
      <div className="row-header__name">
        <div className="row-header__tag" onClick={nameSortHandler}>
          NAME
        </div>
      </div>
      <div className="row-item__type">
        <div className="row-header__tag" onClick={typeSortHandler}>
          TYPE
        </div>
      </div>
      <div className="row-item__status">
        <div className="row-header__tag" onClick={statusSortHandler}>
          STATUS
        </div>
      </div>
      <div className="row-item__site">
        <div className="row-header__tag" onClick={siteSortHandler}>
          SITE
        </div>
      </div>
      <div className="row-item__button">BUTTON</div>
    </div>
  )
}
