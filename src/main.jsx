import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import RandomNumberButton from './RandomNumber.jsx'
import NameRater from './NameRater.jsx'
import LastComponent from './LastComponent.jsx'

createRoot(document.getElementById('root')).render(
  <div class ="container">
    <RandomNumberButton />
    <NameRater />
    <LastComponent />
  </div>,
  
)
