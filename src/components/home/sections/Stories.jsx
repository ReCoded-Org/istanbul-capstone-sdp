import React from "react";
import ReactDOM from "react-dom";
import { useTranslation } from "react-i18next";

const Stories = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="stories">
      <div>
        <h1>
          {t("stories.heading0")} <br />
          {t("stories.heading1")}{" "}
        </h1>
        <p>{t("stories.paragraph0")}</p>
        <br />
        <div>
          <span className="red">{t("stories.readmore0")}</span>
        </div>
      </div>

      <div>
        <img
          src="https://files.slack.com/files-pri/TRG8KC72A-F0174T21RH9/stories-about-hope.png"
          alt={t("stories.imagealt0")}
        />
      </div>
    </div>
  );
};
export default Stories;
