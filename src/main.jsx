import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";
import { defaultLocale, dynamicActivate } from "./i18n.js";

const I18nApp = () => {
  useEffect(() => {
    const currentLanguage = window.localStorage.getItem("language");
    if (!currentLanguage) {
      window.localStorage.setItem("language", defaultLocale);
      dynamicActivate(defaultLocale);
    } else {
      dynamicActivate(currentLanguage);
    }
  })

  return (
    <React.StrictMode>
      <I18nProvider i18n={i18n}>
        <App />
      </I18nProvider>
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<I18nApp />);
