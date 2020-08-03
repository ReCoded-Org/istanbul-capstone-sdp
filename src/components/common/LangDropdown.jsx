import React from "react";
import { useTranslation } from "react-i18next";
import lang from "../images/lang.png";
import "../index.css";

function LangDropdown() {
  const { t, i18n } = useTranslation();

  const handleChange = (e) => {
    switch (e.target.innerText) {
      case "Turkish":
      case "Türkçe":
      case "التركية":
        i18n.changeLanguage("tr");
        return;
      case "Arabic":
      case "Arapça":
      case "العربية":
        i18n.changeLanguage("ar");
        return;
      case "English":
      case "İngilizce":
      case "الإنجليزية":
        i18n.changeLanguage("en");
        return;
      default:
        return;
    }
  };

  return (
    <div className="langDropdown">
      <img className="lang" alt="lang. selector" src={lang} />
      <ul className="lang">
        <li className="lang" onClick={(e) => handleChange(e)}>
          {t("lang.en")}
        </li>
        <li className="lang" onClick={(e) => handleChange(e)}>
          {t("lang.tr")}
        </li>
        <li className="lang" onClick={(e) => handleChange(e)}>
          {t("lang.ar")}
        </li>
      </ul>
    </div>
  );
}

export default LangDropdown;
