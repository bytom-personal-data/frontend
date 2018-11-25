<template>
    <div class="container-fluid">
        <card class="card-medicine">
            <h4 class="card-title">Users Who Show Their Data</h4>

            <div v-if="requests.length == 0" class="alert alert-info">
                There is no users
            </div>
            <div v-else>
                <div v-for="requestRow in requests">
                    <div class="alert alert-info alert-with-icon" data-notify="container">
                        <button type="button" aria-hidden="true" class="close" data-dismiss="alert">
                            <i class="nc-icon nc-simple-remove"></i>
                        </button>
                        <span data-notify="icon" class="nc-icon nc-bell-55"></span>
                        <span data-notify="message">
                            <p>Company with hash <strong>{{ requestRow.accessor_hash }}</strong> request your <strong>{{ requestRow.label }}</strong></p>
                            <p><a href="#" v-on:click="allow(requestRow)" class="btn btn-primary">Allow</a></p>
                        </span>
                    </div>
                </div>
            </div>

        </card>
    </div>
</template>
<script>
  import { API_URL } from '../../../API/API_URL'

  import Card from 'src/components/UIComponents/Cards/Card.vue'
  const axios = require('axios')

  export default {
    components: {
      Card
    },
    created: function () {
      return new Promise((resolve, reject) => {
        axios({
          url: API_URL + '/data/requests',
          headers: {'Auth-Token': localStorage.token},
          data: {status: 1}
        })
          .then(resp => {
            console.log(resp)
            this.requests = resp.data
            resolve(resp)
          })
          .catch(err => {
            console.log(err)
            this.errors.push('Server Error')
            reject(err)
          })
      })
    },
    data: function () {
      return {
        requests: [],
        errors: []
      };
    },
    methods: {
      allow: function(requestRow) {
        return new Promise((resolve, reject) => {
          axios({
            url: API_URL + '/data/confirm',
            headers: {'Auth-Token': localStorage.token},
            data: {hash: requestRow.hash},
            method: 'post'
          })
            .then(resp => {
              console.log(resp)
              this.requests = resp.data
              resolve(resp)
            })
            .catch(err => {
              console.log(err)
              this.errors.push('Server Error')
              reject(err)
            })
        })
      },
    }
  }

</script>
<style>

</style>
