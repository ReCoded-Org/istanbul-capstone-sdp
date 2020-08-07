import React from "react";
import { useTranslation } from "react-i18next";
import lang from "../images/lang.png";
import "../index.css";
import { Dropdown } from "react-bootstrap";

function LangDropdown() {
  const { t } = useTranslation();
  /*
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
  };*/

  return (
    <Dropdown>
      <Dropdown.Toggle id="dropdown-basic" className="langDropdown">
        <img className="langPic" alt="lang. selector" src={lang} />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item value="en" onClick={(e) => console.log(e.target)}>
          {t("lang.en")}
        </Dropdown.Item>
        <Dropdown.Item>{t("lang.tr")}</Dropdown.Item>
        <Dropdown.Item>{t("lang.ar")}</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default LangDropdown;
