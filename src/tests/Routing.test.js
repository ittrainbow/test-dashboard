import { cleanup } from '@testing-library/react'

import { Finalize, Results } from '../pages'
import { renderWithMemoryRouter } from './render'
import { App } from '../App'

describe('ROUTING TEST', () => {
  beforeEach(cleanup)

  test('Main page', () => {
    const { getByTestId } = renderWithMemoryRouter(<App />)
    const elem = getByTestId('dashboard-page')
    expect(elem).toBeInTheDocument()
  })

  test('Finalize page', () => {
    const { getByTestId } = renderWithMemoryRouter(<Finalize />)
    const elem = getByTestId('finalize-page')
    expect(elem).toBeInTheDocument()
  })

  test('Results page', () => {
    const { getByTestId } = renderWithMemoryRouter(<Results />)
    const elem = getByTestId('results-page')
    expect(elem).toBeInTheDocument()
  })
})
