import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const WeCare = () => {
  const { t } = useTranslation();
  return (
    <div className="weCare">
      <div>
        <h1>
          {t("weCare.heading0")} <br /> {t("weCare.heading1")}
        </h1>
        <p>
          <first-word> {t("weCare.firstword0")} </first-word>
          {t("weCare.paragraph0")}
          <span className="red"> {t("weCare.span0")}</span>
          {t("weCare.paragraph1")}
          <span className="red">{t("weCare.span1")}</span>.
          {t("weCare.paragraph2")}
        </p>
        <br />
      </div>

      <div>
        <Link to="/contact">
          <Button className="pink" variant="primary" size="lg">
            {t("weCare.button0")}
          </Button>
        </Link>
        <br />
        <Link to="/psychoAssess">
          <Button className="blue" size="lg" variant="primary">
            {t("weCare.button1")}
          </Button>
        </Link>
      </div>
    </div>
  );
};
export default WeCare;
