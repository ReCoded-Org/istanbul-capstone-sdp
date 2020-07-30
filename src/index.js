import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";
import * as serviceWorker from "./serviceWorker";
import "./i18n";
import "bootstrap/dist/css/bootstrap.min.css";
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/rootReducer';
import { Provider, useSelector } from 'react-redux';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore, createFirestoreInstance } from 'redux-firestore';
import { ReactReduxFirebaseProvider, getFirebase, isLoaded } from 'react-redux-firebase';
import firebaseConfig from './firebaseConfig';
import firebase from 'firebase/app';
import { Container } from 'react-bootstrap';


const store = createStore(rootReducer, 
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(firebase, firebaseConfig)
  )
);

//construct required properties
const profileSpecificProps = {
  userProfile: 'profiles',
  useFirestoreForProfile: true,
  enableRedirectHandling: false,
  resetBeforeLogin: false
}

//second config propery added
const rrfProps = {
  firebase,

  config: firebaseConfig,
  //second config added here
  config: profileSpecificProps,

  dispatch: store.dispatch,
  createFirestoreInstance
};

const AuthIsLoaded = ({ children }) => {
  const auth = useSelector( state => state.firebase.auth );
  if(!isLoaded(auth)) {
    return <Container><h4>Loading...</h4></Container>
  }
  return children;
}


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <AuthIsLoaded>
          <Suspense fallback={<div>Loading...</div>}>
            <App />
          </Suspense>
        </AuthIsLoaded>
      </ ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
