import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Contextapi from './components/Contextapi'

ReactDOM.createRoot(document.getElementById('root')).render(

    <Contextapi>
    <App />
    </Contextapi>
)
