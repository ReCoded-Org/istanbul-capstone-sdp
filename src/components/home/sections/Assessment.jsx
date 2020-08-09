import React from "react";
import ReactDOM from "react-dom";
import Button from "react-bootstrap/Button";
import { useTranslation } from "react-i18next";

const Assessment = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="assessment">
      <div>
        <h1>
          {t("assessment.heading0")}
          <br />
          {t("assessment.heading1")}
        </h1>
        <p>{t("assessment.paragraph0")}</p>
        <br />
        <div>
          <Button id="blue" size="lg" variant="primary">
            {t("assessment.button0")}
          </Button>{" "}
        </div>
      </div>

      <div>
        <img
          src="https://files.slack.com/files-pri/TRG8KC72A-F017H9W00SV/assessment.png"
          alt={t("assessment.imagealt0")}
        />
      </div>
    </div>
  );
};
export default Assessment;
