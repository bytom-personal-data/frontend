<template>
    <div class="main-div">
        <div class="panel">
            <h2>Login</h2>
            <p>Please enter your email and password</p>
        </div>
        <form class="login-form" id="Login" @submit.prevent="login">
            <div v-if="errors.length" class="auth-form-errors">
                <strong>Fix the following errors:</strong>
                <ul>
                    <li v-for="error in errors">{{ error }}</li>
                </ul>
            </div>

            <div class="form-group">
                <input type="email" required v-model="username" class="form-control" id="inputEmail" placeholder="Email Address">
            </div>
            <div class="form-group">
                <input type="password" required v-model="password" class="form-control" id="inputPassword" placeholder="Password">
            </div>
            <button type="submit" class="btn btn-primary">Login</button>
            <div class="bottom-links">
                <router-link to="/auth/register">Don't have an Account?</router-link>
            </div>
        </form>
    </div>
</template>
<script>
  import { API_URL } from '../API/API_URL'

  const axios = require('axios')

  // Auth Routine
  const myLoginRoutine = user => {
    return new Promise((resolve, reject) => {
      axios({
        url: API_URL + '/login',
        data: user,
        method: 'POST'
      })
        .then(resp => {
          const token = resp.data.token
          localStorage.setItem('token', token)
          localStorage.setItem('user', JSON.stringify(resp.data.user))
          resolve(resp)
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  export default {
    data: function () {
      return {
        username: '',
        password: '',
        errors: []
      }
    },
    methods: {
      login: function () {
        const { username, password } = this
        this.errors = []
        myLoginRoutine({ username, password })
          .then((resp) => {
              this.$router.push('/profile/overview')
            })
          .catch(rej => {
                console.log(rej)
                if(rej.response && rej.response.data) {
                  this.errors.push(rej.response.data.message);
                } else {
                  this.errors.push('Unknown server error');
                }
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