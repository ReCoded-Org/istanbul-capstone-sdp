import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Assessment = () => {
  const { t } = useTranslation();
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
          <Link to="psychoAssess">
            <Button className="blue" size="lg" variant="primary">
              {t("assessment.button0")}
            </Button>
          </Link>
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
