import { firebaseAction } from 'vuexfire';
import db from '@/db';

const state = {
  subfreddits: [],
};

const actions = {
  init: firebaseAction(({ bindFirebaseRef }) => {
    bindFirebaseRef('subfreddits', db.collection('subfreddits'));
  }),
};

export default {
  namespaced: true,
  state,
  actions,
};
