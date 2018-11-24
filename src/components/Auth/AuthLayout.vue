<template>
    <div class="auth-container">
        <div class="container">
            <h1 class="auth-form-heading">Bytom Identification Network</h1>
            <login-form></login-form>
        </div>
    </div>
</template>
<style lang="scss">

</style>
<script>
  import LoginForm from './Login.vue'
  export default {
    components: {
      LoginForm
    }
  }

</script>
