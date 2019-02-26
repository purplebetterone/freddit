import { firebaseAction } from 'vuexfire';
import db from '@/db';
import firebase from '@/firebase';


const posts = db.collection('posts');

const state = {
  subfreddits: [],
  posts: [],
};

const getters = {
  subfreddit: state => (state.subfreddits[0] ? state.subfreddits[0] : {}),
};

const actions = {
  async createPost({ getters }, post) {
    const result = posts.doc();
    post.id = result.id;
    post.subfreddit_id = getters.subfreddit.id;
    post.user_id = firebase.auth().currentUser.uid;
    post.created_at = firebase.firestore
      .FieldValue.serverTimestamp();
    post.updated_at = firebase.firestore
      .FieldValue.serverTimestamp();
    // console.log(post);
    // await posts.doc(post.id).set(post);
    try {
      await posts.doc(post.id).set(post);
    // console.log(created);
    } catch (error) {
      console.error(error);
    }
  },
  initSubfreddit: firebaseAction(({ bindFirebaseRef }, name) => {
    bindFirebaseRef('subfreddits', db.collection('subfreddits').where('name', '==', name));
  }),
  initPosts: firebaseAction(({ bindFirebaseRef }, subfreddit_id) => {
    bindFirebaseRef('posts', posts.where('subfreddit_id', '==', subfreddit_id));
  }),
};

export default {
  namespaced: true,
  state,
  actions,
  getters,
};
