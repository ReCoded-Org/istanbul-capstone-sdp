import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Assessment = () => {
  const { t } = useTranslation();
  return (
    <div className="assessment">
      <div>
        <h1>{t("assessment.heading")}</h1>
        <p>{t("assessment.assessmentDetails")}</p>
        <br />
        <div>
          <Link to="/assessment">
            <Button
              className="blueButtonWithWhiteText"
              size="lg"
              variant="primary"
            >
              {t("assessment.assessmentButton")}
            </Button>
          </Link>
        </div>
      </div>

      <div>
        <img
          src="https://i.ibb.co/17fcbqD/assessment-image.png"
          alt={t("assessment.imageAlt")}
        />
      </div>
    </div>
  );
};
export default Assessment;
