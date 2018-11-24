<template>
  <div class="wrapper">
    <side-bar>
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="/profile/overview">
        <i class="nc-icon nc-grid-45"></i>
        <p>Dashboard</p>
      </sidebar-link>
      <sidebar-link to="/profile/requests-list">
        <i class="nc-icon nc-paper-2"></i>
        <p>Income requests</p>
      </sidebar-link>
      <sidebar-link to="/profile/settings">
        <i class="nc-icon nc-settings-gear-64"></i>
        <p>Private data settings</p>
      </sidebar-link>
      <!--<sidebar-link to="/admin/icons">-->
        <!--<i class="nc-icon nc-atom"></i>-->
        <!--<p>Icons</p>-->
      <!--</sidebar-link>-->
      <!--<sidebar-link to="/admin/maps">-->
        <!--<i class="nc-icon nc-pin-3"></i>-->
        <!--<p>Maps</p>-->
      <!--</sidebar-link>-->
      <!--<sidebar-link to="/admin/notifications">-->
        <!--<i class="nc-icon nc-bell-55"></i>-->
        <!--<p>Notifications</p>-->
      <!--</sidebar-link>-->
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
    }
  }

</script>
