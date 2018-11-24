<template>
  <div class="content-wrapper">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <user-card></user-card>
        </div>
      </div>
    </div>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>

</template>
<script>
    import UserCard from '../Views/UserProfile/UserCard.vue'
  export default {
      components: {
          UserCard
      }
  }
</script>
<style>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .1s
  }

  .fade-enter,
  .fade-leave-to
    /* .fade-leave-active in <2.1.8 */

  {
    opacity: 0
  }
</style>
