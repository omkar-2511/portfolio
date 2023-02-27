import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import { BrowserRouter } from 'react-router-dom'
// import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const rootNode = document.getElementById('root')
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  rootNode
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
