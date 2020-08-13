import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./index.css";

const SignedOutLinks = () => {
  const { t } = useTranslation();
  return (
    <div className="link signedOutLinks">
      <Link to="/login">{t("signedOut.0")}</Link>
      <Link to="/signup">{t("signedOut.1")}</Link>
    </div>
  );
};

export default SignedOutLinks;
