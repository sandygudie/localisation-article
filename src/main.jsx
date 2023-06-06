import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { i18n } from '@lingui/core'
import { I18nProvider } from '@lingui/react'
import { defaultLocale, dynamicActivate } from './i18n.js';


ReactDOM.createRoot(document.getElementById('root')).render(
  useEffect(() => {
    // With this method we dynamically load the catalogs
    dynamicActivate(defaultLocale)
  }, []),
  <React.StrictMode>
   <I18nProvider i18n={i18n}>
    <App/>
  </I18nProvider>
  </React.StrictMode>,
)
