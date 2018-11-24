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

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  console.log(requiresAuth);
  console.log(localStorage.getItem('userToken'))
  let userToken = localStorage.getItem('userToken')

  //TODO: get current user

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
  router
})
