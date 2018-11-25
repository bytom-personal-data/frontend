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
import Medicine from 'src/components/Dashboard/Views/UserData/Medicine.vue'
import Job from 'src/components/Dashboard/Views/UserData/Job.vue'
import Money from 'src/components/Dashboard/Views/UserData/Money.vue'
import Law from 'src/components/Dashboard/Views/UserData/Law.vue'
import Property from 'src/components/Dashboard/Views/UserData/Property.vue'
import Transport from 'src/components/Dashboard/Views/UserData/Transport.vue'
import Requests from 'src/components/Dashboard/Views/UserData/RequestsList.vue'
import UserSettings from 'src/components/Dashboard/Views/UserData/UserSettings.vue'
import RequestUserData from 'src/components/Dashboard/Views/Organisation/RequestUserData.vue'
import AllowedUsersList from 'src/components/Dashboard/Views/Organisation/AllowedUsersList.vue'

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
      }
    ]
  },
  {
    path: '/profile',
    component: DashboardLayout,
    // redirect: '/profile/overview',
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
        path: 'medicine',
        name: 'Medicine',
        component: Medicine
      },
      {
          path: 'money',
          name: 'Money',
          component: Money
      },
      {
          path: 'job',
          name: 'Job',
          component: Job
      },
      {
        path: 'transport',
        name: 'Transport',
        component: Transport
      },
      {
        path: 'law',
        name: 'Law',
        component: Law
      },
      {
        path: 'property',
        name: 'Property',
        component: Property
      },
      {
          path: 'requests-list',
          name: 'Requests',
          component: Requests
      },
      {
        path: 'settings',
        name: 'UserSettings',
        component: UserSettings
      },
      {
        path: 'request-user-data',
        name: 'RequestUserData',
        component: RequestUserData
      },
      {
        path: 'allowed-users',
        name: 'AllowedUsersList',
        component: AllowedUsersList
      },
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
