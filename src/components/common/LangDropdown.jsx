import React from "react";
import { useTranslation } from "react-i18next";
import language from "../images/language.png";
import "./index.css";
import { Dropdown } from "react-bootstrap";

function LangDropdown() {
  const { t, i18n } = useTranslation();

  return (
    <Dropdown className="langDropdown">
      <Dropdown.Toggle id="dropdown-basic" className="Language-icon">
        <img className="languageImage" alt="lang. selector" src={language} />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => i18n.changeLanguage("en")}>
          {t("lang.en")}
        </Dropdown.Item>
        <Dropdown.Item onClick={() => i18n.changeLanguage("tr")}>
          {t("lang.tr")}
        </Dropdown.Item>
        <Dropdown.Item onClick={() => i18n.changeLanguage("ar")}>
          {t("lang.ar")}
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default LangDropdown;
