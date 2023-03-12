import React from 'react'
import ReactDOM from 'react-dom/client'

// 1. vert slow, HMR need 26s +
import "antd/dist/antd.min.css";

// 2. no problem
// import "antd/dist/antd.css";

import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
