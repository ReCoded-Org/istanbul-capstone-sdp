import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Link, Redirect } from "react-router-dom";
import { Tabs, Tab, Container } from "react-bootstrap";
import anonymousImage from "../../images/anonymousImage.png";
import profileHeaderBackground from "../../images/profileHeaderBackground.png";
import Header from "../common/Header";
import "./Profile.css";
import AccountSettings from "./ProfileSections/AccountSettings/AccountSettings";
import ProfilesList from "./ProfileSections/ProfilesList/ProfilesList";
import ManageBlogs from "./ProfileSections/ManageBlogs/ManageBlogs";
import { updateProfilePhoto } from "../../actions/authActions";

const Profile = (props) => {
  const { profile, auth, id, currentUserType } = props;

  const extraComponents = () => {
    // Add available address details
    let address = "";
    if (profile.city && !profile.country) {
      address = profile.city;
    } else if (!profile.city && profile.country) {
      address = profile.country;
    } else {
      address = `${profile.city}, ${profile.country}`;
    }
    const addressContainer = (
      <div style={{ fontSize: "1.25em" }}>
        <b>From </b>
        <span>{address}</span>
      </div>
    );

    return (
      <div className="extraComponents">
        <h1>
          {profile.displayName ? profile.displayName : profile.fullName}
          {profile.jobTitle && (
            <span className="jobTitle">({profile.jobTitle})</span>
          )}
        </h1>
        {(profile.city || profile.country) && addressContainer}
        {profile.brief && <p className="profileBrief">{profile.brief}</p>}
      </div>
    );
  };

  // Protect the page from unauthorized access
  if (!auth.uid) {
    return <Redirect to="/login" />;
  }

  if (profile) {
    if (!profile.isBlocked || currentUserType === "Admin") {
      const profileImage = profile.imageURL ? profile.imageURL : anonymousImage;
      return (
        <div className="d-flex justify-content-center position-relative">
          <Header
            headerBackground={profileHeaderBackground}
            profilePhoto={profileImage}
            pageName={"profile"}
            isOwner={id === auth.uid && true}
            extraComponents={extraComponents()}
            userId={auth.uid}
            updateProfilePhoto={props.updateProfilePhoto}
          />
          <div className="shadow-lg pt-3 profileContainer">
            <Tabs
              defaultActiveKey="accountSettings"
              className="justify-content-center"
            >
              {id === auth.uid && (
                <Tab
                  eventKey="accountSettings"
                  title={<h4>Account Settings</h4>}
                  className="m-4"
                >
                  <AccountSettings id={id} />
                </Tab>
              )}

              {currentUserType === "Admin" && (
                <Tab
                  eventKey="manageUsers"
                  title={<h4>Manage Users</h4>}
                  className="m-4"
                >
                  <ProfilesList />
                </Tab>
              )}
              {(profile.userType === "Author" ||
                currentUserType === "Admin") && (
                <Tab
                  eventKey="manageBlogs"
                  title={<h4>Manage Blogs</h4>}
                  className="m-4"
                >
                  <ManageBlogs />
                </Tab>
              )}
            </Tabs>
          </div>
        </div>
      );
    } else {
      return (
        <Container className="mt-5">
          <h5>
            Your account has been blocked for violating our terms. Learn how you
            may be able to restore your account.{" "}
            <Link to="accountrestore">Learn more</Link>
          </h5>
        </Container>
      );
    }
  } else {
    return (
      <Container className="mt-5">
        <h4>Loading profile...</h4>
      </Container>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const profiles = state.firestore.data.profiles;
  const profile = profiles ? profiles[id] : null;
  const currentUserType = profiles
    ? profiles[state.firebase.auth.uid].userType
    : null;
  return {
    profile: profile,
    auth: state.firebase.auth,
    id,
    currentUserType,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateProfilePhoto: (image, userId) =>
      dispatch(updateProfilePhoto(image, userId)),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: "profiles" }])
)(Profile);
