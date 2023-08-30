import React from 'react'
import ReactDOM from 'react-dom/client'

import { Home } from './pages/Home'

import './index.css'
import './language'

const App = () => (
  <div>
    <Home />
  </div>
)

const root = ReactDOM.createRoot(document.getElementById('app') as HTMLElement)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
