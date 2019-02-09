import firebase from '@/firebase';

const state = {
  user: {},
  isLoggedIn: false,
};

const actions = {
  async  login({ context }) {
    const provider = new firebase.auth.GoogleAuthProvider();
    const result = await firebase.auth().signInWithPopup(provider);
    console.log(result.user);
  },
};

export default {
  namespaced: true,
  state,
  actions,
};
