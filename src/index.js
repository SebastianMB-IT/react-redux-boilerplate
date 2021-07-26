import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import makeServer from './server/index.js'
import * as serviceWorker from './serviceWorker'
import { store } from './app/store'
import { Provider as StoreProvider } from 'react-redux'
import './i18n'

const environment = process.env.NODE_ENV

if (environment !== 'production') {
  makeServer()
}

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <App />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorker.unregister()
