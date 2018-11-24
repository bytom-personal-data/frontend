<template>
    <div class="main-div">
        <div class="panel">
            <h2>Create an Account</h2>
            <p>Please enter your email and password</p>
        </div>
        <form class="login-form" id="Login" @submit.prevent="register">
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
            <div class="form-group">
                <input type="password" required v-model="password_repeat" class="form-control" id="inputPasswordRepeat" placeholder="Password Confirm">
            </div>
            <button type="submit" class="btn btn-primary">Register</button>
            <div class="bottom-links">
                <router-link to="/auth/login">Already have an Account?</router-link>
            </div>
        </form>
    </div>
</template>
<script>
  import { API_URL } from '../API/API_URL'

  const axios = require('axios')

  // Auth Routine
  const myRegisterRoutine = user => {
    return new Promise((resolve, reject) => {
      axios({
        url: API_URL + '/signup',
        data: user,
        method: 'POST'
      })
        .then(resp => {
          const token = resp.data.token
          console.log(resp.data);
          localStorage.setItem('user-token', token) // store the token in localstorage
          localStorage.setItem('user-token', token) // store the token in localstorage
          resolve(resp)
        })
        .catch(err => {
          localStorage.removeItem('user-token') // if the request fails, remove any possible user token if possible
          reject(err)
        })
    })
  }

  export default {
    data: function () {
      return {
        username: '',
        password: '',
        password_repeat: '',

        errors: []
      }
    },
    methods: {
      register: function (e) {
        if(this.checkForm(e)) {
          const {username, password, password_repeat} = this
          myRegisterRoutine({username, password, password_repeat}).then(() => {
            this.$router.push('/')
          })
        }
      },
      checkForm: function (e) {
        if (this.username && this.password && this.password_repeat && (this.password == this.password_repeat)) {
          return true;
        }

        this.errors = [];

        if (!this.username) {
          this.errors.push('Username is required.');
        }
        if (!this.password) {
          this.errors.push('Password is required.');
        }
        if (this.password !== this.password_repeat) {
          this.errors.push('Passwords are not equal.');
        }

        e.preventDefault();
      }
    }
  }
</script>