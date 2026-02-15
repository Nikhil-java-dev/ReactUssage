import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // console.log('App', App()),
  <StrictMode>
    <App />
  </StrictMode>
)
