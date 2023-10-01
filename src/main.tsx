import React from 'react'
import ReactDOM from 'react-dom/client'
import './scss/styles.scss'
import PublicTemplate from './components/templates/public/PublicTemplate'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <PublicTemplate/>
  </React.StrictMode>,
)
