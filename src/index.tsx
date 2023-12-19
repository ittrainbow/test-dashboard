import ReactDOM from 'react-dom/client'
import './index.scss'
import { App } from './App'
import { ContextProvider } from './context/Context'
import { Router } from './router/Router'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <ContextProvider>
    <Router>
      <App />
    </Router>
  </ContextProvider>
)
