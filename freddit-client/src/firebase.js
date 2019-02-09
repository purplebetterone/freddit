import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDCgbQN8ti6b1iaadSP2ZkVcPqcTv-mYgM',
  authDomain: 'freddit-reddit-clone.firebaseapp.com',
  databaseURL: 'https://freddit-reddit-clone.firebaseio.com',
  projectId: 'freddit-reddit-clone',
  storageBucket: 'freddit-reddit-clone.appspot.com',
  messagingSenderId: '646408555745',
};
firebase.initializeApp(config);

export default firebase;
