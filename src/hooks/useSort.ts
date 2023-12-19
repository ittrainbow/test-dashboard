import { useContext, useEffect, useState } from 'react'

import data from '../data/db.json'
import { Context } from '../context/Context'
import { TTest } from '../types/types'
import { statusNums } from '../data/status'

export const useSort = () => {
  const [initialTests, setInitialTests] = useState<TTest[]>([])
  const { setTests, sortColumn, sortStyle } = useContext(Context)

  useEffect(() => {
    setInitialTests(
      data.tests.map((el) => {
        const get = data.sites.find((site) => site.id === el.siteId)
        const url = get?.url.replace('https://', '').replace('http://', '').replace('www.', '') || ''
        return { ...el, url }
      })
    )
  }, [])

  useEffect(() => {
    const tests: TTest[] = JSON.parse(JSON.stringify(initialTests))

    tests.sort((a: TTest, b: TTest) => {
      const prev = sortColumn === 'status' ? statusNums[a.status] : a[sortColumn]
      const next = sortColumn === 'status' ? statusNums[b.status] : b[sortColumn]
      if (prev > next) return sortStyle === 'ASC' ? 1 : sortStyle === 'DESC' ? -1 : 0
      if (prev < next) return sortStyle === 'ASC' ? -1 : sortStyle === 'DESC' ? 1 : 0
      return 0
    })

    setTests(tests)
  }, [sortStyle, sortColumn, setTests, initialTests])
}
