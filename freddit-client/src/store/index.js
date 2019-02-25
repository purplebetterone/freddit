import Vue from 'vue';
import Vuex from 'vuex';
import {
  firebaseMutations,
} from 'vuexfire';

import auth from './auth';
import subfreddits from './subfreddits';
import subfreddit from './subfreddit';
import users from './users';

Vue.use(Vuex);

export default new Vuex.Store({
  mutations: firebaseMutations,
  modules: {
    auth,
    subfreddits,
    subfreddit,
    users,
  },
});
