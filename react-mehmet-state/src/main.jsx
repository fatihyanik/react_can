import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Counter from './components/Counter'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <Counter />
  </React.StrictMode>,
)
