import { cleanup, fireEvent } from '@testing-library/react'

import { renderWithAppRouter } from './render'
import { App } from '../App'

describe('CLICK TEST', () => {
  beforeEach(cleanup)

  test('Finalize click', async () => {
    const { findAllByTestId, getByTestId } = renderWithAppRouter(<App />)

    const buttons = await findAllByTestId('finalize-button')
    expect(buttons.length).toBeGreaterThan(0)
    fireEvent.click(buttons[0])
    const finalize = getByTestId('finalize-page')
    expect(finalize).toBeInTheDocument()

    const back = getByTestId('back')
    fireEvent.click(back)
    const dashboard = getByTestId('dashboard-page')
    expect(dashboard).toBeInTheDocument()
  })

  test('Results click', async () => {
    const { findAllByTestId, getByTestId } = renderWithAppRouter(<App />)

    const buttons = await findAllByTestId('results-button')
    expect(buttons.length).toBeGreaterThan(0)
    fireEvent.click(buttons[0])
    const finalize = getByTestId('results-page')
    expect(finalize).toBeInTheDocument()

    const back = getByTestId('back')
    fireEvent.click(back)
    const dashboard = getByTestId('dashboard-page')
    expect(dashboard).toBeInTheDocument()
  })

  test('Search present', async () => {
    const { findAllByTestId, getByTestId } = renderWithAppRouter(<App />)

    const search = getByTestId('search')
    fireEvent.change(search, { target: { value: 'Dark theme test' } })

    const rows = await findAllByTestId('row-item')
    expect(rows.length).toBe(1)
  })

  test('Search missing', async () => {
    const { getByTestId } = renderWithAppRouter(<App />)

    const search = getByTestId('search')
    fireEvent.change(search, { target: { value: new Date().getTime() } })

    const reset = getByTestId('reset-button')
    expect(reset).toBeInTheDocument()
  })
})
