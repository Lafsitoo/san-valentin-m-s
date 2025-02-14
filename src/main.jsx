import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LoadingScreen from './LoadingScreen.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoadingScreen />
  </StrictMode>,
)
