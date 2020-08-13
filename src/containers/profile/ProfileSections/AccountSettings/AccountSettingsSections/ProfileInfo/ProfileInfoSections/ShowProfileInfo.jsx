import React from "react";
import "./ProfileInfoSections.css";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { useTranslation } from "react-i18next";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import infoSign from "../../../../../../../images/infoSign.png";

const ShowProfileInfo = (props) => {
  const { t } = useTranslation();
  const {
    profile,
    auth,
    firstName = profile.firstName,
    lastName = profile.lastName,
    fullName = profile.fullName,
    jobTitle = profile.jobTitle,
    userType = profile.userType,
    city = profile.city,
    country = profile.country,
  } = props;

  // Protect the page from unauthorized access
  if (!auth.uid) {
    return <Redirect to="/login" />;
  }

  if (profile) {
    return (
      <div className="d-flex flex-column infoContainer">
        <Row className="justify-content-between">
          <Col>
            <p className="w-75 m-0 pb-1 border-bottom">
              {t("accountSettings.showProfileInfo.0")}
            </p>
            <p className="w-75 m-0 p-1 displayName">{firstName}</p>
          </Col>
          <Col>
            <p className="w-75 m-0 pb-1 border-bottom">
              {t("accountSettings.showProfileInfo.1")}
            </p>
            <p className="w-75 m-0 p-1 displayName">{lastName}</p>
          </Col>
        </Row>
        <Row className="justify-content-between">
          <Col>
            <p className="w-75 m-0 pb-1 border-bottom">
              {t("accountSettings.showProfileInfo.2")}
              <OverlayTrigger
                overlay={
                  <Tooltip id="tooltip-disabled">
                    {t("accountSettings.showProfileInfo.3")}
                  </Tooltip>
                }
              >
                <span className="ml-2 d-inline-block">
                  <img alt="Info sign" src={infoSign} width="20" />
                </span>
              </OverlayTrigger>
            </p>
            <p className="w-75 m-0 p-1 displayName">{fullName}</p>
          </Col>
          <Col></Col>
        </Row>
        <Row className="justify-content-between">
          <Col>
            <p className="w-75 m-0 pb-1 border-bottom">
              {t("accountSettings.showProfileInfo.4")}
            </p>
            <p className="w-75 m-0 p-1 displayName">{jobTitle}</p>
          </Col>
          <Col>
            <p className="w-75 m-0 pb-1 border-bottom">
              {t("accountSettings.showProfileInfo.5")}
            </p>
            <p className="w-75 m-0 p-1 displayName">{userType}</p>
          </Col>
        </Row>
        <Row className="justify-content-between">
          <Col>
            <p className="w-75 m-0 pb-1 border-bottom">
              {t("accountSettings.showProfileInfo.6")}
            </p>
            <p className="w-75 m-0 p-1 displayName">{city}</p>
          </Col>
          <Col>
            <p className="w-75 m-0 pb-1 border-bottom">
              {t("accountSettings.showProfileInfo.7")}
            </p>
            <p className="w-75 m-0 p-1 displayName">{country}</p>
          </Col>
        </Row>
      </div>
    );
  } else {
    return (
      <h4 className="container">{t("accountSettings.showProfileInfo.8")}</h4>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps;
  const profiles = state.firestore.data.profiles;
  const profile = profiles ? profiles[id] : null;
  return {
    profile: profile,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "profiles" }])
)(ShowProfileInfo);
