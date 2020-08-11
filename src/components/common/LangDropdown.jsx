import React from "react";
import { useTranslation } from "react-i18next";
import lang from "../images/lang.png";
import "./index.css";
import { Dropdown } from "react-bootstrap";

function LangDropdown() {
  const { t, i18n } = useTranslation();

  return (
    <Dropdown className="langDropdown">
      <Dropdown.Toggle id="dropdown-basic" className="langDropdown">
        <img className="langPic" alt="lang. selector" src={lang} />
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