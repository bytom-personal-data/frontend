import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

// LightBootstrap plugin
import LightBootstrap from './light-bootstrap-main'

// router setup
import routes from './routes/routes'

// plugin setup
Vue.use(VueRouter)
Vue.use(LightBootstrap)

// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  linkActiveClass: 'nav-item active'
})

const shared = {
  user: function() {
    //TODO: get user by token
    return localStorage.user;
  }
};

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  let userToken = localStorage.token

  if (requiresAuth && !userToken) {
    next('/auth/login');
  } else if (requiresAuth && userToken) {
    next();
  } else {
    next();
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  data: {
    shared
  },
  router
})
