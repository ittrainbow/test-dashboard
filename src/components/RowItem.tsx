import { useNavigate } from 'react-router-dom'
import { colors } from '../data/colors'
import { TTest } from '../types/types'
import { Button } from './Button'

type RowItemProps = { el: TTest }

export const RowItem = ({ el }: RowItemProps) => {
  const navigate = useNavigate()
  const { name, type, status, url, id } = el
  const shortenedUrl = url.replace('https://', '').replace('http://', '').replace('www.', '')
  const borderColor = colors[shortenedUrl.split('.')[0]]

  const stringToView = (str: string) => {
    if (str.length === 3) return str
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase().replace('_', '-')
  }

  const statusColor = () => {
    switch (status) {
      case 'STOPPED':
        return 'row-item__status status__red'

      case 'ONLINE':
        return 'row-item__status status__green'

      case 'PAUSED':
        return 'row-item__status status__orange'

      default:
        return 'row-item__status'
    }
  }

  const handleClick = () => navigate(`/${status === 'DRAFT' ? 'finalize' : 'results'}/${id}`)

  return (
    <div className="row-item" data-testid="row-item" style={{ borderColor }}>
      <div className="row-item__name">{name}</div>
      <div className="row-item__data">
        <div className="row-item__type">{stringToView(type)}</div>
        <div className={statusColor()}>{stringToView(status)}</div>
        <div className="row-item__site">{shortenedUrl}</div>
      </div>
      <Button status={status} onClick={handleClick} />
    </div>
  )
}
