import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Subfreddits from './views/Subfreddits.vue';
import Subfreddit from './views/Subfreddit.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/subfreddits',
      name: 'subfreddits',
      component: Subfreddits,
    },
    {
      path: '/r/:name',
      name: 'subfreddit',
      component: Subfreddit,
    },
  ],
});
