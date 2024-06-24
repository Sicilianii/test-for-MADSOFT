import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import RootLayout from "./app/layouts/root.layout.tsx";
import RootRouter from "./app/router/Root.router.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RootLayout>
          <RootRouter />
      </RootLayout>
  </React.StrictMode>,
)
