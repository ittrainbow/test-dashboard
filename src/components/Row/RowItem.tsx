import React from 'react'

type Props = {
  el: {
    name: string
    type: string
    status: string
    site: string
  }
}

export const RowItem = ({ el }: Props) => {
  const { name, type, status, site } = el

  return (
    <div className="row-item">
      <div className="row-item__name">{name}</div>
      <div className="row-item__type">{type}</div>
      <div className="row-item__status">{status}</div>
      <div className="row-item__site">{site}</div>
      <button className="row-item__button"></button>
    </div>
  )
}
