import { useAppContext } from '../context/Context'

export const RowHeader = () => {
  const { sortStyle, sortColumn, updateSort } = useAppContext()

  const getHeader = (value: string) => {
    const ticker = sortColumn !== value ? '' : sortStyle === 'ASC' ? '\u02c4' : sortStyle === 'DESC' ? '\u02c5' : ''
    return (value === 'url' ? 'site' : value).toUpperCase() + ' ' + ticker
  }

  return (
    <div className="row-header">
      <div className="row-header__name">
        <div className="row-header__tag" onClick={() => updateSort('name')}>
          {getHeader('name')}
        </div>
      </div>
      <div className="row-item__type">
        <div className="row-header__tag" onClick={() => updateSort('type')}>
          {getHeader('type')}
        </div>
      </div>
      <div className="row-item__status">
        <div className="row-header__tag" onClick={() => updateSort('status')}>
          {getHeader('status')}
        </div>
      </div>
      <div className="row-header__site">
        <div className="row-header__tag" onClick={() => updateSort('url')}>
          {getHeader('url')}
        </div>
      </div>
    </div>
  )
}
