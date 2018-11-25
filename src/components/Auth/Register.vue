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
            <div class="form-group form-group--radio-list">
                <div class="form-radio-list-label">Choose Account Type</div>
                <div class="form-check">
                    <input class="form-check-input" v-model="type" type="radio" name="type" id="accountPerson" value="1" checked>
                    <label class="form-check-label" for="accountPerson">
                        Person
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" v-model="type" type="radio" name="type" id="accountFinance" value="20">
                    <label class="form-check-label" for="accountFinance">
                        Finance Organisation
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" v-model="type" type="radio" name="type" id="accountMedicine" value="30">
                    <label class="form-check-label" for="accountMedicine">
                        Medicine Organisation
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" v-model="type" type="radio" name="type" id="accountBusiness" value="10">
                    <label class="form-check-label" for="accountBusiness">
                        Business
                    </label>
                </div>
            </div>
            <button type="submit" class="btn btn-primary">Register</button>
            <div class="bottom-links">
                <router-link to="/auth/login">Already have an Account?</router-link>
            </div>
        </form>
    </div>
</template>
<script>
  import {API_URL} from '../API/API_URL'

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
          if(resp.data && resp.data.is_valid === false) {
            //Register.errors.push('Server error. Please, try another email.');
            resolve(resp)
          }

          const token = resp.data.token
          localStorage.setItem('token', token) // store the token in localstorage
          localStorage.setItem('user', JSON.stringify(resp.data.user)) // store the token in localstorage
          resolve(resp)
        })
        .catch(err => {
          console.log(err);
          //localStorage.removeItem('userToken') // if the request fails, remove any possible user token if possible
          //localStorage.removeItem('user') // if the request fails, remove any possible user token if possible
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
        account_type: '',

        errors: []
      }
    },
    methods: {
      register: function (e) {
        if(this.checkForm(e)) {
          const {username, password, password_repeat, type} = this
          myRegisterRoutine({username, password, password_repeat, type}).then(() => {
            if(localStorage.token) {
              this.$router.push('/profile/overview')
            } else {
              this.errors.push('Server error. Try another email.')
            }
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