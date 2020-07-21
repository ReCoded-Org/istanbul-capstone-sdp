import React from 'react';
import './index.css';
import LangDropdown from "../components/LangDropdown"
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();
  return (
    <div className="App">
      {t('Welcome.1')}
      <LangDropdown/>
    </div>
  );
}

export default App;
