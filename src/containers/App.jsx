import React from "react";
import "./index.css";
import LangDropdown from "../components/LangDropdown";
import { useTranslation } from "react-i18next";
import Home from "../components/home/Home";

function App() {
  const { t, i18n } = useTranslation();
  return (
    <div className="App">
      learn react
      {t("welcome.message")}
      <LangDropdown />
      <Home />
    </div>
  );
}

export default App;
