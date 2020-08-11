import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Stories = () => {
  const { t } = useTranslation();
  return (
    <div className="stories">
      <div>
        <h1>{t("stories.heading")}</h1>
        <p>{t("stories.paragraph")}</p>
        <br />
        <div>
          <Link to="/blogs">
            <span className="red">{t("stories.readmore")}</span>
          </Link>
        </div>
      </div>

      <div>
        <img
          src="https://i.ibb.co/HqmDtgk/Stories-Image.png"
          alt={t("stories.imagealt")}
        />
      </div>
    </div>
  );
};
export default Stories;
