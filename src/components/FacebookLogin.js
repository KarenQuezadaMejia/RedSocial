/* import React, {Component} from 'react';
import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';

const firebaseApp = firebase.initializeApp(firebaseConfig);

class FacebookLogin extends Component {
    render() {
      const { user, credential, create } = this.props;
      return (
        <div>
            {
              user
                ? <p>Hello, {user.displayName}</p>
                : <p>Please sign in.</p>
            }
            {
              user
                ? <button onClick={signOut}>Sign out</button>
                : <button onClick={create}>Create Account</button>
            }
        </div>
      );
    }
  }

  const firebaseAppAuth = firebaseApp.auth();

  const providers = {
    FacebookProvider: new firebase.auth.FacebookAuthProvider(),
  };

  export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
  })(FacebookLogin); */