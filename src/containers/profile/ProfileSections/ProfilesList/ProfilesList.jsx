import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import ProfileBox from "./ProfilesListSections/ProfileBox";

const ProfilesList = (props) => {
  const { profiles, auth } = props;

  if (!auth.uid) {
    return <Redirect to="/signInUp" />;
  }

  return (
    <div>
      {profiles &&
        profiles.map((profile) => {
          return (
            <Link to={"/profiles/" + profile.id} key={profile.id}>
              <ProfileBox profile={profile} auth={auth} />
            </Link>
          );
        })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    profiles: state.firestore.ordered.profiles,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "profiles" }])
)(ProfilesList);
