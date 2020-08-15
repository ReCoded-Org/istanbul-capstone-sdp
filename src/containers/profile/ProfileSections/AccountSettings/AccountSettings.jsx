import React from "react";
import "./AccountSettings.css";
import { connect } from "react-redux";
import ProfileInfo from "./AccountSettingsSections/ProfileInfo/ProfileInfo";
import UpdateEmail from "./AccountSettingsSections/UpdateEmail";
import UpdatePassword from "./AccountSettingsSections/UpdatePassword";
import DeleteAccount from "./AccountSettingsSections/DeleteAccount";

const AccountSettings = (props) => {
  const { id, auth } = props;

  return (
    <div className="accountSettings">
      <ProfileInfo id={id} auth={auth} />
      {/* Protecting user privacy even from admins */}
      {auth.uid === id && (
        <>
          {auth.providerData[0].providerId === "password" && (
            <>
              <hr className="mt-5 mb-5" />
              <UpdateEmail />
              <hr className="mt-5 mb-5" />
              <UpdatePassword />
            </>
          )}
          <hr className="mt-5 mb-5" />
          <DeleteAccount id={id} />
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(AccountSettings);
