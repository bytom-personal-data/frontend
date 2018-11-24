<template>
    <div class="auth-container">
        <div class="container">
            <h1 class="auth-form-heading"><img src="/static/img/bin-logo.png" alt="Bytom Identification Network"></h1>
            <transition name="fade" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>
<style lang="scss">

</style>
<script>
  import LoginForm from './Login.vue'
  import RegisterForm from './Register.vue'

  export default {
    components: {
      LoginForm,
      RegisterForm
    }
  }

</script>
