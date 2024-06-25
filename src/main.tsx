import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import RootLayout from "./app/layouts/root.layout.tsx";
import RootRouter from "./app/router/Root.router.tsx";
import {persistor, store} from './app/store/store.ts';
import {Provider} from "react-redux";
// import {PersistGate} from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RootLayout>
          {/*<PersistGate persistor={persistor}>*/}
              <Provider store={ store }>
                  <RootRouter />
              </Provider>
          {/*</PersistGate>*/}
      </RootLayout>
  </React.StrictMode>,
)
