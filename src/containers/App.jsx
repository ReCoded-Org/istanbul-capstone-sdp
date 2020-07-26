import React from 'react';
import './index.css';
import LangDropdown from "../components/LangDropdown"
import { useTranslation } from "react-i18next";
//components
import Home from '../components/home/Home'


function App() {
  const { t, i18n } = useTranslation();
  return (
    <div className="App">
      {t('Welcome.1')}
      <LangDropdown/>
      <Home />
    </div>
  );
}

export default App;
