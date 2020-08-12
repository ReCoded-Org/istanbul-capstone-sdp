const initState = {
  authError: null,
  errKey: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      return {
        ...state,
        authError: "Log in failed..!",
        errMessage: action.err.message,
        errKey: "login",
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        authError: null,
      };
    case "SIGN_OUT_SUCCESS":
      return state;
    case "SIGN_UP_SUCCESS":
      return {
        ...state,
        authError: null,
      };
    case "SIGN_UP_ERROR":
      return {
        ...state,
        authError: "Sign up failed..!",
        errMessage: action.err.message,
        errKey: "signup",
      };
    case "FACEBOOK_AUTH_SUCCESS":
      return {
        ...state,
        authError: null,
      };
    case "FACEBOOK_AUTH_ERROR":
      return {
        ...state,
        authError: "Facebook authentication failed..!",
        errMessage: action.err.message,
        errKey: "facebook",
      };
    case "GOOGLE_AUTH_SUCCESS":
      return {
        ...state,
        authError: null,
      };
    case "GOOGLE_AUTH_ERROR":
      return {
        ...state,
        authError: "Google authentication failed..!",
        errMessage: action.err.message,
        errKey: "google",
      };
    case "UPDATE_SUCCESS":
      return {
        ...state,
        authError: null,
      };
    case "UPDATE_ERROR":
      return {
        ...state,
        authError: "User's info update failed!",
        errMessage: action.err.message,
        errKey: "update",
      };
    case "PROFILE_AUTH_DELETE_SUCCESS":
      return {
        ...state,
        authError: null,
      };
    case "PROFILE_AUTH_DELETE_ERROR":
      return {
        ...state,
        authError: "Account auth deletion failed!",
        errMessage: action.err.message,
        errKey: "accountAuthDelete",
      };
    case "PROFILE_DATA_DELETE_SUCCESS":
      return {
        ...state,
        authError: null,
      };
    case "PROFILE_DATA_DELETE_ERROR":
      return {
        ...state,
        authError: "Account data deletion failed!",
        errMessage: action.err.message,
        errKey: "accountDataDelete",
      };
    case "UPDATE_EMAIL_SUCCESS":
      return {
        ...state,
        authError: null,
      };
    case "UPDATE_EMAIL_ERROR":
      return {
        ...state,
        authError: "Email update failed!",
        errMessage: action.err.message,
        errKey: "updateEmail",
      };
    case "UPDATE_PASSWORD_SUCCESS":
      return {
        ...state,
        authError: null,
      };
    case "UPDATE_PASSWORD_ERROR":
      return {
        ...state,
        authError: "Password update failed!",
        errMessage: action.err.message,
        errKey: "updatePassword",
      };
    case "SEND_RESET_PASSWORD_EMAIL_SUCCESS":
      return {
        ...state,
        authError: null,
      };
    case "SEND_RESET_PASSWORD_EMAIL_ERROR":
      return {
        ...state,
        authError: "Sending reset password email failed!",
        errMessage: action.err.message,
        errKey: "resetPassword",
      };
    default:
      return state;
  }
};

export default authReducer;
