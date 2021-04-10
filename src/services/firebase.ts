import firebaseClient from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const githubProvider = new firebaseClient.auth.GithubAuthProvider();

githubProvider.addScope('read:user');
githubProvider.setCustomParameters({
  allow_signup: false,
});

if (typeof window !== 'undefined' && !firebaseClient.apps.length) {
  const clientConfig = {
    apiKey: 'AIzaSyA8EM0hSf2uGEtrbtvHhAPGrDXvlzq8EJ8',
    authDomain: 'nlw-api.firebaseapp.com',
    projectId: 'nlw-api',
    storageBucket: 'nlw-api.appspot.com',
    messagingSenderId: '505960324001',
    appId: '1:505960324001:web:7e7fad8aab87d2631389e0',
  };

  firebaseClient.initializeApp(clientConfig);

  window.firebase = firebaseClient;
}

export { firebaseClient, githubProvider };
