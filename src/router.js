import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import newserie from './views/newserie.vue'
import updateserie from './views/updateserie.vue'
import deleteserie from './views/deleteserie.vue'
import categorie from './views/categorie.vue';
import newcat from './views/newcat.vue'
Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/categorie',
      name: 'categorie',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: categorie,
    },
    {
      path: '/newserie',
      name: 'newserie',
      component: newserie,
    },
    {
      path: '/updateserie',
      name: 'updateserie',
      component: updateserie,
    },
    {
      path: '/deleteserie',
      name: 'deleteserie',
      component: deleteserie,
    },
    {
    path: '/newcat',
    name: 'newcat',
    component: newcat,
  },
  ],
});
