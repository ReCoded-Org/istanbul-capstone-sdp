import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import { Tabs, Tab, Container, Row, Col } from "react-bootstrap";
import anonymousImage from "../../images/anonymousImage.png";
import profileHeaderBG from "../../images/profileHeaderBG.png";
import Header from "../../components/common/Header";
import "./Profile.css";
import AccountSettings from "./ProfileSections/AccountSettings/AccountSettings";
import ProfilesList from "./ProfileSections/ProfilesList/ProfilesList";

const Profile = (props) => {
  const { profile, auth, id, isblocked } = props;

  const extraComponents = () => {
    return (
      <div className="extraComponents">
        <h1>
          {profile.displayName ? profile.displayName : profile.fullName}
          {profile.jobTitle && (
            <span className="jobTitle">({profile.jobTitle})</span>
          )}
        </h1>
        {(profile.city || profile.country) && (
          <div style={{ fontSize: "1.25em" }}>
            <b>From </b>
            <span>
              {profile.city && profile.country
                ? `${profile.city}, ${profile.country}`
                : profile.city && !profile.country
                ? profile.city
                : profile.country}
            </span>
          </div>
        )}
        {profile.brief && <p className="brief">{profile.brief}</p>}
      </div>
    );
  };

  // Protect the page from unauthorized access
  if (!auth.uid) {
    return <Redirect to="/signInUp" />;
  }

  if (profile) {
    const profileImage = profile.imageURL ? profile.imageURL : anonymousImage;
    return (
      <div className="d-flex justify-content-center position-relative">
        <Header
          headerBG={profileHeaderBG}
          imagePath={profileImage}
          headerPage={"profileHeader"}
          isProfile={true}
          extraComponents={extraComponents()}
        />
        <div className="shadow-lg pt-3 profileContainer">
          <Tabs
            defaultActiveKey="accountSettings"
            className="justify-content-center"
          >
            <Tab
              eventKey="accountSettings"
              title={<h4>Account Settings</h4>}
              className="m-4"
            >
              <AccountSettings id={id} />
            </Tab>
            <Tab
              eventKey="manageUsers"
              title={<h4>Manage Users</h4>}
              className="m-4"
            >
              <ProfilesList />
            </Tab>
          </Tabs>

          {isblocked && <h5>this account has been blocked!!</h5>}
        </div>
      </div>
    );
  } else {
    return <h4 className="container">loading profile...</h4>;
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const profiles = state.firestore.data.profiles;
  const profile = profiles ? profiles[id] : null;
  return {
    profile: profile,
    auth: state.firebase.auth,
    id,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "profiles" }])
)(Profile);
