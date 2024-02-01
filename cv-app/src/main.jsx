import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import TopForm from './TopForm.jsx'
import MidForm from './MidForm.jsx'
import './index.scss'
import './Form.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TopForm/>
    <MidForm/>
  </React.StrictMode>,
)
