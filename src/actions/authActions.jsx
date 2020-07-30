export const signIn = (credentials) => {
    return (dispatch, getState, { getFirebase }) => {
        // make async call to database
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then( () => {
            dispatch({ type: 'LOGIN_SUCCESS' });
        }).catch( (err) => {
            dispatch({ type: 'LOGIN_ERROR', err });
        });
    }
}

export const signOut = () => {
    return (dispatch, getState, { getFirebase }) => {
        // make async call to database
        const firebase = getFirebase();

        firebase.auth().signOut().then( () => {
            dispatch({ type: 'SIGN_OUT_SUCCESS' });
        });
    }
}

export const signUp = (newProfile) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to database

        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            newProfile.email,
            newProfile.password
        ).then( (resp) => {
            return firestore.collection('profiles').doc(resp.user.uid).set({
                firstName: newProfile.firstName,
                lastName: newProfile.lastName,
                initials: newProfile.initials,
                imageURL: newProfile.imageURL,
                email: newProfile.email,
                provider: resp.user.providerData[0].providerId
            });
        }).then( () => {
            dispatch({ type: 'SIGN_UP_SUCCESS' });
        }).catch( (err) => {
            dispatch({ type: 'SIGN_UP_ERROR', err });
        });
    }
}

export const facebookAuth = () => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to database

        const firebase = getFirebase();
        const firestore = getFirestore();

        const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

        firebase.auth().signInWithPopup(facebookAuthProvider).then( (resp) => {

            const firstName = resp.user.displayName.substr(0, resp.user.displayName.indexOf(' '));
            const lastName = resp.user.displayName.substr(resp.user.displayName.indexOf(' ')+1);
            const initials = firstName[0] + " " + lastName[0];
            const imageURL = resp.user.photoURL + "?type=large"

            const previousProfileChecker = firestore.collection('profiles').doc(resp.user.uid);

            previousProfileChecker.get().then( doc => {
                if (!doc.exists) {
                    return firestore.collection('profiles').doc(resp.user.uid).set({
                        firstName,
                        lastName,
                        initials,
                        imageURL,
                        email: resp.user.email,
                        provider: resp.user.providerData[0].providerId
                    });
                }
            })
        }).then( () => {
            dispatch({ type: 'FACEBOOK_AUTH_SUCCESS' });
        }).catch( (err) => {
            dispatch({ type: 'FACEBOOK_AUTH_ERROR', err });
        });
    }
}

export const googleAuth = () => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to database

        const firebase = getFirebase();
        const firestore = getFirestore();

        const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(googleAuthProvider).then( (resp) => {

            const firstName = resp.user.displayName.substr(0, resp.user.displayName.indexOf(' '));
            const lastName = resp.user.displayName.substr(resp.user.displayName.indexOf(' ')+1);
            const initials = firstName[0] + " " + lastName[0];

            const previousProfileChecker = firestore.collection('profiles').doc(resp.user.uid);

            previousProfileChecker.get().then( doc => {
                if (!doc.exists) {
                    return firestore.collection('profiles').doc(resp.user.uid).set({
                        firstName,
                        lastName,
                        initials,
                        imageURL: resp.user.photoURL,
                        email: resp.user.email,
                        provider: resp.user.providerData[0].providerId
                    });
                }
            })
        }).then( () => {
            dispatch({ type: 'GOOGLE_AUTH_SUCCESS' });
        }).catch( (err) => {
            dispatch({ type: 'GOOGLE_AUTH_ERROR', err });
        });
    }
}