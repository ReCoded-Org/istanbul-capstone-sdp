import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const WeCare = () => {
  const { t } = useTranslation();
  return (
    <div className="weCare">
      <div>
        <h1>{t("weCare.heading")}</h1>
        <p>
          <span className="firstWord"> {t("weCare.firstWord")} </span>
          {t("weCare.motivationalText")}
          <span className="pinkText"> {t("weCare.pinkText")}</span>
          {t("weCare.supportiveText")}
          <span className="pinkText">{t("weCare.pinkTextWord")}</span>.
          {t("weCare.hopefulText")}
        </p>
        <br />
      </div>

      <div>
        <Link to="/contact">
          <Button className="pinkButtonWithWhiteText" variant="primary" size="lg">
            {t("weCare.reachUsButton")}
          </Button>
        </Link>
        <br />
        <Link to="/psychoAssess">
          <Button className="blueButtonWithWhiteText" size="lg" variant="primary">
            {t("weCare.assessmentButton")}
          </Button>
        </Link>
      </div>
    </div>
  );
};
export default WeCare;
