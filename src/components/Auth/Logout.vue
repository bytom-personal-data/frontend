<template>

</template>
<script>
  const axios = require('axios')

  // Auth Routine
  const myLoginRoutine = user => {
    return new Promise((resolve, reject) => {
      axios({
        url: API_URL + '/signin',
        data: user,
        method: 'POST'
      })
        .then(resp => {
          const token = resp.data.token
          localStorage.setItem('userToken', token)
          localStorage.setItem('user', JSON.stringify(resp.data.user))
          resolve(resp)
        })
        .catch(err => {
          //localStorage.removeItem('userToken')
          //localStorage.removeItem('user')
          reject(err)
        })
    })
  }

  export default {
    data: function () {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      login: function () {
        const { username, password } = this
        myLoginRoutine({ username, password }).then(() => {
          this.$router.push('/')
        })
      },
      checkForm: function (e) {
        if (this.username && this.password) {
          return true;
        }

        this.errors = [];

        if (!this.username) {
          this.errors.push('Username is required.');
        }

        e.preventDefault();
      }
    }
  }
</script>