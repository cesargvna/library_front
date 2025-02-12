import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './index.css'
import App from './App.tsx'
import { SnackbarProvider } from 'notistack'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <SnackbarProvider anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }} />
      <App />
    </BrowserRouter>

  </StrictMode>,
)
