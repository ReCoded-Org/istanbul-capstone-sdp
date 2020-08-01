const initState = {
  authError: null,
  errKey: null
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
    default:
      return state;
  }
};

export default authReducer;
