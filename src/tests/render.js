import { render } from '@testing-library/react'

import { ContextProvider } from '../context/Context'
import { Router } from '../router/Router'
import { MemoryRouter } from 'react-router-dom'

export const renderWithMemoryRouter = (component, options) => {
  return render(
    <ContextProvider>
      <MemoryRouter>{component}</MemoryRouter>
    </ContextProvider>
  )
}

export const renderWithAppRouter = (component, options) => {
  return render(
    <ContextProvider>
      <Router>{component}</Router>
    </ContextProvider>
  )
}
