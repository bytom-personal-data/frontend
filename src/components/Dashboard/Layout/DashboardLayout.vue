<template>
  <div class="wrapper">
    <side-bar>
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link v-if="user.type == 1" to="/profile/overview">
        <i class="nc-icon nc-grid-45"></i>
        <p>Dashboard</p>
      </sidebar-link>
      <sidebar-link v-if="user.type == 1" to="/profile/requests-list">
        <i class="nc-icon nc-paper-2"></i>
        <p>Income requests</p>
      </sidebar-link>
      <sidebar-link v-if="user.type == 1" to="/profile/settings">
        <i class="nc-icon nc-settings-gear-64"></i>
        <p>Private data settings</p>
      </sidebar-link>

      <sidebar-link v-if="[10,20,30].includes(user.type)" to="/profile/overview">
        <i class="nc-icon nc-grid-45"></i>
        <p>Dashboard</p>
      </sidebar-link>
      <sidebar-link v-if="[10,20,30].includes(user.type)" to="/profile/request-user-data">
        <i class="nc-icon nc-paper-2"></i>
        <p>Request User Data</p>
      </sidebar-link>
      <sidebar-link v-if="[10,20,30].includes(user.type)" to="/profile/allowed-users">
        <i class="nc-icon nc-settings-gear-64"></i>
        <p>Allowed Users List</p>
      </sidebar-link>
    </side-bar>

    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content @click="toggleSidebar">

      </dashboard-content>

      <content-footer></content-footer>
    </div>
  </div>
</template>
<style lang="scss">

</style>
<script>
  import TopNavbar from './TopNavbar.vue'
  import ContentFooter from './ContentFooter.vue'
  import DashboardContent from './Content.vue'
  import MobileMenu from './MobileMenu.vue'
  export default {
    data: function() {
      return {
        user: null,
        userType: null
      }
    },
    components: {
      TopNavbar,
      ContentFooter,
      DashboardContent,
      MobileMenu
    },
    methods: {
      toggleSidebar () {
        if (this.$sidebar.showSidebar) {
          this.$sidebar.displaySidebar(false)
        }
      }
    },
    created: function() {
      this.user = JSON.parse(localStorage.user)
    }
  }

</script>
