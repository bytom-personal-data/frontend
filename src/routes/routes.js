import DashboardLayout from '../components/Dashboard/Layout/DashboardLayout.vue'
import AuthLayout from '../components/Auth/AuthLayout.vue'

// GeneralViews
import NotFound from '../components/GeneralViews/NotFoundPage.vue'

// Auth Components
import Login from '../components/Auth/Login.vue'
import Register from '../components/Auth/Register.vue'

// Admin pages
import Overview from 'src/components/Dashboard/Views/Overview.vue'
import OrganisationsList from 'src/components/Dashboard/Views/Person/OrganisationsList.vue'
import TableList from 'src/components/Dashboard/Views/TableList.vue'
import Typography from 'src/components/Dashboard/Views/Typography.vue'
import Icons from 'src/components/Dashboard/Views/Icons.vue'
import Notifications from 'src/components/Dashboard/Views/Notifications.vue'

const routes = [
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/profile/overview',
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/auth',
    component: AuthLayout,
    children: [
      {
        path: 'login',
        name: 'Login',
        component: Login
      },
      {
        path: 'register',
        name: 'Register',
        component: Register
      },
      {
        path: 'logout',
        redirect: to => {
          localStorage.removeItem('userToken');
          localStorage.removeItem('user');

          return '/';
        }
      }
    ]
  },
  {
    path: '/profile',
    component: DashboardLayout,
    redirect: '/profile/overview',
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: 'overview',
        name: 'Overview',
        component: Overview
      },
      {
        path: 'organisations',
        name: 'Organisations',
        component: OrganisationsList
      },
      {
        path: 'table-list',
        name: 'Table List',
        component: TableList
      },
      {
        path: 'typography',
        name: 'Typography',
        component: Typography
      },
      {
        path: 'icons',
        name: 'Icons',
        component: Icons
      },
      {
        path: 'notifications',
        name: 'Notifications',
        component: Notifications
      }
    ]
  },
  { path: '*', component: NotFound }
]

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes
