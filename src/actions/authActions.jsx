const splitFullName = (fullName, selection) => {
  if (selection === "first") {
    return fullName.substr(0, fullName.indexOf(" "));
  } else if (selection === "last") {
    return fullName.substr(fullName.indexOf(" ") + 1);
  }
  return (
    splitFullName(fullName, "first")[0] +
    " " +
    splitFullName(fullName, "last")[0]
  );
};

const addToFirebaseDB = (
  firestore,
  userID,
  firstName,
  lastName,
  initials,
  imageURL,
  email,
  provider
) => {
  const db = firestore.collection("profiles").doc(userID);
  db.get().then((doc) => {
    if (!doc.exists) {
      return db.set({
        firstName,
        lastName,
        initials,
        imageURL,
        email,
        provider,
        userType: "normal",
      });
    }
  });
};

export const signIn = (credentials) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({ type: "LOGIN_SUCCESS" });
      })
      .catch((err) => {
        dispatch({ type: "LOGIN_ERROR", err });
      });
  };
};

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: "SIGN_OUT_SUCCESS" });
      });
  };
};

export const signUp = (newProfile) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    firebase
      .auth()
      .createUserWithEmailAndPassword(newProfile.email, newProfile.password)
      .then((resp) => {
        return addToFirebaseDB(
          firestore,
          resp.user.uid,
          newProfile.firstName,
          newProfile.lastName,
          newProfile.initials,
          newProfile.imageURL,
          newProfile.email,
          resp.user.providerData[0].providerId
        );
      })
      .then(() => {
        dispatch({ type: "SIGN_UP_SUCCESS" });
      })
      .catch((err) => {
        dispatch({ type: "SIGN_UP_ERROR", err });
      });
  };
};

export const facebookAuth = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
    firebase
      .auth()
      .signInWithPopup(facebookAuthProvider)
      .then((resp) => {
        return addToFirebaseDB(
          firestore,
          resp.user.uid,
          splitFullName(resp.user.displayName, "first"),
          splitFullName(resp.user.displayName, "last"),
          splitFullName(resp.user.displayName, "initials"),
          resp.user.photoURL + "?type=large",
          resp.user.email,
          resp.user.providerData[0].providerId
        );
      })
      .then(() => {
        dispatch({ type: "FACEBOOK_AUTH_SUCCESS" });
      })
      .catch((err) => {
        dispatch({ type: "FACEBOOK_AUTH_ERROR", err });
      });
  };
};

export const googleAuth = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then((resp) => {
        return addToFirebaseDB(
          firestore,
          resp.user.uid,
          splitFullName(resp.user.displayName, "first"),
          splitFullName(resp.user.displayName, "last"),
          splitFullName(resp.user.displayName, "initials"),
          resp.user.photoURL,
          resp.user.email,
          resp.user.providerData[0].providerId
        );
      })
      .then(() => {
        dispatch({ type: "GOOGLE_AUTH_SUCCESS" });
      })
      .catch((err) => {
        dispatch({ type: "GOOGLE_AUTH_ERROR", err });
      });
  };
};
