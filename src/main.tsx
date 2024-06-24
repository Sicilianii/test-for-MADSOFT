import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import RootPage from "./pages/Root.page.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RootPage />
  </React.StrictMode>,
)
