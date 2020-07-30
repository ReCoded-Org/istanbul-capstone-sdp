const initState = {
  authError: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      console.log("login error: ", action.err.message);
      return {
        ...state,
        authError: "Log in  failed..!",
        errMessage: action.err.message,
      };
    case "LOGIN_SUCCESS":
      console.log("login success");
      return {
        ...state,
        authError: null,
      };
    case "SIGN_OUT_SUCCESS":
      console.log("sign out success");
      return state;
    case "SIGN_UP_SUCCESS":
      console.log("sign up success");
      return {
        ...state,
        authError: null,
      };
    case "SIGN_UP_ERROR":
      console.log("sign up failed");
      return {
        ...state,
        authError: "Sign up failed..!",
        errMessage: action.err.message,
      };
    case "FACEBOOK_AUTH_SUCCESS":
      console.log("facebook auth success");
      return {
        ...state,
        authError: null,
      };
    case "FACEBOOK_AUTH_ERROR":
      console.log("facebook auth failed");
      return {
        ...state,
        authError: "Facebook authentication failed..!",
        errMessage: action.err.message,
      };
    case "GOOGLE_AUTH_SUCCESS":
      console.log("google auth success");
      return {
        ...state,
        authError: null,
      };
    case "GOOGLE_AUTH_ERROR":
      console.log("google auth failed");
      return {
        ...state,
        authError: "Google authentication failed..!",
        errMessage: action.err.message,
      };
    default:
      return state;
  }
};

export default authReducer;
